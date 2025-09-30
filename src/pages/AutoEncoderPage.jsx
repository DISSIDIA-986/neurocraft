import React from 'react';
import Layout from '../components/common/Layout';

const AutoEncoderPage = () => {
  return (
    <Layout
      title="自编码器 (AutoEncoder)"
      description="学习自编码器的编码-解码架构、压缩重构概念，以及在降维和异常检测中的应用"
    >
      <div className="p-4">
        {/* Quick Overview Section */}
        <div className="mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-600 shadow-sm">
          <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center">
            <span className="mr-2">📚</span>
            快速概览
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">🎯 适合人群</p>
              <p className="text-gray-700">深度学习初学者、数据科学家、异常检测工程师</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">⏱️ 预计学习时间</p>
              <p className="text-gray-700">基础：1-2周 | 进阶：1-2个月 | 精通：3-6个月</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">🔧 核心技能</p>
              <p className="text-gray-700">编码-解码架构、降维、异常检测、VAE生成</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">💼 应用领域</p>
              <p className="text-gray-700">降维、异常检测、数据去噪、推荐系统、特征学习</p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">什么是自编码器？</h3>
          <p className="text-gray-700 mb-3">
            自编码器 (AutoEncoder, AE) 是一种无监督学习的神经网络架构，旨在学习数据的压缩表示（编码），
            然后从这个压缩表示重建原始数据（解码）。自编码器由编码器和解码器两部分组成，
            通过训练使重建数据尽可能接近原始输入。这种"压缩-重建"的过程迫使网络学习数据的本质特征，
            过滤掉噪声和冗余信息。自编码器广泛应用于降维、特征学习、异常检测、数据去噪等任务。
          </p>
          <p className="text-gray-700">
            <strong>生动类比</strong>：自编码器就像一个"信息压缩和还原游戏"。想象你要把一本厚书的内容用一页纸概括（编码），
            然后仅凭这页纸的概括重新写出接近原书的内容（解码）。为了做到这一点，你必须提取书中最核心、
            最重要的信息放入概括中。如果概括得好，即使信息被大幅压缩，也能较准确地还原原著的主要内容。
            这个"概括"就是自编码器学到的低维表示（隐编码），它捕捉了数据的精髓。
          </p>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">核心概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>编码器 (Encoder)</strong> - 将高维输入压缩为低维隐编码(latent code)，提取关键特征</li>
            <li><strong>解码器 (Decoder)</strong> - 从隐编码重建原始数据，尽可能还原输入</li>
            <li><strong>隐空间 (Latent Space)</strong> - 编码器输出的低维表示空间，捕捉数据本质</li>
            <li><strong>瓶颈层 (Bottleneck)</strong> - 编码器和解码器之间的最窄层，强制信息压缩</li>
            <li><strong>重建损失 (Reconstruction Loss)</strong> - 衡量重建数据与原始数据的差异，通常使用MSE或交叉熵</li>
            <li><strong>欠完备 (Undercomplete)</strong> - 隐层维度小于输入维度，强制学习压缩表示</li>
            <li><strong>过完备 (Overcomplete)</strong> - 隐层维度大于输入维度，需要正则化防止平凡解</li>
            <li><strong>去噪 (Denoising)</strong> - 通过重建加噪数据学习鲁棒特征</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">AutoEncoder工作流程</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">步骤1：编码(Encoding)</h4>
              <p className="text-gray-700 mb-2">编码器将高维输入x压缩为低维隐编码z</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>z = Encoder(x)  # x: 高维输入，z: 低维编码</code><br/>
                <code># 例如：x ∈ ℝ^784 (28×28图像) → z ∈ ℝ^32</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2">步骤2：解码(Decoding)</h4>
              <p className="text-gray-700 mb-2">解码器从隐编码z重建数据x'，尽量接近原始输入x</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>x' = Decoder(z)  # z: 低维编码，x': 重建数据</code><br/>
                <code># 例如：z ∈ ℝ^32 → x' ∈ ℝ^784</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">步骤3：计算重建损失</h4>
              <p className="text-gray-700 mb-2">比较重建数据x'与原始输入x的差异</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>loss = MSE(x, x') = ||x - x'||²</code><br/>
                <code># 或使用交叉熵（二值数据）</code><br/>
                <code># loss = -Σ[x·log(x') + (1-x)·log(1-x')]</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">步骤4：反向传播训练</h4>
              <p className="text-gray-700 mb-2">通过梯度下降更新编码器和解码器参数，最小化重建损失</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>optimizer.zero_grad()</code><br/>
                <code>loss.backward()  # 计算梯度</code><br/>
                <code>optimizer.step()  # 更新参数</code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">AutoEncoder类型</h3>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">欠完备自编码器 (Undercomplete AE)</h4>
              <p className="text-gray-700 mb-2">隐层维度小于输入维度，强制学习数据的压缩表示</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>特点</strong>：自动实现降维，类似PCA但非线性</li>
                <li><strong>优势</strong>：简单有效，适合特征提取</li>
                <li><strong>应用</strong>：数据降维、特征学习</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">稀疏自编码器 (Sparse AE)</h4>
              <p className="text-gray-700 mb-2">通过稀疏性约束，让隐层神经元大部分保持不活跃</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>特点</strong>：添加L1正则化或KL散度惩罚</li>
                <li><strong>优势</strong>：学习更有意义的特征，防止过拟合</li>
                <li><strong>应用</strong>：特征学习、图像识别预训练</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-2">去噪自编码器 (Denoising AE)</h4>
              <p className="text-gray-700 mb-2">输入加噪声，训练网络从噪声数据重建干净数据</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>特点</strong>：学习鲁棒特征，对噪声不敏感</li>
                <li><strong>优势</strong>：提高泛化能力，适合真实数据</li>
                <li><strong>应用</strong>：图像去噪、数据清洗、鲁棒特征学习</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-2">变分自编码器 (VAE)</h4>
              <p className="text-gray-700 mb-2">学习数据的概率分布，生成新样本</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>特点</strong>：隐编码服从高斯分布，KL散度正则化</li>
                <li><strong>优势</strong>：可生成新样本，隐空间连续可插值</li>
                <li><strong>应用</strong>：图像生成、数据增强、半监督学习</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 mb-2">收缩自编码器 (Contractive AE)</h4>
              <p className="text-gray-700 mb-2">惩罚编码对输入的敏感度，学习对小扰动鲁棒的特征</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>特点</strong>：添加Frobenius范数惩罚编码的Jacobian</li>
                <li><strong>优势</strong>：学习不变特征，提升鲁棒性</li>
                <li><strong>应用</strong>：特征提取、表示学习</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-semibold text-indigo-800 mb-2">卷积自编码器 (Convolutional AE)</h4>
              <p className="text-gray-700 mb-2">使用卷积层和池化/上采样处理图像数据</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>特点</strong>：保留空间结构，参数高效</li>
                <li><strong>优势</strong>：适合图像数据，提取局部特征</li>
                <li><strong>应用</strong>：图像压缩、图像去噪、图像分割</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">AutoEncoder的优势</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>无监督学习</strong> - 不需要标注数据，自动学习特征</li>
              <li><strong>降维能力</strong> - 非线性降维，比PCA更强大</li>
              <li><strong>特征学习</strong> - 学到的隐编码可用于下游任务</li>
              <li><strong>灵活架构</strong> - 可使用全连接、卷积、循环等不同层</li>
              <li><strong>多种应用</strong> - 降维、去噪、异常检测、生成等</li>
              <li><strong>可解释性</strong> - 隐空间维度可视化和解释</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">AutoEncoder的局限</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>重建质量</strong> - 通常不如GAN或Diffusion模型</li>
              <li><strong>平凡解</strong> - 过完备AE可能学到恒等映射</li>
              <li><strong>隐空间不连续</strong> - 标准AE的隐空间可能有"空洞"（VAE改善）</li>
              <li><strong>训练挑战</strong> - 需要平衡压缩和重建质量</li>
              <li><strong>生成能力有限</strong> - 标准AE不擅长生成新样本</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">AutoEncoder应用场景</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">应用领域</th>
                  <th className="py-2 px-4 border border-gray-300">具体任务</th>
                  <th className="py-2 px-4 border border-gray-300">使用的AE类型</th>
                  <th className="py-2 px-4 border border-gray-300">原理</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">降维可视化</td>
                  <td className="py-2 px-4 border border-gray-300">高维数据降维到2D/3D可视化</td>
                  <td className="py-2 px-4 border border-gray-300">欠完备AE</td>
                  <td className="py-2 px-4 border border-gray-300">隐层维度设为2-3维</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">异常检测</td>
                  <td className="py-2 px-4 border border-gray-300">检测异常交易、设备故障</td>
                  <td className="py-2 px-4 border border-gray-300">标准AE</td>
                  <td className="py-2 px-4 border border-gray-300">正常数据重建误差小，异常数据重建误差大</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">图像去噪</td>
                  <td className="py-2 px-4 border border-gray-300">去除图像噪声和伪影</td>
                  <td className="py-2 px-4 border border-gray-300">去噪AE, 卷积AE</td>
                  <td className="py-2 px-4 border border-gray-300">训练从噪声图重建干净图</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">图像压缩</td>
                  <td className="py-2 px-4 border border-gray-300">有损图像压缩</td>
                  <td className="py-2 px-4 border border-gray-300">卷积AE</td>
                  <td className="py-2 px-4 border border-gray-300">编码为低维表示，解码恢复</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">推荐系统</td>
                  <td className="py-2 px-4 border border-gray-300">协同过滤、用户/物品嵌入</td>
                  <td className="py-2 px-4 border border-gray-300">标准AE, 去噪AE</td>
                  <td className="py-2 px-4 border border-gray-300">从稀疏评分矩阵学习低维表示</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">特征提取</td>
                  <td className="py-2 px-4 border border-gray-300">预训练特征提取器</td>
                  <td className="py-2 px-4 border border-gray-300">稀疏AE, 去噪AE</td>
                  <td className="py-2 px-4 border border-gray-300">无监督预训练，隐编码作为特征</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">数据增强</td>
                  <td className="py-2 px-4 border border-gray-300">生成合成训练样本</td>
                  <td className="py-2 px-4 border border-gray-300">VAE</td>
                  <td className="py-2 px-4 border border-gray-300">从隐空间采样生成新样本</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">药物发现</td>
                  <td className="py-2 px-4 border border-gray-300">分子生成和优化</td>
                  <td className="py-2 px-4 border border-gray-300">VAE</td>
                  <td className="py-2 px-4 border border-gray-300">编码分子结构，在隐空间搜索</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">AutoEncoder与其他方法对比</h3>
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">方法</th>
                  <th className="py-2 px-4 border border-gray-300">AutoEncoder</th>
                  <th className="py-2 px-4 border border-gray-300">PCA</th>
                  <th className="py-2 px-4 border border-gray-300">GAN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">降维方式</td>
                  <td className="py-2 px-4 border border-gray-300">非线性</td>
                  <td className="py-2 px-4 border border-gray-300">线性</td>
                  <td className="py-2 px-4 border border-gray-300">不侧重降维</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">训练方式</td>
                  <td className="py-2 px-4 border border-gray-300">重建损失</td>
                  <td className="py-2 px-4 border border-gray-300">特征值分解</td>
                  <td className="py-2 px-4 border border-gray-300">对抗训练</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">生成能力</td>
                  <td className="py-2 px-4 border border-gray-300">有限（VAE可生成）</td>
                  <td className="py-2 px-4 border border-gray-300">无</td>
                  <td className="py-2 px-4 border border-gray-300">强</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">训练稳定性</td>
                  <td className="py-2 px-4 border border-gray-300">稳定</td>
                  <td className="py-2 px-4 border border-gray-300">非常稳定</td>
                  <td className="py-2 px-4 border border-gray-300">不稳定</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">可解释性</td>
                  <td className="py-2 px-4 border border-gray-300">中等</td>
                  <td className="py-2 px-4 border border-gray-300">高（主成分）</td>
                  <td className="py-2 px-4 border border-gray-300">低</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">AutoEncoder发展历程</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">1980s年代</div>
              <div className="flex-grow">自编码器概念提出，用于降维和特征学习</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2006年</div>
              <div className="flex-grow">Hinton等人使用栈式自编码器进行深度学习预训练</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2008年</div>
              <div className="flex-grow">去噪自编码器提出，学习鲁棒特征</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2011年</div>
              <div className="flex-grow">收缩自编码器提出</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2013年</div>
              <div className="flex-grow">变分自编码器(VAE)提出，开创生成式自编码器</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2015年代</div>
              <div className="flex-grow">卷积自编码器在图像任务中广泛应用</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2020年代</div>
              <div className="flex-grow">自编码器在异常检测、推荐系统中持续应用，VAE与Diffusion结合</div>
            </div>
          </div>
        </div>

        {/* Chinese Companies Applications */}
        <div className="mt-8 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-800 mb-2">中国公司应用案例</h3>
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
                  <td className="py-2 px-4 border border-gray-300 font-medium">异常检测</td>
                  <td className="py-2 px-4 border border-gray-300">阿里云、腾讯云、华为云</td>
                  <td className="py-2 px-4 border border-gray-300">网络入侵检测、设备故障预警、异常交易识别</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">推荐系统</td>
                  <td className="py-2 px-4 border border-gray-300">腾讯、字节、淘宝</td>
                  <td className="py-2 px-4 border border-gray-300">特征降维、用户画像压缩、协同过滤</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">图像处理</td>
                  <td className="py-2 px-4 border border-gray-300">商汤、旷视、美图</td>
                  <td className="py-2 px-4 border border-gray-300">图像去噪、压缩、特征提取</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">金融风控</td>
                  <td className="py-2 px-4 border border-gray-300">蚂蚁金服、京东数科、百度金融</td>
                  <td className="py-2 px-4 border border-gray-300">欺诈检测、信用评分、风险评估</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">工业监控</td>
                  <td className="py-2 px-4 border border-gray-300">华为、富士康、海尔</td>
                  <td className="py-2 px-4 border border-gray-300">设备异常检测、预测性维护</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">生物信息</td>
                  <td className="py-2 px-4 border border-gray-300">华大基因、药明康德</td>
                  <td className="py-2 px-4 border border-gray-300">基因序列压缩、蛋白质结构降维</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">数据压缩</td>
                  <td className="py-2 px-4 border border-gray-300">腾讯、爱奇艺、阿里云</td>
                  <td className="py-2 px-4 border border-gray-300">视频压缩、数据存储优化</td>
                </tr>
              </tbody>
            </table>
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
                <li>• 无监督学习，无需标签</li>
                <li>• 学习数据本质特征</li>
                <li>• 降维和特征提取</li>
                <li>• 训练稳定，易于实现</li>
                <li>• 应用广泛（异常检测、去噪）</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <span className="mr-2">🎯</span>适用场景
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 异常检测和故障诊断</li>
                <li>• 数据降维和可视化</li>
                <li>• 图像去噪和修复</li>
                <li>• 推荐系统特征学习</li>
                <li>• 生成式建模（VAE）</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                <span className="mr-2">⚠️</span>注意事项
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 维度选择需要平衡</li>
                <li>• 可能学到平凡解</li>
                <li>• 过完备需要正则化</li>
                <li>• 重建质量依赖数据</li>
                <li>• 生成能力弱于GAN/Diffusion</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                <span className="mr-2">🔗</span>相关技术
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• PCA主成分分析</li>
                <li>• VAE变分自编码器</li>
                <li>• GAN生成对抗网络</li>
                <li>• Transformer编码器</li>
                <li>• 稀疏编码和字典学习</li>
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
              <h4 className="font-semibold text-blue-900 mb-2">1️⃣ 基础原理掌握（1周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：编码-解码架构、重建损失、瓶颈层概念
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：实现简单AE压缩和重建MNIST数字
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2">2️⃣ AE变体学习（2-3周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：欠完备、稀疏、去噪、收缩自编码器
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：对比不同AE在降维和去噪任务中的效果
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-900 mb-2">3️⃣ VAE生成模型（1个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：变分推断、KL散度、重参数化技巧
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：用VAE生成人脸图像，探索隐空间插值
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2">4️⃣ 实际应用开发（1-2个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：异常检测、推荐系统、图像去噪、特征学习
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：构建工业设备异常检测系统
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
              <h4 className="font-semibold text-red-900 mb-2">5️⃣ 高级主题探索（持续学习）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：β-VAE、VQ-VAE、Transformer AE、与GAN/Diffusion对比
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：研究最新生成模型，混合架构实验
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-400">
            <h4 className="font-semibold text-indigo-900 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              下一步学习建议
            </h4>
            <p className="text-sm text-gray-700">
              掌握AutoEncoder后，建议深入学习：
            </p>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              <li>• <strong>生成对抗网络GAN</strong>：对比AE与GAN在生成任务中的优劣</li>
              <li>• <strong>Diffusion扩散模型</strong>：学习新一代生成模型DDPM、Stable Diffusion</li>
              <li>• <strong>降维技术</strong>：学习PCA、t-SNE、UMAP等传统降维方法</li>
              <li>• <strong>Transformer编码器</strong>：理解现代编码器-解码器架构</li>
              <li>• <strong>异常检测系统</strong>：深入学习基于重建误差的异常检测理论和实践</li>
            </ul>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default AutoEncoderPage;