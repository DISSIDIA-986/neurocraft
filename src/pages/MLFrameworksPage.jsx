import React from 'react';
import Layout from '../components/common/Layout';
import MLFrameworksAnimation from '../components/animations/ml/MLFrameworksAnimation.jsx';

const MLFrameworksPage = () => {
  return (
    <Layout 
      title="机器学习框架速查表" 
      description="探索不同机器学习算法和框架的特点、优势和适用场景"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此速查表</h3>
          <p className="text-gray-700">
            这个可视化展示了主要机器学习算法和框架的对比，帮助您了解每种算法的特点、优势和适用场景。
            通过这个交互式速查表，您可以快速识别适合特定问题的算法，并了解各种机器学习方法之间的关系和差异。
          </p>
        </div>
        
        <MLFrameworksAnimation />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">如何使用此速查表</h3>
          <p className="text-gray-700 mb-4">
            根据您的问题类型和数据特征，参考以下指南选择合适的机器学习方法：
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>对于结构化数据</strong>：首选传统机器学习算法如随机森林、XGBoost或SVM</li>
            <li><strong>对于图像数据</strong>：考虑CNN或视觉Transformer等深度学习模型</li>
            <li><strong>对于文本数据</strong>：RNN、LSTM或Transformer模型较为适合</li>
            <li><strong>对于时间序列数据</strong>：尝试ARIMA、LSTM或Transformer</li>
            <li><strong>对于小数据集</strong>：线性模型、SVM或基于树的方法通常表现更佳</li>
            <li><strong>对于大数据集</strong>：深度学习通常能提供更好的性能</li>
            <li><strong>当可解释性重要时</strong>：选择决策树、线性模型或基于规则的方法</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">进阶提示</h3>
          <p className="text-gray-700 mb-4">
            在实际应用中，常常需要尝试多种算法并进行比较。以下是一些选择和优化模型的建议：
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>始终从简单模型开始（如线性回归），逐步增加复杂度</li>
            <li>使用交叉验证评估模型性能，避免过拟合</li>
            <li>考虑算法的计算复杂度和资源需求</li>
            <li>集成不同类型的模型通常可以提高性能</li>
            <li>超参数调优对模型性能至关重要</li>
            <li>特征工程往往比选择复杂算法更重要</li>
            <li>对于实际部署，要考虑模型的可维护性和可扩展性</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-green-800 mb-2">流行机器学习框架</h3>
          <p className="text-gray-700 mb-4">
            除了了解不同算法的特性，选择适合的工具和框架也很重要。以下是一些流行的机器学习框架及其特点：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">scikit-learn</h4>
              <p className="text-sm">简单易用的Python机器学习库，适合小到中型数据集和原型开发</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">TensorFlow</h4>
              <p className="text-sm">Google开发的端到端开源平台，适合大规模深度学习和生产部署</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">PyTorch</h4>
              <p className="text-sm">Facebook开发的灵活深度学习框架，适合研究和原型设计</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">XGBoost</h4>
              <p className="text-sm">高效梯度提升库，适合结构化数据竞赛和工业应用</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">Keras</h4>
              <p className="text-sm">用户友好的高级神经网络API，现集成于TensorFlow</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">Hugging Face Transformers</h4>
              <p className="text-sm">专注于NLP的预训练模型库，简化大型语言模型的应用</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MLFrameworksPage;