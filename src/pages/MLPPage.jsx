import React from 'react';
import Layout from '../components/common/Layout';
import MultiLayerPerceptronVisualization from '../components/animations/mlp/MultiLayerPerceptronVisualization';

const MLPPage = () => {
  return (
    <Layout 
      title="多层感知机可视化" 
      description="了解神经网络的基本构建块和多层感知机的工作原理"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了多层感知机 (MLP) 的基本原理和工作流程。从单个感知机（神经元）的结构开始，
            逐步展示神经元的计算过程、数据流动，以及如何将多个神经元组织成多层结构形成神经网络。
            使用前进/后退按钮或播放功能来探索整个过程。
          </p>
        </div>
        
        <MultiLayerPerceptronVisualization />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>感知机</strong> - 神经网络的基本单元，模拟生物神经元的简化数学模型</li>
            <li><strong>权重</strong> - 控制输入信号重要性的参数，在训练过程中调整</li>
            <li><strong>偏置</strong> - 调整神经元激活阈值的参数</li>
            <li><strong>激活函数</strong> - 为神经网络引入非线性，常见的有ReLU、sigmoid、tanh等</li>
            <li><strong>前向传播</strong> - 数据从输入层流向输出层的过程</li>
            <li><strong>多层结构</strong> - 由输入层、隐藏层和输出层组成的网络架构</li>
            <li><strong>全连接</strong> - 每层的每个神经元与下一层的所有神经元相连</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            先理解单个神经元的工作原理，然后再考虑多层架构。关注数据如何在网络中流动，以及每个神经元如何
            处理接收到的信号。理解不同激活函数的作用，以及多层结构如何增强网络的表达能力。多层感知机是
            理解更复杂神经网络架构（如CNN、RNN等）的基础。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MLPPage;