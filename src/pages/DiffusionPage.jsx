import React from 'react';
import Layout from '../components/common/Layout';
import DiffusionAnimation from '../components/animations/diffusion/DiffusionAnimation.jsx';

const DiffusionPage = () => {
  return (
    <Layout
      title="扩散模型可视化"
      description="通过交互式动画理解扩散模型如何从噪声生成图像"
    >
      <div className="p-4">
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">关于此动画</h3>
          <p className="text-gray-700">
            这个可视化展示了扩散模型的工作原理。扩散模型是一种强大的生成模型,被广泛应用于图像生成(如DALL-E、Stable Diffusion、Midjourney等)。
            它的核心思想非常简单:先学习如何逐步向图像添加噪声,然后学习如何逆转这个过程,从纯噪声中恢复出清晰的图像。
            通过动画,您可以直观地看到图像如何一步步变成噪声,以及模型如何从噪声中重建图像。
          </p>
        </div>

        <DiffusionAnimation />

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">关键概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>前向扩散过程(加噪)</strong> - 逐步向原始图像添加高斯噪声,直到图像完全变成随机噪声。这个过程是固定的,不需要学习。</li>
            <li><strong>反向扩散过程(去噪)</strong> - 神经网络学习如何逐步去除噪声,从纯噪声恢复出清晰图像。这是模型需要学习的核心部分。</li>
            <li><strong>噪声预测</strong> - 模型在每一步预测当前图像中的噪声,然后减去这些噪声,得到更清晰的图像。</li>
            <li><strong>时间步</strong> - 扩散过程被分成多个小步骤(如1000步),每步只添加或去除一点点噪声,使过程更加平滑和可控。</li>
            <li><strong>条件生成</strong> - 可以通过文本、图像等条件引导扩散模型生成特定内容,这就是DALL-E等模型能够根据文字描述生成图像的原理。</li>
          </ul>
        </div>

        <div className="mt-8 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-green-800 mb-2">生活中的类比</h3>
          <p className="text-gray-700">
            想象一下雕刻家从一块粗糙的石头中雕刻出精美的雕像:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>前向过程</strong>就像把雕像逐渐风化成一块粗糙的石头(添加噪声)。</li>
            <li><strong>反向过程</strong>就像雕刻家一点一点地去除多余的石料,最终雕刻出精美的雕像(去除噪声)。</li>
            <li><strong>时间步</strong>就像雕刻的每一刀,每一刀只去除一点点,积累起来就能完成整个雕像。</li>
            <li><strong>条件生成</strong>就像雕刻家根据设计图纸(文本提示)来指导雕刻方向。</li>
          </ul>
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">实际应用</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>AI绘画</strong> - DALL-E 3、Stable Diffusion、Midjourney等工具使用扩散模型根据文字描述生成高质量图像。</li>
            <li><strong>图像编辑</strong> - 修复照片、改变风格、局部编辑等,扩散模型可以精确控制图像的生成和修改。</li>
            <li><strong>视频生成</strong> - Runway、Pika等工具使用扩散模型生成视频内容。</li>
            <li><strong>3D内容生成</strong> - 从2D图像生成3D模型,或直接生成3D场景。</li>
            <li><strong>音频生成</strong> - 扩散模型也被应用于音乐和语音生成。</li>
            <li><strong>科学研究</strong> - 药物分子设计、蛋白质结构预测等领域也在使用扩散模型。</li>
          </ul>
        </div>

        <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">学习建议</h3>
          <p className="text-gray-700">
            扩散模型的核心思想非常直观:加噪 → 学习去噪。观看动画时,注意以下几点:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li>仔细观察前向过程中图像如何逐步变模糊,最终变成纯噪声。</li>
            <li>在反向过程中,注意图像如何从噪声中一点点显现出轮廓和细节。</li>
            <li>思考为什么要分成多个小步骤,而不是一步到位?</li>
            <li>理解扩散模型与其他生成模型(如GAN)的区别:扩散模型训练更稳定,生成质量更高。</li>
          </ul>
        </div>

        <div className="mt-8 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-800 mb-2">与其他模型的对比</h3>
          <div className="text-gray-700">
            <p className="mb-2"><strong>扩散模型 vs GAN(生成对抗网络):</strong></p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>扩散模型训练更稳定,不容易出现模式崩塌</li>
              <li>扩散模型生成质量更高,细节更丰富</li>
              <li>GAN生成速度更快,但质量不如扩散模型</li>
            </ul>
            <p className="mb-2"><strong>扩散模型 vs VAE(变分自编码器):</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>扩散模型通过多步去噪生成,VAE通过潜在空间解码生成</li>
              <li>扩散模型生成质量更高,但计算成本也更高</li>
              <li>VAE推理速度快,适合实时应用</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiffusionPage;
