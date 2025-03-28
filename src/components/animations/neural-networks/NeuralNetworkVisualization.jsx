import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkVisualization = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalSteps = 4;
  
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setStep((prevStep) => {
          const nextStep = (prevStep + 1) % (totalSteps + 1);
          if (nextStep === 0) {
            setIsPlaying(false);
          }
          return nextStep;
        });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Neural network structure
  const layers = [
    { name: "Input Layer", neurons: 4, color: "#4299E1" },  // Blue
    { name: "Hidden Layer 1", neurons: 5, color: "#805AD5" },  // Purple
    { name: "Hidden Layer 2", neurons: 3, color: "#805AD5" },  // Purple
    { name: "Output Layer", neurons: 2, color: "#F56565" }   // Red
  ];
  
  // Data flow animation for step 3
  const dataFlowAnimation = {
    input: [0.7, 0.2, 0.9, 0.4],
    hidden1: [0.6, 0.3, 0.8, 0.5, 0.7],
    hidden2: [0.4, 0.9, 0.2],
    output: [0.8, 0.3]
  };

  const renderNeuralNetwork = (showWeights = false, showActivation = false, showData = false) => {
    const maxNeurons = Math.max(...layers.map(layer => layer.neurons));
    const layerWidth = 80;
    const networkWidth = layers.length * layerWidth;
    const networkHeight = maxNeurons * 60;
    
    return (
      <div className="relative w-full h-96 mx-auto">
        {/* Layers and Neurons */}
        <div className="absolute inset-0 flex justify-between items-center">
          {layers.map((layer, layerIndex) => (
            <div key={layerIndex} className="flex flex-col items-center">
              <div className="mb-2 font-bold text-sm">{layer.name}</div>
              <div 
                className="flex flex-col items-center justify-center gap-6"
                style={{ height: networkHeight }}
              >
                {Array.from({ length: layer.neurons }).map((_, neuronIndex) => {
                  const delayBase = layerIndex * 0.3;
                  const neuronDelay = delayBase + (neuronIndex * 0.1);
                  
                  return (
                    <motion.div
                      key={neuronIndex}
                      className="relative rounded-full flex items-center justify-center"
                      style={{ 
                        width: 40, 
                        height: 40, 
                        backgroundColor: layer.color,
                        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: neuronDelay, duration: 0.3 }}
                    >
                      {showData && (
                        <motion.div 
                          className="absolute inset-0 rounded-full flex items-center justify-center text-white font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: neuronDelay + 1, duration: 0.3 }}
                        >
                          {layerIndex === 0 ? dataFlowAnimation.input[neuronIndex].toFixed(1) :
                           layerIndex === 1 ? dataFlowAnimation.hidden1[neuronIndex].toFixed(1) :
                           layerIndex === 2 ? dataFlowAnimation.hidden2[neuronIndex].toFixed(1) :
                           dataFlowAnimation.output[neuronIndex].toFixed(1)}
                        </motion.div>
                      )}
                      
                      {showActivation && layerIndex > 0 && (
                        <motion.div 
                          className="absolute -left-6 -top-6 bg-green-500 text-white text-xs p-1 rounded"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: neuronDelay + 0.5, duration: 0.3 }}
                        >
                          σ(Σ)
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* Connections between neurons */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {layers.slice(0, -1).map((currentLayer, layerIndex) => {
            const nextLayer = layers[layerIndex + 1];
            const startX = (layerIndex * networkWidth / (layers.length - 1)) + 40;
            const endX = ((layerIndex + 1) * networkWidth / (layers.length - 1)) - 40;
            
            return Array.from({ length: currentLayer.neurons }).map((_, startNeuronIndex) => {
              const startY = (startNeuronIndex * networkHeight / (currentLayer.neurons - 1 || 1)) + 60;
              
              return Array.from({ length: nextLayer.neurons }).map((_, endNeuronIndex) => {
                const endY = (endNeuronIndex * networkHeight / (nextLayer.neurons - 1 || 1)) + 60;
                const pathDelay = (layerIndex * 0.3) + 0.5;
                
                return (
                  <motion.path
                    key={`${layerIndex}-${startNeuronIndex}-${endNeuronIndex}`}
                    d={`M ${startX} ${startY} C ${(startX + endX) / 2} ${startY}, ${(startX + endX) / 2} ${endY}, ${endX} ${endY}`}
                    stroke={showWeights ? "#888" : "#ddd"}
                    strokeWidth={showWeights ? 2 : 1}
                    strokeDasharray={showWeights ? "none" : "5,5"}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: pathDelay, duration: 0.5 }}
                  />
                );
              });
            }).flat();
          })}
          
          {/* Data flow animation */}
          {showData && layers.slice(0, -1).map((currentLayer, layerIndex) => {
            const nextLayer = layers[layerIndex + 1];
            const startX = (layerIndex * networkWidth / (layers.length - 1)) + 40;
            const endX = ((layerIndex + 1) * networkWidth / (layers.length - 1)) - 40;
            
            return Array.from({ length: currentLayer.neurons }).map((_, startNeuronIndex) => {
              const startY = (startNeuronIndex * networkHeight / (currentLayer.neurons - 1 || 1)) + 60;
              
              return Array.from({ length: nextLayer.neurons }).map((_, endNeuronIndex) => {
                const endY = (endNeuronIndex * networkHeight / (nextLayer.neurons - 1 || 1)) + 60;
                const flowDelay = 1.5 + (layerIndex * 0.3) + (startNeuronIndex * 0.1);
                
                return (
                  <motion.circle
                    key={`flow-${layerIndex}-${startNeuronIndex}-${endNeuronIndex}`}
                    cx={startX}
                    cy={startY}
                    r={4}
                    fill="#FFD700"
                    initial={{ 
                      cx: startX, 
                      cy: startY,
                      opacity: 0 
                    }}
                    animate={{ 
                      cx: [startX, endX],
                      cy: [startY, endY],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      delay: flowDelay,
                      duration: 0.8,
                      times: [0, 0.1, 0.9, 1]
                    }}
                  />
                );
              });
            }).flat();
          })}
        </svg>
        
        {/* If showing weights, add some weight labels */}
        {showWeights && (
          <div className="absolute inset-0">
            <motion.div 
              className="absolute text-xs bg-gray-100 rounded px-1 py-0.5"
              style={{ left: '25%', top: '40%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              w = 0.8
            </motion.div>
            <motion.div 
              className="absolute text-xs bg-gray-100 rounded px-1 py-0.5"
              style={{ left: '50%', top: '30%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              w = -0.5
            </motion.div>
            <motion.div 
              className="absolute text-xs bg-gray-100 rounded px-1 py-0.5"
              style={{ left: '75%', top: '55%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.3 }}
            >
              w = 1.2
            </motion.div>
          </div>
        )}
      </div>
    );
  };

  const renderStep0 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Neural Network Structure</h2>
      {renderNeuralNetwork()}
      <p className="text-center mt-4 max-w-lg">
        A neural network consists of layers of neurons. The first layer (input layer) receives the data, 
        and the last layer (output layer) provides the prediction or classification. 
        The layers in between are called hidden layers.
      </p>
    </div>
  );

  const renderStep1 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Weights and Connections</h2>
      {renderNeuralNetwork(true)}
      <p className="text-center mt-4 max-w-lg">
        Neurons in adjacent layers are connected by weights (w). These weights determine how 
        strongly the output of one neuron affects the input of another. The learning process 
        involves adjusting these weights to minimize errors in predictions.
      </p>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Activation Functions</h2>
      {renderNeuralNetwork(true, true)}
      <p className="text-center mt-4 max-w-lg">
        Each neuron applies an activation function (σ) to its inputs. This introduces non-linearity, 
        allowing the network to learn complex patterns. Common activation functions include ReLU, 
        sigmoid, and tanh.
      </p>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Data Flow and Forward Propagation</h2>
      {renderNeuralNetwork(true, true, true)}
      <p className="text-center mt-4 max-w-lg">
        During forward propagation, data flows from the input layer through hidden layers to the output layer. 
        Each neuron computes a weighted sum of its inputs, applies an activation function, 
        and passes the result to the next layer.
      </p>
    </div>
  );

  const renderCurrentStep = () => {
    switch(step) {
      case 0: return renderStep0();
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      default: return renderStep0();
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Deep Learning Fundamentals</h1>
      
      <div className="mb-6 p-6 border rounded-lg shadow-md bg-white">
        {renderCurrentStep()}
      </div>
      
      <div className="flex justify-center items-center gap-4">
        <button 
          onClick={() => setStep(prev => Math.max(0, prev - 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={step === 0}
        >
          Previous
        </button>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {isPlaying ? 'Pause' : 'Play Animation'}
        </button>
        
        <button 
          onClick={() => setStep(prev => Math.min(totalSteps - 1, prev + 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={step >= totalSteps - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;