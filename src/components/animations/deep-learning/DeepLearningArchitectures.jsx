import React, { useState } from 'react';

const DeepLearningArchitectures = () => {
  const [activeModel, setActiveModel] = useState('cnn');
  
  // Render CNN Visualization
  const CNNVisualization = () => (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-4">卷积神经网络 (CNN)</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
        <div className="flex flex-col items-center">
          <div className="text-center mb-2 font-semibold">输入图像</div>
          <div className="w-20 h-20 bg-blue-100 border border-blue-400 grid grid-cols-5 grid-rows-5">
            {Array(25).fill().map((_, i) => (
              <div 
                key={i} 
                className="border border-blue-200"
                style={{backgroundColor: `rgba(0, 0, ${120 + Math.floor(Math.random() * 135)}, 0.7)`}}
              />
            ))}
          </div>
        </div>
        
        <div className="text-2xl font-bold">→</div>
        
        <div className="flex flex-col items-center">
          <div className="text-center mb-2 font-semibold">卷积层</div>
          <div className="flex gap-1">
            <div className="w-16 h-16 bg-purple-100 border border-purple-400 grid grid-cols-4 grid-rows-4">
              {Array(16).fill().map((_, i) => (
                <div 
                  key={i} 
                  className="border border-purple-200"
                  style={{backgroundColor: `rgba(128, 0, ${120 + Math.floor(Math.random() * 135)}, 0.6)`}}
                />
              ))}
            </div>
            <div className="w-16 h-16 bg-purple-100 border border-purple-400 grid grid-cols-4 grid-rows-4">
              {Array(16).fill().map((_, i) => (
                <div 
                  key={i} 
                  className="border border-purple-200"
                  style={{backgroundColor: `rgba(128, 0, ${120 + Math.floor(Math.random() * 135)}, 0.6)`}}
                />
              ))}
            </div>
          </div>
          <div className="text-xs text-center mt-1">特征提取</div>
        </div>
        
        <div className="text-2xl font-bold">→</div>
        
        <div className="flex flex-col items-center">
          <div className="text-center mb-2 font-semibold">池化层</div>
          <div className="w-12 h-12 bg-green-100 border border-green-400 grid grid-cols-3 grid-rows-3">
            {Array(9).fill().map((_, i) => (
              <div 
                key={i} 
                className="border border-green-200"
                style={{backgroundColor: `rgba(0, ${120 + Math.floor(Math.random() * 135)}, 0, 0.6)`}}
              />
            ))}
          </div>
          <div className="text-xs text-center mt-1">降维</div>
        </div>
        
        <div className="text-2xl font-bold">→</div>
        
        <div className="flex flex-col items-center">
          <div className="text-center mb-2 font-semibold">全连接层</div>
          <div className="flex flex-col gap-1 items-center">
            <div className="flex gap-1">
              {Array(4).fill().map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-indigo-400" />
              ))}
            </div>
            <div className="flex gap-1">
              {Array(4).fill().map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-indigo-500" />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold mb-2">核心特点：</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>使用卷积层捕获空间特征，专为处理网格结构数据设计</li>
          <li>卷积核在输入上滑动提取局部特征，参数共享大幅降低模型参数量</li>
          <li>池化层减少维度和参数，提高计算效率</li>
          <li>层次化特征提取：浅层学习边缘、纹理，深层学习形状、语义</li>
          <li>平移不变性：能识别不同位置的相同特征</li>
        </ul>
        <h4 className="font-bold mt-3 mb-2">应用场景：</h4>
        <p>图像分类、目标检测、图像分割、医学影像分析、自动驾驶等</p>
      </div>
    </div>
  );
  
  // Render RNN Visualization
  const RNNVisualization = () => (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-4">循环神经网络 (RNN)</h3>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-full max-w-xl h-56 bg-white rounded border border-gray-300 relative p-4">
          {/* RNN Cell */}
          <div className="absolute" style={{left: '50%', top: '40%', transform: 'translate(-50%, -50%)'}}>
            <div className="w-32 h-32 rounded-lg bg-purple-100 border-2 border-purple-500 flex items-center justify-center relative">
              <div className="font-bold text-purple-700 text-lg">RNN Cell</div>
              
              {/* Hidden State Loop */}
              <svg 
                width="150" 
                height="50" 
                viewBox="0 0 150 50" 
                className="absolute"
                style={{top: '-30px', right: '-30px'}}
              >
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6" />
                  </marker>
                </defs>
                <path 
                  d="M 40 40 C 70 0, 120 0, 140 40" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <text x="90" y="15" fontSize="12" fill="#8B5CF6" textAnchor="middle">隐藏状态 h</text>
              </svg>
            </div>
          </div>
          
          {/* Input Sequence */}
          <div style={{position: 'absolute', bottom: '15%', left: '5%'}}>
            <div className="text-center mb-2 font-semibold">输入序列</div>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded bg-blue-100 border border-blue-400 flex items-center justify-center">
                <span className="font-bold">x₁</span>
              </div>
              <div className="w-12 h-12 rounded bg-blue-100 border border-blue-400 flex items-center justify-center">
                <span className="font-bold">x₂</span>
              </div>
              <div className="w-12 h-12 rounded bg-blue-100 border border-blue-400 flex items-center justify-center">
                <span className="font-bold">x₃</span>
              </div>
              <div className="w-12 h-12 rounded bg-blue-100 border border-blue-400 flex items-center justify-center">
                <span className="font-bold">...</span>
              </div>
            </div>
          </div>
          
          {/* Output Sequence */}
          <div style={{position: 'absolute', bottom: '15%', right: '5%'}}>
            <div className="text-center mb-2 font-semibold">输出序列</div>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded bg-green-100 border border-green-400 flex items-center justify-center">
                <span className="font-bold">y₁</span>
              </div>
              <div className="w-12 h-12 rounded bg-green-100 border border-green-400 flex items-center justify-center">
                <span className="font-bold">y₂</span>
              </div>
              <div className="w-12 h-12 rounded bg-green-100 border border-green-400 flex items-center justify-center">
                <span className="font-bold">y₃</span>
              </div>
            </div>
          </div>
          
          {/* Connection lines (simplified) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path d="M 90 180 L 160 130" stroke="#4B5563" strokeWidth="2" fill="none" />
            <path d="M 125 180 L 160 130" stroke="#4B5563" strokeWidth="2" fill="none" />
            <path d="M 160 180 L 160 130" stroke="#4B5563" strokeWidth="2" fill="none" />
            
            <path d="M 240 130 L 310 180" stroke="#4B5563" strokeWidth="2" fill="none" />
            <path d="M 240 130 L 345 180" stroke="#4B5563" strokeWidth="2" fill="none" />
            <path d="M 240 130 L 380 180" stroke="#4B5563" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold mb-2">核心特点：</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>具有记忆能力，专为处理序列数据设计</li>
          <li>当前步骤的输出依赖于前一步骤的隐藏状态</li>
          <li>有向循环连接允许信息在时间步骤间传递</li>
          <li>可以捕捉序列中的时序依赖关系</li>
          <li>长序列上存在梯度消失/爆炸问题</li>
        </ul>
        <h4 className="font-bold mt-3 mb-2">应用场景：</h4>
        <p>文本生成、语音识别、机器翻译、时间序列预测、情感分析等</p>
      </div>
    </div>
  );
  
  // Render LSTM Visualization
  const LSTMVisualization = () => (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-4">长短期记忆网络 (LSTM)</h3>
      
      <div className="flex justify-center mb-6">
        <div className="w-80 h-64 rounded-lg bg-purple-50 border-2 border-purple-300 relative">
          {/* Cell State (上方长线) */}
          <div className="absolute left-4 right-4 h-1 bg-gray-400" style={{top: '25%'}} />
          
          {/* 遗忘门 Forget Gate */}
          <div className="absolute w-16 h-16 rounded-lg bg-red-100 border border-red-400 flex items-center justify-center"
               style={{left: '20%', top: '45%'}}>
            <span className="font-bold text-red-600">f</span>
            <div className="absolute -top-10 text-xs text-red-600 font-medium">遗忘门</div>
          </div>
          
          {/* 输入门 Input Gate */}
          <div className="absolute w-16 h-16 rounded-lg bg-green-100 border border-green-400 flex items-center justify-center"
               style={{left: '45%', top: '45%'}}>
            <span className="font-bold text-green-600">i</span>
            <div className="absolute -top-10 text-xs text-green-600 font-medium">输入门</div>
          </div>
          
          {/* 输出门 Output Gate */}
          <div className="absolute w-16 h-16 rounded-lg bg-blue-100 border border-blue-400 flex items-center justify-center"
               style={{left: '70%', top: '45%'}}>
            <span className="font-bold text-blue-600">o</span>
            <div className="absolute -top-10 text-xs text-blue-600 font-medium">输出门</div>
          </div>
          
          {/* 隐藏状态 Hidden State */}
          <div className="absolute w-12 h-12 rounded-full bg-yellow-100 border border-yellow-400 flex items-center justify-center"
               style={{right: '10%', bottom: '15%'}}>
            <span className="font-bold text-yellow-600">h</span>
            <div className="absolute -bottom-8 text-xs text-yellow-600 font-medium">隐藏状态</div>
          </div>
          
          {/* Input X */}
          <div className="absolute w-12 h-12 rounded-lg bg-indigo-100 border border-indigo-400 flex items-center justify-center"
               style={{left: '10%', bottom: '15%'}}>
            <span className="font-bold text-indigo-600">x</span>
            <div className="absolute -bottom-8 text-xs text-indigo-600 font-medium">输入</div>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h4 className="font-bold mb-2">核心特点：</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>RNN的改进版，解决长期依赖问题</li>
          <li>包含记忆单元(cell state)和三个门控机制：
            <ul className="list-circle pl-5 mt-1">
              <li><span className="text-red-600 font-bold">遗忘门</span>：决定丢弃哪些信息</li>
              <li><span className="text-green-600 font-bold">输入门</span>：决定存储哪些新信息</li>
              <li><span className="text-blue-600 font-bold">输出门</span>：决定输出哪些信息</li>
            </ul>
          </li>
          <li>能学习长期依赖关系，缓解梯度消失问题</li>
          <li>门控机制允许网络选择性地记住或忘记信息</li>
        </ul>
        <h4 className="font-bold mt-3 mb-2">应用场景：</h4>
        <p>机器翻译、语音识别、音乐生成、手写识别、股票预测等</p>
      </div>
    </div>
  );

  // Render ResNet Visualization
  const ResNetVisualization = () => (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-4">残差网络 (ResNet)</h3>
      
      <div className="flex flex-col md:flex-row justify-center gap-12 mb-6">
        {/* Standard Network Block */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-2 text-sm font-medium">传统网络块</div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-10 bg-blue-100 border border-blue-400 rounded flex items-center justify-center text-sm">
              Layer N
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M10 2 L10 18 L5 13" stroke="#4B5563" strokeWidth="2" fill="none" />
            </svg>
            <div className="w-20 h-10 bg-blue-100 border border-blue-400 rounded flex items-center justify-center text-sm">
              Layer N+1
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="inline-block bg-blue-50 px-3 py-1 rounded">
              y = F(x)
            </div>
          </div>
        </div>
        
        {/* ResNet Block */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-2 text-sm font-medium">残差块</div>
          <div className="flex flex-col items-center gap-2 relative">
            <div className="w-20 h-10 bg-green-100 border border-green-400 rounded flex items-center justify-center text-sm">
              Layer N
            </div>
            <div className="relative">
              <svg width="120" height="80" viewBox="0 0 120 80">
                {/* Main path */}
                <path d="M60 10 L60 40 L30 40 L30 70" stroke="#4B5563" strokeWidth="2" fill="none" />
                
                {/* Skip connection */}
                <path 
                  d="M60 10 L100 10 L100 70 L60 70" 
                  stroke="#059669" 
                  strokeWidth="2" 
                  fill="none"
                />
                
                {/* Arrow */}
                <path d="M55 70 L45 65 L45 75 Z" fill="#4B5563" />
                
                {/* Plus sign */}
                <circle cx="60" cy="70" r="10" fill="#FEF3C7" stroke="#D97706" />
                <line x1="54" y1="70" x2="66" y2="70" stroke="#D97706" strokeWidth="2" />
                <line x1="60" y1="64" x2="60" y2="76" stroke="#D97706" strokeWidth="2" />
                
                {/* Labels */}
                <text x="30" y="30" fontSize="10" fill="#4B5563">F(x)</text>
                <text x="105" y="40" fontSize="10" fill="#059669">x</text>
              </svg>
              
              <div className="w-20 h-10 bg-green-100 border border-green-400 rounded absolute left-[10px] top-[70px] flex items-center justify-center text-sm">
                Layer N+1
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block bg-green-50 px-3 py-1 rounded">
              y = F(x) + x
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold mb-2">核心特点：</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>引入残差连接(跳跃连接)解决深层网络训练难题</li>
          <li>让网络学习残差映射(F(x) = H(x) - x)而非完整映射</li>
          <li>有效缓解梯度消失问题，使超深网络(100+层)训练成为可能</li>
          <li>跳跃连接允许梯度直接流向更早的层，大幅改善训练</li>
          <li>残差结构能够提高网络性能并降低训练难度</li>
        </ul>
        <h4 className="font-bold mt-3 mb-2">应用场景：</h4>
        <p>图像分类、目标检测、图像分割、人脸识别以及作为其他深度模型的骨干网络</p>
      </div>
    </div>
  );
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">深度学习架构可视化</h1>
      
      <div className="mb-6 flex justify-center gap-2">
        <button 
          onClick={() => setActiveModel('cnn')} 
          className={`px-4 py-2 rounded-lg ${activeModel === 'cnn' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          CNN
        </button>
        <button 
          onClick={() => setActiveModel('rnn')} 
          className={`px-4 py-2 rounded-lg ${activeModel === 'rnn' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          RNN
        </button>
        <button 
          onClick={() => setActiveModel('lstm')} 
          className={`px-4 py-2 rounded-lg ${activeModel === 'lstm' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          LSTM
        </button>
        <button 
          onClick={() => setActiveModel('resnet')} 
          className={`px-4 py-2 rounded-lg ${activeModel === 'resnet' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          ResNet
        </button>
      </div>
      
      <div className="mb-6">
        {activeModel === 'cnn' && <CNNVisualization />}
        {activeModel === 'rnn' && <RNNVisualization />}
        {activeModel === 'lstm' && <LSTMVisualization />}
        {activeModel === 'resnet' && <ResNetVisualization />}
      </div>
    </div>
  );
};

export default DeepLearningArchitectures;