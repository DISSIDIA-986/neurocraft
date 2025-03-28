import React from 'react';
import Layout from '../components/common/Layout';
import WordEmbeddingAnimation from '../components/animations/embeddings/WordEmbeddingAnimation';

const EmbeddingsPage = () => {
  return (
    <Layout 
      title="词嵌入动画" 
      description="了解如何将文本数据转换为数值向量，以及词嵌入如何捕捉语义关系"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了词嵌入（Word Embedding）的工作原理，展示了如何将单词转换为高维向量空间中的数值向量。
            通过动画，您可以了解词嵌入如何捕捉单词之间的语义关系，以及如何通过向量运算表示这些关系。
            使用前进/后退按钮或播放功能来查看整个转换过程。
          </p>
        </div>
        
        <WordEmbeddingAnimation />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>词嵌入</strong> - 将单词映射到高维向量空间中的技术</li>
            <li><strong>向量空间</strong> - 词嵌入所处的多维数学空间</li>
            <li><strong>语义相似性</strong> - 相似单词在向量空间中的位置接近</li>
            <li><strong>维度降低</strong> - 将高维向量投影到低维空间以便可视化</li>
            <li><strong>向量代数</strong> - 通过向量运算捕捉语义关系，如: king - man + woman ≈ queen</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            关注单词如何从纯文本转换为具有数学属性的向量。注意相似单词的向量如何聚集在一起，
            以及向量运算如何捕捉语义关系。词嵌入是许多自然语言处理任务的基础，理解这一概念对于
            理解现代NLP模型（如BERT、GPT等）至关重要。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default EmbeddingsPage;