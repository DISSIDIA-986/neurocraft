import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WordEmbeddingAnimation = () => {
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
  }, [isPlaying, totalSteps]);  // 添加 totalSteps 作为依赖项

  const words = ['cat', 'kitten', 'dog', 'houses', 'man', 'woman', 'king', 'queen'];
  const dimensions = ['living being', 'feline', 'human', 'gender', 'royalty', 'verb', 'plural'];
  
  const embeddings = {
    cat: [0.6, 0.9, 0.1, 0.4, -0.7, -0.3, -0.2],
    kitten: [0.5, 0.8, -0.1, 0.2, -0.6, -0.5, -0.1],
    dog: [0.7, -0.1, 0.4, 0.3, -0.4, -0.1, -0.3],
    houses: [-0.8, -0.4, -0.5, 0.1, -0.9, 0.3, 0.8],
    man: [0.6, -0.2, 0.8, 0.9, -0.1, -0.9, -0.7],
    woman: [0.7, 0.3, 0.9, -0.7, 0.1, -0.5, -0.4],
    king: [0.5, -0.4, 0.7, 0.8, 0.9, -0.7, -0.6],
    queen: [0.8, -0.1, 0.8, -0.9, 0.8, -0.5, -0.9]
  };

  // 2D projections for visualization
  const reduced2D = {
    cat: [0.7, 0.2],
    kitten: [0.6, 0.3],
    dog: [0.5, 0.5],
    houses: [0.1, 0.8],
    man: [0.3, 0.7],
    woman: [0.7, 0.8],
    king: [0.2, 0.3],
    queen: [0.6, 0.1]
  };
  
  const wordColors = {
    cat: '#FF0000',
    kitten: '#00CC00',
    dog: '#00AAFF',
    houses: '#888888',
    man: '#000000',
    woman: '#FF00FF',
    king: '#FFAA00',
    queen: '#8800FF'
  };
  
  const getWordStyle = (word) => ({
    color: wordColors[word],
    fontWeight: 'bold',
    fontStyle: 'italic'
  });

  const renderStep0 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Words Before Embedding</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {words.map(word => (
          <div 
            key={word} 
            className="px-4 py-2 border rounded shadow text-lg"
            style={getWordStyle(word)}
          >
            {word}
          </div>
        ))}
      </div>
      <p className="text-center max-w-lg">Words start as simple text elements without mathematical properties.</p>
    </div>
  );

  const renderStep1 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Creating Word Vectors</h2>
      <div className="overflow-x-auto mb-6 w-full max-w-3xl">
        <table className="border-collapse border border-gray-300 mx-auto">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Word</th>
              {dimensions.map(dim => (
                <th key={dim} className="border border-gray-300 p-2 text-xs">{dim}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {words.map(word => (
              <tr key={word}>
                <td className="border border-gray-300 p-2 text-right" style={getWordStyle(word)}>{word} →</td>
                {embeddings[word].map((value, i) => (
                  <td 
                    key={i} 
                    className="border border-gray-300 p-2 text-center" 
                    style={{
                      backgroundColor: value > 0 ? `rgba(0, 255, 0, ${Math.abs(value) * 0.3})` : 
                                                  `rgba(255, 0, 0, ${Math.abs(value) * 0.3})`,
                      color: wordColors[word]
                    }}
                  >
                    {value.toFixed(1)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center max-w-lg">Words are converted to numerical vectors in a high-dimensional space (7D in this example).</p>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Dimensionality Reduction</h2>
      <div className="flex flex-row flex-wrap justify-center mb-6 gap-10">
        <div className="text-center">
          <p className="font-bold mb-2">7D Vectors</p>
          <div className="h-40 w-40 bg-gray-100 rounded flex items-center justify-center">
            <div className="transform rotate-45">
              {words.slice(0, 4).map((word, idx) => (
                <motion.div 
                  key={word}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 }}
                  className="text-sm"
                  style={getWordStyle(word)}
                >
                  {word}: [{embeddings[word].map(v => v.toFixed(1)).join(', ')}]
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <svg width="100" height="50">
            <motion.path
              d="M10,25 L90,25"
              stroke="black"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.polygon 
              points="80,15 80,35 95,25" 
              fill="black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </svg>
          <div className="text-center text-sm w-24">
            Dimensionality reduction from 7D to 2D
          </div>
        </div>
        
        <div className="text-center">
          <p className="font-bold mb-2">2D Projection</p>
          <div className="h-40 w-40 bg-gray-100 rounded relative">
            {words.slice(0, 4).map(word => (
              <motion.div
                key={word}
                className="absolute w-4 h-4 rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: reduced2D[word][0] * 160 - 8,
                  y: reduced2D[word][1] * 160 - 8
                }}
                transition={{ delay: 0.5 }}
                style={{ backgroundColor: wordColors[word] }}
              />
            ))}
            {words.slice(0, 4).map(word => (
              <motion.div
                key={`label-${word}`}
                className="absolute text-xs font-bold"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: reduced2D[word][0] * 160 + 6,
                  y: reduced2D[word][1] * 160
                }}
                transition={{ delay: 1 }}
                style={{ color: wordColors[word] }}
              >
                {word}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center max-w-lg">The high-dimensional word vectors are reduced to 2D for visualization using techniques like t-SNE or PCA.</p>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Semantic Relationships in 2D Space</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 mb-6">
        <div className="text-center">
          <p className="font-bold mb-2">Animal Relationships</p>
          <div className="h-40 w-40 bg-gray-100 rounded relative">
            <motion.div
              className="absolute w-full h-full text-xs text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            >
              houses
            </motion.div>
            
            {['cat', 'kitten', 'dog'].map(word => (
              <motion.div
                key={word}
                className="absolute w-4 h-4 rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: reduced2D[word][0] * 160 - 8,
                  y: reduced2D[word][1] * 160 - 8
                }}
                style={{ backgroundColor: wordColors[word] }}
              />
            ))}
            
            {['cat', 'kitten', 'dog'].map(word => (
              <motion.div
                key={`label-${word}`}
                className="absolute text-xs font-bold"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: reduced2D[word][0] * 160 + 6,
                  y: reduced2D[word][1] * 160
                }}
                style={{ color: wordColors[word] }}
              >
                {word}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="font-bold mb-2">Gender & Royalty Relationships</p>
          <div className="h-40 w-40 bg-gray-100 rounded relative">
            {['man', 'woman', 'king', 'queen'].map(word => (
              <motion.div
                key={word}
                className="absolute w-4 h-4 rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: reduced2D[word][0] * 160 - 8,
                  y: reduced2D[word][1] * 160 - 8
                }}
                style={{ backgroundColor: wordColors[word] }}
              />
            ))}
            
            {['man', 'woman', 'king', 'queen'].map(word => (
              <motion.div
                key={`label-${word}`}
                className="absolute text-xs font-bold"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: reduced2D[word][0] * 160 + 6,
                  y: reduced2D[word][1] * 160
                }}
                style={{ color: wordColors[word] }}
              >
                {word}
              </motion.div>
            ))}
            
            <svg className="absolute w-full h-full">
              <motion.line 
                x1={reduced2D['man'][0] * 160} 
                y1={reduced2D['man'][1] * 160}
                x2={reduced2D['woman'][0] * 160} 
                y2={reduced2D['woman'][1] * 160}
                stroke="black"
                strokeWidth="1"
                strokeDasharray="3,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              <motion.line 
                x1={reduced2D['king'][0] * 160} 
                y1={reduced2D['king'][1] * 160}
                x2={reduced2D['queen'][0] * 160} 
                y2={reduced2D['queen'][1] * 160}
                stroke="black"
                strokeWidth="1"
                strokeDasharray="3,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-center max-w-lg">
        Similar words cluster together in the embedding space. The vector relationships capture semantic meaning: 
        <code className="mx-1 bg-gray-100 p-1 rounded text-sm">king - man + woman ≈ queen</code>
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
      <h1 className="text-2xl font-bold text-center mb-6">Word Embedding Visualization in NLP</h1>
      
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
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <button 
          onClick={() => setStep(prev => Math.min(totalSteps - 1, prev + 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={step >= totalSteps - 1}
        >
          Next
        </button>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold mb-2">Explanation</h2>
        <p className="text-left">
          Word embeddings transform text into numerical vectors in a high-dimensional space, capturing semantic relationships between words. This allows algorithms to understand that words like "cat" and "kitten" are semantically similar, while "cat" and "houses" are not.
        </p>
        <p className="text-left mt-2">
          The power of embeddings comes from how they encode relationships: in good embeddings, the vector operation <code className="mx-1 bg-gray-100 p-1 rounded">king - man + woman</code> results in a vector close to <code className="mx-1 bg-gray-100 p-1 rounded">queen</code>, demonstrating that the embedding has captured gender and royalty concepts.
        </p>
      </div>
    </div>
  );
};

export default WordEmbeddingAnimation;