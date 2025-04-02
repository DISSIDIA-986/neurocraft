import React, { useState, useEffect } from 'react';

const RAGProcessAnimation = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  
  const userQuery = "What are the impacts of climate change on coral reefs?";
  
  const steps = [
    {
      title: "用户查询",
      content: { query: userQuery },
      description: "用户向系统提出一个需要专业知识回答的问题"
    },
    {
      title: "查询嵌入",
      content: { 
        query: userQuery,
        embedding: "[0.28, -0.12, 0.95, ..., 0.37]" 
      },
      description: "查询被转换为向量嵌入表示，以便进行语义搜索"
    },
    {
      title: "文档检索",
      content: {
        chunks: [
          { id: 1, text: "珊瑚礁正遭受气候变化影响，主要体现在海水温度升高...", score: 0.92 },
          { id: 2, text: "海洋酸化是气候变化导致的另一个重要问题，影响珊瑚礁钙化...", score: 0.88 },
          { id: 3, text: "极端天气事件增加了对珊瑚礁的物理破坏风险...", score: 0.85 },
          { id: 4, text: "珊瑚白化现象是海洋温度升高直接导致的结果...", score: 0.79 }
        ]
      },
      description: "系统从向量数据库中检索与查询语义相关的文档片段"
    },
    {
      title: "上下文构建",
      content: {
        context: "检索结果:\n1. 珊瑚礁正遭受气候变化影响，主要体现在海水温度升高...\n2. 海洋酸化是气候变化导致的另一个重要问题，影响珊瑚礁钙化...\n3. 极端天气事件增加了对珊瑚礁的物理破坏风险...\n4. 珊瑚白化现象是海洋温度升高直接导致的结果...",
        prompt: "基于以上检索到的信息，请详细回答用户问题：'气候变化对珊瑚礁有什么影响？'"
      },
      description: "系统将检索到的文档与用户问题结合，构建增强的上下文输入"
    },
    {
      title: "生成回答",
      content: {
        response: "气候变化对珊瑚礁的影响主要包括以下几个方面：\n\n1. 海水温度升高：导致珊瑚白化现象，珊瑚失去共生藻，严重时导致珊瑚死亡。\n\n2. 海洋酸化：二氧化碳溶解在海水中形成碳酸，降低了海水pH值，削弱珊瑚形成钙质骨架的能力。\n\n3. 极端天气事件：如强烈风暴和飓风频率增加，对珊瑚礁造成物理损害。\n\n这些影响正在全球范围内威胁珊瑚礁生态系统，可能导致生物多样性降低和相关生态系统服务的损失。"
      },
      description: "语言模型基于检索到的上下文生成详细且事实准确的回答"
    },
    {
      title: "引用来源",
      content: {
        response: "气候变化对珊瑚礁的影响主要包括以下几个方面：\n\n1. 海水温度升高：导致珊瑚白化现象，珊瑚失去共生藻，严重时导致珊瑚死亡。[1,4]\n\n2. 海洋酸化：二氧化碳溶解在海水中形成碳酸，降低了海水pH值，削弱珊瑚形成钙质骨架的能力。[2]\n\n3. 极端天气事件：如强烈风暴和飓风频率增加，对珊瑚礁造成物理损害。[3]\n\n这些影响正在全球范围内威胁珊瑚礁生态系统，可能导致生物多样性降低和相关生态系统服务的损失。\n\n来源：\n[1] 珊瑚礁正遭受气候变化影响...\n[2] 海洋酸化是气候变化导致的另一个重要问题...\n[3] 极端天气事件增加了对珊瑚礁的物理破坏风险...\n[4] 珊瑚白化现象是海洋温度升高直接导致的结果..."
      },
      description: "系统可以加入引用标记，提供信息来源，增强回答的可靠性和可追溯性"
    }
  ];

  useEffect(() => {
    let timer;
    if (!paused) {
      timer = setTimeout(() => {
        setStep((prevStep) => (prevStep + 1) % steps.length);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [step, paused, steps.length]);

  const renderContent = () => {
    const currentStep = steps[step];
    
    if (step === 0) {
      // User Query
      return (
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
              <span>🧍</span>
            </div>
            <div className="flex-1 p-3 bg-white rounded-lg shadow-sm">
              <p className="font-medium">{currentStep.content.query}</p>
            </div>
          </div>
        </div>
      );
    } else if (step === 1) {
      // Query Embedding
      return (
        <div className="flex flex-col items-center space-y-4">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 w-full">
            <p className="font-medium">{currentStep.content.query}</p>
          </div>
          <div className="text-2xl">⬇️</div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200 w-full font-mono text-sm overflow-x-auto">
            {currentStep.content.embedding}
          </div>
        </div>
      );
    } else if (step === 2) {
      // Document Retrieval
      return (
        <div className="flex flex-col space-y-2">
          <div className="text-center font-medium mb-2">检索相关文档片段</div>
          {currentStep.content.chunks.map((chunk, idx) => (
            <div 
              key={idx} 
              className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 flex justify-between items-center"
              style={{ opacity: 1 - (idx * 0.15) }}
            >
              <p className="flex-1">{chunk.text}</p>
              <span className="ml-2 px-2 py-1 bg-yellow-200 rounded-full text-xs font-medium">
                相似度: {chunk.score}
              </span>
            </div>
          ))}
        </div>
      );
    } else if (step === 3) {
      // Context Building
      return (
        <div className="flex flex-col space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-medium mb-2">检索上下文:</h4>
            <pre className="text-xs bg-white p-2 rounded whitespace-pre-wrap">{currentStep.content.context}</pre>
          </div>
          <div className="text-2xl text-center">⬇️</div>
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <h4 className="font-medium mb-2">增强提示词:</h4>
            <p className="bg-white p-2 rounded">{currentStep.content.prompt}</p>
          </div>
        </div>
      );
    } else if (step === 4) {
      // Answer Generation
      return (
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
              <span>🤖</span>
            </div>
            <div className="flex-1 p-3 bg-white rounded-lg shadow-sm">
              <pre className="whitespace-pre-wrap text-sm">{currentStep.content.response}</pre>
            </div>
          </div>
        </div>
      );
    } else if (step === 5) {
      // Citation
      return (
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-2">
              <span>🤖</span>
            </div>
            <div className="flex-1 p-3 bg-white rounded-lg shadow-sm">
              <pre className="whitespace-pre-wrap text-sm">{currentStep.content.response}</pre>
            </div>
          </div>
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
      <h1 className="text-2xl font-bold text-center mb-6">检索增强生成 (RAG) 流程动画</h1>
      
      {/* Progress bar */}
      <div className="mb-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-2">
          {steps.map((s, idx) => (
            <button 
              key={idx}
              className={`text-xs px-2 py-1 rounded truncate ${step === idx ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
        <div className="border rounded-lg p-6 min-h-64 flex items-center justify-center">
          {renderContent()}
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex justify-center">
        <button 
          className={`px-4 py-2 rounded-lg ${paused ? 'bg-green-500' : 'bg-red-500'} text-white`}
          onClick={handlePauseToggle}
        >
          {paused ? '播放' : '暂停'}
        </button>
      </div>
      
      {/* System diagram */}
      <div className="mt-10 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-bold mb-4 text-center">RAG系统架构</h3>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1 p-3 bg-blue-50 rounded-lg border border-blue-200 text-center flex flex-col items-center justify-center">
                <div className="text-2xl mb-2">🔍</div>
                <div className="font-medium">检索系统</div>
                <div className="text-xs text-gray-600 mt-1">向量数据库, 嵌入模型, 相似度搜索</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="transform rotate-90 md:rotate-0">⟷</div>
              </div>
              <div className="flex-1 p-3 bg-green-50 rounded-lg border border-green-200 text-center flex flex-col items-center justify-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="font-medium">生成系统</div>
                <div className="text-xs text-gray-600 mt-1">大语言模型, 上下文增强, 提示工程</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-xs text-gray-500">知识库 → 检索 → 增强 → 生成 → 回答</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RAGProcessAnimation;