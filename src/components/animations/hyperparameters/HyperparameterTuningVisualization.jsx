import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HyperparameterTuningVisualization = () => {
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
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Sample hyperparameters
  const hyperparamSets = [
    { n_layers: 3, n_neurons: 512, learning_rate: 0.1, score: "85%" },
    { n_layers: 3, n_neurons: 1024, learning_rate: 0.01, score: "80%" },
    { n_layers: 5, n_neurons: 256, learning_rate: 0.1, score: "92%" },
    { n_layers: 4, n_neurons: 512, learning_rate: 0.05, score: "89%" },
    { n_layers: 2, n_neurons: 128, learning_rate: 0.2, score: "78%" },
  ];
  
  const bestConfig = hyperparamSets.sort((a, b) => 
    parseInt(b.score) - parseInt(a.score)
  )[0];
  
  // Render concept explanation
  const renderStep0 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">什么是超参数？</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
        <motion.div 
          className="p-4 border rounded-lg shadow-md bg-blue-50 max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-lg text-blue-700 mb-2">超参数</h3>
          <p className="mb-3">模型架构和训练过程中需要<span className="font-bold">人为设定</span>的参数，不会在训练过程中自动学习。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>层数 (n_layers)</li>
            <li>每层神经元数量 (n_neurons)</li>
            <li>学习率 (learning_rate)</li>
            <li>批量大小 (batch_size)</li>
            <li>激活函数类型</li>
            <li>优化器类型</li>
            <li>正则化参数</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="p-4 border rounded-lg shadow-md bg-green-50 max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-bold text-lg text-green-700 mb-2">模型参数</h3>
          <p className="mb-3">在训练过程中通过优化算法<span className="font-bold">自动学习</span>的参数。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>权重 (weights)</li>
            <li>偏置 (biases)</li>
          </ul>
          <p className="mt-3 text-sm italic">这些参数通过反向传播和梯度下降等优化算法自动调整。</p>
        </motion.div>
      </div>
      <p className="text-center max-w-2xl">
        超参数决定了模型的结构和学习过程，而模型参数则是模型在特定超参数设置下学习到的知识。
        超参数需要在训练前或训练过程中手动设置，对模型性能有重大影响。
      </p>
    </div>
  );
  
  // Render tuning process
  const renderStep1 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">超参数调优的过程</h2>
      <div className="w-full max-w-3xl p-4 border rounded-lg shadow-md bg-white">
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div className="flex-1 p-3 bg-blue-50 rounded">
              <h3 className="font-bold">定义超参数搜索空间</h3>
              <p className="text-sm">确定需要调优的超参数及其可能的取值范围</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div className="flex-1 p-3 bg-blue-50 rounded">
              <h3 className="font-bold">选择搜索策略</h3>
              <p className="text-sm">网格搜索、随机搜索、贝叶斯优化等</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div className="flex-1 p-3 bg-blue-50 rounded">
              <h3 className="font-bold">模型训练与评估</h3>
              <p className="text-sm">使用不同超参数组合训练模型并在验证集上评估性能</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
            <div className="flex-1 p-3 bg-blue-50 rounded">
              <h3 className="font-bold">选择最佳超参数组合</h3>
              <p className="text-sm">根据评估指标选择性能最好的超参数设置</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
            <div className="flex-1 p-3 bg-blue-50 rounded">
              <h3 className="font-bold">最终模型训练</h3>
              <p className="text-sm">使用最佳超参数在完整训练集上训练最终模型</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
  
  // Render search strategies
  const renderStep2 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">超参数搜索策略</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <motion.div 
          className="p-4 border rounded-lg shadow-md bg-blue-50 w-64"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-center text-blue-700 mb-2">网格搜索</h3>
          <div className="bg-white p-2 rounded mb-2">
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-6 h-6 bg-blue-200 rounded-sm flex items-center justify-center text-xs">
                  {i+1}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm">尝试预定义的所有超参数组合。系统但计算成本高，适合较小搜索空间。</p>
        </motion.div>
        
        <motion.div 
          className="p-4 border rounded-lg shadow-md bg-purple-50 w-64"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-bold text-center text-purple-700 mb-2">随机搜索</h3>
          <div className="bg-white p-2 rounded mb-2">
            <div className="relative h-28">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs"
                  style={{ 
                    left: `${10 + Math.random() * 80}%`, 
                    top: `${10 + Math.random() * 80}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {i+1}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm">从搜索空间中随机采样。计算效率更高，通常能更快找到良好解决方案。</p>
        </motion.div>
        
        <motion.div 
          className="p-4 border rounded-lg shadow-md bg-green-50 w-64"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-bold text-center text-green-700 mb-2">贝叶斯优化</h3>
          <div className="bg-white p-2 rounded mb-2">
            <div className="relative h-28">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#f0fff4', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M0,80 Q25,40 50,70 T100,60" stroke="url(#grad)" strokeWidth="2" fill="none" />
                {Array.from({ length: 5 }).map((_, i) => {
                  const x = 10 + i * 20;
                  const y = 80 - Math.sin((i / 4) * Math.PI) * 40;
                  return (
                    <circle key={i} cx={x} cy={y} r="3" fill="#16a34a" />
                  );
                })}
                <circle cx="70" cy="50" r="4" fill="#dc2626" />
              </svg>
            </div>
          </div>
          <p className="text-sm">利用之前评估结果构建概率模型，智能引导下一次搜索。更高效但计算更复杂。</p>
        </motion.div>
      </div>
      <p className="text-center max-w-2xl">
        不同的搜索策略适用于不同场景。网格搜索全面但低效，随机搜索简单且有效，
        贝叶斯优化则利用历史信息寻找最优解。
      </p>
    </div>
  );
  
  // Render experiment results
  const renderStep3 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">超参数实验结果</h2>
      <div className="w-full max-w-2xl p-4 border rounded-lg shadow-md bg-white mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border text-left">实验</th>
              <th className="p-2 border text-left">n_layers</th>
              <th className="p-2 border text-left">n_neurons</th>
              <th className="p-2 border text-left">learning_rate</th>
              <th className="p-2 border text-left">准确率</th>
            </tr>
          </thead>
          <tbody>
            {hyperparamSets.map((config, idx) => (
              <motion.tr 
                key={idx}
                className={config === bestConfig ? "bg-green-50" : ""}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <td className="p-2 border">{idx + 1}</td>
                <td className="p-2 border">{config.n_layers}</td>
                <td className="p-2 border">{config.n_neurons}</td>
                <td className="p-2 border">{config.learning_rate}</td>
                <td className={`p-2 border font-bold ${
                  parseInt(config.score) >= 90 ? "text-green-600" : 
                  parseInt(config.score) >= 85 ? "text-blue-600" : "text-gray-600"
                }`}>
                  {config.score}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <motion.div 
        className="p-4 border-2 border-green-500 rounded-lg shadow-md bg-green-50 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: hyperparamSets.length * 0.2 }}
      >
        <h3 className="font-bold text-lg text-green-700 mb-2 text-center">最佳超参数组合</h3>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="font-bold">层数</div>
            <div className="text-2xl text-blue-600">{bestConfig.n_layers}</div>
          </div>
          <div className="text-center">
            <div className="font-bold">神经元数</div>
            <div className="text-2xl text-blue-600">{bestConfig.n_neurons}</div>
          </div>
          <div className="text-center">
            <div className="font-bold">学习率</div>
            <div className="text-2xl text-blue-600">{bestConfig.learning_rate}</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <div className="font-bold">准确率</div>
          <div className="text-3xl text-green-600">{bestConfig.score}</div>
        </div>
      </motion.div>
    </div>
  );
  
  // Render impact visualization
  const renderStep4 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">超参数对模型性能的影响</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <motion.div 
          className="p-4 border rounded-lg shadow-md bg-white w-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-center mb-2">层数 (n_layers) 的影响</h3>
          <div className="h-40 bg-gray-50 p-2 relative mb-2">
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
              <div className="text-xs">少</div>
              <div className="text-xs">层数</div>
              <div className="text-xs">多</div>
            </div>
            <svg width="100%" height="85%" viewBox="0 0 100 80">
              <path d="M10,70 C20,30 30,60 40,20 C50,40 60,10 70,30 C80,50 90,70 100,75" 
                stroke="#3b82f6" strokeWidth="2" fill="none" />
              <text x="40" y="10" fontSize="8" fill="#3b82f6">
                最佳复杂度
              </text>
              <line x1="40" y1="20" x2="40" y2="80" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2" />
              <text x="10" y="50" fontSize="8" fill="#ef4444">
                欠拟合
              </text>
              <text x="70" y="50" fontSize="8" fill="#ef4444">
                过拟合
              </text>
            </svg>
          </div>
          <p className="text-sm text-center">
            层数太少容易欠拟合，太多容易过拟合，需要找到平衡点。
          </p>
        </motion.div>
        
        <motion.div 
          className="p-4 border rounded-lg shadow-md bg-white w-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-bold text-center mb-2">学习率 (learning_rate) 的影响</h3>
          <div className="h-40 bg-gray-50 p-2 relative mb-2">
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
              <div className="text-xs">小</div>
              <div className="text-xs">学习率</div>
              <div className="text-xs">大</div>
            </div>
            <svg width="100%" height="85%" viewBox="0 0 100 80">
              <path d="M10,60 C20,55 30,40 40,20 C50,40 60,70 80,75" 
                stroke="#3b82f6" strokeWidth="2" fill="none" />
              <text x="40" y="10" fontSize="8" fill="#3b82f6">
                最佳学习率
              </text>
              <line x1="40" y1="20" x2="40" y2="80" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2" />
              <text x="15" y="50" fontSize="8" fill="#ef4444">
                收敛慢
              </text>
              <text x="70" y="50" fontSize="8" fill="#ef4444">
                不收敛/震荡
              </text>
            </svg>
          </div>
          <p className="text-sm text-center">
            学习率太小收敛缓慢，太大可能导致不收敛或震荡。
          </p>
        </motion.div>
      </div>
      <p className="text-center max-w-2xl">
        超参数之间常常存在相互影响，需要综合考虑。例如，增加网络深度可能需要同时调整学习率。
        找到最佳超参数组合是一个权衡过程，需要考虑模型性能、训练时间和计算资源等因素。
      </p>
    </div>
  );

  const renderCurrentStep = () => {
    switch(step) {
      case 0: return renderStep0();
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep0();
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">超参数调优原理</h1>
      
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

export default HyperparameterTuningVisualization;