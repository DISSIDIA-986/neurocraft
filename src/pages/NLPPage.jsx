import React from 'react';
import Layout from '../components/common/Layout';
import NLPProcessAnimation from '../components/animations/nlp/NLPProcessAnimation';

const NLPPage = () => {
  return (
    <Layout 
      title="NLP处理流程动画" 
      description="了解自然语言处理的基本步骤，从文本清理到词形还原"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了自然语言处理 (NLP) 的基本处理流程和步骤。从原始文本开始，
            您将看到文本清理、分词、停用词移除、词性标注以及词形还原等关键处理步骤。
            这些是大多数NLP任务的预处理基础，对理解更复杂的NLP模型和应用至关重要。
          </p>
          <p className="text-gray-700 mt-2">
            <strong>💡 提示：</strong>点击右上角的语言切换按钮，可以对比英文和中文在NLP处理流程上的差异。
            中文分词需要专门算法（如jieba），而英文只需按空格分割；中文形态变化较少，词形还原步骤相对简单。
          </p>
        </div>
        
        <NLPProcessAnimation />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>文本清理</strong> - 去除特殊字符、统一大小写等基本处理</li>
            <li><strong>分词 (Tokenization)</strong> - 将文本分割成单独的单词或标记
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li>英文：按空格分割即可</li>
                <li>中文：需要使用分词算法（jieba、pkuseg等）处理无空格分隔的文本</li>
              </ul>
            </li>
            <li><strong>停用词 (Stopwords)</strong> - 移除常见但对分析没有实质帮助的词
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li>英文：如"the"、"and"、"is"等</li>
                <li>中文：如"的"、"了"、"在"等</li>
              </ul>
            </li>
            <li><strong>词性标注 (POS Tagging)</strong> - 标识每个单词的词性（名词、动词、形容词等）</li>
            <li><strong>词形还原 (Lemmatization)</strong> - 将单词还原为其基本形式
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li>英文：形态变化丰富，如"running" → "run"、"children" → "child"</li>
                <li>中文：形态变化较少，主要处理量词和语气词，如"孩子们" → "孩子"</li>
              </ul>
            </li>
            <li><strong>NLP管道</strong> - 将这些处理步骤组合成一个流水线处理过程</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            理解每个处理步骤的目的和效果是掌握NLP基础的关键。思考不同步骤如何转换文本数据，
            使其更适合机器学习算法处理。这些基础预处理步骤即使在使用最先进的语言模型时
            也常常是必要的，因此熟悉这些概念对NLP实践至关重要。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NLPPage;