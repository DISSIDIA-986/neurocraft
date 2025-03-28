import React from 'react';
import Layout from '../components/common/Layout';
import DeepLearningArchitectures from '../components/animations/deep-learning/DeepLearningArchitectures';

const DeepLearningPage = () => {
  return (
    <Layout 
      title="深度学习架构可视化" 
      description="比较不同的神经网络架构（CNN, RNN, LSTM, ResNet）及其适用场景"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了几种主要的深度学习架构，包括卷积神经网络 (CNN)、循环神经网络 (RNN)、
            长短期记忆网络 (LSTM) 和残差网络 (ResNet)。您可以通过切换标签页来探索每种架构的结构、
            核心特点和适用场景，帮助您理解不同架构之间的异同以及各自的优势。
          </p>
        </div>
        
        <DeepLearningArchitectures />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键架构比较</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>CNN</strong> - 擅长处理具有网格结构的数据，特别是图像处理，利用卷积核提取空间特征</li>
            <li><strong>RNN</strong> - 专为序列数据设计，具有记忆能力，但在长序列上存在梯度消失/爆炸问题</li>
            <li><strong>LSTM</strong> - RNN的改进版本，通过门控机制解决长期依赖问题，适合处理长序列数据</li>
            <li><strong>ResNet</strong> - 通过残差连接解决深层网络的训练难题，可构建非常深的网络架构</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            了解每种架构的设计初衷和解决的问题，这有助于选择适合特定任务的模型。关注不同架构的优缺点，
            以及它们的典型应用场景。在实际项目中，常常需要综合考虑数据类型、任务需求和计算资源来选择
            最合适的架构或组合使用多种架构。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DeepLearningPage;