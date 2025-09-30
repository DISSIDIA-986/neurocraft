import React from 'react';
import Layout from '../components/common/Layout';

const PyTorchPage = () => {
  return (
    <Layout
      title="PyTorch深度学习框架"
      description="理解PyTorch作为深度学习框架的重要性，掌握张量操作、自动微分和神经网络构建"
    >
      <div className="p-4">
        {/* Quick Overview Section */}
        <div className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-600 shadow-sm">
          <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
            <span className="mr-2">📚</span>
            快速概览
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">🎯 适合人群</p>
              <p className="text-gray-700">深度学习初学者、AI研究者、Python开发者、数据科学家</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">⏱️ 预计学习时间</p>
              <p className="text-gray-700">基础：2-3周 | 进阶：2-3个月 | 精通：6-12个月</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">🔧 核心技能</p>
              <p className="text-gray-700">张量操作、自动微分、神经网络构建、模型训练与优化</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">💼 应用领域</p>
              <p className="text-gray-700">计算机视觉、NLP、强化学习、科学计算、AI研究</p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">什么是PyTorch？</h3>
          <p className="text-gray-700 mb-3">
            PyTorch是由Facebook AI Research (FAIR)团队于2016年开发的开源深度学习框架，基于Python语言。
            它以动态计算图、直观的API设计和强大的GPU加速能力而闻名，已成为学术研究和工业应用中最流行的深度学习框架之一。
            PyTorch提供了从底层张量操作到高级神经网络模块的完整工具链，支持计算机视觉、自然语言处理、强化学习等多个AI领域。
          </p>
          <p className="text-gray-700">
            <strong>生动类比</strong>：如果把深度学习比作烹饪，那么PyTorch就是一个设备齐全的现代化厨房。
            它提供了所有必要的工具（张量操作就像食材处理、自动微分就像智能温控、神经网络模块就像预制配方），
            让AI研究者和工程师能够灵活地"烹饪"出各种复杂的深度学习模型。而且这个厨房的设计非常直观，
            即使是初学者也能快速上手，同时又能满足顶级大厨（研究者）的高级需求。
          </p>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">核心概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>张量 (Tensor)</strong> - PyTorch的基础数据结构，类似NumPy数组但支持GPU加速和自动求导</li>
            <li><strong>自动微分 (Autograd)</strong> - 自动计算梯度的引擎，是反向传播和模型训练的核心</li>
            <li><strong>动态计算图 (Dynamic Computation Graph)</strong> - 运行时构建计算图，提供极大灵活性</li>
            <li><strong>神经网络模块 (nn.Module)</strong> - 构建神经网络的基础类，支持模块化设计</li>
            <li><strong>优化器 (Optimizer)</strong> - 实现各种优化算法（SGD、Adam等）用于更新模型参数</li>
            <li><strong>数据加载器 (DataLoader)</strong> - 高效的数据批处理、打乱和多进程加载</li>
            <li><strong>GPU加速</strong> - 无缝支持CUDA，轻松将计算迁移到GPU</li>
            <li><strong>TorchScript</strong> - 将PyTorch模型转换为可优化和序列化的格式，用于生产部署</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">PyTorch典型训练流程</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">步骤1：数据准备</h4>
              <p className="text-gray-700 mb-2">加载和预处理数据，创建DataLoader</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>from torch.utils.data import DataLoader</code><br/>
                <code>train_loader = DataLoader(dataset, batch_size=32, shuffle=True)</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2">步骤2：定义模型</h4>
              <p className="text-gray-700 mb-2">继承nn.Module，定义网络结构和前向传播</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>class Model(nn.Module):</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self): ...</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;def forward(self, x): ...</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">步骤3：设置损失函数和优化器</h4>
              <p className="text-gray-700 mb-2">选择适当的损失函数和优化算法</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>criterion = nn.CrossEntropyLoss()</code><br/>
                <code>optimizer = torch.optim.Adam(model.parameters(), lr=0.001)</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">步骤4：训练循环</h4>
              <p className="text-gray-700 mb-2">前向传播 → 计算损失 → 反向传播 → 更新参数</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>for epoch in range(epochs):</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;for data, target in train_loader:</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;optimizer.zero_grad()  # 清零梯度</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output = model(data)  # 前向传播</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loss = criterion(output, target)  # 计算损失</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loss.backward()  # 反向传播</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;optimizer.step()  # 更新参数</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 mb-2">步骤5：评估和保存</h4>
              <p className="text-gray-700 mb-2">在验证集上评估模型，保存最佳模型</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>model.eval()  # 切换到评估模式</code><br/>
                <code>with torch.no_grad():  # 禁用梯度计算</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;# 评估代码</code><br/>
                <code>torch.save(model.state_dict(), 'model.pth')</code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">PyTorch的优势</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>Pythonic设计</strong> - API设计直观，符合Python编程习惯，易于学习和使用</li>
              <li><strong>动态计算图</strong> - 灵活性高，适合复杂模型和研究实验</li>
              <li><strong>调试友好</strong> - 支持标准Python调试工具，错误追踪清晰</li>
              <li><strong>强大生态</strong> - torchvision、torchtext、torchaudio等丰富扩展库</li>
              <li><strong>活跃社区</strong> - 学术界和工业界广泛采用，资源丰富</li>
              <li><strong>部署灵活</strong> - TorchScript支持模型优化和跨平台部署</li>
              <li><strong>GPU加速</strong> - 无缝CUDA支持，简单的设备迁移（.to('cuda')）</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">PyTorch的挑战</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>部署复杂性</strong> - 生产环境部署相比TensorFlow稍复杂（但TorchScript和ONNX在改善）</li>
              <li><strong>移动端支持</strong> - 移动设备部署不如TensorFlow Lite成熟</li>
              <li><strong>版本兼容</strong> - API变化较快，旧代码可能需要更新</li>
              <li><strong>内存管理</strong> - 动态图模式可能导致更高的内存开销</li>
              <li><strong>分布式训练</strong> - 虽然支持，但配置相对复杂</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">PyTorch vs 其他深度学习框架</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">特性</th>
                  <th className="py-2 px-4 border border-gray-300">PyTorch</th>
                  <th className="py-2 px-4 border border-gray-300">TensorFlow</th>
                  <th className="py-2 px-4 border border-gray-300">JAX</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">计算图</td>
                  <td className="py-2 px-4 border border-gray-300">动态图（默认）</td>
                  <td className="py-2 px-4 border border-gray-300">静态图（TF1.x）/ 动态图（TF2.x）</td>
                  <td className="py-2 px-4 border border-gray-300">函数式转换</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">易用性</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐⭐ 非常直观</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐ TF2改进显著</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐ 需要函数式编程基础</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">调试</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐⭐ 标准Python调试</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐ Eager模式改善</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐ 函数式调试</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">部署</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐ TorchScript/ONNX</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐⭐ TensorFlow Serving</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐ 编译为XLA</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">移动端</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐ PyTorch Mobile</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐⭐ TensorFlow Lite</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐ 有限支持</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">研究社区</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐⭐ 学术界主流</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐ 工业界主流</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐ Google Research</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">生态系统</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐⭐ 非常丰富</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐⭐⭐ 最成熟</td>
                  <td className="py-2 px-4 border border-gray-300">⭐⭐⭐ 快速增长</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">PyTorch生态系统</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">官方扩展库</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>torchvision</strong> - 计算机视觉工具和预训练模型</li>
                <li><strong>torchtext</strong> - 自然语言处理工具和数据集</li>
                <li><strong>torchaudio</strong> - 音频处理和模型</li>
                <li><strong>TorchServe</strong> - 模型服务和部署框架</li>
                <li><strong>PyTorch Lightning</strong> - 高级训练框架，减少样板代码</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">流行第三方库</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Hugging Face Transformers</strong> - 预训练NLP模型</li>
                <li><strong>FastAI</strong> - 简化深度学习的高级API</li>
                <li><strong>PyTorch Geometric</strong> - 图神经网络</li>
                <li><strong>Detectron2</strong> - Facebook的目标检测平台</li>
                <li><strong>MMDetection</strong> - 目标检测工具箱</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">PyTorch发展历程</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2016年</div>
              <div className="flex-grow">Facebook AI Research发布PyTorch 0.1</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2017年</div>
              <div className="flex-grow">快速获得研究社区认可，成为顶会论文主流框架</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2018年</div>
              <div className="flex-grow">PyTorch 1.0发布，引入TorchScript和生产环境支持</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2019年</div>
              <div className="flex-grow">推出PyTorch Mobile，支持移动端部署</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2020年</div>
              <div className="flex-grow">成立PyTorch Foundation，成为Linux基金会项目</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2021年</div>
              <div className="flex-grow">PyTorch 1.9引入混合精度训练和性能优化</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2023年</div>
              <div className="flex-grow">PyTorch 2.0发布torch.compile，大幅提升性能</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2024年</div>
              <div className="flex-grow">持续优化，支持更大规模模型训练和高效推理</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-800 mb-2">实际应用案例</h3>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300 text-left">应用领域</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">中国公司/产品</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">具体应用</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">AI研究与开发</td>
                  <td className="py-2 px-4 border border-gray-300">字节跳动、百度、阿里巴巴</td>
                  <td className="py-2 px-4 border border-gray-300">大规模深度学习模型训练、推荐系统、NLP研究</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">计算机视觉</td>
                  <td className="py-2 px-4 border border-gray-300">商汤科技、旷视科技、腾讯优图</td>
                  <td className="py-2 px-4 border border-gray-300">人脸识别、目标检测、图像分割、视频分析</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">自然语言处理</td>
                  <td className="py-2 px-4 border border-gray-300">智谱AI、百川智能、阿里通义</td>
                  <td className="py-2 px-4 border border-gray-300">大语言模型训练、文本生成、机器翻译</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">自动驾驶</td>
                  <td className="py-2 px-4 border border-gray-300">小鹏汽车、蔚来汽车、百度Apollo</td>
                  <td className="py-2 px-4 border border-gray-300">感知算法、路径规划、端到端自动驾驶</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">移动端推理</td>
                  <td className="py-2 px-4 border border-gray-300">阿里MNN、腾讯NCNN</td>
                  <td className="py-2 px-4 border border-gray-300">移动端模型部署、高效推理框架</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">推荐系统</td>
                  <td className="py-2 px-4 border border-gray-300">字节抖音、快手、淘宝</td>
                  <td className="py-2 px-4 border border-gray-300">个性化推荐、用户画像、内容理解</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">AI芯片与硬件</td>
                  <td className="py-2 px-4 border border-gray-300">华为昇腾、寒武纪</td>
                  <td className="py-2 px-4 border border-gray-300">AI芯片适配、硬件加速优化</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-3 mt-6">
            <div>
              <h4 className="font-semibold text-red-700">国际研究领域</h4>
              <p className="text-gray-700">
                顶级AI会议（NeurIPS、ICML、CVPR等）的大部分论文采用PyTorch实现，
                因其灵活性和易用性特别适合快速原型开发和实验。OpenAI的GPT系列、Meta的LLaMA模型均基于PyTorch训练。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-red-700">开源生态</h4>
              <p className="text-gray-700">
                Hugging Face Transformers（NLP预训练模型）、Stable Diffusion（图像生成）、
                YOLO系列目标检测、MMDetection（目标检测工具箱）等热门开源项目均基于PyTorch构建。
              </p>
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
                <li>• 动态计算图，灵活性极高</li>
                <li>• Pythonic设计，易学易用</li>
                <li>• 强大的GPU加速和生态系统</li>
                <li>• 学术界和工业界广泛采用</li>
                <li>• 优秀的社区支持和文档</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <span className="mr-2">🎯</span>适用场景
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 学术研究和快速原型开发</li>
                <li>• 计算机视觉和NLP应用</li>
                <li>• 大规模深度学习模型训练</li>
                <li>• 自动驾驶和推荐系统</li>
                <li>• 需要灵活性的复杂模型</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                <span className="mr-2">⚠️</span>注意事项
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 需要扎实的Python编程基础</li>
                <li>• 移动端部署不如TensorFlow成熟</li>
                <li>• API变化较快，注意版本兼容</li>
                <li>• 动态图可能带来内存开销</li>
                <li>• 生产部署需要额外工具支持</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                <span className="mr-2">🔗</span>相关技术
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• NumPy（张量操作基础）</li>
                <li>• CUDA（GPU加速编程）</li>
                <li>• TorchScript（模型部署）</li>
                <li>• ONNX（跨框架模型转换）</li>
                <li>• PyTorch Lightning（高级封装）</li>
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
              <h4 className="font-semibold text-blue-900 mb-2">1️⃣ 基础阶段（2-3周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：Python基础、NumPy张量操作、PyTorch安装与环境配置
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：简单的线性回归、逻辑回归，理解张量和自动微分
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2">2️⃣ 神经网络构建（3-4周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：nn.Module、损失函数、优化器、数据加载器
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：手写数字识别（MNIST）、简单CNN图像分类
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-900 mb-2">3️⃣ 经典模型实战（1-2个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：卷积神经网络、循环神经网络、预训练模型使用
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：图像分类（CIFAR-10）、文本分类、目标检测
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2">4️⃣ 高级技巧（2-3个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：迁移学习、数据增强、混合精度训练、分布式训练
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：大规模图像分类、语义分割、GAN图像生成
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
              <h4 className="font-semibold text-red-900 mb-2">5️⃣ 模型部署与优化（1-2个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：TorchScript、ONNX导出、模型量化、TorchServe部署
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：生产环境模型部署、移动端模型优化、API服务搭建
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-400">
            <h4 className="font-semibold text-indigo-900 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              下一步学习建议
            </h4>
            <p className="text-sm text-gray-700">
              掌握PyTorch后，建议深入学习：
            </p>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              <li>• <strong>计算机视觉方向</strong>：学习OpenCV图像处理、目标检测YOLO/Faster R-CNN、图像分割U-Net</li>
              <li>• <strong>自然语言处理方向</strong>：学习Transformer架构、注意力机制、大语言模型LLM微调</li>
              <li>• <strong>生成模型方向</strong>：学习生成对抗网络GAN、自编码器AutoEncoder、扩散模型Diffusion</li>
              <li>• <strong>工程实践方向</strong>：学习模型压缩、知识蒸馏、边缘设备部署、模型监控</li>
            </ul>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default PyTorchPage;