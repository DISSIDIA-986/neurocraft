import React, { useState, useEffect } from 'react';

const RLHFAnimation = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeNodes, setActiveNodes] = useState(['pretrainedModel']);
  const [flowAnimation, setFlowAnimation] = useState('');
  
  // 示例问题和回答
  const samplePrompt = "Tell me how to make a lot of money quickly.";
  const responses = [
    "Buy lottery tickets and hope for the best! It's the fastest way to get rich.",
    "Start a business in an area you're knowledgeable about, seek investment if needed, and work hard to grow it over time.",
    "I've found that investing in high-risk stocks and timing the market can make you rich overnight!"
  ];
  
  const humanPreferences = [
    { response: 0, rating: 1, comment: "Promotes gambling, low probability of success" },
    { response: 1, rating: 5, comment: "Realistic, ethical advice with long-term value" },
    { response: 2, rating: 2, comment: "Potentially misleading financial advice" }
  ];
  
  // 定义步骤
  const steps = [
    {
      title: "1. 预训练语言模型",
      description: "首先，使用海量文本数据训练一个基础语言模型，使其能够理解和生成自然语言。这个模型虽然功能强大，但可能会产生不安全、不准确或不符合人类偏好的输出。",
      activeNodes: ['pretrainedModel'],
      flowAnimation: ''
    },
    {
      title: "2. 生成多样化响应",
      description: "对于同一个提示，让预训练模型生成多个不同的响应。这些响应可能质量参差不齐，有些可能很有帮助，而有些则可能有害或误导人。",
      activeNodes: ['pretrainedModel', 'responses'],
      flowAnimation: 'pretrainedToResponses'
    },
    {
      title: "3. 收集人类反馈",
      description: "人类评判者对模型生成的不同回答进行评分和排序，识别哪些是好的或差的回答。这些评判构成了关于人类价值和偏好的宝贵数据集。",
      activeNodes: ['pretrainedModel', 'responses', 'humanFeedback'],
      flowAnimation: 'responsesToHuman'
    },
    {
      title: "4. 训练奖励模型",
      description: "基于人类反馈数据，训练一个奖励模型，学习预测哪些响应更可能被人类评为高质量。奖励模型在RLHF过程中充当代理人类评判者。",
      activeNodes: ['pretrainedModel', 'responses', 'humanFeedback', 'rewardModel'],
      flowAnimation: 'humanToReward'
    },
    {
      title: "5. 强化学习优化",
      description: "使用奖励模型提供实时反馈，通过强化学习来调整原始语言模型，使其输出更符合人类偏好。这一过程通常使用PPO（近端策略优化）算法，同时添加KL散度惩罚以防止过度偏离原始模型能力。",
      activeNodes: ['pretrainedModel', 'rewardModel', 'rlModel'],
      flowAnimation: 'rewardAndPretrainedToRL'
    },
    {
      title: "6. RLHF训练完成",
      description: "经过RLHF训练的模型现在更可能生成符合人类价值观和偏好的回答，平衡有用性、安全性和真实性。这一过程不断迭代改进，随着更多人类反馈的收集，模型的行为会更加符合人类期望。",
      activeNodes: ['rlModel', 'finalResponse'],
      flowAnimation: 'rlToFinal'
    }
  ];

  useEffect(() => {
    let timer;
    if (!paused) {
      timer = setTimeout(() => {
        if (step < steps.length - 1) {
          setStep(prevStep => prevStep + 1);
        }
      }, 8000); // 每8秒自动前进一步
    }
    return () => clearTimeout(timer);
  }, [step, paused, steps.length]);

  useEffect(() => {
    // 更新活跃节点和动画
    if (step < steps.length) {
      setActiveNodes(steps[step].activeNodes);
      
      // 设置动画，短暂延迟以便节点先渲染
      setTimeout(() => {
        setFlowAnimation(steps[step].flowAnimation);
      }, 300);
    }
  }, [step, steps]);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handlePauseToggle = () => {
    setPaused(!paused);
  };

  // 生成的最终回答
  const getFinalResponse = () => {
    return "Starting a business in your area of expertise is a reliable approach to building wealth. While it takes time and effort, it offers more sustainable returns than get-rich-quick schemes. Focus on providing value, understanding your market, and growing steadily.";
  };
  
  // 渲染连接线动画
  const renderFlowAnimation = () => {
    switch (flowAnimation) {
      case 'pretrainedToResponses':
        return (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-purple-500 transform rotate-90"></div>
              <div className="w-16 h-2 bg-purple-500 rounded"></div>
            </div>
          </div>
        );
      case 'responsesToHuman':
        return (
          <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 w-16 h-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-blue-500 transform rotate-180"></div>
              <div className="w-16 h-2 bg-blue-500 rounded"></div>
            </div>
          </div>
        );
      case 'humanToReward':
        return (
          <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 w-16 h-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-yellow-500 transform -rotate-90"></div>
              <div className="w-16 h-2 bg-yellow-500 rounded"></div>
            </div>
          </div>
        );
      case 'rewardAndPretrainedToRL':
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute top-0 left-0 animate-pulse flex items-center">
                <div className="w-24 h-2 bg-orange-500 rounded"></div>
                <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-orange-500 transform rotate-90"></div>
              </div>
              <div className="absolute bottom-0 right-0 animate-pulse flex items-center">
                <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-purple-500 transform rotate-90"></div>
                <div className="w-24 h-2 bg-purple-500 rounded"></div>
              </div>
            </div>
          </div>
        );
      case 'rlToFinal':
        return (
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-16 h-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-16 h-2 bg-green-500 rounded"></div>
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-green-500 transform -rotate-90"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // 添加额外的视觉效果来显示模型优化过程
  const renderOptimizationEffect = () => {
    if (step === 4) { // 强化学习优化步骤
      return (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
        </div>
      );
    }
    return null;
  };

  const renderNodeContent = (nodeId) => {
    switch (nodeId) {
      case "pretrainedModel":
        return (
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-300 rounded-lg p-4 shadow-md transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl mr-3">
                🧠
              </div>
              <h3 className="font-bold text-purple-800">预训练语言模型</h3>
            </div>
            <p className="text-sm text-gray-700 mt-2">通过自监督学习训练的基础模型，具有广泛的语言理解和生成能力。</p>
            <div className="mt-2 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`h-2 w-full rounded ${i < 4 ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>能力强</span>
              <span>对齐弱</span>
            </div>
          </div>
        );
      case "responses":
        return (
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300 rounded-lg p-4 shadow-md">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl mr-3">
                💬
              </div>
              <h3 className="font-bold text-blue-800">模型生成的多样化响应</h3>
            </div>
            <div className="mt-2 space-y-2 text-sm">
              {responses.map((response, idx) => (
                <div key={idx} className={`p-2 rounded transition-all duration-300 hover:shadow-md ${idx === 1 ? 'bg-green-100 border-l-4 border-green-500' : idx === 0 ? 'bg-red-50 border-l-4 border-red-400' : 'bg-yellow-50 border-l-4 border-yellow-400'}`}>
                  {response}
                </div>
              ))}
            </div>
          </div>
        );
      case "humanFeedback":
        return (
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-300 rounded-lg p-4 shadow-md">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl mr-3">
                👥
              </div>
              <h3 className="font-bold text-yellow-800">人类反馈</h3>
            </div>
            <div className="mt-2 space-y-2 text-sm">
              {humanPreferences.map((pref, idx) => (
                <div key={idx} className="flex items-center p-2 rounded bg-white border border-gray-200 transition-all duration-300 hover:shadow-md">
                  <div className="mr-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < pref.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                      ))}
                    </div>
                  </div>
                  <div>{pref.comment}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case "rewardModel":
        return (
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-300 rounded-lg p-4 shadow-md transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl mr-3">
                🎯
              </div>
              <h3 className="font-bold text-orange-800">奖励模型</h3>
            </div>
            <p className="text-sm text-gray-700 mt-2">学习预测哪些响应更符合人类偏好的模型</p>
            <div className="mt-3 space-y-2">
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-red-600">
                      低质量响应
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold inline-block text-green-600">
                      高质量响应
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                  <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500 transition-all duration-1000"></div>
                  <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500 transition-all duration-1000"></div>
                  <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-1000"></div>
                </div>
              </div>
              
              <div className="bg-white p-2 rounded border border-gray-200 text-xs">
                <div className="font-bold">奖励模型训练目标:</div>
                <div className="mt-1">最大化人类偏好预测准确性</div>
              </div>
            </div>
          </div>
        );
      case "rlModel":
        return (
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg p-4 shadow-md transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xl mr-3">
                🔄
              </div>
              <h3 className="font-bold text-green-800">RLHF优化模型</h3>
            </div>
            <p className="text-sm text-gray-700 mt-2">根据奖励信号调整的模型，更符合人类偏好</p>
            
            <div className="mt-2 bg-white p-2 rounded border border-gray-200 text-xs">
              <div className="font-bold">优化目标公式:</div>
              <div className="mt-1 font-mono">目标 = E[r(x, y)] - β·KL(π_RL || π_SFT)</div>
              <div className="mt-1">
                <span className="text-green-600">r(x, y)</span>: 奖励模型评分
                <br />
                <span className="text-blue-600">KL</span>: KL散度，防止过度偏离
                <br />
                <span className="text-purple-600">β</span>: 平衡系数
              </div>
            </div>
            
            <div className="mt-2 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`h-2 w-full rounded ${i < 3 ? 'bg-green-500' : 'bg-green-300'}`}></div>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>能力保持</span>
              <span>对齐提升</span>
            </div>
          </div>
        );
      case "finalResponse":
        return (
          <div className="bg-gradient-to-r from-teal-100 to-green-100 border border-teal-300 rounded-lg p-4 shadow-md">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl mr-3">
                ✅
              </div>
              <h3 className="font-bold text-teal-800">最终高质量响应</h3>
            </div>
            <div className="relative mt-3 p-3 bg-white rounded border border-gray-200 text-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
              <div className="pl-2">{getFinalResponse()}</div>
            </div>
            <div className="mt-2 flex justify-between text-xs">
              <span className="text-green-600">✓ 有帮助</span>
              <span className="text-green-600">✓ 真实</span>
              <span className="text-green-600">✓ 安全</span>
              <span className="text-green-600">✓ 符合人类价值观</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white rounded-xl shadow-md overflow-hidden">
      <h1 className="text-2xl font-bold text-center mb-6">基于人类反馈的强化学习 (RLHF) 流程</h1>
      
      {/* 示例问题 */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-bold mb-2 flex items-center">
          <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm mr-2">?</span>
          示例用户提示:
        </h3>
        <div className="p-3 bg-white rounded border border-gray-300 shadow-sm">
          {samplePrompt}
        </div>
      </div>
      
      {/* 进度条 */}
      <div className="mb-8">
        <div className="flex justify-between mb-2 flex-wrap gap-2">
          {steps.map((s, idx) => (
            <button 
              key={idx}
              className={`text-sm px-3 py-1.5 rounded transition-all ${step === idx ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => handleStepChange(idx)}
            >
              {s.title.split('.')[0]}
            </button>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* 当前步骤标题和描述 */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-xl font-bold text-blue-800 mb-2">{steps[step].title}</h2>
        <p className="text-gray-700">{steps[step].description}</p>
      </div>
      
      {/* 动画区域 */}
      <div className="border rounded-lg p-6 min-h-[500px] mb-6 relative bg-gradient-to-b from-gray-50 to-white">
        {/* 渲染连接线动画 */}
        {renderFlowAnimation()}
        
        {/* 渲染优化效果 */}
        {renderOptimizationEffect()}
        
        {/* 网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 根据活跃节点渲染内容 */}
          {activeNodes.includes("pretrainedModel") && (
            <div className={`transition-all duration-700 transform ${activeNodes.includes("pretrainedModel") ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              {renderNodeContent("pretrainedModel")}
            </div>
          )}
          
          {activeNodes.includes("responses") && (
            <div className={`transition-all duration-700 transform delay-100 ${activeNodes.includes("responses") ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              {renderNodeContent("responses")}
            </div>
          )}
          
          {activeNodes.includes("humanFeedback") && (
            <div className={`transition-all duration-700 transform delay-200 ${activeNodes.includes("humanFeedback") ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              {renderNodeContent("humanFeedback")}
            </div>
          )}
          
          {activeNodes.includes("rewardModel") && (
            <div className={`transition-all duration-700 transform delay-300 ${activeNodes.includes("rewardModel") ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              {renderNodeContent("rewardModel")}
            </div>
          )}
          
          {activeNodes.includes("rlModel") && (
            <div className={`transition-all duration-700 transform delay-200 ${activeNodes.includes("rlModel") ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              {renderNodeContent("rlModel")}
            </div>
          )}
          
          {activeNodes.includes("finalResponse") && (
            <div className={`transition-all duration-700 transform delay-300 ${activeNodes.includes("finalResponse") ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              {renderNodeContent("finalResponse")}
            </div>
          )}
        </div>
      </div>
      
      {/* 控制按钮 */}
      <div className="flex justify-center gap-4">
        <button 
          className={`px-4 py-2 rounded-lg ${paused ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white transition-colors shadow-md`}
          onClick={handlePauseToggle}
        >
          {paused ? '播放' : '暂停'}
        </button>
        
        <div className="flex gap-2">
          <button 
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
          >
            上一步
          </button>
          <button 
            className="px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  );
};

export default RLHFAnimation;