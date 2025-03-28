import React, { useState, useEffect } from 'react';

const NLPProcessAnimation = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  
  const originalSentence = "The children were quickly running through the beautiful forests yesterday.";
  
  const steps = [
    {
      title: "Original Text",
      text: originalSentence,
      description: "Input original English sentence"
    },
    {
      title: "Basic Text Cleaning",
      text: "the children were quickly running through the beautiful forests yesterday.",
      description: "Converted to lowercase, removed punctuation"
    },
    {
      title: "Tokenization",
      text: ["the", "children", "were", "quickly", "running", "through", "the", "beautiful", "forests", "yesterday"],
      description: "Sentence broken down into individual words"
    },
    {
      title: "Stopwords Removal",
      text: ["children", "quickly", "running", "beautiful", "forests", "yesterday"],
      description: "Removed common stopwords (the, were, through)"
    },
    {
      title: "POS Tagging",
      text: [
        { word: "children", pos: "NOUN" },
        { word: "quickly", pos: "ADV" },
        { word: "running", pos: "VERB" },
        { word: "beautiful", pos: "ADJ" },
        { word: "forests", pos: "NOUN" },
        { word: "yesterday", pos: "NOUN" }
      ],
      description: "Tagged each word with its part of speech"
    },
    {
      title: "Lemmatization",
      text: [
        { word: "child", original: "children" },
        { word: "quickly", original: "quickly" },
        { word: "run", original: "running" },
        { word: "beautiful", original: "beautiful" },
        { word: "forest", original: "forests" },
        { word: "yesterday", original: "yesterday" }
      ],
      description: "Reduced words to their base or dictionary form"
    }
  ];

  useEffect(() => {
    let timer;
    if (!paused) {
      timer = setTimeout(() => {
        setStep((prevStep) => (prevStep + 1) % steps.length);
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [step, paused, steps.length]);

  const renderContent = () => {
    const currentStep = steps[step];
    
    if (step === 0 || step === 1) {
      return <p className="text-lg font-mono p-4 bg-gray-100 rounded">{currentStep.text}</p>;
    } else if (step === 2 || step === 3) {
      return (
        <div className="flex flex-wrap gap-2 p-4 bg-gray-100 rounded">
          {currentStep.text.map((token, idx) => (
            <span key={idx} className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
              {token}
            </span>
          ))}
        </div>
      );
    } else if (step === 4) {
      return (
        <div className="flex flex-wrap gap-2 p-4 bg-gray-100 rounded">
          {currentStep.text.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="px-2 py-1 bg-blue-100 rounded-t-lg border border-blue-300 border-b-0">
                {item.word}
              </span>
              <span className="px-2 py-1 bg-green-100 rounded-b-lg border border-green-300 text-xs">
                {item.pos}
              </span>
            </div>
          ))}
        </div>
      );
    } else if (step === 5) {
      return (
        <div className="flex flex-wrap gap-2 p-4 bg-gray-100 rounded">
          {currentStep.text.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="px-2 py-1 bg-purple-100 rounded-t-lg border border-purple-300">
                {item.word}
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded-b-lg border border-gray-300 text-xs">
                {item.original}
              </span>
            </div>
          ))}
        </div>
      );
    }
  };

  const handlePauseToggle = () => {
    setPaused(!paused);
  };

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">NLP Processing Pipeline Animation</h1>
      
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((s, idx) => (
            <button 
              key={idx}
              className={`text-sm px-2 py-1 rounded ${step === idx ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleStepChange(idx)}
            >
              {s.title}
            </button>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Current step */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">{steps[step].title}</h2>
        <p className="text-gray-700 mb-4">{steps[step].description}</p>
        <div className="border rounded-lg p-6 min-h-48 flex items-center justify-center">
          {renderContent()}
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex justify-center">
        <button 
          className={`px-4 py-2 rounded-lg ${paused ? 'bg-green-500' : 'bg-red-500'} text-white`}
          onClick={handlePauseToggle}
        >
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>
    </div>
  );
};

export default NLPProcessAnimation;