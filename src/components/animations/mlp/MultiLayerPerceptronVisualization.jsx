import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MultiLayerPerceptronVisualization = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalSteps = 5;
  
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
      }, 4000); // Longer duration for each step
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Single perceptron for first steps
  const renderPerceptron = () => {
    return (
      <div className="relative w-full h-64 mx-auto">
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Inputs */}
          <div className="absolute" style={{ left: '15%', top: '40%' }}>
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  x₁
                </motion.div>
                <motion.div
                  className="ml-2 text-xs bg-gray-100 rounded px-1 py-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  w₁ = 0.5
                </motion.div>
              </div>
              <div className="flex items-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  x₂
                </motion.div>
                <motion.div
                  className="ml-2 text-xs bg-gray-100 rounded px-1 py-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  w₂ = -0.3
                </motion.div>
              </div>
              <div className="flex items-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  x₃
                </motion.div>
                <motion.div
                  className="ml-2 text-xs bg-gray-100 rounded px-1 py-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  w₃ = 0.8
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Perceptron */}
          <motion.div 
            className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            Σ
          </motion.div>
          
          {/* Bias */}
          <motion.div
            className="absolute text-xs bg-yellow-200 rounded px-1 py-0.5 font-semibold"
            style={{ top: '30%', left: '50%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            bias = 0.2
          </motion.div>
          
          {/* Output */}
          <motion.div
            className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold"
            style={{ position: 'absolute', left: '75%', top: '50%' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            y
          </motion.div>
          
          {/* Activation */}
          <motion.div
            className="absolute text-xs bg-green-200 rounded px-2 py-1 font-semibold"
            style={{ left: '62%', top: '40%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            σ(Σ)
          </motion.div>
        </div>
        
        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Input to perceptron connections */}
          <motion.path
            d="M 110 80 L 210 130"
            stroke="#888"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
          <motion.path
            d="M 110 128 L 210 130"
            stroke="#888"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          <motion.path
            d="M 110 176 L 210 130"
            stroke="#888"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
          
          {/* Perceptron to output connection */}
          <motion.path
            d="M 226 130 L 300 130"
            stroke="#888"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
        </svg>
        
        {/* Data flow animation */}
        {step === 2 && (
          <svg className="absolute inset-0 w-full h-full">
            <motion.circle
              cx="110"
              cy="80"
              r="4"
              fill="#FFD700"
              initial={{ cx: 110, cy: 80 }}
              animate={{ cx: [110, 210], cy: [80, 130] }}
              transition={{ duration: 0.8, times: [0, 1], repeat: 1, repeatDelay: 1 }}
            />
            <motion.circle
              cx="110"
              cy="128"
              r="4"
              fill="#FFD700"
              initial={{ cx: 110, cy: 128 }}
              animate={{ cx: [110, 210], cy: [128, 130] }}
              transition={{ duration: 0.8, times: [0, 1], delay: 0.3, repeat: 1, repeatDelay: 1 }}
            />
            <motion.circle
              cx="110"
              cy="176"
              r="4"
              fill="#FFD700"
              initial={{ cx: 110, cy: 176 }}
              animate={{ cx: [110, 210], cy: [176, 130] }}
              transition={{ duration: 0.8, times: [0, 1], delay: 0.6, repeat: 1, repeatDelay: 1 }}
            />
            <motion.circle
              cx="210"
              cy="130"
              r="4"
              fill="#FFD700"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, times: [0, 0.4, 0.6, 1], delay: 1.5 }}
            />
            <motion.circle
              cx="210"
              cy="130"
              r="4"
              fill="#FFD700"
              initial={{ cx: 210, cy: 130, opacity: 0 }}
              animate={{ cx: [210, 300], cy: [130, 130], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1, times: [0, 0.1, 0.9, 1], delay: 2.5 }}
            />
          </svg>
        )}
      </div>
    );
  };

  // Full MLP network
  const renderMLP = (showComputation = false, showForwardPass = false) => {
    // Network structure
    const layers = [
      { name: "Input Layer", neurons: 4, color: "#4299E1" },  // Blue
      { name: "Hidden Layer 1", neurons: 5, color: "#805AD5" },  // Purple
      { name: "Hidden Layer 2", neurons: 3, color: "#805AD5" },  // Purple
      { name: "Output Layer", neurons: 2, color: "#F56565" }   // Red
    ];
    
    const maxNeurons = Math.max(...layers.map(layer => layer.neurons));
    const layerWidth = 80;
    const networkWidth = layers.length * layerWidth;
    const networkHeight = maxNeurons * 50;
    
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
                  const delayBase = layerIndex * 0.2;
                  const neuronDelay = delayBase + (neuronIndex * 0.05);
                  
                  return (
                    <motion.div
                      key={neuronIndex}
                      className="relative rounded-full flex items-center justify-center"
                      style={{ 
                        width: 32, 
                        height: 32, 
                        backgroundColor: layer.color,
                        boxShadow: '0 0 8px rgba(0,0,0,0.2)'
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: neuronDelay, duration: 0.3 }}
                    >
                      {layerIndex === 0 && (
                        <div className="text-white text-xs">x{neuronIndex+1}</div>
                      )}
                      {layerIndex === layers.length - 1 && (
                        <div className="text-white text-xs">y{neuronIndex+1}</div>
                      )}
                      
                      {/* Activation symbol */}
                      {showComputation && layerIndex > 0 && (
                        <motion.div 
                          className="absolute -right-4 -top-4 bg-green-500 text-white text-xs p-1 rounded-full w-6 h-6 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: neuronDelay + 0.5, duration: 0.3 }}
                        >
                          σ
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
              const startY = 60 + (startNeuronIndex * networkHeight / Math.max(currentLayer.neurons, 1));
              
              return Array.from({ length: nextLayer.neurons }).map((_, endNeuronIndex) => {
                const endY = 60 + (endNeuronIndex * networkHeight / Math.max(nextLayer.neurons, 1));
                const pathDelay = (layerIndex * 0.3) + 0.5;
                
                return (
                  <motion.path
                    key={`${layerIndex}-${startNeuronIndex}-${endNeuronIndex}`}
                    d={`M ${startX} ${startY} C ${(startX + endX) / 2} ${startY}, ${(startX + endX) / 2} ${endY}, ${endX} ${endY}`}
                    stroke="#ddd"
                    strokeWidth={1}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: pathDelay, duration: 0.5 }}
                  />
                );
              });
            }).flat();
          })}
          
          {/* Forward pass animation */}
          {showForwardPass && layers.slice(0, -1).map((currentLayer, layerIndex) => {
            const nextLayer = layers[layerIndex + 1];
            const startX = (layerIndex * networkWidth / (layers.length - 1)) + 40;
            const endX = ((layerIndex + 1) * networkWidth / (layers.length - 1)) - 40;
            
            // Only animate a few selected connections for clarity
            const animationPaths = [
              { start: 0, end: 0, delay: 1.0 },
              { start: 1, end: 1, delay: 1.2 },
              { start: 2, end: 2, delay: 1.4 },
              { start: 3, end: 0, delay: 1.6 },
            ];
            
            return animationPaths
              .filter(path => 
                path.start < currentLayer.neurons && 
                path.end < nextLayer.neurons
              )
              .map(path => {
                const startY = 60 + (path.start * networkHeight / Math.max(currentLayer.neurons, 1));
                const endY = 60 + (path.end * networkHeight / Math.max(nextLayer.neurons, 1));
                
                return (
                  <motion.circle
                    key={`flow-${layerIndex}-${path.start}-${path.end}`}
                    cx={startX}
                    cy={startY}
                    r={3}
                    fill="#FFD700"
                    initial={{ cx: startX, cy: startY, opacity: 0 }}
                    animate={{ 
                      cx: [startX, endX],
                      cy: [startY, endY],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      delay: path.delay + (layerIndex * 0.7),
                      duration: 0.6,
                      times: [0, 0.1, 0.9, 1],
                      repeat: 1,
                      repeatDelay: 1
                    }}
                  />
                );
              });
          }).flat()}
        </svg>
      </div>
    );
  };

  // Function for computation formula
  const renderComputationFormula = () => (
    <div className="bg-gray-100 p-3 rounded-lg mx-auto max-w-md text-center mt-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-sm">
          <div className="mb-2">输入: x₁, x₂, x₃, ...</div>
          <div className="mb-2">权重: w₁, w₂, w₃, ...</div>
          <div className="mb-2">1. 计算加权和: z = w₁x₁ + w₂x₂ + w₃x₃ + ... + bias</div>
          <div>2. 应用激活函数: y = σ(z)</div>
          <div className="mt-2 text-gray-600">(σ 可以是 sigmoid, ReLU, tanh 等)</div>
        </div>
      </motion.div>
    </div>
  );

  const renderStep0 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">什么是感知机 (Perceptron)?</h2>
      <p className="text-center mb-4">
        感知机是神经网络的基本组成单元，受到生物神经元的启发。
      </p>
      {renderPerceptron()}
      <motion.div
        className="mt-4 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p>
          感知机接收多个输入 (x₁, x₂, x₃...)，每个输入都有一个相关的权重 (w₁, w₂, w₃...)。
          感知机计算输入的加权和，加上一个偏置值 (bias)，然后通过激活函数产生输出。
        </p>
      </motion.div>
    </div>
  );

  const renderStep1 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">感知机的计算过程</h2>
      {renderPerceptron()}
      {renderComputationFormula()}
      <motion.div
        className="mt-4 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          感知机的工作方式类似于一个决策单元。它对输入的重要性进行加权（通过权重），
          应用阈值（通过偏置），并使用激活函数决定是否"触发"输出。
        </p>
      </motion.div>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">感知机中的数据流动</h2>
      {renderPerceptron()}
      <motion.div
        className="mt-4 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          数据从输入节点流向感知机，经过加权和计算和激活函数处理后，产生最终输出。
          这个过程被称为"前向传播"（Forward Propagation）。
        </p>
      </motion.div>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">多层感知机 (MLP) 的结构</h2>
      {renderMLP()}
      <motion.div
        className="mt-4 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p>
          多层感知机由多层神经元（感知机）组成，通常包括：输入层、一个或多个隐藏层和输出层。
          每层的神经元与下一层的所有神经元相连，这种连接方式称为"全连接"（Fully Connected）。
        </p>
      </motion.div>
    </div>
  );

  const renderStep4 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">多层感知机中的计算</h2>
      {renderMLP(true)}
      <motion.div
        className="mt-4 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p>
          在多层感知机中，每个神经元接收前一层所有神经元的输出作为输入。
          每个神经元都执行与单个感知机相同的计算：加权和计算和激活函数处理。
          隐藏层使用非线性激活函数（如ReLU、sigmoid）为网络引入非线性，使其能够学习复杂的模式。
        </p>
      </motion.div>
    </div>
  );

  const renderStep5 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">多层感知机中的前向传播</h2>
      {renderMLP(true, true)}
      <motion.div
        className="mt-4 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          数据在多层感知机中从输入层流向输出层的过程称为前向传播。
          每一层的输出作为下一层的输入，直到生成最终预测结果。
          多层结构使网络能够学习数据中的层次化特征，从简单特征到复杂特征。
        </p>
      </motion.div>
    </div>
  );

  const renderCurrentStep = () => {
    switch(step) {
      case 0: return renderStep0();
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      default: return renderStep0();
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">多层感知机 (Multilayer Perceptron) 原理</h1>
      
      <div className="mb-6 p-6 border rounded-lg shadow-md bg-white">
        {renderCurrentStep()}
      </div>
      
      <div className="flex justify-center items-center gap-4">
        <button 
          onClick={() => setStep(prev => Math.max(0, prev - 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={step === 0}
        >
          上一步
        </button>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {isPlaying ? '暂停' : '播放动画'}
        </button>
        
        <button 
          onClick={() => setStep(prev => Math.min(totalSteps, prev + 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={step >= totalSteps}
        >
          下一步
        </button>
      </div>
    </div>
  );
};

export default MultiLayerPerceptronVisualization;