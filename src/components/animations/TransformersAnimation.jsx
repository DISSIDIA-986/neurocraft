import React, { useState, useEffect } from 'react';

const TransformersAnimation = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  const steps = [
    {
      title: "Transformer架构概览",
      description: "Transformer由编码器(Encoder)和解码器(Decoder)组成，通过自注意力机制和前馈网络处理数据",
      content: "architecture-overview"
    },
    {
      title: "输入处理与词嵌入",
      description: "文本被分割为标记(token)，转换为嵌入向量，并加入位置编码信息",
      content: "input-embedding"
    },
    {
      title: "自注意力机制",
      description: "自注意力是Transformer的核心，允许模型在处理每个标记时考虑整个序列的信息",
      content: "self-attention"
    },
    {
      title: "多头注意力",
      description: "多头注意力允许模型同时从不同的表示子空间学习不同的特征模式",
      content: "multi-head-attention"
    },
    {
      title: "编码器内部结构",
      description: "编码器由多个相同的层堆叠而成，每层包含自注意力子层和前馈神经网络子层",
      content: "encoder-structure"
    },
    {
      title: "解码器内部结构",
      description: "解码器除了包含编码器的组件外，还有一个注意力层用于关注编码器的输出",
      content: "decoder-structure"
    },
    {
      title: "掩码注意力",
      description: "在解码器中使用掩码防止模型查看未来的标记，确保自回归生成过程的正确性",
      content: "masked-attention" // 这部分将被完成
    },
    {
      title: "模型变体与应用",
      description: "Transformer架构衍生出多种变体，适用于不同的AI任务，如BERT、GPT、T5等",
      content: "model-variants"
    }
  ];

  useEffect(() => {
    let timer;
    if (!paused) {
      timer = setTimeout(() => {
        setStep((prevStep) => (prevStep + 1) % steps.length);
      }, 5000); // 5秒切换一次
    }
    return () => clearTimeout(timer);
  }, [step, paused, steps.length]);

  const handlePrev = () => {
    setStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
    setPaused(true); // 点击时暂停
  };

  const handleNext = () => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
    setPaused(true); // 点击时暂停
  };

  const handleTogglePause = () => {
    setPaused(!paused);
  };

  const renderContent = () => {
    const currentStep = steps[step];

    if (currentStep.content === "architecture-overview") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            {/* --- 架构概览 --- */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* 编码器 */}
              <div className="w-full md:w-1/2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-center font-medium mb-2">编码器 (Encoder)</h4>
                <div className="space-y-3">
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">输入嵌入 + 位置编码</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-blue-300"></div></div>
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">多头自注意力</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-blue-300"></div></div>
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">Add & Norm</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-blue-300"></div></div>
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">前馈神经网络</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-blue-300"></div></div>
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">Add & Norm</div>
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">N×</div>
              </div>
              {/* 箭头 */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl mb-2">→</div>
                <div className="text-xs text-gray-500 text-center">上下文信息</div>
              </div>
              {/* 解码器 */}
              <div className="w-full md:w-1/2 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-center font-medium mb-2">解码器 (Decoder)</h4>
                <div className="space-y-3">
                  <div className="p-2 bg-green-100 rounded text-center text-sm">输出嵌入 + 位置编码</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-green-300"></div></div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">掩码多头自注意力</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-green-300"></div></div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">Add & Norm</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-green-300"></div></div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">编码器-解码器注意力</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-green-300"></div></div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">Add & Norm</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-green-300"></div></div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">前馈神经网络</div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-green-300"></div></div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">Add & Norm</div>
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">N×</div>
              </div>
            </div>
            {/* 底部说明 */}
            <div className="mt-4 text-sm text-gray-600 text-center">
              最终通过线性层和Softmax将解码器输出转换为目标词汇表上的概率分布
            </div>
          </div>
        </div>
      );
    } else if (currentStep.content === "input-embedding") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-4">
            {/* --- 输入处理 --- */}
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-300 text-center mb-3">
              "The transformer model revolutionized natural language processing."
            </div>
            <div className="flex justify-center items-center mb-3"><div className="text-2xl">↓</div></div>
            {/* 标记化 */}
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {["The", "transform", "##er", "model", "revolution", "##ized", "natural", "language", "processing", "."].map((token, idx) => (
                <div key={idx} className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                  {token}
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mb-3"><div className="text-2xl">↓</div></div>
            {/* 词嵌入 */}
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-300 text-center mb-3">
              <span className="font-mono text-sm">词嵌入矩阵 [batch_size, sequence_length, embedding_dim]</span>
            </div>
            <div className="flex justify-center items-center mb-3"><div className="text-2xl">+</div></div>
            {/* 位置编码 */}
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-300 text-center mb-3">
              <span className="font-mono text-sm">位置编码 sin(pos/10000^(2i/d_model)), cos(...)</span>
            </div>
            <div className="flex justify-center items-center mb-3"><div className="text-2xl">↓</div></div>
            {/* 输入表示 */}
            <div className="p-3 bg-green-50 rounded-lg border border-green-300 text-center">
              <span className="font-mono text-sm">输入表示 [batch_size, sequence_length, d_model]</span>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            Transformer首先将文本标记化，然后转换为词嵌入，并加入位置编码以保留序列顺序信息，因为注意力机制本身没有位置概念。
          </div>
        </div>
      );
    } else if (currentStep.content === "self-attention") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            {/* --- 自注意力 --- */}
            <h4 className="text-center font-medium mb-3">自注意力计算过程</h4>
            {/* Q, K, V */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="p-2 bg-red-50 rounded-lg border border-red-200 text-center">
                <div className="text-sm font-medium mb-1">查询(Q)</div><div className="text-xs">X·W<sup>Q</sup></div>
              </div>
              <div className="p-2 bg-green-50 rounded-lg border border-green-200 text-center">
                <div className="text-sm font-medium mb-1">键(K)</div><div className="text-xs">X·W<sup>K</sup></div>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <div className="text-sm font-medium mb-1">值(V)</div><div className="text-xs">X·W<sup>V</sup></div>
              </div>
            </div>
            {/* 公式与步骤 */}
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="text-xs font-mono p-1 bg-gray-100 rounded">Attention(Q, K, V)</div>
                <div className="text-xs">=</div>
                <div className="text-xs font-mono p-1 bg-gray-100 rounded">softmax(QK<sup>T</sup>/√d<sub>k</sub>)V</div>
              </div>
              <div className="flex justify-center items-center"><div className="text-2xl">↓</div></div>
              <div className="flex flex-col">
                <div className="text-sm font-medium text-center mb-2">注意力矩阵计算步骤</div>
                <div className="p-2 bg-gray-50 rounded-lg text-xs space-y-2">
                  <div>1. 计算查询(Q)和键(K)的点积，得到相似度分数</div>
                  <div>2. 除以缩放因子√d<sub>k</sub>以稳定梯度</div>
                  <div>3. (可选，如解码器) 应用掩码屏蔽未来信息</div>
                  <div>4. 应用softmax函数获得注意力权重 (总和为1)</div>
                  <div>5. 将注意力权重与值(V)相乘，得到加权和表示</div>
                </div>
              </div>
            </div>
            {/* 输出 */}
            <div className="mt-4 text-center">
              <div className="inline-block p-2 bg-purple-50 rounded-lg border border-purple-300 text-sm">
                输出 = 序列中所有标记值的加权组合 (权重由Q-K相似度决定)
              </div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600 max-w-lg text-center">
            自注意力机制使每个标记能够"关注"序列中的所有其他标记（包括自身），并根据相关性为它们分配权重，从而捕获长距离依赖和上下文信息。
          </div>
        </div>
      );
    } else if (currentStep.content === "multi-head-attention") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            {/* --- 多头注意力 --- */}
            <h4 className="text-center font-medium mb-3">多头注意力机制</h4>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* 输入 */}
              <div className="w-full md:w-1/4 p-2 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <div className="text-sm font-medium mb-1">输入</div>
                <div className="bg-white p-1 rounded text-xs">[batch, seq_len, d_model]</div>
              </div>
              <div className="flex flex-col items-center"><div className="text-xl">→</div><div className="text-xs text-gray-500">线性投影</div></div>
              {/* 多个头 */}
              <div className="w-full md:w-2/4">
                <div className="flex flex-wrap justify-center gap-2">
                  {[...Array(4)].map((_, i) => ( // 示例显示4个头
                    <div key={i} className={`p-2 bg-${['red','green','yellow','purple'][i]}-50 rounded-lg border border-${['red','green','yellow','purple'][i]}-200 text-center`}>
                      <div className="text-xs font-medium">Head {i+1}</div>
                      <div className="text-xs">Attention(Q<sub>{i+1}</sub>,K<sub>{i+1}</sub>,V<sub>{i+1}</sub>)</div>
                    </div>
                  ))}
                   <div className="text-center text-gray-500 w-full text-xs">... 通常 8 或 12 个头</div>
                </div>
              </div>
              <div className="flex flex-col items-center"><div className="text-xl">→</div><div className="text-xs text-gray-500">拼接 & 投影</div></div>
              {/* 输出 */}
              <div className="w-full md:w-1/4 p-2 bg-indigo-50 rounded-lg border border-indigo-200 text-center">
                <div className="text-sm font-medium mb-1">输出</div>
                <div className="bg-white p-1 rounded text-xs">[batch, seq_len, d_model]</div>
              </div>
            </div>
            {/* 优势 */}
            <div className="mt-4 p-2 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-center mb-2">多头注意力优势</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="p-1 bg-white rounded">1. 扩展模型关注不同位置的能力</div>
                <div className="p-1 bg-white rounded">2. 提供多个"表示子空间"，学习不同特征</div>
                <div className="p-1 bg-white rounded">3. 增强模型对复杂关系的建模能力</div>
                <div className="p-1 bg-white rounded">4. 稳定学习过程 (相比单头大维度)</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            多头注意力通过并行运行多个独立的自注意力"头"，每个头学习输入的不同方面（不同的Q, K, V投影），然后将所有头的结果拼接并通过最终线性层融合，从而提高模型的表达能力。
          </div>
        </div>
      );
    } else if (currentStep.content === "encoder-structure") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-300 mb-4">
            {/* --- 编码器层 --- */}
            <h4 className="text-center font-medium mb-3">编码器层结构</h4>
            <div className="space-y-4">
              <div className="p-2 bg-blue-50 rounded-lg text-center"><div className="font-medium mb-1">输入</div><div className="text-xs">[batch, seq_len, d_model]</div></div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              {/* 多头自注意力 */}
              <div className="relative p-2 bg-yellow-50 rounded-lg text-center border border-yellow-200">
                <div className="font-medium mb-1">子层 1: 多头自注意力</div>
                <div className="text-xs">MultiHeadAttention(Q, K, V)</div>
                {/* 残差连接线 */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex items-center">
                   <div className="w-8 h-0.5 bg-gray-300"></div>
                   <div className="absolute left-0 -top-10 w-0.5 h-10 bg-gray-300"></div>
                   <div className="absolute left-0 -bottom-10 w-0.5 h-10 bg-gray-300"></div>
                </div>
                 <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-2xl font-thin">+</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              {/* Add & Norm */}
              <div className="p-2 bg-green-50 rounded-lg text-center border border-green-200">
                <div className="font-medium mb-1">Add & Norm</div>
                <div className="text-xs">LayerNorm(x + Sublayer(x))</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
               {/* 前馈网络 */}
              <div className="relative p-2 bg-indigo-50 rounded-lg text-center border border-indigo-200">
                <div className="font-medium mb-1">子层 2: 前馈神经网络</div>
                <div className="text-xs">FFN(x) = max(0, xW₁ + b₁)W₂ + b₂</div>
                 {/* 残差连接线 */}
                 <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex items-center">
                   <div className="w-8 h-0.5 bg-gray-300"></div>
                   <div className="absolute left-0 -top-10 w-0.5 h-10 bg-gray-300"></div>
                   <div className="absolute left-0 -bottom-10 w-0.5 h-10 bg-gray-300"></div>
                </div>
                 <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-2xl font-thin">+</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              {/* Add & Norm */}
              <div className="p-2 bg-green-50 rounded-lg text-center border border-green-200">
                <div className="font-medium mb-1">Add & Norm</div>
                <div className="text-xs">LayerNorm(x + Sublayer(x))</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              <div className="p-2 bg-blue-50 rounded-lg text-center"><div className="font-medium mb-1">输出</div><div className="text-xs">[batch, seq_len, d_model]</div></div>
            </div>
            <div className="mt-3 text-center text-xs text-gray-500">↑ 标准Transformer中重复N次 (通常6层) ↑</div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            编码器每层由两个主要子层组成：多头自注意力和位置独立的前馈神经网络。每个子层输出都经过残差连接和层归一化(Add & Norm)，这有助于训练更深的网络并稳定学习过程。
          </div>
        </div>
      );
    } else if (currentStep.content === "decoder-structure") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-300 mb-4">
             {/* --- 解码器层 --- */}
            <h4 className="text-center font-medium mb-3">解码器层结构</h4>
            <div className="space-y-4">
               {/* 输入 */}
              <div className="p-2 bg-green-50 rounded-lg text-center"><div className="font-medium mb-1">输入 (目标序列)</div><div className="text-xs">[batch, target_seq_len, d_model]</div></div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              {/* 掩码多头自注意力 */}
              <div className="relative p-2 bg-yellow-50 rounded-lg text-center border border-yellow-200">
                <div className="font-medium mb-1">子层 1: 掩码多头自注意力</div>
                <div className="text-xs">MaskedMultiHeadAttention(Q, K, V)</div>
                 {/* 残差连接线 */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex items-center">
                   <div className="w-8 h-0.5 bg-gray-300"></div><div className="absolute left-0 -top-10 w-0.5 h-10 bg-gray-300"></div><div className="absolute left-0 -bottom-10 w-0.5 h-10 bg-gray-300"></div></div><div className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-2xl font-thin">+</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              <div className="p-2 bg-teal-50 rounded-lg text-center border border-teal-200"><div className="font-medium mb-1">Add & Norm</div></div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              {/* 编码器-解码器注意力 */}
              <div className="relative p-2 bg-red-50 rounded-lg text-center border border-red-200">
                <div className="font-medium mb-1">子层 2: 编码器-解码器注意力</div>
                <div className="text-xs">MultiHeadAttention(Q=解码器, K,V=编码器输出)</div>
                 {/* 编码器输出箭头 */}
                <div className="absolute -left-20 top-1/2 transform -translate-y-1/2">
                  <div className="text-xs text-gray-500 whitespace-nowrap">← 编码器输出</div>
                  <div className="w-10 h-0.5 bg-gray-300 mt-1"></div>
                </div>
                 {/* 残差连接线 */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex items-center">
                   <div className="w-8 h-0.5 bg-gray-300"></div><div className="absolute left-0 -top-10 w-0.5 h-10 bg-gray-300"></div><div className="absolute left-0 -bottom-10 w-0.5 h-10 bg-gray-300"></div></div><div className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-2xl font-thin">+</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              <div className="p-2 bg-teal-50 rounded-lg text-center border border-teal-200"><div className="font-medium mb-1">Add & Norm</div></div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              {/* 前馈网络 */}
              <div className="relative p-2 bg-indigo-50 rounded-lg text-center border border-indigo-200">
                <div className="font-medium mb-1">子层 3: 前馈神经网络</div>
                <div className="text-xs">FFN(x)</div>
                 {/* 残差连接线 */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex items-center">
                   <div className="w-8 h-0.5 bg-gray-300"></div><div className="absolute left-0 -top-10 w-0.5 h-10 bg-gray-300"></div><div className="absolute left-0 -bottom-10 w-0.5 h-10 bg-gray-300"></div></div><div className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-2xl font-thin">+</div>
              </div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
              <div className="p-2 bg-teal-50 rounded-lg text-center border border-teal-200"><div className="font-medium mb-1">Add & Norm</div></div>
              <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
               {/* 输出 */}
              <div className="p-2 bg-green-50 rounded-lg text-center"><div className="font-medium mb-1">输出</div><div className="text-xs">[batch, target_seq_len, d_model]</div></div>
            </div>
             <div className="mt-3 text-center text-xs text-gray-500">↑ 标准Transformer中重复N次 (通常6层) ↑</div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            解码器层比编码器层多一个子层：编码器-解码器注意力。第一个子层是掩码多头自注意力（处理目标序列自身），第二个子层让解码器关注编码器的输出（源序列信息），第三个子层是前馈网络。同样包含残差连接和层归一化。
          </div>
        </div>
      );
    } else if (currentStep.content === "masked-attention") { // <-- *** 完成的部分 ***
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
             {/* --- 掩码注意力 --- */}
            <h4 className="text-center font-medium mb-3">掩码注意力机制 (Masked Attention)</h4>
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 mb-4">
              {/* 解释 */}
              <div className="md:w-1/3 text-sm text-gray-700 space-y-2">
                <p>在解码器生成序列时，模型在预测位置 `i` 的词时，<strong>只能</strong>依赖于位置 `i` 之前的词（包括位置 `i` 自身）。</p>
                <p>为实现这一点，在解码器的第一个自注意力子层（掩码多头自注意力）中，会使用一个"掩码"(Mask)。</p>
                <p>这个掩码在计算注意力分数后、应用Softmax之前，将所有对应"未来"位置（`j > i`）的分数设置为一个非常大的负数(如 -∞)。</p>
                <p>Softmax函数会将这些负无穷分数对应的权重变为接近0，从而阻止了信息从未来位置流向当前位置。</p>
              </div>
              {/* 可视化 */}
              <div className="md:w-2/3 flex flex-col items-center">
                <div className="text-sm font-medium mb-2 text-center">注意力分数矩阵 (应用掩码后, Softmax前)</div>
                <div className="grid grid-cols-6 gap-1 p-2 bg-gray-50 border border-gray-200 rounded shadow-sm">
                  {/* 可选的表头 */}
                  <div className="text-xs text-center font-bold text-gray-500">Q \ K</div>
                  {Array(6).fill().map((_, j) => <div key={`h-${j}`} className="text-xs text-center font-bold">词<sub>{j+1}</sub></div>)}
                  {/* 矩阵内容 */}
                  {Array(6).fill().map((_, i) => ( // 行: 查询 Query (当前预测位置)
                    <React.Fragment key={`r-${i}`}>
                      <div className="text-xs text-center font-bold self-center">词<sub>{i+1}</sub></div>
                      {Array(6).fill().map((_, j) => { // 列: 键 Key (关注的位置)
                        const isMasked = j > i; // 是否是未来位置
                        const cellClass = `aspect-square flex items-center justify-center text-xs border ${
                          isMasked
                            ? "bg-gray-300 border-gray-400 text-gray-500" // 被掩码
                            : "bg-blue-100 border-blue-300" // 未被掩码
                        }`;
                        const content = isMasked ? "-∞" : "分数"; // 显示内容

                        return (
                          <div key={`${i}-${j}`} className={cellClass} title={`查询词${i+1}, 关注词${j+1}`}>
                            {content}
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center">
                  灰色区域 (j &gt; i) 代表被掩码的位置，<br/>
                  表示预测 词<sub>i+1</sub> 时不能关注 词<sub>j+1</sub> (如果 j &gt; i)。
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            掩码注意力是确保Transformer解码器（以及类似GPT的纯解码器模型）能够进行自回归（autoregressive）生成的关键机制，即一次生成一个词，并且当前词的生成只依赖于之前已生成的词。
          </div>
        </div>
      );
    } else if (currentStep.content === "model-variants") {
       return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
             {/* --- 模型变体 --- */}
            <h4 className="text-center font-medium mb-3">Transformer模型变体与应用</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 纯编码器 */}
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h5 className="font-medium mb-2 text-center">仅编码器 (Encoder-Only)</h5>
                <p className="text-sm mb-2">特点: 使用Transformer编码器部分，擅长理解输入文本的上下文。</p>
                <p className="text-sm font-semibold mb-1">代表模型:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>BERT (及其变体如RoBERTa, ALBERT)</li>
                  <li>DistilBERT</li>
                </ul>
                <p className="text-sm font-semibold mt-2 mb-1">主要应用:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>文本分类</li>
                  <li>命名实体识别 (NER)</li>
                  <li>问答 (提取式)</li>
                  <li>句子相似度</li>
                </ul>
              </div>
              {/* 纯解码器 */}
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <h5 className="font-medium mb-2 text-center">仅解码器 (Decoder-Only)</h5>
                <p className="text-sm mb-2">特点: 使用Transformer解码器部分（通常无编码器-解码器注意力），擅长按顺序生成文本。</p>
                 <p className="text-sm font-semibold mb-1">代表模型:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>GPT (GPT-2, GPT-3, GPT-4等)</li>
                  <li>CTRL</li>
                </ul>
                <p className="text-sm font-semibold mt-2 mb-1">主要应用:</p>
                 <ul className="list-disc list-inside text-sm space-y-1">
                  <li>文本生成</li>
                  <li>语言建模</li>
                  <li>对话系统</li>
                  <li>代码生成</li>
                </ul>
              </div>
              {/* 编码器-解码器 */}
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <h5 className="font-medium mb-2 text-center">编码器-解码器 (Encoder-Decoder)</h5>
                <p className="text-sm mb-2">特点: 包含完整的编码器和解码器结构，适用于输入和输出序列不同的任务。</p>
                <p className="text-sm font-semibold mb-1">代表模型:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>原始 Transformer</li>
                  <li>T5</li>
                  <li>BART</li>
                  <li>MASS</li>
                </ul>
                <p className="text-sm font-semibold mt-2 mb-1">主要应用:</p>
                 <ul className="list-disc list-inside text-sm space-y-1">
                  <li>机器翻译</li>
                  <li>文本摘要</li>
                  <li>问答 (生成式)</li>
                  <li>对话生成</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            基于Transformer的基础架构，研究人员发展出了多种变体，通过调整结构（如只用编码器、只用解码器、改变注意力方式等）和预训练目标，使其在不同的自然语言处理任务上表现出色。
          </div>
        </div>
      );
    }

    // 如果没有匹配的内容类型，可以返回一个默认提示
    return <div>内容加载中或类型未定义...</div>;
  };

  // --- 主渲染 ---
  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Transformer 工作原理动画分解</h2>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5 mb-6 border border-gray-200">
        {/* 步骤标题和描述 */}
        <h3 className="text-xl font-semibold mb-1 text-indigo-700">{steps[step].title}</h3>
        <p className="text-sm text-gray-600 mb-4">{steps[step].description}</p>

        {/* 内容区域 */}
        <div className="min-h-[400px] flex items-center justify-center p-4 border border-gray-200 rounded-md bg-gray-50 overflow-x-auto">
          {renderContent()}
        </div>

        {/* 进度指示器 */}
        <div className="flex justify-center mt-4 space-x-2">
          {steps.map((s, index) => (
            <button
              key={index}
              onClick={() => { setStep(index); setPaused(true); }}
              className={`w-3 h-3 rounded-full ${
                step === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              } transition-colors duration-300`}
              aria-label={`转到步骤 ${index + 1}: ${s.title}`}
            ></button>
          ))}
        </div>
      </div>

      {/* 控制按钮 */}
       <div className="flex items-center justify-center space-x-4">
         <button onClick={handlePrev} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
           上一步
         </button>
         <button onClick={handleTogglePause} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-20">
           {paused ? '播放' : '暂停'}
         </button>
         <button onClick={handleNext} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
           下一步
         </button>
       </div>

    </div>
  );
};

export default TransformersAnimation;