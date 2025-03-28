import React from 'react';
import Layout from '../components/common/Layout';
import HyperparameterTuningVisualization from '../components/animations/hyperparameters/HyperparameterTuningVisualization';

const HyperparametersPage = () => {
  return (
    <Layout 
      title="超参数调优可视化" 
      description="了解超参数对模型性能的影响及不同的调优策略"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了超参数调优的基本概念和方法。通过动画，您可以了解超参数与模型参数的区别，
            不同的超参数搜索策略（如网格搜索、随机搜索和贝叶斯优化），以及超参数如何影响模型性能。
            使用前进/后退按钮或播放功能来探索整个调优过程。
          </p>
        </div>
        
        <HyperparameterTuningVisualization />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>超参数</strong> - 模型训练过程中需要手动设置的参数，不会在训练中自动学习</li>
            <li><strong>模型参数</strong> - 训练过程中自动学习的参数，如神经网络的权重和偏置</li>
            <li><strong>网格搜索</strong> - 在预定义的参数网格中尝试所有可能的超参数组合</li>
            <li><strong>随机搜索</strong> - 从参数空间中随机采样超参数组合，计算效率更高</li>
            <li><strong>贝叶斯优化</strong> - 利用先前评估的结果指导接下来的超参数选择</li>
            <li><strong>交叉验证</strong> - 评估每组超参数在不同数据子集上的性能</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            理解超参数如何影响模型性能是机器学习实践中的关键技能。关注不同搜索策略的优缺点，
            以及不同超参数（如学习率、层数、正则化参数等）对模型行为的影响。学会权衡计算成本
            和优化效果，以便在实际项目中高效应用超参数调优技术。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HyperparametersPage;