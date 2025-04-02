import React from 'react';
import Layout from '../components/common/Layout';
import EmbeddingModelAnimation from '../components/animations/EmbeddingModelAnimation';

const EmbeddingModelPage = () => {
  return (
    <Layout 
      title="嵌入模型(Embedding Model)详解" 
      description="了解嵌入模型的工作原理及中英文主流嵌入模型对比"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此页面</h3>
          <p className="text-gray-700">
            本页面详细介绍了嵌入模型(Embedding Model)的工作原理和应用场景。嵌入模型是将文本、图像等
            非结构化数据转换为高维向量的AI模型，这些向量能够捕获语义信息，是现代搜索、推荐系统和多模态
            AI应用的基础。本页面包含嵌入模型的工作流程动画演示，并对比了当前主流的中英文嵌入模型。
          </p>
        </div>
        
        <EmbeddingModelAnimation />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">嵌入模型基础概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>嵌入(Embedding)</strong> - 将离散对象（如单词、句子、图像）映射到连续向量空间的过程</li>
            <li><strong>向量空间</strong> - 嵌入生成的高维空间，通常为数百至数千维</li>
            <li><strong>语义相似度</strong> - 向量间的距离（如余弦相似度）反映原始对象的语义相似程度</li>
            <li><strong>维度</strong> - 嵌入向量的长度，影响模型表达能力和计算效率</li>
            <li><strong>上下文化</strong> - 现代嵌入模型考虑词语在上下文中的语义，而非孤立含义</li>
            <li><strong>微调(Fine-tuning)</strong> - 针对特定领域或任务调整通用嵌入模型的过程</li>
            <li><strong>对比学习</strong> - 通过比较正负样本对训练嵌入模型的方法</li>
          </ul>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">主流嵌入模型对比</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 bg-blue-100 p-2 rounded">英文嵌入模型</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border border-gray-300">模型</th>
                    <th className="py-2 px-4 border border-gray-300">开发者</th>
                    <th className="py-2 px-4 border border-gray-300">尺寸</th>
                    <th className="py-2 px-4 border border-gray-300">维度</th>
                    <th className="py-2 px-4 border border-gray-300">特点</th>
                    <th className="py-2 px-4 border border-gray-300">应用场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300 font-medium">text-embedding-ada-002</td>
                    <td className="py-2 px-4 border border-gray-300">OpenAI</td>
                    <td className="py-2 px-4 border border-gray-300">-</td>
                    <td className="py-2 px-4 border border-gray-300">1536</td>
                    <td className="py-2 px-4 border border-gray-300">高精度，支持多语言，适合语义搜索</td>
                    <td className="py-2 px-4 border border-gray-300">搜索引擎，RAG系统，内容推荐</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border border-gray-300 font-medium">text-embedding-3-small</td>
                    <td className="py-2 px-4 border border-gray-300">OpenAI</td>
                    <td className="py-2 px-4 border border-gray-300">-</td>
                    <td className="py-2 px-4 border border-gray-300">1536</td>
                    <td className="py-2 px-4 border border-gray-300">性能与效率平衡，支持多语言</td>
                    <td className="py-2 px-4 border border-gray-300">通用搜索，成本敏感应用</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300 font-medium">text-embedding-3-large</td>
                    <td className="py-2 px-4 border border-gray-300">OpenAI</td>
                    <td className="py-2 px-4 border border-gray-300">-</td>
                    <td className="py-2 px-4 border border-gray-300">3072</td>
                    <td className="py-2 px-4 border border-gray-300">最高精度，多语言支持，长文本处理</td>
                    <td className="py-2 px-4 border border-gray-300">高要求语义搜索，复杂文档分析</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border border-gray-300 font-medium">E5-large-v2</td>
                    <td className="py-2 px-4 border border-gray-300">Microsoft</td>
                    <td className="py-2 px-4 border border-gray-300">335M</td>
                    <td className="py-2 px-4 border border-gray-300">1024</td>
                    <td className="py-2 px-4 border border-gray-300">高性能句子嵌入，开源可本地部署</td>
                    <td className="py-2 px-4 border border-gray-300">搜索系统，问答系统，信息检索</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300 font-medium">all-MiniLM-L6-v2</td>
                    <td className="py-2 px-4 border border-gray-300">Sentence Transformers</td>
                    <td className="py-2 px-4 border border-gray-300">80M</td>
                    <td className="py-2 px-4 border border-gray-300">384</td>
                    <td className="py-2 px-4 border border-gray-300">轻量级，速度快，开源可商用</td>
                    <td className="py-2 px-4 border border-gray-300">资源受限场景，移动设备应用</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border border-gray-300 font-medium">BGE-Large-En-v1.5</td>
                    <td className="py-2 px-4 border border-gray-300">BAAI</td>
                    <td className="py-2 px-4 border border-gray-300">335M</td>
                    <td className="py-2 px-4 border border-gray-300">1024</td>
                    <td className="py-2 px-4 border border-gray-300">高性能，开源，支持长文本</td>
                    <td className="py-2 px-4 border border-gray-300">检索增强生成，开源项目，学术研究</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 bg-green-100 p-2 rounded">中文嵌入模型</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border border-gray-300">模型</th>
                    <th className="py-2 px-4 border border-gray-300">开发者</th>
                    <th className="py-2 px-4 border border-gray-300">尺寸</th>
                    <th className="py-2 px-4 border border-gray-300">维度</th>
                    <th className="py-2 px-4 border border-gray-300">特点</th>
                    <th className="py-2 px-4 border border-gray-300">应用场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300 font-medium">BGE-Large-Zh-v1.5</td>
                    <td className="py-2 px-4 border border-gray-300">BAAI (智源研究院)</td>
                    <td className="py-2 px-4 border border-gray-300">335M</td>
                    <td className="py-2 px-4 border border-gray-300">1024</td>
                    <td className="py-2 px-4 border border-gray-300">中文优化，高性能，开源，支持长文本</td>
                    <td className="py-2 px-4 border border-gray-300">中文搜索引擎，RAG系统，语义匹配</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border border-gray-300 font-medium">text2vec-large-chinese</td>
                    <td className="py-2 px-4 border border-gray-300">苏剑林/Shibing624</td>
                    <td className="py-2 px-4 border border-gray-300">330M</td>
                    <td className="py-2 px-4 border border-gray-300">1024</td>
                    <td className="py-2 px-4 border border-gray-300">中文语义理解强，开源，易于部署</td>
                    <td className="py-2 px-4 border border-gray-300">智能客服，相似文本检测，文档搜索</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300 font-medium">m3e-large</td>
                    <td className="py-2 px-4 border border-gray-300">MagicHub</td>
                    <td className="py-2 px-4 border border-gray-300">335M</td>
                    <td className="py-2 px-4 border border-gray-300">1024</td>
                    <td className="py-2 px-4 border border-gray-300">中英双语优化，开源，支持跨语言检索</td>
                    <td className="py-2 px-4 border border-gray-300">双语搜索，跨语言应用，多语言RAG</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border border-gray-300 font-medium">bge-small-zh-v1.5</td>
                    <td className="py-2 px-4 border border-gray-300">BAAI (智源研究院)</td>
                    <td className="py-2 px-4 border border-gray-300">110M</td>
                    <td className="py-2 px-4 border border-gray-300">512</td>
                    <td className="py-2 px-4 border border-gray-300">轻量级，速度快，资源占用小</td>
                    <td className="py-2 px-4 border border-gray-300">移动设备，边缘计算，实时应用</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300 font-medium">Erlangshen-SimCSE-110M-Chinese</td>
                    <td className="py-2 px-4 border border-gray-300">IDEA-CCNL</td>
                    <td className="py-2 px-4 border border-gray-300">110M</td>
                    <td className="py-2 px-4 border border-gray-300">768</td>
                    <td className="py-2 px-4 border border-gray-300">基于SimCSE训练，中文语义理解高</td>
                    <td className="py-2 px-4 border border-gray-300">文本分类，语义相似度，自然语言理解</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border border-gray-300 font-medium">stella-zh-1.3b-embedding</td>
                    <td className="py-2 px-4 border border-gray-300">Moonshot AI</td>
                    <td className="py-2 px-4 border border-gray-300">1.3B</td>
                    <td className="py-2 px-4 border border-gray-300">4096</td>
                    <td className="py-2 px-4 border border-gray-300">大规模中文语料训练，超高维度</td>
                    <td className="py-2 px-4 border border-gray-300">高精度中文搜索，复杂语义理解任务</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">嵌入模型选择建议</h3>
          <p className="text-gray-700 mb-3">
            选择嵌入模型时应考虑以下因素:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li><strong>性能需求</strong> - 对于高质量搜索和复杂语义理解，选择大型模型如text-embedding-3-large或BGE-Large</li>
            <li><strong>计算资源</strong> - 资源有限时，选择小型模型如all-MiniLM-L6-v2或bge-small-zh</li>
            <li><strong>语言特性</strong> - 中文应用优先考虑针对中文优化的模型如BGE-Large-Zh或text2vec-large-chinese</li>
            <li><strong>部署环境</strong> - 本地部署需考虑开源许可和资源要求；云服务则可使用API调用的商业模型</li>
            <li><strong>特定领域</strong> - 对于专业领域（如医疗、法律、金融），考虑领域特定的微调模型或可微调的开源模型</li>
            <li><strong>成本考量</strong> - 权衡API调用成本与自建模型的开发维护成本</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">最新发展趋势</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>多模态嵌入</strong> - 统一处理文本、图像、音频等多种模态的嵌入模型</li>
            <li><strong>领域自适应</strong> - 更高效的领域适应技术，使通用模型快速适应特定领域</li>
            <li><strong>轻量高效</strong> - 通过知识蒸馏等技术，在保持性能的同时大幅减小模型体积</li>
            <li><strong>长文本理解</strong> - 更好地处理长文档，捕获长距离依赖关系</li>
            <li><strong>语义可控</strong> - 支持更精确的语义检索，可按需调整相似度计算方式</li>
            <li><strong>隐私保护</strong> - 联邦学习和差分隐私技术在嵌入模型中的应用</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default EmbeddingModelPage;