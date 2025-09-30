import React from 'react';
import Layout from '../components/common/Layout';

const LLMPage = () => {
  return (
    <Layout
      title="大语言模型 (LLM)"
      description="探索大语言模型的架构、训练过程、能力与局限，以及最新发展趋势"
    >
      <div className="p-4">
        {/* Quick Overview Section */}
        <div className="mb-6 bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-lg border-l-4 border-violet-600 shadow-sm">
          <h3 className="text-xl font-bold text-violet-900 mb-3 flex items-center">
            <span className="mr-2">📚</span>
            快速概览
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">🎯 适合人群</p>
              <p className="text-gray-700">AI研究者、NLP工程师、产品经理、对生成式AI感兴趣的学习者</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">⏱️ 预计学习时间</p>
              <p className="text-gray-700">概念理解：1-2周 | 深入应用：1-2个月</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">🔧 核心技能</p>
              <p className="text-gray-700">提示工程、模型评估、应用开发、对齐技术</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">💼 应用领域</p>
              <p className="text-gray-700">智能客服、内容创作、代码生成、知识问答、数据分析</p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">什么是大语言模型？</h3>
          <p className="text-gray-700 mb-3">
            大语言模型 (Large Language Model, LLM) 是基于深度学习技术训练的超大规模神经网络模型，
            能够理解和生成人类语言。这些模型通常包含数十亿甚至数千亿个参数，在海量文本数据上训练，
            展现出强大的语言理解、生成、推理和多任务能力。代表性的LLM包括GPT系列、PaLM、Claude、LLaMA等。
            LLM的出现标志着人工智能进入新阶段，从专用模型转向通用智能系统。
          </p>
          <p className="text-gray-700">
            <strong>生动类比</strong>：如果把语言知识比作一座巨大的图书馆，那么LLM就像是一个阅读了这个图书馆中
            数百万本书的博学读者。它不仅记住了大量信息，还学会了理解语言的深层结构和模式，
            能够根据上下文生成连贯、准确的回答。更令人惊叹的是，它还展现出"涌现能力"——
            当模型规模足够大时，会突然出现训练时未明确教授的能力，如推理、翻译、代码生成等。
          </p>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">核心概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>预训练 (Pre-training)</strong> - 在海量无标注文本数据上进行自监督学习，学习语言的通用表示</li>
            <li><strong>微调 (Fine-tuning)</strong> - 在特定任务数据上进一步训练，适配特定应用场景</li>
            <li><strong>提示工程 (Prompt Engineering)</strong> - 设计输入文本引导模型生成期望输出的技术</li>
            <li><strong>上下文学习 (In-Context Learning)</strong> - 模型通过输入示例直接学习任务，无需参数更新</li>
            <li><strong>涌现能力 (Emergent Abilities)</strong> - 模型规模达到临界点后突然出现的新能力</li>
            <li><strong>思维链 (Chain-of-Thought)</strong> - 引导模型逐步推理，提高复杂任务的准确性</li>
            <li><strong>幻觉 (Hallucination)</strong> - 模型生成看似合理但实际错误或虚构的内容</li>
            <li><strong>对齐 (Alignment)</strong> - 使模型行为符合人类价值观和意图的技术</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">LLM训练过程</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">阶段1：数据准备</h4>
              <p className="text-gray-700 mb-2">收集和清洗海量文本数据（数TB级别），涵盖网页、书籍、代码、对话等多种来源</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li>数据去重、过滤有害内容</li>
                <li>文本分词（Tokenization）</li>
                <li>数据混合和采样策略</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2">阶段2：预训练 (Pre-training)</h4>
              <p className="text-gray-700 mb-2">使用自回归语言建模（预测下一个词）或其他自监督目标训练模型</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li>大规模分布式训练（数千个GPU/TPU）</li>
                <li>训练周期：数周到数月</li>
                <li>成本：数百万到数千万美元</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">阶段3：监督微调 (Supervised Fine-Tuning, SFT)</h4>
              <p className="text-gray-700 mb-2">在高质量的指令-回答数据对上微调，使模型学会遵循指令</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li>人工标注的示范对话</li>
                <li>覆盖多样化的任务类型</li>
                <li>数据量通常在10K-100K规模</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">阶段4：人类反馈强化学习 (RLHF)</h4>
              <p className="text-gray-700 mb-2">通过人类偏好反馈和强化学习进一步对齐模型行为</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li>训练奖励模型捕捉人类偏好</li>
                <li>使用PPO等算法优化策略</li>
                <li>提高有用性、安全性、诚实性</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">LLM的能力</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>文本生成</strong> - 创作文章、故事、诗歌等各类文本内容</li>
              <li><strong>语言理解</strong> - 文本分类、情感分析、信息抽取</li>
              <li><strong>翻译</strong> - 高质量的多语言互译</li>
              <li><strong>摘要</strong> - 提取文档关键信息，生成简洁摘要</li>
              <li><strong>问答</strong> - 基于知识回答各类问题</li>
              <li><strong>代码生成</strong> - 根据自然语言描述生成代码</li>
              <li><strong>推理</strong> - 逻辑推理、数学问题求解</li>
              <li><strong>对话</strong> - 多轮交互，维护上下文</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">LLM的局限与挑战</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>幻觉</strong> - 生成虚假或不准确的信息，表现得十分自信</li>
              <li><strong>知识截止</strong> - 无法获取训练数据截止日期之后的信息</li>
              <li><strong>偏见</strong> - 反映训练数据中的社会偏见和刻板印象</li>
              <li><strong>计算成本</strong> - 训练和推理都需要大量计算资源</li>
              <li><strong>可解释性差</strong> - 难以理解模型决策的内部机制</li>
              <li><strong>安全风险</strong> - 可能被用于生成有害内容</li>
              <li><strong>上下文长度限制</strong> - 处理超长文本的能力有限</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">主要LLM对比</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">模型</th>
                  <th className="py-2 px-4 border border-gray-300">开发者</th>
                  <th className="py-2 px-4 border border-gray-300">参数规模</th>
                  <th className="py-2 px-4 border border-gray-300">发布时间</th>
                  <th className="py-2 px-4 border border-gray-300">特点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">GPT-4</td>
                  <td className="py-2 px-4 border border-gray-300">OpenAI</td>
                  <td className="py-2 px-4 border border-gray-300">未公开（估计>1T）</td>
                  <td className="py-2 px-4 border border-gray-300">2023年3月</td>
                  <td className="py-2 px-4 border border-gray-300">多模态，推理能力强，商业应用广泛</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">Claude 3</td>
                  <td className="py-2 px-4 border border-gray-300">Anthropic</td>
                  <td className="py-2 px-4 border border-gray-300">未公开</td>
                  <td className="py-2 px-4 border border-gray-300">2024年3月</td>
                  <td className="py-2 px-4 border border-gray-300">长上下文，安全对齐，诚实可靠</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">PaLM 2</td>
                  <td className="py-2 px-4 border border-gray-300">Google</td>
                  <td className="py-2 px-4 border border-gray-300">340B</td>
                  <td className="py-2 px-4 border border-gray-300">2023年5月</td>
                  <td className="py-2 px-4 border border-gray-300">多语言能力强，Gemini基础</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">LLaMA 2</td>
                  <td className="py-2 px-4 border border-gray-300">Meta</td>
                  <td className="py-2 px-4 border border-gray-300">7B-70B</td>
                  <td className="py-2 px-4 border border-gray-300">2023年7月</td>
                  <td className="py-2 px-4 border border-gray-300">开源，参数高效，社区活跃</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">Mistral 7B</td>
                  <td className="py-2 px-4 border border-gray-300">Mistral AI</td>
                  <td className="py-2 px-4 border border-gray-300">7B</td>
                  <td className="py-2 px-4 border border-gray-300">2023年9月</td>
                  <td className="py-2 px-4 border border-gray-300">小模型高性能，开源，推理高效</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">GPT-3.5</td>
                  <td className="py-2 px-4 border border-gray-300">OpenAI</td>
                  <td className="py-2 px-4 border border-gray-300">175B</td>
                  <td className="py-2 px-4 border border-gray-300">2022年11月</td>
                  <td className="py-2 px-4 border border-gray-300">ChatGPT初版，广泛应用</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">文心一言 4.0</td>
                  <td className="py-2 px-4 border border-gray-300">百度</td>
                  <td className="py-2 px-4 border border-gray-300">未公开</td>
                  <td className="py-2 px-4 border border-gray-300">2023年10月</td>
                  <td className="py-2 px-4 border border-gray-300">中文理解优秀，产业应用广泛，搜索增强</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">通义千问</td>
                  <td className="py-2 px-4 border border-gray-300">阿里云</td>
                  <td className="py-2 px-4 border border-gray-300">7B-72B</td>
                  <td className="py-2 px-4 border border-gray-300">2023年4月</td>
                  <td className="py-2 px-4 border border-gray-300">多模态能力，电商场景优化，开源版本</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">讯飞星火</td>
                  <td className="py-2 px-4 border border-gray-300">科大讯飞</td>
                  <td className="py-2 px-4 border border-gray-300">未公开</td>
                  <td className="py-2 px-4 border border-gray-300">2023年5月</td>
                  <td className="py-2 px-4 border border-gray-300">语音交互强，教育医疗场景</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">智谱ChatGLM</td>
                  <td className="py-2 px-4 border border-gray-300">智谱AI</td>
                  <td className="py-2 px-4 border border-gray-300">6B-130B</td>
                  <td className="py-2 px-4 border border-gray-300">2023年3月</td>
                  <td className="py-2 px-4 border border-gray-300">双语优秀，开源友好，学术应用</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Scaling Laws（规模定律）</h3>
          <p className="text-gray-700 mb-3">
            研究表明，LLM的性能与模型规模（参数量）、训练数据量、计算量之间存在可预测的幂律关系：
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>参数规模</strong> - 参数量增加10倍，性能提升显著但递减</li>
            <li><strong>数据规模</strong> - 训练数据增加，模型泛化能力增强</li>
            <li><strong>计算量</strong> - 更多的计算资源带来更好的性能</li>
            <li><strong>涌现现象</strong> - 当规模达到临界点（通常百亿级参数），新能力突然出现</li>
            <li><strong>Chinchilla定律</strong> - 指出最优模型应在参数量和数据量之间平衡投入</li>
          </ul>
        </div>

        <div className="mt-8 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">LLM发展时间线</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2018年</div>
              <div className="flex-grow">GPT-1发布，展示预训练+微调范式</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2019年</div>
              <div className="flex-grow">GPT-2证明语言模型规模化的潜力</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2020年</div>
              <div className="flex-grow">GPT-3 (175B)展现few-shot学习能力，LLM概念确立</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2021年</div>
              <div className="flex-grow">各类大模型涌现（GLaM、Gopher、Megatron等）</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2022年</div>
              <div className="flex-grow">ChatGPT发布（11月），引发全球关注和应用热潮</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2023年</div>
              <div className="flex-grow">GPT-4多模态能力，开源模型崛起（LLaMA、Mistral），中国大模型竞赛</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2024年</div>
              <div className="flex-grow">长上下文模型、多模态融合、Agent能力、模型效率优化成为重点</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-800 mb-2">LLM应用场景</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <h4 className="font-semibold text-red-700 mb-2">内容创作</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>文章撰写、营销文案</li>
                <li>代码生成和辅助编程</li>
                <li>创意写作、剧本生成</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">信息服务</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>智能客服和对话助手</li>
                <li>知识问答和搜索增强</li>
                <li>文档摘要和分析</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">教育培训</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>个性化学习辅导</li>
                <li>语言学习和练习</li>
                <li>知识解释和科普</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">企业应用</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>数据分析和报告生成</li>
                <li>流程自动化</li>
                <li>决策支持系统</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
          <h3 className="text-lg font-semibold text-teal-800 mb-2">未来发展方向</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>多模态融合</strong> - 统一处理文本、图像、音频、视频等多种模态</li>
            <li><strong>长上下文能力</strong> - 突破上下文窗口限制，处理更长文档</li>
            <li><strong>推理能力增强</strong> - 提高逻辑推理、数学问题求解能力</li>
            <li><strong>高效推理</strong> - 模型压缩、量化、蒸馏等技术降低推理成本</li>
            <li><strong>可控性和安全性</strong> - 更好的对齐技术，减少幻觉和有害输出</li>
            <li><strong>专业化模型</strong> - 医疗、法律、金融等垂直领域专用模型</li>
            <li><strong>Agent能力</strong> - 具备规划、工具使用、多步推理的自主智能体</li>
            <li><strong>持续学习</strong> - 能够持续更新知识，适应新信息</li>
          </ul>
        </div>

        <div className="mt-8 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">学习建议</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li><strong>理解基础架构</strong> - 学习Transformer、注意力机制等基础知识</li>
            <li><strong>掌握提示工程</strong> - 学习如何设计有效的prompt与LLM交互</li>
            <li><strong>了解训练流程</strong> - 理解预训练、微调、RLHF等训练方法</li>
            <li><strong>实践API使用</strong> - 通过OpenAI、Claude等API实际应用LLM</li>
            <li><strong>探索开源模型</strong> - 使用Hugging Face平台体验各种开源LLM</li>
            <li><strong>关注最新进展</strong> - 阅读论文、博客，了解领域最新动态</li>
            <li><strong>思考伦理问题</strong> - 关注AI安全、偏见、隐私等重要议题</li>
          </ol>
        </div>

        {/* Key Takeaways Section */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600 shadow-sm">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
            <span className="mr-2">💡</span>
            关键要点总结
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2">✅ 核心能力</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 强大的语言理解和生成能力</li>
                <li>• 上下文学习和少样本学习</li>
                <li>• 多任务处理和知识整合</li>
                <li>• 推理、翻译、代码生成等涌现能力</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2">🎯 应用价值</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 提升内容创作效率和质量</li>
                <li>• 智能客服降低人工成本</li>
                <li>• 知识获取和问答更便捷</li>
                <li>• 辅助编程提高开发效率</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2">⚠️ 使用注意</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 可能产生幻觉和错误信息</li>
                <li>• 知识存在时效性限制</li>
                <li>• 需要人工审核关键输出</li>
                <li>• 注意隐私和数据安全</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2">🔗 相关技术</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Transformer架构和注意力机制</li>
                <li>• RLHF人类反馈强化学习</li>
                <li>• RAG检索增强生成</li>
                <li>• 提示工程和Few-shot学习</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning Path Section */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600 shadow-sm">
          <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
            <span className="mr-2">🗺️</span>
            学习路径建议
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
              <div>
                <h4 className="font-semibold text-purple-800">基础知识（1-2周）</h4>
                <p className="text-sm text-gray-700">学习Transformer架构、注意力机制、神经网络基础</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
              <div>
                <h4 className="font-semibold text-purple-800">LLM原理（2-3周）</h4>
                <p className="text-sm text-gray-700">理解预训练、微调、提示学习、对齐技术（RLHF）等核心概念</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
              <div>
                <h4 className="font-semibold text-purple-800">API实践（2-3周）</h4>
                <p className="text-sm text-gray-700">使用OpenAI、文心一言、通义千问等API，掌握提示工程技巧</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
              <div>
                <h4 className="font-semibold text-purple-800">应用开发（3-4周）</h4>
                <p className="text-sm text-gray-700">开发实际应用：智能客服、内容生成、知识问答等项目</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</div>
              <div>
                <h4 className="font-semibold text-purple-800">高级主题（持续学习）</h4>
                <p className="text-sm text-gray-700">探索模型微调、RAG、Agent开发、多模态LLM等前沿技术</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 下一步学习建议：</strong>
              掌握LLM基础后，推荐深入学习
              <span className="text-purple-700 font-semibold"> Transformer架构</span>、
              <span className="text-purple-700 font-semibold"> 注意力机制</span>、
              <span className="text-purple-700 font-semibold"> RLHF技术</span>，
              以及 <span className="text-purple-700 font-semibold">RAG检索增强生成</span>，
              全面提升LLM应用能力。
            </p>
          </div>
        </div>

        {/* Chinese LLM Ecosystem */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-600 shadow-sm">
          <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
            <span className="mr-2">🇨🇳</span>
            中国大模型生态
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">互联网大厂</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 百度文心一言 - 搜索场景优势</li>
                <li>• 阿里通义千问 - 电商应用丰富</li>
                <li>• 腾讯混元 - 社交娱乐场景</li>
                <li>• 字节豆包 - 内容创作优化</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">AI创业公司</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 智谱AI - ChatGLM开源生态</li>
                <li>• 月之暗面 - Kimi长文本模型</li>
                <li>• MiniMax - ABAB系列模型</li>
                <li>• 百川智能 - 行业定制化</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">垂直领域</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 科大讯飞星火 - 教育医疗</li>
                <li>• 商汤日日新 - 计算机视觉结合</li>
                <li>• 华为盘古 - 企业级应用</li>
                <li>• 昆仑万维 - 游戏娱乐</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default LLMPage;