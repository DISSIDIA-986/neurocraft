import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const cards = [
    {
      id: 'cnn',
      title: 'CNN可视化',
      description: '通过动画理解卷积神经网络如何处理图像数据，包括卷积操作、池化层和分类过程。',
      image: '🖼️',
      color: 'from-blue-400 to-blue-600',
      path: '/cnn'
    },
    {
      id: 'embeddings',
      title: '词嵌入动画',
      description: '了解如何将文本转换为向量，以及词嵌入如何捕捉语义关系。',
      image: '📝',
      color: 'from-green-400 to-green-600',
      path: '/embeddings'
    },
    {
      id: 'hyperparameters',
      title: '超参数调优',
      description: '探索超参数如何影响模型性能，以及不同的超参数搜索策略。',
      image: '🔧',
      color: 'from-yellow-400 to-yellow-600',
      path: '/hyperparameters'
    },
    {
      id: 'mlp',
      title: '多层感知机',
      description: '了解神经网络的基本构建块和多层感知机的工作原理。',
      image: '🧠',
      color: 'from-purple-400 to-purple-600',
      path: '/mlp'
    },
    {
      id: 'neural-networks',
      title: '神经网络基础',
      description: '探索神经网络的基本结构和前向传播的过程。',
      image: '🔮',
      color: 'from-indigo-400 to-indigo-600',
      path: '/neural-networks'
    },
    {
      id: 'nlp',
      title: 'NLP处理流程',
      description: '了解自然语言处理的基本步骤，从文本清理到词形还原。',
      image: '📊',
      color: 'from-red-400 to-red-600',
      path: '/nlp'
    },
    {
      id: 'deep-learning',
      title: '深度学习架构',
      description: '比较不同的神经网络架构（CNN, RNN, LSTM, ResNet）及其适用场景。',
      image: '🏗️',
      color: 'from-pink-400 to-pink-600',
      path: '/deep-learning'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          NeuroCraft
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          通过交互式动画和可视化，轻松理解神经网络、深度学习和自然语言处理的复杂概念。
        </p>
      </div>

      {/* Information Section */}
      <div className="bg-blue-50 rounded-lg p-6 mb-12 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">🎯 项目目标</h2>
        <p className="text-gray-700 mb-4">
          NeuroCraft 旨在通过直观的动画和交互式可视化，帮助数据分析和人工智能的学习者更好地理解复杂的概念。
          无论你是初学者还是寻求复习的学生，这些可视化工具都能帮助你建立更深入的理解。
        </p>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">🧩 如何使用</h2>
        <p className="text-gray-700">
          选择下方任意一个主题，探索相应的动画和可视化内容。每个动画都包含可交互的元素，
          帮助你理解各种机器学习和深度学习概念的工作原理。
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link 
            key={card.id} 
            to={card.path}
            className="block"
          >
            <div className={`h-full rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200`}>
              <div className={`bg-gradient-to-r ${card.color} h-24 flex items-center justify-center text-5xl`}>
                <span>{card.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">准备好深入学习了吗？</h2>
        <p className="text-lg text-gray-700 mb-6">
          点击上方任意卡片开始探索，或者从导航栏选择一个主题。
        </p>
      </div>
    </div>
  );
};

export default Home;