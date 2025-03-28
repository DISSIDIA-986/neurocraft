import React, { useState, useEffect } from 'react';

const CNNImageClassification = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalSteps = 5;
  
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setStep((prevStep) => {
          const nextStep = prevStep + 1;
          if (nextStep > totalSteps) {
            setIsPlaying(false);
            return 0;
          }
          return nextStep;
        });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Step 0: Initial image
  const renderStep0 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">1. 输入图像</h2>
      
      <div className="relative mb-6">
        <div className="w-48 h-48 bg-blue-100 border border-blue-300 rounded flex items-center justify-center">
          <div className="grid grid-cols-8 grid-rows-8 w-40 h-40">
            {Array(64).fill().map((_, i) => (
              <div 
                key={i} 
                style={{
                  backgroundColor: `rgb(${Math.floor(Math.random() * 100)}, 
                                     ${Math.floor(Math.random() * 100)}, 
                                     ${Math.floor(Math.random() * 255)})`
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute top-1 left-1 bg-white/80 text-xs p-1 rounded">
          猫的图像 (224×224×3)
        </div>
      </div>
      
      <div className="text-center max-w-md bg-blue-50 p-3 rounded-lg">
        输入是一张RGB图像，通常会进行预处理如缩放、归一化等。每个像素有3个通道(红、绿、蓝)的值。
      </div>
    </div>
  );

  // Step 1: Convolution operation
  const renderStep1 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">2. 卷积操作</h2>
      
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="text-center">
          <div className="mb-2 font-semibold">图像区域</div>
          <div className="w-32 h-32 bg-blue-100 border-2 border-red-500 rounded flex items-center justify-center">
            <div className="grid grid-cols-5 grid-rows-5 w-24 h-24">
              {Array(25).fill().map((_, i) => (
                <div 
                  key={i} 
                  className="border border-blue-200"
                  style={{
                    backgroundColor: `rgb(${Math.floor(Math.random() * 100)}, 
                                     ${Math.floor(Math.random() * 100)}, 
                                     ${Math.floor(Math.random() * 255)})`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="text-center">
            <div className="mb-2 font-semibold">卷积核</div>
            <div className="w-24 h-24 bg-green-100 border border-green-400 rounded flex items-center justify-center">
              <div className="grid grid-cols-3 grid-rows-3 w-16 h-16 gap-1">
                {[0.1, 0.2, -0.1, 0.3, 0.8, 0.2, 0.0, -0.3, 0.4].map((val, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-center text-xs font-semibold"
                    style={{
                      backgroundColor: val > 0 ? 
                        `rgba(0, 255, 0, ${Math.abs(val) * 0.8})` : 
                        `rgba(255, 0, 0, ${Math.abs(val) * 0.8})`
                    }}
                  >
                    {val.toFixed(1)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mx-4 text-xl font-bold">→</div>
          
          <div className="text-center">
            <div className="mb-2 font-semibold">特征图</div>
            <div className="w-16 h-16 bg-purple-200 rounded flex items-center justify-center font-bold">
              7.2
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center max-w-md bg-blue-50 p-3 rounded-lg">
        卷积核滑动扫描图像，执行元素乘积和求和。不同的卷积核检测不同的特征，如边缘、纹理等。一个卷积层通常包含多个卷积核。
      </div>
    </div>
  );

  // Step 2: Full convolution layer
  const renderStep2 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">3. 卷积层输出</h2>
      
      <div className="flex items-center justify-center gap-8 mb-6">
        <div className="text-center">
          <div className="mb-2 font-semibold">输入图像</div>
          <div className="w-32 h-32 bg-blue-100 border border-blue-300 rounded flex items-center justify-center">
            <div className="grid grid-cols-6 grid-rows-6 w-24 h-24">
              {Array(36).fill().map((_, i) => (
                <div 
                  key={i} 
                  style={{
                    backgroundColor: `rgb(${Math.floor(Math.random() * 100)}, 
                                     ${Math.floor(Math.random() * 100)}, 
                                     ${Math.floor(Math.random() * 255)})`
                  }}
                />
              ))}
            </div>
          </div>
          <div className="text-xs mt-1">(224×224×3)</div>
        </div>
        
        <div className="flex items-center">
          <div className="text-center">
            <div className="mb-2 font-semibold">64个卷积核</div>
            <div className="w-32 h-32 bg-green-100 border border-green-300 rounded flex items-center justify-center">
              <div className="grid grid-cols-4 grid-rows-4 gap-1 w-24 h-24">
                {Array(16).fill().map((_, i) => (
                  <div 
                    key={i} 
                    className="rounded-sm"
                    style={{
                      backgroundColor: `hsl(${(i * 20) % 360}, 70%, 80%)`
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs mt-1">(3×3×3)</div>
          </div>
          
          <div className="mx-4 text-xl font-bold">→</div>
          
          <div className="text-center">
            <div className="mb-2 font-semibold">特征图</div>
            <div className="w-32 h-32 bg-purple-100 border border-purple-300 rounded flex items-center justify-center">
              <div className="grid grid-cols-4 grid-rows-4 gap-1 w-24 h-24">
                {Array(16).fill().map((_, i) => (
                  <div 
                    key={i} 
                    className="rounded-sm"
                    style={{
                      backgroundColor: `hsl(${(i * 30) % 360}, 70%, 75%)`
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs mt-1">(222×222×64)</div>
          </div>
        </div>
      </div>
      
      <div className="text-center max-w-md bg-blue-50 p-3 rounded-lg">
        每个卷积核产生一个特征图，结果是一个三维张量。输出尺寸取决于输入尺寸、卷积核大小、步长和填充方式。激活函数(如ReLU)通常应用于卷积后的结果。
      </div>
    </div>
  );

  // Step 3: Pooling
  const renderStep3 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">4. 池化操作</h2>
      
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="text-center">
          <div className="mb-2 font-semibold">特征图区域</div>
          <div className="w-32 h-32 border border-gray-300 rounded flex items-center justify-center">
            <div className="grid grid-cols-4 grid-rows-4 w-24 h-24">
              {Array(16).fill().map((_, i) => {
                const val = Math.floor(Math.random() * 9);
                return (
                  <div 
                    key={i} 
                    className="border border-gray-300 flex items-center justify-center"
                    style={{ 
                      backgroundColor: i % 5 === 0 ? 'rgba(255, 200, 100, 0.5)' : 'rgba(200, 200, 255, 0.3)'
                    }}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="mb-2 font-semibold">最大池化 (2×2)</div>
          <div className="w-32 h-32 bg-gray-100 border border-gray-300 rounded flex items-center justify-center">
            <div className="relative w-24 h-24 flex flex-col items-center justify-center">
              <div className="border-2 border-red-500 border-dashed absolute top-0 left-0 w-12 h-12"></div>
              <div className="border-2 border-red-500 border-dashed absolute top-0 right-0 w-12 h-12"></div>
              <div className="border-2 border-red-500 border-dashed absolute bottom-0 left-0 w-12 h-12"></div>
              <div className="border-2 border-red-500 border-dashed absolute bottom-0 right-0 w-12 h-12"></div>
              <div className="text-sm font-semibold">取每区域最大值</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="mb-2 font-semibold">池化结果</div>
          <div className="w-20 h-20 border border-gray-300 rounded flex items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 w-16 h-16">
              {[8, 7, 9, 8].map((val, i) => (
                <div 
                  key={i} 
                  className="border border-gray-300 flex items-center justify-center font-semibold bg-yellow-200"
                >
                  {val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center max-w-md bg-blue-50 p-3 rounded-lg">
        池化层通过降采样减少特征图的空间维度，最常见的是最大池化和平均池化。这降低了计算复杂度，并提供了一定程度的平移不变性，同时减少过拟合风险。
      </div>
    </div>
  );

  // Step 4: Full network
  const renderStep4 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">5. 完整CNN架构</h2>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-6 w-full max-w-3xl overflow-x-auto p-4 bg-white border border-gray-300 rounded">
        {/* Input Layer */}
        <div className="flex flex-col items-center min-w-fit">
          <div className="w-14 h-14 bg-blue-100 border border-blue-400 rounded flex items-center justify-center">
            <div className="w-10 h-10 bg-blue-200"></div>
          </div>
          <div className="text-xs mt-1">输入图像</div>
        </div>
        
        <div className="text-gray-400">→</div>
        
        {/* Conv1 */}
        <div className="flex flex-col items-center min-w-fit">
          <div className="w-14 h-14 bg-purple-100 border border-purple-400 rounded flex items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-1 w-10 h-10">
              {Array(4).fill().map((_, i) => (
                <div key={i} className="bg-purple-300" />
              ))}
            </div>
          </div>
          <div className="text-xs mt-1">卷积层 1</div>
        </div>
        
        <div className="text-gray-400">→</div>
        
        {/* Pool1 */}
        <div className="flex flex-col items-center min-w-fit">
          <div className="w-12 h-12 bg-green-100 border border-green-400 rounded flex items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 w-8 h-8">
              {Array(4).fill().map((_, i) => (
                <div key={i} className="bg-green-300" />
              ))}
            </div>
          </div>
          <div className="text-xs mt-1">池化层 1</div>
        </div>
        
        <div className="text-gray-400">→</div>
        
        {/* Conv2 */}
        <div className="flex flex-col items-center min-w-fit">
          <div className="w-14 h-14 bg-purple-100 border border-purple-400 rounded flex items-center justify-center">
            <div className="grid grid-cols-3 grid-rows-3 gap-0.5 w-10 h-10">
              {Array(9).fill().map((_, i) => (
                <div key={i} className="bg-purple-300" />
              ))}
            </div>
          </div>
          <div className="text-xs mt-1">卷积层 2</div>
        </div>
        
        <div className="text-gray-400">→</div>
        
        {/* Pool2 */}
        <div className="flex flex-col items-center min-w-fit">
          <div className="w-10 h-10 bg-green-100 border border-green-400 rounded flex items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 w-6 h-6">
              {Array(4).fill().map((_, i) => (
                <div key={i} className="bg-green-300" />
              ))}
            </div>
          </div>
          <div className="text-xs mt-1">池化层 2</div>
        </div>
        
        <div className="text-gray-400">→</div>
        
        {/* FC Layers */}
        <div className="flex flex-col items-center min-w-fit">
          <div className="h-14 flex items-center gap-1">
            <div className="w-6 h-14 bg-indigo-100 border border-indigo-400 rounded flex flex-col items-center justify-center gap-1 p-1">
              {Array(4).fill().map((_, i) => (
                <div key={i} className="w-4 h-2 bg-indigo-300 rounded-sm" />
              ))}
            </div>
            <div className="w-6 h-10 bg-indigo-100 border border-indigo-400 rounded flex flex-col items-center justify-center gap-1 p-1">
              {Array(3).fill().map((_, i) => (
                <div key={i} className="w-4 h-2 bg-indigo-300 rounded-sm" />
              ))}
            </div>
          </div>
          <div className="text-xs mt-1">全连接层</div>
        </div>
        
        <div className="text-gray-400">→</div>
        
        {/* Output */}
        <div className="flex flex-col items-center min-w-fit">
          <div className="w-16 h-14 bg-red-100 border border-red-400 rounded flex flex-col items-center justify-center p-1">
            <div className="w-full h-3 bg-red-400 rounded mb-1"></div>
            <div className="w-full h-3 bg-red-200 rounded mb-1"></div>
            <div className="w-full h-3 bg-red-200 rounded"></div>
          </div>
          <div className="text-xs mt-1">分类输出</div>
        </div>
      </div>
      
      <div className="text-center max-w-md bg-blue-50 p-3 rounded-lg">
        典型的CNN架构由多个卷积层和池化层组成，随着网络加深，特征图尺寸减小而通道数增加。最后通过全连接层进行分类，输出是各类别的概率分布。深度CNN可以自动学习层次化特征表示，从低级特征到高级语义特征。
      </div>
    </div>
  );

  // Step 5: Full process animation
  const renderStep5 = () => (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">6. 推理过程可视化</h2>
      
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-300 rounded mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 overflow-x-auto pb-2">
          {/* Input Image */}
          <div className="flex flex-col items-center min-w-fit">
            <div className="w-16 h-16 bg-blue-100 border border-blue-300 rounded flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-200 rounded">
                <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                  {Array(16).fill().map((_, i) => (
                    <div 
                      key={i} 
                      style={{
                        backgroundColor: `rgb(${Math.floor(Math.random() * 100)}, 
                                        ${Math.floor(Math.random() * 100)}, 
                                        ${Math.floor(Math.random() * 255)})`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-xs mt-1">输入</div>
          </div>
          
          {/* Conv1 Feature Maps */}
          <div className="flex flex-col items-center min-w-fit">
            <div className="w-16 h-16 bg-purple-100 border border-purple-300 rounded flex items-center justify-center">
              <div className="grid grid-cols-4 grid-rows-4 gap-0.5 w-12 h-12">
                {Array(16).fill().map((_, i) => (
                  <div 
                    key={i} 
                    className="rounded-sm"
                    style={{
                      backgroundColor: `hsl(${(i * 20) % 360}, 70%, 80%)`
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs mt-1">第1层特征</div>
          </div>
          
          {/* Conv2 Feature Maps */}
          <div className="flex flex-col items-center min-w-fit">
            <div className="w-16 h-16 bg-purple-100 border border-purple-300 rounded flex items-center justify-center">
              <div className="grid grid-cols-4 grid-rows-4 gap-0.5 w-12 h-12">
                {Array(16).fill().map((_, i) => (
                  <div 
                    key={i} 
                    className="rounded-sm"
                    style={{
                      backgroundColor: `hsl(${(i * 25) % 360}, 70%, 75%)`
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs mt-1">第2层特征</div>
          </div>
          
          {/* Conv3 Feature Maps */}
          <div className="flex flex-col items-center min-w-fit">
            <div className="w-16 h-16 bg-purple-100 border border-purple-300 rounded flex items-center justify-center">
              <div className="grid grid-cols-4 grid-rows-4 gap-0.5 w-12 h-12">
                {Array(16).fill().map((_, i) => (
                  <div 
                    key={i} 
                    className="rounded-sm"
                    style={{
                      backgroundColor: `hsl(${(i * 30) % 360}, 70%, 70%)`
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs mt-1">第3层特征</div>
          </div>
          
          {/* Highlighted Features */}
          <div className="flex flex-col items-center min-w-fit">
            <div className="w-16 h-16 bg-blue-100 border border-blue-300 rounded flex items-center justify-center relative">
              <div className="w-12 h-12 bg-blue-200 rounded opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 grid-rows-4 h-12 w-12">
                  {Array(16).fill().map((_, i) => (
                    <div 
                      key={i} 
                      className={`${i === 5 || i === 6 || i === 9 || i === 10 ? 'bg-red-500 opacity-40' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-xs mt-1">高层特征</div>
          </div>
          
          {/* Final Classification */}
          <div className="flex flex-col items-center min-w-fit">
            <div className="w-20 p-2 bg-gray-100 rounded border border-gray-300">
              <div className="w-full h-4 bg-green-500 rounded mb-1"></div>
              <div className="w-8 h-4 bg-gray-300 rounded mb-1"></div>
              <div className="w-2 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="text-xs mt-1">分类结果</div>
          </div>
        </div>
        
        {/* Data flow indicators */}
        <div className="flex justify-center mt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span className="text-xs">特征流动方向</span>
          </div>
        </div>
      </div>
      
      <div className="text-center max-w-md bg-blue-50 p-3 rounded-lg">
        图像分类过程是前向传播的流程：图像通过卷积层提取特征，随着层数增加，网络捕获的特征从简单的边缘和纹理逐渐变为复杂的部分和形状。最终通过全连接层转换为类别概率，选择置信度最高的类别作为预测结果。
      </div>
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
      <h1 className="text-2xl font-bold text-center mb-6">CNN图像分类工作流程</h1>
      
      <div className="mb-6 p-6 border rounded-lg shadow-md bg-white">
        {renderCurrentStep()}
        
        <div className="mt-4 flex justify-center text-xs text-gray-500">
          步骤 {step + 1} / {totalSteps + 1}
        </div>
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
          {isPlaying ? '暂停' : '自动播放'}
        </button>
        
        <button 
          onClick={() => setStep(prev => Math.min(totalSteps, prev + 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={step >= totalSteps}
        >
          下一步
        </button>
      </div>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow text-center text-sm">
        <div className="font-bold mb-2">提示：</div>
        <p>点击"自动播放"按钮可以自动演示整个CNN图像分类流程，或使用"上一步"/"下一步"按钮手动浏览各个步骤。</p>
      </div>
    </div>
  );
};

export default CNNImageClassification;