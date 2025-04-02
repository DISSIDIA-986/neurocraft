import React from 'react';
import Layout from '../components/common/Layout';
import ExpertSystemAnimation from '../components/animations/expert-system/ExpertSystemAnimation';

const ExpertSystemPage = () => {
  return (
    <Layout 
      title="Expert Systems 专家系统" 
      description="了解专家系统的工作原理、历史和在现代AI中的应用"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了专家系统的基本工作原理和组成部分。专家系统是早期AI的重要成就，
            它通过将人类专家的知识编码为规则，来模拟专家的推理过程和决策能力。
            虽然现在深度学习方法更为流行，但专家系统的思想仍然影响着现代AI的许多方面。
          </p>
        </div>
        
        <ExpertSystemAnimation />
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>专家系统 (Expert System)</strong> - 模拟特定领域人类专家决策能力的计算机系统</li>
            <li><strong>知识库 (Knowledge Base)</strong> - 包含领域特定知识和规则的数据库</li>
            <li><strong>推理引擎 (Inference Engine)</strong> - 应用知识库中的规则来解决问题的机制</li>
            <li><strong>前向链接 (Forward Chaining)</strong> - 从已知事实出发，应用规则得出结论的推理方法</li>
            <li><strong>反向链接 (Backward Chaining)</strong> - 从目标出发，寻找支持证据的推理方法</li>
            <li><strong>解释设施 (Explanation Facility)</strong> - 解释系统如何得出结论的组件</li>
            <li><strong>知识获取 (Knowledge Acquisition)</strong> - 从人类专家那里提取知识并转化为规则的过程</li>
          </ul>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2 text-green-700">历史意义</h3>
            <p className="text-gray-700">
              专家系统在20世纪70年代到90年代是AI领域的主导技术，代表了"符号主义AI"的高峰。
              著名的例子包括MYCIN（医疗诊断）、DENDRAL（化学分析）和XCON（计算机配置）。
              这些系统展示了AI能够在特定领域达到或超过人类专家的决策能力，为AI的商业应用铺平了道路。
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2 text-purple-700">与现代AI的关系</h3>
            <p className="text-gray-700">
              虽然深度学习现在更为流行，但专家系统的理念仍然影响着现代AI。知识图谱、语义网、
              可解释AI等都借鉴了专家系统的思想。此外，在医疗诊断、金融合规等高风险领域，
              结合规则的混合系统仍然很重要，因为它们能提供决策的透明度和可解释性。
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            理解专家系统对把握AI的发展历程和思想演变很有帮助。比较专家系统与现代机器学习方法的优缺点，
            思考规则编码与自动学习各自的适用场景。专家系统强调的知识表示、推理链和可解释性，
            在当前的可解释AI（XAI）讨论中再次变得重要。探索如何将专家系统的优势与现代深度学习方法结合，
            可能是未来AI发展的重要方向。
          </p>
        </div>
        
        <div className="mt-8 bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">专家系统与机器学习对比</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-blue-200 px-4 py-2">特性</th>
                  <th className="border border-blue-200 px-4 py-2">专家系统</th>
                  <th className="border border-blue-200 px-4 py-2">机器学习</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">知识来源</td>
                  <td className="border border-gray-200 px-4 py-2">人类专家编码的规则</td>
                  <td className="border border-gray-200 px-4 py-2">从数据中自动学习</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">透明度</td>
                  <td className="border border-gray-200 px-4 py-2">高（基于明确规则）</td>
                  <td className="border border-gray-200 px-4 py-2">通常较低（黑盒模型）</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">处理不确定性</td>
                  <td className="border border-gray-200 px-4 py-2">使用确定性规则或简单概率</td>
                  <td className="border border-gray-200 px-4 py-2">内置统计方法处理不确定性</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">适应新情况</td>
                  <td className="border border-gray-200 px-4 py-2">需要手动更新规则</td>
                  <td className="border border-gray-200 px-4 py-2">可通过新数据自动适应</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">开发成本</td>
                  <td className="border border-gray-200 px-4 py-2">知识获取耗时</td>
                  <td className="border border-gray-200 px-4 py-2">需要大量训练数据</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">应用场景</td>
                  <td className="border border-gray-200 px-4 py-2">规则明确的特定领域</td>
                  <td className="border border-gray-200 px-4 py-2">模式识别，预测任务</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExpertSystemPage;