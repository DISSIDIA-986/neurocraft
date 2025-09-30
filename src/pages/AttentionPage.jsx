import React from 'react';
import Layout from '../components/common/Layout';

const AttentionPage = () => {
  return (
    <Layout
      title="注意力机制 (Attention Mechanism)"
      description="深入理解注意力机制——现代AI的核心创新，包括自注意力、多头注意力及其应用"
    >
      <div className="p-4">
        {/* Quick Overview Section */}
        <div className="mb-6 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-600 shadow-sm">
          <h3 className="text-xl font-bold text-cyan-900 mb-3 flex items-center">
            <span className="mr-2">📚</span>
            快速概览
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">🎯 适合人群</p>
              <p className="text-gray-700">深度学习进阶者、NLP研究者、Transformer学习者、AI架构师</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">⏱️ 预计学习时间</p>
              <p className="text-gray-700">基础：1-2周 | 进阶：1-2个月 | 精通：3-6个月</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">🔧 核心技能</p>
              <p className="text-gray-700">自注意力、多头注意力、Q-K-V机制、Transformer架构</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">💼 应用领域</p>
              <p className="text-gray-700">NLP、计算机视觉、多模态AI、大语言模型、推荐系统</p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">什么是注意力机制？</h3>
          <p className="text-gray-700 mb-3">
            注意力机制 (Attention Mechanism) 是深度学习中的一项革命性技术，最初于2014年在机器翻译任务中提出，
            后来成为Transformer架构的核心组件。它的核心思想是让模型在处理信息时能够"关注"最相关的部分，
            就像人类在阅读时会重点关注关键词句一样。注意力机制使得模型能够动态地为输入的不同部分分配不同的权重，
            显著提升了序列建模、语言理解、图像识别等任务的性能。
          </p>
          <p className="text-gray-700">
            <strong>生动类比</strong>：想象你在一个嘈杂的派对上与朋友对话。尽管周围有很多声音，
            你的大脑会自动"聚焦"在朋友的声音上，同时过滤掉背景噪音。这就是注意力机制的工作原理——
            它像一个智能的"聚光灯"，在处理信息时动态地照亮最重要的部分，忽略不相关的细节。
            在神经网络中，这个"聚光灯"通过数学计算实现，为每个输入元素分配权重，权重越大表示越重要。
          </p>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">核心概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>查询 (Query, Q)</strong> - 表示"我想要关注什么"，当前处理的信息向量</li>
            <li><strong>键 (Key, K)</strong> - 表示"我能提供什么"，用于匹配查询的信息向量</li>
            <li><strong>值 (Value, V)</strong> - 表示"我的实际内容"，真正被提取的信息向量</li>
            <li><strong>注意力权重 (Attention Weights)</strong> - 通过Query和Key的相似度计算得到，决定每个Value的重要程度</li>
            <li><strong>自注意力 (Self-Attention)</strong> - Query、Key、Value都来自同一序列，捕捉序列内部关系</li>
            <li><strong>交叉注意力 (Cross-Attention)</strong> - Query和Key/Value来自不同序列，用于序列间关系建模</li>
            <li><strong>多头注意力 (Multi-Head Attention)</strong> - 并行使用多组注意力，从不同角度捕捉信息</li>
            <li><strong>缩放点积注意力 (Scaled Dot-Product Attention)</strong> - Transformer中使用的高效注意力计算方式</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">注意力机制工作流程</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">步骤1：生成Query、Key、Value</h4>
              <p className="text-gray-700 mb-2">通过线性变换将输入映射为Q、K、V三个向量</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>Q = X × W_Q</code><br/>
                <code>K = X × W_K</code><br/>
                <code>V = X × W_V</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2">步骤2：计算注意力分数</h4>
              <p className="text-gray-700 mb-2">计算Query和Key的相似度（通常使用点积）</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>Scores = Q × K^T / √d_k</code><br/>
                <span className="text-xs text-gray-600">（除以√d_k进行缩放，防止梯度消失）</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">步骤3：应用Softmax</h4>
              <p className="text-gray-700 mb-2">将分数转换为概率分布，形成注意力权重</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>Attention_Weights = Softmax(Scores)</code><br/>
                <span className="text-xs text-gray-600">（所有权重和为1，表示概率分布）</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">步骤4：加权求和</h4>
              <p className="text-gray-700 mb-2">用注意力权重对Value加权平均，得到最终输出</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>Output = Attention_Weights × V</code><br/>
                <span className="text-xs text-gray-600">（每个位置的输出是所有Value的加权组合）</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">注意力机制类型详解</h3>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">自注意力 (Self-Attention)</h4>
              <p className="text-gray-700 mb-2">
                序列中的每个元素都与序列中所有元素（包括自己）进行交互，捕捉序列内部的依赖关系。
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li><strong>应用场景</strong>：语言理解、文本编码、图像块关系建模</li>
                <li><strong>优势</strong>：并行计算、捕捉长距离依赖、位置无关</li>
                <li><strong>示例</strong>："The cat sat on the mat" 中，"cat"能关注"sat"和"mat"</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">交叉注意力 (Cross-Attention)</h4>
              <p className="text-gray-700 mb-2">
                Query来自一个序列，Key和Value来自另一个序列，用于建立两个序列之间的关系。
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li><strong>应用场景</strong>：机器翻译、图像描述生成、问答系统</li>
                <li><strong>优势</strong>：跨模态信息融合、编码器-解码器连接</li>
                <li><strong>示例</strong>：翻译时，目标语言单词关注源语言的相关单词</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-2">多头注意力 (Multi-Head Attention)</h4>
              <p className="text-gray-700 mb-2">
                并行运行多组注意力机制（多个"头"），每个头学习不同的表示子空间。
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li><strong>应用场景</strong>：Transformer模型的核心组件</li>
                <li><strong>优势</strong>：从多个角度理解输入、提高表达能力</li>
                <li><strong>公式</strong>：MultiHead(Q,K,V) = Concat(head₁,...,headₕ) × W_O</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-2">掩码注意力 (Masked Attention)</h4>
              <p className="text-gray-700 mb-2">
                在计算注意力时屏蔽某些位置，防止信息泄漏，常用于自回归生成任务。
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li><strong>应用场景</strong>：语言模型训练、自回归生成</li>
                <li><strong>优势</strong>：确保训练时信息流向正确、防止"看到未来"</li>
                <li><strong>示例</strong>：生成第3个词时，只能看到前2个词</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">注意力机制的优势</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>并行计算</strong> - 不依赖序列顺序，可并行处理所有位置</li>
              <li><strong>长距离依赖</strong> - 直接建立任意位置间的联系，路径长度为O(1)</li>
              <li><strong>动态权重</strong> - 根据输入内容自适应调整关注重点</li>
              <li><strong>可解释性</strong> - 注意力权重提供模型决策的可视化依据</li>
              <li><strong>灵活性</strong> - 适用于多种任务和模态（文本、图像、音频）</li>
              <li><strong>表达能力强</strong> - 能够捕捉复杂的输入关系</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">注意力机制的挑战</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>计算复杂度</strong> - 标准注意力为O(n²)，处理长序列开销大</li>
              <li><strong>内存消耗</strong> - 需要存储所有Query-Key对的相似度矩阵</li>
              <li><strong>位置信息缺失</strong> - 自注意力本身不编码位置信息，需要额外的位置编码</li>
              <li><strong>训练不稳定</strong> - 大规模模型训练可能出现梯度问题</li>
              <li><strong>过度平滑</strong> - 深层网络中注意力可能变得过于均匀</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">注意力机制优化变体</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">变体</th>
                  <th className="py-2 px-4 border border-gray-300">核心思想</th>
                  <th className="py-2 px-4 border border-gray-300">复杂度</th>
                  <th className="py-2 px-4 border border-gray-300">适用场景</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">标准注意力</td>
                  <td className="py-2 px-4 border border-gray-300">全连接注意力</td>
                  <td className="py-2 px-4 border border-gray-300">O(n²)</td>
                  <td className="py-2 px-4 border border-gray-300">中短序列（{'<'}2K tokens）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">Sparse Attention</td>
                  <td className="py-2 px-4 border border-gray-300">只关注部分位置（局部+全局）</td>
                  <td className="py-2 px-4 border border-gray-300">O(n√n)</td>
                  <td className="py-2 px-4 border border-gray-300">长序列文本、音频</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">Linformer</td>
                  <td className="py-2 px-4 border border-gray-300">对Key和Value进行低秩投影</td>
                  <td className="py-2 px-4 border border-gray-300">O(n)</td>
                  <td className="py-2 px-4 border border-gray-300">超长文档处理</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">Performer</td>
                  <td className="py-2 px-4 border border-gray-300">使用核方法近似注意力</td>
                  <td className="py-2 px-4 border border-gray-300">O(n)</td>
                  <td className="py-2 px-4 border border-gray-300">资源受限环境</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">FlashAttention</td>
                  <td className="py-2 px-4 border border-gray-300">优化内存访问模式</td>
                  <td className="py-2 px-4 border border-gray-300">O(n²)但快数倍</td>
                  <td className="py-2 px-4 border border-gray-300">GPU高效训练</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">Longformer</td>
                  <td className="py-2 px-4 border border-gray-300">局部窗口+全局注意力混合</td>
                  <td className="py-2 px-4 border border-gray-300">O(n×k)</td>
                  <td className="py-2 px-4 border border-gray-300">文档级任务</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">Sliding Window</td>
                  <td className="py-2 px-4 border border-gray-300">只关注固定窗口内的tokens</td>
                  <td className="py-2 px-4 border border-gray-300">O(n×w)</td>
                  <td className="py-2 px-4 border border-gray-300">流式处理、实时推理</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">注意力机制的应用</h3>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300 text-left">应用领域</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">中国公司/产品</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">具体应用</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">大语言模型</td>
                  <td className="py-2 px-4 border border-gray-300">百度文心、阿里通义、智谱ChatGLM</td>
                  <td className="py-2 px-4 border border-gray-300">多头注意力构建Transformer模型、长文本理解</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">机器翻译</td>
                  <td className="py-2 px-4 border border-gray-300">百度翻译、腾讯翻译君、搜狗翻译</td>
                  <td className="py-2 px-4 border border-gray-300">交叉注意力实现源语言-目标语言对齐</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">计算机视觉</td>
                  <td className="py-2 px-4 border border-gray-300">华为盘古CV、商汤日日新、旷视科技</td>
                  <td className="py-2 px-4 border border-gray-300">Vision Transformer图像分类、目标检测DETR</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">推荐系统</td>
                  <td className="py-2 px-4 border border-gray-300">字节抖音、快手、淘宝</td>
                  <td className="py-2 px-4 border border-gray-300">注意力机制捕捉用户兴趣、序列推荐</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">语音技术</td>
                  <td className="py-2 px-4 border border-gray-300">科大讯飞、阿里达摩院</td>
                  <td className="py-2 px-4 border border-gray-300">语音识别、语音合成、语音翻译</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">多模态AI</td>
                  <td className="py-2 px-4 border border-gray-300">百度文心一格、阿里通义万相</td>
                  <td className="py-2 px-4 border border-gray-300">文生图、图像理解、跨模态检索</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">搜索引擎</td>
                  <td className="py-2 px-4 border border-gray-300">百度搜索、搜狗搜索</td>
                  <td className="py-2 px-4 border border-gray-300">查询-文档相关性计算、语义理解</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">国际前沿应用</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>OpenAI GPT系列、Claude、Gemini大模型</li>
                <li>Stable Diffusion、DALL-E图像生成</li>
                <li>AlphaFold蛋白质结构预测</li>
                <li>Meta SAM图像分割模型</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">优化变体研究</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>FlashAttention（斯坦福）高效训练</li>
                <li>Longformer（Allen AI）长文档处理</li>
                <li>Performer、Linformer线性注意力</li>
                <li>Sparse Transformer稀疏注意力</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">注意力机制发展历程</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2014年</div>
              <div className="flex-grow">Bahdanau等人提出序列到序列任务的注意力机制</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2015年</div>
              <div className="flex-grow">Luong注意力改进，简化计算</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2017年</div>
              <div className="flex-grow">Transformer引入自注意力和多头注意力，彻底改变NLP</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2019年</div>
              <div className="flex-grow">Sparse Transformer等高效变体出现</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2020年</div>
              <div className="flex-grow">Vision Transformer将注意力引入计算机视觉</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2022年</div>
              <div className="flex-grow">FlashAttention等内存高效算法推出</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2023-2024年</div>
              <div className="flex-grow">注意力机制成为AI标准组件，持续优化和创新</div>
            </div>
          </div>
        </div>

        {/* Key Takeaways - 4 Quadrant Layout */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600 shadow-sm">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
            <span className="mr-2">💡</span>
            关键要点总结
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <span className="mr-2">✅</span>核心优势
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 并行计算，处理速度快</li>
                <li>• 捕捉长距离依赖，路径O(1)</li>
                <li>• 动态权重分配，关注重点</li>
                <li>• 可解释性强，权重可视化</li>
                <li>• Transformer架构的核心组件</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <span className="mr-2">🎯</span>适用场景
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 自然语言处理和理解</li>
                <li>• 机器翻译和文本生成</li>
                <li>• 计算机视觉（Vision Transformer）</li>
                <li>• 多模态AI和跨模态任务</li>
                <li>• 推荐系统和序列建模</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                <span className="mr-2">⚠️</span>注意事项
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• O(n²)复杂度，长序列开销大</li>
                <li>• 需要位置编码补偿位置信息</li>
                <li>• 内存消耗高，需优化算法</li>
                <li>• 训练不稳定，需LayerNorm</li>
                <li>• 深层网络可能过度平滑</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                <span className="mr-2">🔗</span>相关技术
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Transformer架构</li>
                <li>• 位置编码（绝对/相对）</li>
                <li>• LayerNorm和残差连接</li>
                <li>• FlashAttention优化算法</li>
                <li>• 稀疏注意力变体</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning Path - 5 Steps */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600 shadow-sm">
          <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
            <span className="mr-2">🗺️</span>
            学习路径建议
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2">1️⃣ 数学基础阶段（1周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：理解Q-K-V概念、点积注意力公式、Softmax归一化
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：用NumPy实现简单的注意力机制，可视化权重矩阵
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2">2️⃣ 注意力类型掌握（2-3周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：自注意力、交叉注意力、多头注意力、掩码注意力
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：用PyTorch实现各类注意力，对比不同类型效果
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-900 mb-2">3️⃣ Transformer架构深入（3-4周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：Transformer编码器-解码器、位置编码、LayerNorm
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：从零实现Transformer，完成机器翻译任务
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2">4️⃣ 高效注意力优化（1-2个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：FlashAttention、Sparse Attention、Linformer、Longformer
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：对比不同优化方法，处理长文档任务
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
              <h4 className="font-semibold text-red-900 mb-2">5️⃣ 实际应用与创新（持续学习）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：Vision Transformer、多模态注意力、注意力可视化
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：将注意力应用到实际项目，跟踪最新研究进展
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-400">
            <h4 className="font-semibold text-indigo-900 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              下一步学习建议
            </h4>
            <p className="text-sm text-gray-700">
              掌握注意力机制后，建议深入学习：
            </p>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              <li>• <strong>Transformer架构</strong>：深入学习编码器-解码器结构、预训练方法</li>
              <li>• <strong>大语言模型LLM</strong>：学习GPT、BERT等基于注意力的预训练模型</li>
              <li>• <strong>Vision Transformer</strong>：学习ViT、Swin Transformer等视觉模型</li>
              <li>• <strong>多模态AI</strong>：学习CLIP、BLIP等跨模态注意力应用</li>
              <li>• <strong>高效优化</strong>：研究FlashAttention 2、PagedAttention等最新优化方法</li>
            </ul>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default AttentionPage;