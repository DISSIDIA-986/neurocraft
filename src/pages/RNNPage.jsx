import React from 'react';
import Layout from '../components/common/Layout';

const RNNPage = () => {
  return (
    <Layout
      title="循环神经网络 (RNN)"
      description="学习RNN如何处理序列数据，探索LSTM和GRU变体，以及在NLP和时序任务中的应用"
    >
      <div className="p-4">
        {/* Quick Overview Section */}
        <div className="mb-6 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-600 shadow-sm">
          <h3 className="text-xl font-bold text-teal-900 mb-3 flex items-center">
            <span className="mr-2">📚</span>
            快速概览
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">🎯 适合人群</p>
              <p className="text-gray-700">深度学习初学者、序列建模学习者、时序数据分析师</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">⏱️ 预计学习时间</p>
              <p className="text-gray-700">基础：1-2周 | 进阶：3-4周 | 精通：2-3个月</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">🔧 核心技能</p>
              <p className="text-gray-700">循环连接、LSTM/GRU、BPTT算法、序列建模</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">💼 应用领域</p>
              <p className="text-gray-700">时间序列预测、语音识别、文本生成、视频分析</p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">什么是循环神经网络？</h3>
          <p className="text-gray-700 mb-3">
            循环神经网络 (Recurrent Neural Network, RNN) 是一类专门处理序列数据的神经网络架构，
            于1980年代提出。不同于前馈神经网络，RNN具有"记忆"能力——通过循环连接，
            网络可以保持对之前输入的记忆，使其特别适合处理时间序列、文本、语音等序列数据。
            虽然现代应用中RNN逐渐被Transformer取代，但理解RNN对于掌握序列建模的基础仍然重要。
          </p>
          <p className="text-gray-700">
            <strong>生动类比</strong>：想象你在阅读一本小说。理解当前这一句话时，你需要记住之前的情节——
            主角是谁、发生了什么事、故事背景是什么。RNN就像这样的阅读过程，它在处理每个新的输入（句子中的每个词）时，
            都会参考之前的"记忆"（隐藏状态），并更新这个记忆以供下一个输入使用。
            这种"边读边记、滚动前进"的方式让RNN能够理解序列中的上下文关系。
          </p>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">核心概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>隐藏状态 (Hidden State)</strong> - RNN的"记忆"，存储之前时间步的信息，随时间更新</li>
            <li><strong>循环连接 (Recurrent Connection)</strong> - 将当前隐藏状态传递到下一时间步，形成循环</li>
            <li><strong>时间步 (Time Step)</strong> - 序列中的每个位置，RNN按时间步逐一处理输入</li>
            <li><strong>权重共享 (Weight Sharing)</strong> - 所有时间步使用相同的权重矩阵，参数高效</li>
            <li><strong>反向传播时间 (BPTT)</strong> - RNN的训练算法，沿时间展开计算梯度</li>
            <li><strong>梯度消失/爆炸</strong> - RNN训练的主要挑战，长序列中梯度会指数级衰减或增长</li>
            <li><strong>LSTM/GRU</strong> - 改进的RNN变体，通过门控机制缓解梯度消失问题</li>
            <li><strong>序列到序列 (Seq2Seq)</strong> - 使用编码器-解码器RNN结构处理可变长度输入输出</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">RNN工作流程</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">步骤1：初始化隐藏状态</h4>
              <p className="text-gray-700 mb-2">在处理序列之前，初始化隐藏状态（通常为零向量）</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>h₀ = 0  # 初始隐藏状态</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2">步骤2：时间步迭代</h4>
              <p className="text-gray-700 mb-2">对序列中的每个输入，更新隐藏状态并产生输出</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>for t in range(seq_length):</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;h_t = tanh(W_hh × h_(t-1) + W_xh × x_t + b_h)</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;y_t = W_hy × h_t + b_y</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">步骤3：输出生成</h4>
              <p className="text-gray-700 mb-2">根据隐藏状态生成每个时间步的输出（或仅最后一个）</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>outputs = [y₁, y₂, ..., y_T]  # 所有时间步输出</code><br/>
                <code># 或仅使用最后的 h_T 进行最终预测</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">步骤4：反向传播训练</h4>
              <p className="text-gray-700 mb-2">通过BPTT算法计算梯度，更新网络参数</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>loss = criterion(outputs, targets)</code><br/>
                <code>loss.backward()  # 沿时间展开反向传播</code><br/>
                <code>optimizer.step()  # 更新参数</code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">RNN架构变体</h3>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">标准RNN (Vanilla RNN)</h4>
              <p className="text-gray-700 mb-2">最基础的RNN架构，使用简单的循环连接</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>优势</strong>：结构简单，参数少，易于理解</li>
                <li><strong>劣势</strong>：梯度消失严重，难以捕捉长期依赖</li>
                <li><strong>适用</strong>：短序列任务（{'<'}10步）</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">LSTM (Long Short-Term Memory)</h4>
              <p className="text-gray-700 mb-2">通过输入门、遗忘门、输出门控制信息流动</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>优势</strong>：有效缓解梯度消失，捕捉长期依赖</li>
                <li><strong>劣势</strong>：参数量大（4倍RNN），计算复杂</li>
                <li><strong>适用</strong>：语言建模、机器翻译、语音识别</li>
                <li><strong>关键</strong>：细胞状态(cell state)提供"高速公路"传递信息</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-2">GRU (Gated Recurrent Unit)</h4>
              <p className="text-gray-700 mb-2">简化的LSTM，仅使用重置门和更新门</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>优势</strong>：参数比LSTM少，训练更快，性能相近</li>
                <li><strong>劣势</strong>：某些任务略逊于LSTM</li>
                <li><strong>适用</strong>：需要平衡性能和效率的场景</li>
                <li><strong>特点</strong>：无单独细胞状态，隐藏状态兼具记忆和输出功能</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-2">双向RNN (Bidirectional RNN)</h4>
              <p className="text-gray-700 mb-2">同时从前向和后向处理序列，融合两个方向的信息</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>优势</strong>：利用完整上下文，理解更准确</li>
                <li><strong>劣势</strong>：无法用于实时预测（需要完整序列）</li>
                <li><strong>适用</strong>：文本分类、命名实体识别、语音识别</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">RNN的优势</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>序列建模能力</strong> - 天然适合处理时序数据和可变长度输入</li>
              <li><strong>权重共享</strong> - 所有时间步使用相同权重，参数高效</li>
              <li><strong>记忆机制</strong> - 隐藏状态保存历史信息，理解上下文</li>
              <li><strong>灵活输入输出</strong> - 支持多种模式（一对一、一对多、多对一、多对多）</li>
              <li><strong>理论基础</strong> - 图灵完备，理论上可以模拟任何算法</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">RNN的挑战</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>梯度消失/爆炸</strong> - 长序列训练困难，梯度不稳定</li>
              <li><strong>长期依赖问题</strong> - 难以捕捉距离较远的依赖关系</li>
              <li><strong>顺序处理</strong> - 无法并行计算，训练速度慢</li>
              <li><strong>短期记忆</strong> - 信息会随时间步增加而逐渐遗忘</li>
              <li><strong>被Transformer取代</strong> - 大多数NLP任务现在使用Transformer</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">RNN应用场景</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300 text-left">应用领域</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">中国公司/产品</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">具体应用</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">语音识别</td>
                  <td className="py-2 px-4 border border-gray-300">科大讯飞、百度语音、阿里云</td>
                  <td className="py-2 px-4 border border-gray-300">语音转文字、实时字幕、语音助手</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">时间序列预测</td>
                  <td className="py-2 px-4 border border-gray-300">百度金融、蚂蚁金服、京东数科</td>
                  <td className="py-2 px-4 border border-gray-300">股票预测、风险评估、流量预测</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">机器翻译</td>
                  <td className="py-2 px-4 border border-gray-300">百度翻译、腾讯翻译君（早期）</td>
                  <td className="py-2 px-4 border border-gray-300">Seq2Seq翻译模型（已升级Transformer）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">视频理解</td>
                  <td className="py-2 px-4 border border-gray-300">字节抖音、快手、腾讯视频</td>
                  <td className="py-2 px-4 border border-gray-300">视频内容理解、行为识别、推荐系统</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">手写识别</td>
                  <td className="py-2 px-4 border border-gray-300">百度OCR、腾讯云、搜狗输入法</td>
                  <td className="py-2 px-4 border border-gray-300">在线手写识别、签名验证、笔迹鉴定</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">文本生成</td>
                  <td className="py-2 px-4 border border-gray-300">智能写作助手、文案生成工具</td>
                  <td className="py-2 px-4 border border-gray-300">新闻自动生成、诗歌创作、对话系统</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">异常检测</td>
                  <td className="py-2 px-4 border border-gray-300">阿里云、华为云、腾讯云</td>
                  <td className="py-2 px-4 border border-gray-300">网络入侵检测、设备故障预警、异常交易识别</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">RNN与Transformer对比</h3>
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">特性</th>
                  <th className="py-2 px-4 border border-gray-300">RNN/LSTM</th>
                  <th className="py-2 px-4 border border-gray-300">Transformer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">计算方式</td>
                  <td className="py-2 px-4 border border-gray-300">顺序处理，依赖前一时间步</td>
                  <td className="py-2 px-4 border border-gray-300">并行处理，使用注意力机制</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">训练速度</td>
                  <td className="py-2 px-4 border border-gray-300">慢（顺序计算）</td>
                  <td className="py-2 px-4 border border-gray-300">快（并行计算）</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">长期依赖</td>
                  <td className="py-2 px-4 border border-gray-300">困难（梯度消失）</td>
                  <td className="py-2 px-4 border border-gray-300">轻松（注意力直连）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">内存占用</td>
                  <td className="py-2 px-4 border border-gray-300">较低</td>
                  <td className="py-2 px-4 border border-gray-300">较高（注意力矩阵）</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">适用场景</td>
                  <td className="py-2 px-4 border border-gray-300">时序数据、流式处理</td>
                  <td className="py-2 px-4 border border-gray-300">NLP、大规模预训练</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">可解释性</td>
                  <td className="py-2 px-4 border border-gray-300">隐藏状态不直观</td>
                  <td className="py-2 px-4 border border-gray-300">注意力权重可视化</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">RNN发展历程</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">1986年</div>
              <div className="flex-grow">Jordan和Elman提出早期RNN架构</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">1997年</div>
              <div className="flex-grow">Hochreiter和Schmidhuber提出LSTM，解决梯度消失</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2000s年代</div>
              <div className="flex-grow">双向RNN、深层RNN等变体出现</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2014年</div>
              <div className="flex-grow">Seq2Seq架构用于机器翻译，GRU提出</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2015-2016年</div>
              <div className="flex-grow">RNN在NLP任务中达到巅峰，广泛应用</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2017年</div>
              <div className="flex-grow">Transformer发布，开始挑战RNN在NLP的主导地位</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2020年代</div>
              <div className="flex-grow">RNN在NLP中被Transformer取代，但在时序数据中仍有应用</div>
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
                <li>• 天然处理序列数据</li>
                <li>• 权重共享，参数高效</li>
                <li>• 隐藏状态保持记忆</li>
                <li>• LSTM/GRU缓解梯度消失</li>
                <li>• 灵活的输入输出模式</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <span className="mr-2">🎯</span>适用场景
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 时间序列预测和分析</li>
                <li>• 语音识别和合成</li>
                <li>• 手写识别和OCR</li>
                <li>• 视频理解和行为识别</li>
                <li>• 异常检测和监控</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                <span className="mr-2">⚠️</span>注意事项
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 梯度消失/爆炸问题</li>
                <li>• 顺序处理，无法并行</li>
                <li>• 长期依赖捕捉困难</li>
                <li>• NLP任务多被Transformer取代</li>
                <li>• 需要梯度裁剪和正则化</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                <span className="mr-2">🔗</span>相关技术
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• LSTM长短期记忆网络</li>
                <li>• Seq2Seq编码器-解码器</li>
                <li>• 注意力机制（增强RNN）</li>
                <li>• Transformer（替代方案）</li>
                <li>• CTC损失函数</li>
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
              <h4 className="font-semibold text-blue-900 mb-2">1️⃣ RNN基础原理（1周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：循环连接、隐藏状态、时间步、BPTT算法
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：用NumPy实现简单RNN，理解循环计算过程
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2">2️⃣ LSTM/GRU掌握（2周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：门控机制、遗忘门、输入门、输出门、GRU简化结构
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：用PyTorch实现LSTM/GRU，对比性能差异
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-900 mb-2">3️⃣ 序列任务实战（3-4周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：文本分类、情感分析、时间序列预测、Seq2Seq模型
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：电影评论情感分析、股票价格预测
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2">4️⃣ 高级技巧应用（1-2个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：双向RNN、注意力增强RNN、梯度裁剪、正则化技巧
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：机器翻译Seq2Seq、视频行为识别
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
              <h4 className="font-semibold text-red-900 mb-2">5️⃣ RNN与Transformer对比（持续学习）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：理解RNN局限性、Transformer优势、何时使用RNN
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：同一任务分别用RNN和Transformer实现，对比效果
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-400">
            <h4 className="font-semibold text-indigo-900 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              下一步学习建议
            </h4>
            <p className="text-sm text-gray-700">
              掌握RNN后，建议深入学习：
            </p>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              <li>• <strong>注意力机制</strong>：学习如何增强RNN的长序列处理能力</li>
              <li>• <strong>Transformer架构</strong>：理解为何Transformer在NLP中取代RNN</li>
              <li>• <strong>时间序列分析</strong>：深入学习ARIMA、Prophet等传统方法与RNN结合</li>
              <li>• <strong>LSTM现有课程</strong>：本站有专门的LSTM课程，可深入学习门控细节</li>
              <li>• <strong>实际应用优化</strong>：学习模型压缩、量化、边缘部署技术</li>
            </ul>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default RNNPage;