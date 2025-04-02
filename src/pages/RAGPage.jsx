import React from 'react';
import Layout from '../components/common/Layout';
import RAGProcessAnimation from '../components/animations/rag/RAGProcessAnimation';

const RAGPage = () => {
  return (
    <Layout 
      title="检索增强生成(RAG)流程动画" 
      description="了解检索增强生成的基本流程和工作原理，从文档检索到增强生成"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了检索增强生成 (RAG) 的基本工作流程和步骤。RAG结合了检索系统与生成式AI的优势，
            首先检索与查询相关的文档，然后利用这些检索到的文档作为上下文来增强大语言模型的生成能力，
            从而提供更准确、更相关和更可靠的回答。这种方法有效地解决了大语言模型可能出现的幻觉问题，
            并使模型能够访问最新的信息。
          </p>
        </div>
        
        <RAGProcessAnimation />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>检索器 (Retriever)</strong> - 负责从知识库中检索与用户查询相关的文档</li>
            <li><strong>文档切分 (Chunking)</strong> - 将长文档分割成适合检索和处理的小块</li>
            <li><strong>嵌入 (Embeddings)</strong> - 将文本转换为向量表示，用于语义检索</li>
            <li><strong>向量数据库</strong> - 存储文档嵌入向量，支持语义相似度搜索</li>
            <li><strong>生成器 (Generator)</strong> - 大语言模型，利用检索内容生成回答</li>
            <li><strong>上下文增强</strong> - 用检索到的信息来增强生成模型的上下文理解</li>
            <li><strong>再排序 (Reranking)</strong> - 对检索结果进行二次排序，提高相关性</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">优势与应用</h3>
          <p className="text-gray-700">
            RAG结合了检索系统的可靠性和生成模型的创造性，使其特别适合需要最新信息或专业知识的应用场景。
            主要优势包括减少幻觉生成、提高事实准确性、可以访问专有知识及最新信息，以及改善模型的可解释性。
            常见应用包括客户支持、知识管理系统、教育辅助工具、科研助手以及企业内部文档搜索等。
          </p>
        </div>
        
        <div className="mt-8 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-green-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            理解RAG系统的各个组件如何协同工作是掌握这一技术的关键。建议学习向量数据库的基本原理、
            嵌入模型的工作方式以及如何优化检索结果的相关性。同时，了解如何有效地将文档切分成适当大小的块，
            以及如何设计提示词模板以最大化检索内容的利用效率，也是构建高效RAG系统的重要步骤。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RAGPage;