import React from 'react';
import Layout from '../components/common/Layout';
import NeuralNetworkVisualization from '../components/animations/neural-networks/NeuralNetworkVisualization';

const NeuralNetworksPage = () => {
  return (
    <Layout 
      title="神经网络基础可视化" 
      description="探索神经网络的基本结构和前向传播过程"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了神经网络的基本结构和工作原理。您可以看到神经网络的层次结构、神经元之间的连接、
            权重的作用以及数据在网络中的流动过程。通过这个动画，您将了解前向传播如何将输入数据转换为
            预测结果。使用前进/后退按钮或播放功能来探索不同方面的神经网络知识。
          </p>
        </div>
        
        <NeuralNetworkVisualization />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>神经网络结构</strong> - 由输入层、隐藏层和输出层组成的层次化架构</li>
            <li><strong>权重和连接</strong> - 神经元之间的连接强度，决定信号传递的影响力</li>
            <li><strong>激活函数</strong> - 引入非线性，使网络能学习复杂模式</li>
            <li><strong>前向传播</strong> - 信息从输入到输出的流动过程</li>
            <li><strong>加权和</strong> - 每个神经元计算输入的加权总和</li>
            <li><strong>参数学习</strong> - 通过调整权重使网络性能最优化的过程</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            对于初学者来说，理解神经网络的前向传播过程是基础。关注数据如何层层传递，以及每层如何
            转换接收到的信息。注意权重在信息传递中的作用，以及激活函数如何引入非线性。这些基础概念
            是理解更复杂网络架构和训练算法的前提。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NeuralNetworksPage;