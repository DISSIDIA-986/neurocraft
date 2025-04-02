import React, { useState, useEffect } from 'react';

const EmbeddingModelAnimation = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  
  const steps = [
    {
      title: "文本输入",
      description: "嵌入过程从输入文本开始，可以是单词、句子或整个文档",
      content: {
        inputText: "人工智能正在改变我们的生活和工作方式。",
        inputEnglish: "Artificial intelligence is changing how we live and work."
      }
    },
    {
      title: "标记化",
      description: "将输入文本分解为标记（tokens），这些可能是单词或子词单元",
      content: {
        tokens: ["人工", "智能", "正在", "改变", "我们", "的", "生活", "和", "工作", "方式", "。"],
        tokensEnglish: ["Artificial", "intelligence", "is", "changing", "how", "we", "live", "and", "work", "."]
      }
    },
    {
      title: "编码处理",
      description: "嵌入模型通过Transformer或其他架构处理标记序列，考虑上下文信息",
      content: {
        model: "Transformer架构",
        layers: ["自注意力层", "前馈神经网络", "层归一化"],
        details: "模型通过多层自注意力机制捕获标记间的关系，生成上下文化表示",
        visualization: "neural-network"
      }
    },
    {
      title: "向量生成",
      description: "每个标记或整个句子被转换为高维向量",
      content: {
        sentenceVector: "[0.32, -0.75, 0.12, 0.44, ..., -0.28]",
        dimension: "通常为384-4096维",
        tokensVectors: [
          { token: "人工智能", vector: "[0.41, -0.22, ...]" },
          { token: "改变", vector: "[0.18, 0.65, ...]" },
          { token: "生活", vector: "[-0.33, 0.47, ...]" }
        ]
      }
    },
    {
      title: "语义空间映射",
      description: "生成的向量在高维空间中分布，语义相似的概念在空间中位置接近",
      content: {
        simularWords: [
          { word: "人工智能", position: { x: 120, y: 80 } },
          { word: "机器学习", position: { x: 140, y: 100 } },
          { word: "深度学习", position: { x: 160, y: 90 } },
          { word: "神经网络", position: { x: 130, y: 110 } },
          { word: "计算机", position: { x: 180, y: 150 } },
          { word: "猫", position: { x: 320, y: 250 } },
          { word: "狗", position: { x: 350, y: 270 } },
          { word: "宠物", position: { x: 300, y: 230 } },
          { word: "动物", position: { x: 280, y: 200 } }
        ]
      }
    },
    {
      title: "应用示例",
      description: "向量可用于语义搜索、分类、推荐系统等多种应用",
      content: {
        applications: [
          { name: "语义搜索", description: "根据意义而非关键词匹配找到相关内容", icon: "🔍" },
          { name: "文本分类", description: "自动对文档进行分类标记", icon: "🏷️" },
          { name: "推荐系统", description: "推荐语义相似的内容", icon: "👍" },
          { name: "聚类分析", description: "发现文本集合中的主题和模式", icon: "📊" },
          { name: "相似度计算", description: "衡量文档间的语义相似程度", icon: "⚖️" },
          { name: "异常检测", description: "识别与正常数据语义偏离的内容", icon: "⚠️" }
        ]
      }
    }
  ];

  useEffect(() => {
    let timer;
    if (!paused) {
      timer = setTimeout(() => {
        setStep((prevStep) => (prevStep + 1) % steps.length);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [step, paused, steps.length]);

  const renderContent = () => {
    const currentStep = steps[step];
    
    if (step === 0) {
      // 文本输入
      return (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="font-medium mb-2">中文输入:</div>
            <div className="p-3 bg-white rounded shadow-sm">
              {currentStep.content.inputText}
            </div>
          </div>
          <div className="flex-1 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="font-medium mb-2">英文输入:</div>
            <div className="p-3 bg-white rounded shadow-sm">
              {currentStep.content.inputEnglish}
            </div>
          </div>
        </div>
      );
    } else if (step === 1) {
      // 标记化
      return (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="font-medium mb-2">中文标记:</div>
            <div className="flex flex-wrap gap-2">
              {currentStep.content.tokens.map((token, idx) => (
                <div key={idx} className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                  {token}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="font-medium mb-2">英文标记:</div>
            <div className="flex flex-wrap gap-2">
              {currentStep.content.tokensEnglish.map((token, idx) => (
                <div key={idx} className="px-2 py-1 bg-green-100 rounded-lg border border-green-300">
                  {token}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (step === 2) {
      // 编码处理
      return (
        <div className="flex flex-col items-center">
          <div className="text-lg font-medium mb-4">Transformer模型架构</div>
          <div className="w-full max-w-lg bg-gradient-to-b from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="text-sm text-gray-500">输入层</div>
              </div>
              
              <div className="h-8 w-0.5 bg-gray-300"></div>
              
              <div className="bg-indigo-100 p-3 rounded-lg w-full text-center">
                自注意力层
              </div>
              
              <div className="h-8 w-0.5 bg-gray-300"></div>
              
              <div className="bg-indigo-100 p-3 rounded-lg w-full text-center">
                前馈神经网络
              </div>
              
              <div className="h-8 w-0.5 bg-gray-300"></div>
              
              <div className="bg-indigo-100 p-3 rounded-lg w-full text-center">
                层归一化
              </div>
              
              <div className="h-8 w-0.5 bg-gray-300"></div>
              
              <div className="flex space-x-2 items-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                <div className="text-sm text-gray-500">输出层</div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600 max-w-lg text-center">
            通过自注意力机制，模型能够理解标记间的关系和上下文含义，生成具有语境意识的表示
          </div>
        </div>
      );
    } else if (step === 3) {
      // 向量生成
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <div className="font-medium mb-2">句子级向量 (1536维):</div>
            <div className="p-3 bg-white rounded font-mono text-sm overflow-x-auto">
              [0.32, -0.75, 0.12, 0.44, 0.27, -0.11, 0.56, -0.23, 0.87, 0.19, -0.35, 0.63, ...]
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <div className="font-medium mb-1">"人工智能"</div>
              <div className="text-xs font-mono bg-white p-1 rounded truncate max-w-40">
                [0.41, -0.22, 0.35, ...]
              </div>
            </div>
            
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <div className="font-medium mb-1">"改变"</div>
              <div className="text-xs font-mono bg-white p-1 rounded truncate max-w-40">
                [0.18, 0.65, -0.29, ...]
              </div>
            </div>
            
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <div className="font-medium mb-1">"生活"</div>
              <div className="text-xs font-mono bg-white p-1 rounded truncate max-w-40">
                [-0.33, 0.47, 0.12, ...]
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 max-w-lg text-center">
            高维向量捕获了文本的语义特征，向量间的距离反映语义相似度
          </div>
        </div>
      );
    } else if (step === 4) {
      // 语义空间映射
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-gray-200 relative">
            {currentStep.content.simularWords.map((item, idx) => (
              <div 
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: item.position.x, 
                  top: item.position.y,
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                <div className={`px-2 py-1 rounded-full text-sm ${
                  item.word.includes('学习') || item.word.includes('智能') || item.word.includes('网络') || item.word === '计算机'
                    ? 'bg-blue-100 border border-blue-300'
                    : item.word === '猫' || item.word === '狗' || item.word === '宠物' || item.word === '动物'
                    ? 'bg-green-100 border border-green-300'
                    : 'bg-gray-100 border border-gray-300'
                }`}>
                  {item.word}
                </div>
                
                {/* 连接语义相关词的线 */}
                {(item.word === '人工智能' && (
                  <>
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <line 
                        x1={0} y1={0} 
                        x2={140 - item.position.x} y2={100 - item.position.y}
                        stroke="#93C5FD" 
                        strokeWidth="1" 
                        strokeDasharray="2"
                      />
                    </svg>
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <line 
                        x1={0} y1={0} 
                        x2={160 - item.position.x} y2={90 - item.position.y}
                        stroke="#93C5FD" 
                        strokeWidth="1" 
                        strokeDasharray="2"
                      />
                    </svg>
                  </>
                ))}
                {(item.word === '猫' && (
                  <>
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <line 
                        x1={0} y1={0} 
                        x2={350 - item.position.x} y2={270 - item.position.y}
                        stroke="#6EE7B7" 
                        strokeWidth="1" 
                        strokeDasharray="2"
                      />
                    </svg>
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <line 
                        x1={0} y1={0} 
                        x2={300 - item.position.x} y2={230 - item.position.y}
                        stroke="#6EE7B7" 
                        strokeWidth="1" 
                        strokeDasharray="2"
                      />
                    </svg>
                  </>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600 max-w-lg text-center">
            在高维向量空间中，语义相关的词汇在距离上更接近，形成语义聚类
          </div>
        </div>
      );
    } else if (step === 5) {
      // 应用示例
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentStep.content.applications.map((app, idx) => (
            <div 
              key={idx} 
              className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-2">{app.icon}</div>
                <div className="font-medium">{app.name}</div>
              </div>
              <p className="text-sm text-gray-600">{app.description}</p>
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
      <h1 className="text-2xl font-bold text-center mb-6">嵌入模型工作原理动画</h1>
      
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 flex-wrap gap-2">
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
        <div className="border rounded-lg p-6 min-h-80 flex items-center justify-center">
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
    </div>
  );
};

export default EmbeddingModelAnimation;