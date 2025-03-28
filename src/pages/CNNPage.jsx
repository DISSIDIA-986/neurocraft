import React from 'react';
import Layout from '../components/common/Layout';
import CNNImageClassification from '../components/animations/cnn/CNNImageClassification.jsx';

const CNNPage = () => {
  return (
    <Layout 
      title="卷积神经网络可视化" 
      description="通过交互式动画学习CNN的工作原理和图像分类过程"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了卷积神经网络 (CNN) 处理图像的过程。
            您可以通过动画了解从输入图像到最终分类结果的每个步骤，包括卷积操作、池化层和全连接层的工作原理。
            使用前进/后退按钮或自动播放功能来探索整个过程。
          </p>
        </div>
        
        <CNNImageClassification />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>卷积层</strong> - 使用卷积核提取图像特征，如边缘、纹理等</li>
            <li><strong>池化层</strong> - 降低特征图尺寸，减少参数量，提高计算效率</li>
            <li><strong>特征图</strong> - 卷积操作后生成的中间表示，捕获图像的不同特征</li>
            <li><strong>全连接层</strong> - 将提取的特征映射到最终的类别预测</li>
            <li><strong>层次化表示</strong> - 随着网络深度增加，特征从低级（边缘、颜色）到高级（部分、物体）</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            尝试慢慢跟随动画，理解每一步的转换过程。特别注意卷积操作如何检测特定特征，
            以及池化如何保留重要信息同时减少数据量。这些概念对理解现代计算机视觉系统至关重要。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CNNPage;