import React, { useState, useEffect } from 'react';

const ExpertSystemAnimation = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showDiagnosisDetails, setShowDiagnosisDetails] = useState(false);
  const [activeRuleIndex, setActiveRuleIndex] = useState(null);
  
  // Example of a medical diagnosis expert system
  const knowledgeBase = [
    { 
      id: "R1", 
      condition: "发热 AND 咳嗽 AND 疲劳", 
      conclusion: "可能是流感",
      confidence: 0.7
    },
    { 
      id: "R2", 
      condition: "发热 AND 喉咙痛 AND 头痛", 
      conclusion: "可能是病毒感染",
      confidence: 0.6
    },
    { 
      id: "R3", 
      condition: "咳嗽 AND 呼吸急促 AND 胸痛", 
      conclusion: "可能是肺炎",
      confidence: 0.8
    },
    { 
      id: "R4", 
      condition: "发热 AND 头痛 AND 颈部僵硬", 
      conclusion: "可能是脑膜炎",
      confidence: 0.9
    },
    { 
      id: "R5", 
      condition: "皮疹 AND 发热 AND 关节痛", 
      conclusion: "可能是自身免疫疾病",
      confidence: 0.65
    }
  ];
  
  // Patient facts
  const patientFacts = {
    "发热": true,
    "咳嗽": true,
    "疲劳": true,
    "喉咙痛": false,
    "头痛": false,
    "呼吸急促": false,
    "胸痛": false,
    "颈部僵硬": false,
    "皮疹": false,
    "关节痛": false
  };
  
  // Define the animation steps
  const steps = [
    {
      title: "专家系统概述",
      description: "专家系统是一种能够模拟人类专家决策过程的人工智能系统，通过应用规则来解决复杂问题。"
    },
    {
      title: "输入患者症状",
      description: "系统收集相关数据。在医疗诊断系统中，这些是患者的症状和病史。"
    },
    {
      title: "规则激活",
      description: "推理引擎将输入数据与知识库中的规则进行匹配，确定哪些规则可以被触发。"
    },
    {
      title: "推理过程",
      description: "系统应用适用的规则，进行推理。在医疗诊断中，这意味着基于症状应用诊断规则。"
    },
    {
      title: "结论与解释",
      description: "系统提供诊断结论，并能够解释其推理过程（为什么做出这个诊断）。"
    }
  ];

  // Auto-advance through steps if not paused
  useEffect(() => {
    let timer;
    if (!paused) {
      timer = setTimeout(() => {
        setStep((prevStep) => (prevStep + 1) % steps.length);
        
        // Reset state when cycling back to beginning
        if (step === steps.length - 1) {
          setShowDiagnosisDetails(false);
          setActiveRuleIndex(null);
        }
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [step, paused, steps.length]);

  // Handle rule activation animation
  useEffect(() => {
    if (step === 2) {
      let ruleIndex = 0;
      const ruleInterval = setInterval(() => {
        setActiveRuleIndex(ruleIndex);
        ruleIndex++;
        if (ruleIndex >= knowledgeBase.length) {
          clearInterval(ruleInterval);
          setTimeout(() => {
            setActiveRuleIndex(0); // Reset to the matching rule
          }, 1000);
        }
      }, 800);
      
      return () => clearInterval(ruleInterval);
    }
  }, [step]);

  // Show diagnosis details in step 4
  useEffect(() => {
    if (step === 4) {
      setShowDiagnosisDetails(true);
    }
  }, [step]);

  const handlePauseToggle = () => {
    setPaused(!paused);
  };

  const handleStepChange = (newStep) => {
    setStep(newStep);
    if (newStep === 4) {
      setShowDiagnosisDetails(true);
    } else {
      setShowDiagnosisDetails(false);
    }
    
    if (newStep === 2) {
      setActiveRuleIndex(0);
    } else {
      setActiveRuleIndex(null);
    }
  };
  
  // Evaluate if a rule's conditions are met
  const evaluateRule = (rule) => {
    const conditions = rule.condition.split(" AND ");
    return conditions.every(condition => patientFacts[condition]);
  };
  
  // Get matching rules
  const getMatchingRules = () => {
    return knowledgeBase.filter(rule => evaluateRule(rule));
  };
  
  // Get highest confidence rule from matches
  const getBestDiagnosis = () => {
    const matches = getMatchingRules();
    if (matches.length === 0) return null;
    return matches.reduce((prev, current) => (prev.confidence > current.confidence) ? prev : current);
  };
  // Render the explanation for the conclusion
  const renderExplanation = () => {
    const bestRule = getBestDiagnosis();
    if (!bestRule) return <p>没有匹配的诊断规则</p>;
    
    const conditions = bestRule.condition.split(" AND ");
    
    return (
      <div className="space-y-3">
        <p><strong>诊断结论：</strong> {bestRule.conclusion} (置信度: {(bestRule.confidence * 100).toFixed(0)}%)</p>
        <p><strong>诊断依据：</strong></p>
        <ul className="list-disc pl-5">
          {conditions.map((condition, idx) => (
            <li key={idx} className="text-green-700">患者出现症状：{condition}</li>
          ))}
        </ul>
        <p><strong>应用规则：</strong> {bestRule.id} - 如果 {bestRule.condition}，则 {bestRule.conclusion}</p>
      </div>
    );
  };

  // Render content based on current step
  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 p-4">
              <img src="/api/placeholder/400/300" alt="Expert System Diagram" className="mx-auto rounded-lg shadow-md" />
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-xl font-bold mb-4">专家系统组成部分：</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <span className="text-blue-800 font-bold">1</span>
                  </div>
                  <div>
                    <strong className="text-blue-800">知识库</strong>
                    <p>包含领域专家的知识，以IF-THEN规则形式表示</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <span className="text-green-800 font-bold">2</span>
                  </div>
                  <div>
                    <strong className="text-green-800">推理引擎</strong>
                    <p>执行规则、处理逻辑并得出结论的机制</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <span className="text-purple-800 font-bold">3</span>
                  </div>
                  <div>
                    <strong className="text-purple-800">用户界面</strong>
                    <p>供用户输入数据和查看结果的接口</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-700">患者症状录入</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(patientFacts).map(([symptom, present], index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg border ${present ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${present ? 'bg-green-500' : 'bg-gray-300'}`}>
                      {present ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`font-medium ${present ? 'text-green-700' : 'text-gray-500'}`}>{symptom}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

        case 2:
          return (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">规则匹配过程</h3>
              <div className="space-y-4">
                {knowledgeBase.map((rule, index) => {
                  const isMatching = evaluateRule(rule);
                  const isActive = activeRuleIndex === index;
                  
                  return (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border transition-all duration-500 ${
                        isActive ? 'border-yellow-500 bg-yellow-50 shadow-md transform scale-105' :
                        isMatching ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{rule.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          isMatching ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {isMatching ? '匹配' : '不匹配'}
                        </span>
                      </div>
                      <div className="mt-2">
                        <p><strong>IF:</strong> {rule.condition}</p>
                        <p><strong>THEN:</strong> {rule.conclusion} (置信度: {(rule.confidence * 100).toFixed(0)}%)</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        case 3:
          const matchingRules = getMatchingRules();
          return (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">推理过程</h3>
              
              <div className="flex flex-col md:flex-row items-stretch bg-gray-50 rounded-lg overflow-hidden">
                <div className="flex-1 p-5 bg-blue-50 border-r border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-3">已确认事实</h4>
                  <ul className="space-y-2">
                    {Object.entries(patientFacts)
                      .filter(([_, present]) => present)
                      .map(([symptom], idx) => (
                        <li key={idx} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {symptom}
                        </li>
                      ))}
                  </ul>
                </div>
                
                <div className="flex-1 p-5">
                  <h4 className="font-bold text-green-800 mb-3">匹配的规则</h4>
                  {matchingRules.length > 0 ? (
                    <ul className="space-y-3">
                      {matchingRules.map((rule, idx) => (
                        <li key={idx} className="p-3 bg-green-50 rounded border border-green-200">
                          <div className="flex justify-between">
                            <span className="font-bold">{rule.id}</span>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                              置信度: {(rule.confidence * 100).toFixed(0)}%
                            </span>
                          </div>
                          <p className="mt-1 text-green-800">{rule.conclusion}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic">没有匹配的规则</p>
                  )}
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <h4 className="font-bold text-yellow-800 mb-2">推理策略</h4>
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-1 p-3">
                    <h5 className="font-medium text-yellow-800">前向链接</h5>
                    <p className="text-sm">从已知事实出发，应用规则得出所有可能的结论</p>
                  </div>
                  <div className="flex-1 p-3">
                    <h5 className="font-medium text-orange-800">冲突解决</h5>
                    <p className="text-sm">当多个规则匹配时，根据置信度等因素选择最佳规则</p>
                  </div>
                </div>
              </div>
            </div>
          );
          
          case 4:
            const diagnosis = getBestDiagnosis();
            return (
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-700">诊断结论</h3>
                
                <div className={`text-center p-6 mb-6 rounded-lg ${diagnosis ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <h4 className="text-2xl font-bold mb-2">
                    {diagnosis ? diagnosis.conclusion : "无法得出诊断结论"}
                  </h4>
                  {diagnosis && (
                    <p className="text-gray-700">置信度: {(diagnosis.confidence * 100).toFixed(0)}%</p>
                  )}
                </div>
                
                {showDiagnosisDetails && (
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-3 text-gray-700">诊断解释</h4>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      {renderExplanation()}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">可解释性的价值</h4>
                      <p className="text-gray-700">
                        专家系统的一个关键优势是其推理过程的透明度。系统不仅提供结论，
                        还能解释是如何得出这个结论的，这对于医疗诊断等高风险决策尤为重要。
                        这种可解释性在现代AI中重新受到重视，成为可解释AI（XAI）研究的重点。
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          default:
            return null;
        }
      };
    
      return (
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">专家系统工作原理动画</h1>
          
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
            <div className="border rounded-lg p-6 min-h-96 flex items-center justify-center">
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
    
    export default ExpertSystemAnimation;          