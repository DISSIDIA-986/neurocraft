import React from 'react';
import Layout from '../components/common/Layout';

const GANPage = () => {
  return (
    <Layout
      title="生成对抗网络 (GAN)"
      description="理解生成对抗网络的对抗训练过程、生成器与判别器的角色，以及在图像和内容生成中的应用"
    >
      <div className="p-4">
        {/* Quick Overview Section */}
        <div className="mb-6 bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-600 shadow-sm">
          <h3 className="text-xl font-bold text-pink-900 mb-3 flex items-center">
            <span className="mr-2">📚</span>
            快速概览
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">🎯 适合人群</p>
              <p className="text-gray-700">深度学习进阶者、生成式AI研究者、图像处理开发者</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">⏱️ 预计学习时间</p>
              <p className="text-gray-700">基础：2-3周 | 进阶：2-3个月 | 精通：6-12个月</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">🔧 核心技能</p>
              <p className="text-gray-700">对抗训练、生成器/判别器设计、模式崩溃处理</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">💼 应用领域</p>
              <p className="text-gray-700">图像生成、风格迁移、数据增强、视频合成、药物设计</p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">什么是生成对抗网络？</h3>
          <p className="text-gray-700 mb-3">
            生成对抗网络 (Generative Adversarial Network, GAN) 是由Ian Goodfellow于2014年提出的革命性深度学习架构。
            GAN由两个神经网络组成：生成器(Generator)和判别器(Discriminator)，它们在对抗性游戏中相互竞争、共同进步。
            生成器试图创造逼真的假数据欺骗判别器，判别器则努力区分真实数据和生成数据。
            这种独特的训练机制使GAN能够生成高质量的图像、音频、文本等内容，成为生成式AI的重要基石。
          </p>
          <p className="text-gray-700">
            <strong>生动类比</strong>：GAN就像"造假者与侦探"的博弈游戏。造假者（生成器）试图制作越来越逼真的假钞，
            侦探（判别器）则不断提升辨别能力。造假者根据侦探的反馈改进技术，而侦探也因见到更好的假钞而提高鉴别水平。
            经过无数轮的"猫鼠游戏"，造假者最终能够制作出连专家都难以分辨的"作品"。
            这个过程中，双方都在进步，最终达到一个平衡状态——这就是GAN训练的精髓。
          </p>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">核心概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>生成器 (Generator, G)</strong> - 从随机噪声生成假数据，目标是欺骗判别器</li>
            <li><strong>判别器 (Discriminator, D)</strong> - 区分真实数据和生成数据，输出真实概率</li>
            <li><strong>对抗训练 (Adversarial Training)</strong> - 生成器和判别器相互对抗、交替训练的过程</li>
            <li><strong>隐空间 (Latent Space)</strong> - 生成器输入的低维随机向量空间，编码生成内容的特征</li>
            <li><strong>纳什均衡 (Nash Equilibrium)</strong> - 理想情况下，生成器和判别器达到的平衡状态</li>
            <li><strong>模式崩溃 (Mode Collapse)</strong> - 生成器只生成少数几种样本，缺乏多样性</li>
            <li><strong>训练不稳定性</strong> - GAN训练过程中常见的收敛困难和震荡问题</li>
            <li><strong>条件GAN (Conditional GAN)</strong> - 在生成过程中引入条件信息（如类别标签）</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">GAN工作流程</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">步骤1：生成假数据</h4>
              <p className="text-gray-700 mb-2">生成器从随机噪声z生成假样本</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>z ~ N(0, 1)  # 从正态分布采样噪声</code><br/>
                <code>fake_data = G(z)  # 生成器生成假数据</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2">步骤2：训练判别器</h4>
              <p className="text-gray-700 mb-2">判别器学习区分真实数据和生成数据</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>D_real = D(real_data)  # 判别真实数据</code><br/>
                <code>D_fake = D(fake_data.detach())  # 判别假数据</code><br/>
                <code>loss_D = -[log(D_real) + log(1 - D_fake)]</code><br/>
                <code>loss_D.backward()  # 更新判别器</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">步骤3：训练生成器</h4>
              <p className="text-gray-700 mb-2">生成器学习欺骗判别器，使假数据被判定为真</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>fake_data = G(z)  # 重新生成</code><br/>
                <code>D_fake = D(fake_data)  # 让判别器评估</code><br/>
                <code>loss_G = -log(D_fake)  # 希望D_fake接近1</code><br/>
                <code>loss_G.backward()  # 更新生成器</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">步骤4：迭代对抗训练</h4>
              <p className="text-gray-700 mb-2">重复步骤1-3，直到达到纳什均衡或满足停止条件</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>for epoch in range(epochs):</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;for batch in dataloader:</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;train_discriminator()</code><br/>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;train_generator()</code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">GAN架构变体</h3>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">DCGAN (Deep Convolutional GAN)</h4>
              <p className="text-gray-700 mb-2">使用卷积神经网络作为生成器和判别器的GAN架构</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>创新</strong>：用卷积层替代全连接层，使用BatchNorm和LeakyReLU</li>
                <li><strong>优势</strong>：更稳定的训练，生成高质量图像</li>
                <li><strong>应用</strong>：图像生成、风格迁移</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">cGAN (Conditional GAN)</h4>
              <p className="text-gray-700 mb-2">在生成和判别过程中加入条件信息（如类别标签）</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>创新</strong>：可控生成，指定生成内容的属性</li>
                <li><strong>优势</strong>：生成特定类别或风格的内容</li>
                <li><strong>应用</strong>：图像到图像翻译（pix2pix）、文本到图像</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-2">StyleGAN</h4>
              <p className="text-gray-700 mb-2">NVIDIA提出的高质量图像生成架构，支持精细控制</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>创新</strong>：风格迁移和自适应实例归一化(AdaIN)</li>
                <li><strong>优势</strong>：超高质量人脸生成，细粒度属性控制</li>
                <li><strong>应用</strong>：人脸生成、图像编辑、虚拟角色创作</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-2">CycleGAN</h4>
              <p className="text-gray-700 mb-2">无需配对数据的图像到图像翻译</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>创新</strong>：循环一致性损失，无需配对训练数据</li>
                <li><strong>优势</strong>：更灵活的域转换（如照片→画作）</li>
                <li><strong>应用</strong>：风格转换、季节变换、物体转换</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 mb-2">WGAN (Wasserstein GAN)</h4>
              <p className="text-gray-700 mb-2">使用Wasserstein距离改进损失函数，提升训练稳定性</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>创新</strong>：Earth Mover距离，梯度裁剪或梯度惩罚</li>
                <li><strong>优势</strong>：更稳定的训练，缓解模式崩溃</li>
                <li><strong>应用</strong>：作为更稳定的GAN基础架构</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-semibold text-indigo-800 mb-2">BigGAN</h4>
              <p className="text-gray-700 mb-2">大规模GAN，通过增加模型容量和批量大小提升质量</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                <li><strong>创新</strong>：超大批量、自注意力、正交正则化</li>
                <li><strong>优势</strong>：生成极高质量的高分辨率图像</li>
                <li><strong>应用</strong>：高质量图像合成、数据增强</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">GAN的优势</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>生成质量高</strong> - 能够生成极其逼真的图像和内容</li>
              <li><strong>无需显式建模</strong> - 不需要定义复杂的概率分布</li>
              <li><strong>隐空间可解释</strong> - 隐空间中的向量运算对应语义变化</li>
              <li><strong>多样性</strong> - 理论上可以生成多样化的样本</li>
              <li><strong>应用广泛</strong> - 图像、音频、文本等多模态生成</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">GAN的挑战</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>训练不稳定</strong> - 生成器和判别器容易失衡，训练震荡</li>
              <li><strong>模式崩溃</strong> - 生成器可能只生成少数几种样本</li>
              <li><strong>难以评估</strong> - 缺乏客观的生成质量评估指标</li>
              <li><strong>超参数敏感</strong> - 需要精心调整学习率、架构等参数</li>
              <li><strong>计算成本高</strong> - 训练高质量GAN需要大量计算资源</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">GAN应用场景</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">应用领域</th>
                  <th className="py-2 px-4 border border-gray-300">具体任务</th>
                  <th className="py-2 px-4 border border-gray-300">代表模型</th>
                  <th className="py-2 px-4 border border-gray-300">实际案例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">图像生成</td>
                  <td className="py-2 px-4 border border-gray-300">人脸生成、艺术创作、虚拟角色</td>
                  <td className="py-2 px-4 border border-gray-300">StyleGAN, BigGAN</td>
                  <td className="py-2 px-4 border border-gray-300">ThisPersonDoesNotExist.com</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">图像编辑</td>
                  <td className="py-2 px-4 border border-gray-300">人脸属性编辑、老化、换脸</td>
                  <td className="py-2 px-4 border border-gray-300">StarGAN, FUNIT</td>
                  <td className="py-2 px-4 border border-gray-300">FaceApp年龄变换</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">图像到图像翻译</td>
                  <td className="py-2 px-4 border border-gray-300">照片风格化、语义分割到图像</td>
                  <td className="py-2 px-4 border border-gray-300">pix2pix, CycleGAN</td>
                  <td className="py-2 px-4 border border-gray-300">照片→油画、素描→照片</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">超分辨率</td>
                  <td className="py-2 px-4 border border-gray-300">低分辨率图像增强</td>
                  <td className="py-2 px-4 border border-gray-300">SRGAN, ESRGAN</td>
                  <td className="py-2 px-4 border border-gray-300">老照片修复、视频增强</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">文本到图像</td>
                  <td className="py-2 px-4 border border-gray-300">根据文本描述生成图像</td>
                  <td className="py-2 px-4 border border-gray-300">AttnGAN, StackGAN</td>
                  <td className="py-2 px-4 border border-gray-300">自动插图生成</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">数据增强</td>
                  <td className="py-2 px-4 border border-gray-300">生成合成训练数据</td>
                  <td className="py-2 px-4 border border-gray-300">各类GAN</td>
                  <td className="py-2 px-4 border border-gray-300">医疗图像数据扩充</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">视频生成</td>
                  <td className="py-2 px-4 border border-gray-300">视频合成、动作迁移</td>
                  <td className="py-2 px-4 border border-gray-300">Vid2Vid, MoCoGAN</td>
                  <td className="py-2 px-4 border border-gray-300">Deepfake技术</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">GAN发展历程</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2014年</div>
              <div className="flex-grow">Ian Goodfellow提出GAN，开创生成对抗范式</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2015年</div>
              <div className="flex-grow">DCGAN发布，证明卷积架构的有效性</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2016年</div>
              <div className="flex-grow">条件GAN、InfoGAN等变体出现</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2017年</div>
              <div className="flex-grow">WGAN、CycleGAN改善训练稳定性和应用范围</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2018年</div>
              <div className="flex-grow">BigGAN、StyleGAN将生成质量推向新高度</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2019-2020年</div>
              <div className="flex-grow">StyleGAN2优化，GAN在商业应用中普及</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2021-2024年</div>
              <div className="flex-grow">Diffusion模型崛起，在部分领域超越GAN，但GAN仍在实时生成中占优</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">GAN训练技巧</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>标签平滑</strong> - 使用0.9而非1.0作为真实标签，防止过度自信</li>
            <li><strong>噪声注入</strong> - 向判别器输入添加噪声，提升鲁棒性</li>
            <li><strong>特征匹配</strong> - 让生成器匹配真实数据的统计特征，而非直接欺骗判别器</li>
            <li><strong>Mini-batch判别</strong> - 让判别器看到批次内样本的多样性</li>
            <li><strong>两时间尺度更新规则(TTUR)</strong> - 使用不同学习率训练生成器和判别器</li>
            <li><strong>光谱归一化</strong> - 约束判别器的Lipschitz常数，稳定训练</li>
            <li><strong>渐进式训练</strong> - 从低分辨率逐步增加到高分辨率（Progressive GAN）</li>
          </ul>
        </div>

        <div className="mt-8 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-800 mb-2">GAN vs Diffusion模型</h3>
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">特性</th>
                  <th className="py-2 px-4 border border-gray-300">GAN</th>
                  <th className="py-2 px-4 border border-gray-300">Diffusion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">训练稳定性</td>
                  <td className="py-2 px-4 border border-gray-300">较难，需要技巧</td>
                  <td className="py-2 px-4 border border-gray-300">稳定，易于训练</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">生成速度</td>
                  <td className="py-2 px-4 border border-gray-300">快（一次前向传播）</td>
                  <td className="py-2 px-4 border border-gray-300">慢（多步去噪）</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">样本质量</td>
                  <td className="py-2 px-4 border border-gray-300">高质量</td>
                  <td className="py-2 px-4 border border-gray-300">极高质量</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">多样性</td>
                  <td className="py-2 px-4 border border-gray-300">可能模式崩溃</td>
                  <td className="py-2 px-4 border border-gray-300">多样性好</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">适用场景</td>
                  <td className="py-2 px-4 border border-gray-300">实时生成、视频、图像编辑</td>
                  <td className="py-2 px-4 border border-gray-300">高质量图像、文本到图像</td>
                </tr>
              </tbody>
            </table>
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
                  <td className="py-2 px-4 border border-gray-300 font-medium">图像生成</td>
                  <td className="py-2 px-4 border border-gray-300">商汤科技、旷视科技、阿里鹿班</td>
                  <td className="py-2 px-4 border border-gray-300">AI设计、广告图生成、商品图优化</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">人脸合成</td>
                  <td className="py-2 px-4 border border-gray-300">腾讯AI Lab、百度AI、字节跳动</td>
                  <td className="py-2 px-4 border border-gray-300">虚拟主播、换脸特效、人脸美化</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">图像超分辨率</td>
                  <td className="py-2 px-4 border border-gray-300">商汤、旷视、腾讯优图</td>
                  <td className="py-2 px-4 border border-gray-300">图片画质增强、老照片修复</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">视频生成</td>
                  <td className="py-2 px-4 border border-gray-300">字节跳动、快手、腾讯</td>
                  <td className="py-2 px-4 border border-gray-300">短视频特效、虚拟场景、视频补帧</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">数据增强</td>
                  <td className="py-2 px-4 border border-gray-300">华为、小米AI实验室</td>
                  <td className="py-2 px-4 border border-gray-300">训练数据合成、少样本学习</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">医学影像</td>
                  <td className="py-2 px-4 border border-gray-300">推想科技、依图医疗</td>
                  <td className="py-2 px-4 border border-gray-300">医学图像生成、病变模拟</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">游戏内容生成</td>
                  <td className="py-2 px-4 border border-gray-300">腾讯游戏、网易游戏</td>
                  <td className="py-2 px-4 border border-gray-300">游戏角色生成、场景纹理合成</td>
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
                <li>• 生成高质量逼真内容</li>
                <li>• 无需显式建模数据分布</li>
                <li>• 生成速度快（一次前向）</li>
                <li>• 应用广泛（图像、视频、音频）</li>
                <li>• 创新性强，研究活跃</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <span className="mr-2">🎯</span>适用场景
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 图像生成和编辑</li>
                <li>• 风格迁移和艺术创作</li>
                <li>• 数据增强和合成</li>
                <li>• 超分辨率和图像修复</li>
                <li>• 视频生成和虚拟形象</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                <span className="mr-2">⚠️</span>注意事项
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 训练不稳定，收敛困难</li>
                <li>• 模式崩溃问题常见</li>
                <li>• 超参数敏感，需要调优</li>
                <li>• 需要大量计算资源</li>
                <li>• 存在伦理和滥用风险</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                <span className="mr-2">🔗</span>相关技术
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• VAE自编码器</li>
                <li>• Diffusion扩散模型</li>
                <li>• 对抗训练技巧</li>
                <li>• StyleGAN、CycleGAN变体</li>
                <li>• 评价指标（FID、IS）</li>
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
              <h4 className="font-semibold text-blue-900 mb-2">1️⃣ GAN基础理论（1-2周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：对抗训练原理、生成器/判别器设计、损失函数
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：实现简单GAN生成手写数字（MNIST）
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2">2️⃣ DCGAN架构掌握（2-3周）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：卷积GAN架构、BatchNorm、训练稳定化技巧
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：用DCGAN生成人脸图像（CelebA数据集）
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-900 mb-2">3️⃣ GAN变体探索（1-2个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：WGAN、StyleGAN、pix2pix、CycleGAN等经典变体
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：图像风格迁移、图像到图像翻译
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2">4️⃣ 实际应用开发（2-3个月）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：条件生成、图像编辑、超分辨率、评价指标
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：构建实用的图像生成或编辑应用
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
              <h4 className="font-semibold text-red-900 mb-2">5️⃣ 前沿技术跟踪（持续学习）</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>学习内容</strong>：Diffusion模型、最新GAN变体、伦理问题
              </p>
              <p className="text-sm text-gray-600">
                <strong>实践项目</strong>：对比GAN与Diffusion，探索混合架构
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-400">
            <h4 className="font-semibold text-indigo-900 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              下一步学习建议
            </h4>
            <p className="text-sm text-gray-700">
              掌握GAN后，建议深入学习：
            </p>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              <li>• <strong>自编码器AutoEncoder</strong>：学习VAE等生成模型，与GAN对比</li>
              <li>• <strong>Diffusion扩散模型</strong>：学习Stable Diffusion等新一代生成技术</li>
              <li>• <strong>多模态生成</strong>：学习文生图、图生图、视频生成等跨模态应用</li>
              <li>• <strong>模型评价</strong>：深入理解FID、IS、Precision/Recall等评价指标</li>
              <li>• <strong>伦理与安全</strong>：了解Deepfake检测、水印技术、负责任AI开发</li>
            </ul>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default GANPage;