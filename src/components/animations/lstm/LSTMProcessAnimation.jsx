import React, { useState, useEffect } from 'react';

const LSTMProcessAnimation = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  
  // 示例文本序列数据
  const exampleSequence = "The weather has been cold lately";
  
  const steps = [
    {
      title: "LSTM基本结构",
      content: "cell-structure",
      description: "LSTM(长短期记忆网络)由输入门、遗忘门、输出门和单元状态组成，能有效处理长期依赖问题"
    },
    {
      title: "遗忘门(Forget Gate)",
      content: "forget-gate",
      description: "决定从细胞状态中丢弃哪些信息，通过sigmoid函数输出0-1之间的值，0表示完全丢弃，1表示完全保留"
    },
    {
      title: "输入门(Input Gate)",
      content: "input-gate",
      description: "决定哪些新信息将被存储到细胞状态中，包含sigmoid层和tanh层"
    },
    {
      title: "更新细胞状态",
      content: "cell-update",
      description: "旧细胞状态与遗忘门输出相乘，然后加上输入门的贡献，形成新的细胞状态"
    },
    {
      title: "输出门(Output Gate)",
      content: "output-gate",
      description: "决定将细胞状态的哪些部分输出，输出经过tanh处理并与sigmoid层结果相乘"
    },
    {
      title: "LSTM预测应用",
      content: "application",
      description: "使用LSTM进行文本预测示例：根据前面的单词预测下一个单词"
    }
  ];

  // 用于LSTM预测过程的示例数据
  const predictionSteps = [
    { input: "The", prediction: "weather", confidence: 0.82 },
    { input: "The weather", prediction: "has", confidence: 0.91 },
    { input: "The weather has", prediction: "been", confidence: 0.88 },
    { input: "The weather has been", prediction: "cold", confidence: 0.75 },
    { input: "The weather has been cold", prediction: "lately", confidence: 0.68 }
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
    
    switch(currentStep.content) {
      case "cell-structure":
        return (
          <div className="flex flex-col items-center">
            <svg width="500" height="250" viewBox="0 0 500 250">
              {/* 单元状态线 */}
              <rect x="50" y="50" width="400" height="30" fill="#ffcc88" rx="5"/>
              <text x="250" y="70" textAnchor="middle" fontSize="14">单元状态 (Cell State)</text>
              
              {/* LSTM单元主体 */}
              <rect x="100" y="100" width="300" height="100" fill="#b3e0ff" rx="10"/>
              
              {/* 三个门 */}
              <circle cx="150" cy="150" r="25" fill="#ff9999"/>
              <text x="150" y="155" textAnchor="middle" fontSize="14">遗忘门</text>
              
              <circle cx="250" cy="150" r="25" fill="#99cc99"/>
              <text x="250" y="155" textAnchor="middle" fontSize="14">输入门</text>
              
              <circle cx="350" cy="150" r="25" fill="#cc99cc"/>
              <text x="350" y="155" textAnchor="middle" fontSize="14">输出门</text>
              
              {/* 输入和输出箭头 */}
              <path d="M50,150 L100,150" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="75" y="140" textAnchor="middle" fontSize="12">输入(X_t)</text>
              
              <path d="M400,150 L450,150" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="425" y="140" textAnchor="middle" fontSize="12">输出(h_t)</text>
              
              {/* 箭头标记定义 */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      
      case "forget-gate":
        return (
          <div className="flex flex-col items-center">
            <svg width="500" height="250" viewBox="0 0 500 250">
              {/* 单元状态线 - 遗忘门部分高亮 */}
              <rect x="50" y="50" width="400" height="30" fill="#ffcc88" rx="5"/>
              <text x="250" y="70" textAnchor="middle" fontSize="14">单元状态 (Cell State)</text>
              
              {/* LSTM单元主体 */}
              <rect x="100" y="100" width="300" height="100" fill="#b3e0ff" rx="10"/>
              
              {/* 三个门 - 遗忘门高亮 */}
              <circle cx="150" cy="150" r="25" fill="#ff5555" stroke="#ff0000" strokeWidth="3"/>
              <text x="150" y="155" textAnchor="middle" fontSize="14" fill="white">遗忘门</text>
              
              <circle cx="250" cy="150" r="25" fill="#99cc99" opacity="0.5"/>
              <text x="250" y="155" textAnchor="middle" fontSize="14">输入门</text>
              
              <circle cx="350" cy="150" r="25" fill="#cc99cc" opacity="0.5"/>
              <text x="350" y="155" textAnchor="middle" fontSize="14">输出门</text>
              
              {/* 遗忘门作用箭头 */}
              <path d="M150,125 L150,80" stroke="red" strokeWidth="2" strokeDasharray="5,2" markerEnd="url(#redarrow)"/>
              
              {/* 公式 */}
              <rect x="300" y="20" width="180" height="30" fill="white" stroke="black" strokeWidth="1" rx="5"/>
              <text x="390" y="40" textAnchor="middle" fontSize="14">f_t = σ(W_f·[h_t-1, x_t] + b_f)</text>
              
              <defs>
                <marker id="redarrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="red"/>
                </marker>
              </defs>
            </svg>
          </div>
        );
      
      case "input-gate":
        return (
          <div className="flex flex-col items-center">
            <svg width="500" height="250" viewBox="0 0 500 250">
              {/* 单元状态线 - 输入门部分高亮 */}
              <rect x="50" y="50" width="400" height="30" fill="#ffcc88" rx="5"/>
              <text x="250" y="70" textAnchor="middle" fontSize="14">单元状态 (Cell State)</text>
              
              {/* LSTM单元主体 */}
              <rect x="100" y="100" width="300" height="100" fill="#b3e0ff" rx="10"/>
              
              {/* 三个门 - 输入门高亮 */}
              <circle cx="150" cy="150" r="25" fill="#ff9999" opacity="0.5"/>
              <text x="150" y="155" textAnchor="middle" fontSize="14">遗忘门</text>
              
              <circle cx="250" cy="150" r="25" fill="#33cc33" stroke="#00aa00" strokeWidth="3"/>
              <text x="250" y="155" textAnchor="middle" fontSize="14" fill="white">输入门</text>
              
              <circle cx="350" cy="150" r="25" fill="#cc99cc" opacity="0.5"/>
              <text x="350" y="155" textAnchor="middle" fontSize="14">输出门</text>
              
              {/* 输入门作用箭头 */}
              <path d="M250,125 L250,80" stroke="green" strokeWidth="2" strokeDasharray="5,2" markerEnd="url(#greenarrow)"/>
              
              {/* 公式 */}
              <rect x="300" y="10" width="180" height="45" fill="white" stroke="black" strokeWidth="1" rx="5"/>
              <text x="390" y="25" textAnchor="middle" fontSize="12">i_t = σ(W_i·[h_t-1, x_t] + b_i)</text>
              <text x="390" y="45" textAnchor="middle" fontSize="12">C̃_t = tanh(W_C·[h_t-1, x_t] + b_C)</text>
              
              <defs>
                <marker id="greenarrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="green"/>
                </marker>
              </defs>
            </svg>
          </div>
        );
      
      case "cell-update":
        return (
          <div className="flex flex-col items-center">
            <svg width="500" height="250" viewBox="0 0 500 250">
              {/* 单元状态线 - 更新过程高亮 */}
              <rect x="50" y="50" width="400" height="30" fill="#ffaa44" stroke="#ff8800" strokeWidth="2" rx="5"/>
              <text x="250" y="70" textAnchor="middle" fontSize="14" fontWeight="bold">单元状态更新</text>
              
              {/* LSTM单元主体 */}
              <rect x="100" y="100" width="300" height="100" fill="#b3e0ff" rx="10"/>
              
              {/* 三个门 */}
              <circle cx="150" cy="150" r="25" fill="#ff9999" opacity="0.7"/>
              <text x="150" y="155" textAnchor="middle" fontSize="14">遗忘门</text>
              
              <circle cx="250" cy="150" r="25" fill="#99cc99" opacity="0.7"/>
              <text x="250" y="155" textAnchor="middle" fontSize="14">输入门</text>
              
              <circle cx="350" cy="150" r="25" fill="#cc99cc" opacity="0.5"/>
              <text x="350" y="155" textAnchor="middle" fontSize="14">输出门</text>
              
              {/* 状态更新箭头 */}
              <path d="M150,90 L150,65" stroke="red" strokeWidth="2" markerEnd="url(#redarrow)"/>
              <path d="M250,90 L250,65" stroke="green" strokeWidth="2" markerEnd="url(#greenarrow)"/>
              
              {/* 公式 */}
              <rect x="300" y="20" width="180" height="30" fill="white" stroke="black" strokeWidth="1" rx="5"/>
              <text x="390" y="40" textAnchor="middle" fontSize="14">C_t = f_t * C_t-1 + i_t * C̃_t</text>
              
              <defs>
                <marker id="redarrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="red"/>
                </marker>
                <marker id="greenarrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="green"/>
                </marker>
              </defs>
            </svg>
          </div>
        );
      
      case "output-gate":
        return (
          <div className="flex flex-col items-center">
            <svg width="500" height="250" viewBox="0 0 500 250">
              {/* 单元状态线 */}
              <rect x="50" y="50" width="400" height="30" fill="#ffcc88" rx="5"/>
              <text x="250" y="70" textAnchor="middle" fontSize="14">单元状态 (Cell State)</text>
              
              {/* LSTM单元主体 */}
              <rect x="100" y="100" width="300" height="100" fill="#b3e0ff" rx="10"/>
              
              {/* 三个门 - 输出门高亮 */}
              <circle cx="150" cy="150" r="25" fill="#ff9999" opacity="0.5"/>
              <text x="150" y="155" textAnchor="middle" fontSize="14">遗忘门</text>
              
              <circle cx="250" cy="150" r="25" fill="#99cc99" opacity="0.5"/>
              <text x="250" y="155" textAnchor="middle" fontSize="14">输入门</text>
              
              <circle cx="350" cy="150" r="25" fill="#aa55aa" stroke="#8800aa" strokeWidth="3"/>
              <text x="350" y="155" textAnchor="middle" fontSize="14" fill="white">输出门</text>
              
              {/* 输出路径 */}
              <path d="M350,125 L350,80" stroke="purple" strokeWidth="2" strokeDasharray="5,2"/>
              <path d="M350,80 L425,80 L425,150" stroke="purple" strokeWidth="2" strokeDasharray="5,2" markerEnd="url(#purplearrow)"/>
              
              {/* 公式 */}
              <rect x="300" y="10" width="180" height="40" fill="white" stroke="black" strokeWidth="1" rx="5"/>
              <text x="390" y="25" textAnchor="middle" fontSize="12">o_t = σ(W_o·[h_t-1, x_t] + b_o)</text>
              <text x="390" y="40" textAnchor="middle" fontSize="12">h_t = o_t * tanh(C_t)</text>
              
              <defs>
                <marker id="purplearrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="purple"/>
                </marker>
              </defs>
            </svg>
          </div>
        );
      
      case "application":
        const currentPrediction = predictionSteps[Math.min(step % predictionSteps.length, predictionSteps.length - 1)];
        const confidenceWidth = currentPrediction.confidence * 200;
        
        return (
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">文本预测示例</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4 w-full max-w-lg">
              <div className="flex items-center mb-2">
                <div className="w-24 text-right pr-2 font-semibold">输入:</div>
                <div className="flex-1 bg-white p-2 rounded border border-gray-300">
                  {currentPrediction.input}
                </div>
              </div>
              
              <div className="flex items-center mb-2">
                <div className="w-24 text-right pr-2 font-semibold">预测下一词:</div>
                <div className="flex-1 bg-white p-2 rounded border border-blue-300 text-blue-700 font-medium">
                  {currentPrediction.prediction}
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-24 text-right pr-2 font-semibold">置信度:</div>
                <div className="flex-1 bg-gray-200 rounded-full h-5">
                  <div 
                    className="bg-green-600 h-5 rounded-full" 
                    style={{ width: `${currentPrediction.confidence * 100}%` }}
                  >
                    <span className="px-2 text-xs text-white">{(currentPrediction.confidence * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 italic">
              LSTM能够学习长序列中的模式，因此能有效预测文本中的下一个词
            </div>
          </div>
        );
      
      default:
        return <div>内容加载中...</div>;
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
      <h1 className="text-2xl font-bold text-center mb-6">LSTM网络工作原理动画</h1>
      
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 flex-wrap">
          {steps.map((s, idx) => (
            <button 
              key={idx}
              className={`text-sm px-2 py-1 rounded mb-1 ${step === idx ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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

export default LSTMProcessAnimation;
