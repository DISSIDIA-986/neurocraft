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
      content: "masked-attention"
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
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [step, paused, steps.length]);

  const renderContent = () => {
    const currentStep = steps[step];
    
    if (currentStep.content === "architecture-overview") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-1/2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-center font-medium mb-2">编码器 (Encoder)</h4>
                <div className="space-y-3">
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">输入嵌入 + 位置编码</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-blue-300"></div>
                  </div>
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">多头自注意力</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-blue-300"></div>
                  </div>
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">Add & Norm</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-blue-300"></div>
                  </div>
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">前馈神经网络</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-blue-300"></div>
                  </div>
                  <div className="p-2 bg-blue-100 rounded text-center text-sm">Add & Norm</div>
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">N×</div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl mb-2">→</div>
                <div className="text-xs text-gray-500 text-center">上下文信息</div>
              </div>
              
              <div className="w-full md:w-1/2 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-center font-medium mb-2">解码器 (Decoder)</h4>
                <div className="space-y-3">
                  <div className="p-2 bg-green-100 rounded text-center text-sm">输出嵌入 + 位置编码</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-green-300"></div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">掩码多头自注意力</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-green-300"></div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">Add & Norm</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-green-300"></div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">编码器-解码器注意力</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-green-300"></div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">Add & Norm</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-green-300"></div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">前馈神经网络</div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-green-300"></div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-center text-sm">Add & Norm</div>
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">N×</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              最终线性层和Softmax用于将解码器输出转换为目标词汇表上的概率分布
            </div>
          </div>
        </div>
      );
    } else if (currentStep.content === "input-embedding") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-4">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-300 text-center mb-3">
              "The transformer model revolutionized natural language processing."
            </div>
            
            <div className="flex justify-center items-center mb-3">
              <div className="text-2xl">↓</div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {["The", "transform", "##er", "model", "revolution", "##ized", "natural", "language", "processing", "."].map((token, idx) => (
                <div key={idx} className="px-2 py-1 bg-blue-100 rounded-lg border border-blue-300">
                  {token}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center items-center mb-3">
              <div className="text-2xl">↓</div>
            </div>
            
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-300 text-center mb-3">
              <span className="font-mono text-sm">
                词嵌入矩阵 [batch_size, sequence_length, embedding_dim]
              </span>
            </div>
            
            <div className="flex justify-center items-center mb-3">
              <div className="text-2xl">+</div>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-300 text-center mb-3">
              <span className="font-mono text-sm">
                位置编码 sin(pos/10000^(2i/d_model)), cos(pos/10000^(2i/d_model))
              </span>
            </div>
            
            <div className="flex justify-center items-center mb-3">
              <div className="text-2xl">↓</div>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg border border-green-300 text-center">
              <span className="font-mono text-sm">
                输入表示 [batch_size, sequence_length, d_model]
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            Transformer首先将文本标记化，然后转换为词嵌入，并加入位置编码以保留序列顺序信息，因为注意力机制本身没有位置概念
          </div>
        </div>
      );
    } else if (currentStep.content === "self-attention") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-3">自注意力计算过程</h4>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="p-2 bg-red-50 rounded-lg border border-red-200 text-center">
                <div className="text-sm font-medium mb-1">查询(Q)</div>
                <div className="text-xs">X·W<sup>Q</sup></div>
              </div>
              <div className="p-2 bg-green-50 rounded-lg border border-green-200 text-center">
                <div className="text-sm font-medium mb-1">键(K)</div>
                <div className="text-xs">X·W<sup>K</sup></div>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <div className="text-sm font-medium mb-1">值(V)</div>
                <div className="text-xs">X·W<sup>V</sup></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="text-xs font-mono p-1 bg-gray-100 rounded">
                  Attention(Q, K, V)
                </div>
                <div className="text-xs">=</div>
                <div className="text-xs font-mono p-1 bg-gray-100 rounded">
                  softmax(QK<sup>T</sup>/√d<sub>k</sub>)V
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="text-2xl">↓</div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-sm font-medium text-center mb-2">注意力矩阵计算步骤</div>
                <div className="p-2 bg-gray-50 rounded-lg text-xs space-y-2">
                  <div>1. 计算查询(Q)和键(K)的点积</div>
                  <div>2. 除以缩放因子√d<sub>k</sub>以稳定梯度</div>
                  <div>3. 应用softmax函数获得注意力权重</div>
                  <div>4. 将注意力权重与值(V)相乘</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <div className="inline-block p-2 bg-purple-50 rounded-lg border border-purple-300 text-sm">
                输出 = 多个标记的加权组合，根据相关性确定权重
              </div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600 max-w-lg text-center">
            自注意力机制使每个标记能够"查看"序列中的所有其他标记，根据相关性为它们分配权重，从而捕获上下文信息
          </div>
        </div>
      );
    } else if (currentStep.content === "multi-head-attention") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-3">多头注意力机制</h4>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-1/4 p-2 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <div className="text-sm font-medium mb-1">输入</div>
                <div className="bg-white p-1 rounded text-xs">
                  [batch, seq_len, d_model]
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-xl">→</div>
                <div className="text-xs text-gray-500">线性投影</div>
              </div>
              
              <div className="w-full md:w-2/4">
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="p-2 bg-red-50 rounded-lg border border-red-200 text-center">
                    <div className="text-xs font-medium">Head 1</div>
                    <div className="text-xs">Attention(Q₁,K₁,V₁)</div>
                  </div>
                  <div className="p-2 bg-green-50 rounded-lg border border-green-200 text-center">
                    <div className="text-xs font-medium">Head 2</div>
                    <div className="text-xs">Attention(Q₂,K₂,V₂)</div>
                  </div>
                  <div className="p-2 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
                    <div className="text-xs font-medium">Head 3</div>
                    <div className="text-xs">Attention(Q₃,K₃,V₃)</div>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg border border-purple-200 text-center">
                    <div className="text-xs font-medium">Head 4</div>
                    <div className="text-xs">Attention(Q₄,K₄,V₄)</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-xl">→</div>
                <div className="text-xs text-gray-500">拼接 & 投影</div>
              </div>
              
              <div className="w-full md:w-1/4 p-2 bg-indigo-50 rounded-lg border border-indigo-200 text-center">
                <div className="text-sm font-medium mb-1">输出</div>
                <div className="bg-white p-1 rounded text-xs">
                  [batch, seq_len, d_model]
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-2 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-center mb-2">多头注意力优势</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="p-1 bg-white rounded">1. 捕获不同子空间的信息模式</div>
                <div className="p-1 bg-white rounded">2. 关注序列的不同位置</div>
                <div className="p-1 bg-white rounded">3. 学习多种语义关系</div>
                <div className="p-1 bg-white rounded">4. 增强模型表达能力</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            多头注意力通过并行运行多个自注意力"头"，每个头关注输入的不同方面，最后合并结果，极大增强了模型的表示能力
          </div>
        </div>
      );
    } else if (currentStep.content === "encoder-structure") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-3">编码器层结构</h4>
            
            <div className="space-y-4">
              <div className="p-2 bg-blue-50 rounded-lg text-center">
                <div className="font-medium mb-1">输入</div>
                <div className="text-xs">[batch_size, seq_length, d_model]</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <div className="p-2 bg-yellow-50 rounded-lg text-center border border-yellow-200">
                  <div className="font-medium mb-1">多头自注意力</div>
                  <div className="text-xs">MultiHeadAttention(Q, K, V)</div>
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                </div>
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 rotate-90">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="p-2 bg-green-50 rounded-lg text-center border border-green-200">
                <div className="font-medium mb-1">Add & Norm</div>
                <div className="text-xs">LayerNorm(x + Sublayer(x))</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <div className="p-2 bg-indigo-50 rounded-lg text-center border border-indigo-200">
                  <div className="font-medium mb-1">前馈神经网络</div>
                  <div className="text-xs">FFN(x) = max(0, xW₁ + b₁)W₂ + b₂</div>
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                </div>
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 rotate-90">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="p-2 bg-green-50 rounded-lg text-center border border-green-200">
                <div className="font-medium mb-1">Add & Norm</div>
                <div className="text-xs">LayerNorm(x + Sublayer(x))</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="p-2 bg-blue-50 rounded-lg text-center">
                <div className="font-medium mb-1">输出</div>
                <div className="text-xs">[batch_size, seq_length, d_model]</div>
              </div>
            </div>
            
            <div className="mt-3 text-center text-xs text-gray-500">
              ↑ 上述结构在标准Transformer中重复N次(通常为6层) ↑
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            编码器每层由两个主要子层组成：多头自注意力和前馈神经网络。每个子层都有残差连接和层归一化，有助于训练更深的网络
          </div>
        </div>
      );
    } else if (currentStep.content === "decoder-structure") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-3">解码器层结构</h4>
            
            <div className="space-y-4">
              <div className="p-2 bg-green-50 rounded-lg text-center">
                <div className="font-medium mb-1">输入</div>
                <div className="text-xs">[batch_size, target_seq_length, d_model]</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <div className="p-2 bg-yellow-50 rounded-lg text-center border border-yellow-200">
                  <div className="font-medium mb-1">掩码多头自注意力</div>
                  <div className="text-xs">MaskedMultiHeadAttention(Q, K, V)</div>
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                </div>
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 rotate-90">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="p-2 bg-green-50 rounded-lg text-center border border-green-200">
                <div className="font-medium mb-1">Add & Norm</div>
                <div className="text-xs">LayerNorm(x + Sublayer(x))</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="p-2 bg-red-50 rounded-lg text-center border border-red-200 relative">
                <div className="font-medium mb-1">编码器-解码器注意力</div>
                <div className="text-xs">MultiHeadAttention(Q=解码器, K=V=编码器)</div>
                <div className="absolute -left-20 top-1/2 transform -translate-y-1/2">
                  <div className="text-xs text-gray-500">来自编码器</div>
                  <div className="w-6 h-0.5 bg-gray-300 mt-1"></div>
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                </div>
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 rotate-90">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="p-2 bg-green-50 rounded-lg text-center border border-green-200">
                <div className="font-medium mb-1">Add & Norm</div>
                <div className="text-xs">LayerNorm(x + Sublayer(x))</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <div className="p-2 bg-indigo-50 rounded-lg text-center border border-indigo-200">
                  <div className="font-medium mb-1">前馈神经网络</div>
                  <div className="text-xs">FFN(x) = max(0, xW₁ + b₁)W₂ + b₂</div>
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                </div>
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 rotate-90">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="p-2 bg-green-50 rounded-lg text-center border border-green-200">
                <div className="font-medium mb-1">Add & Norm</div>
                <div className="text-xs">LayerNorm(x + Sublayer(x))</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-0.5 h-6 bg-gray-300"></div>
              </div>
              
              <div className="p-2 bg-green-50 rounded-lg text-center">
                <div className="font-medium mb-1">输出</div>
                <div className="text-xs">[batch_size, target_seq_length, d_model]</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            解码器在编码器的基础上增加了一个额外的注意力子层，该子层对编码器输出执行多头注意力，使解码器能够关注输入序列的相关部分
          </div>
        </div>
      );
    } else if (currentStep.content === "masked-attention") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-3">掩码注意力机制</h4>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-sm font-medium mb-2 text-center">自注意力矩阵</div>
                <div className="grid grid-cols-6 gap-1">
                  {Array(6).fill().map((_, i) => (
                    Array(6).fill().map((_, j) => (
                      <div 
                        key={`${i}-${j}`}
                        className={`w-6 h-6 flex items-center justify-center text-xs rounded
                          ${j <= i ? 'bg-blue-100' : 'bg-red-100'}`}
                      >
                        {j <= i ? '✓' : '✗'}
                      </div>
                    ))
                  ))}
                </div>
                <div className="text-xs text-center mt-2">解码器自注意力的掩码模式</div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-center text-sm font-medium mb-2">掩码作用</div>
                <div className="p-2 bg-yellow-50 rounded-lg border border-yellow-200 text-xs max-w-xs">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>防止当前位置看到未来位置的信息</li>
                    <li>确保预测第i个标记时只使用前i个标记</li>
                    <li>支持自回归生成过程</li>
                    <li>训练时模拟推理过程</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-2 bg-indigo-50 rounded-lg border border-indigo-200">
                <h5 className="text-center text-sm font-medium mb-2">掩码自注意力计算</h5>
                <div className="text-xs space-y-2">
                  <div className="p-1 bg-white rounded">1. 计算注意力分数: score = Q·K<sup>T</sup></div>
                  <div className="p-1 bg-white rounded">2. 应用掩码: score = score + mask (mask将未来位置设为-∞)</div>
                  <div className="p-1 bg-white rounded">3. 缩放并应用softmax: weights = softmax(score/√d<sub>k</sub>)</div>
                  <div className="p-1 bg-white rounded">4. 加权求和: output = weights·V</div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <div className="p-2 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-center text-sm font-medium mb-1">训练阶段</div>
                  <div className="text-xs">整个目标序列并行处理，<br/>但使用掩码确保合适的依赖关系</div>
                </div>
                <div className="p-2 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-center text-sm font-medium mb-1">推理阶段</div>
                  <div className="text-xs">自回归生成，<br/>每次生成一个标记</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            掩码注意力通过限制解码器中每个位置只能关注自身及之前的位置，对未来信息进行屏蔽，实现序列的自回归生成
          </div>
        </div>
      );
    } else if (currentStep.content === "model-variants") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-3">Transformer模型变体与应用</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-medium mb-1 text-center">基于编码器的模型</div>
                <div className="space-y-2 text-sm">
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">BERT:</div>
                    <div className="text-xs">双向编码器表示，适用于理解任务，如分类、问答和命名实体识别</div>
                  </div>
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">RoBERTa:</div>
                    <div className="text-xs">BERT的优化版本，使用更多数据和更好的训练方法</div>
                  </div>
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">DistilBERT:</div>
                    <div className="text-xs">BERT的精简版，速度更快但保持大部分性能</div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-medium mb-1 text-center">基于解码器的模型</div>
                <div className="space-y-2 text-sm">
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">GPT系列:</div>
                    <div className="text-xs">自回归语言模型，适用于文本生成、对话和创意写作</div>
                  </div>
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">BLOOM:</div>
                    <div className="text-xs">大型多语言解码器模型，支持46种语言和13种编程语言</div>
                  </div>
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">LLaMA:</div>
                    <div className="text-xs">Meta开发的高效大型语言模型系列</div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="font-medium mb-1 text-center">编码器-解码器模型</div>
                <div className="space-y-2 text-sm">
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">T5:</div>
                    <div className="text-xs">将所有NLP任务统一为文本到文本的格式</div>
                  </div>
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">BART:</div>
                    <div className="text-xs">针对序列到序列任务优化的预训练模型</div>
                  </div>
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">mT5:</div>
                    <div className="text-xs">T5的多语言版本，支持101种语言</div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="font-medium mb-1 text-center">其他特殊变体</div>
                <div className="space-y-2 text-sm">
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">ALBERT:</div>
                    <div className="text-xs">具有参数共享的轻量级BERT</div>
                  </div>
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">Longformer:</div>
                    <div className="text-xs">针对长文本处理优化的注意力机制</div>
                  </div>
                  <div className="p-1.5 bg-white rounded flex items-start">
                    <div className="font-medium mr-1.5">ViT:</div>
                    <div className="text-xs">Vision Transformer，应用于计算机视觉领域</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="font-medium mb-2 text-center">应用领域</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                <div className="p-1 bg-white rounded text-center">机器翻译</div>
                <div className="p-1 bg-white rounded text-center">文本摘要</div>
                <div className="p-1 bg-white rounded text-center">问答系统</div>
                <div className="p-1 bg-white rounded text-center">文本分类</div>
                <div className="p-1 bg-white rounded text-center">语音识别</div>
                <div className="p-1 bg-white rounded text-center">图像理解</div>
                <div className="p-1 bg-white rounded text-center">代码生成</div>
                <div className="p-1 bg-white rounded text-center">对话系统</div>
                <div className="p-1 bg-white rounded text-center">跨模态任务</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-lg text-center">
            Transformer架构的灵活性使其成为现代人工智能的基础，不同变体针对特定任务进行了优化，并且已扩展到语言以外的多个领域
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center mb-2">Transformer架构动画演示</h2>
        <p className="text-gray-600 text-center">
          交互式了解Transformer模型的关键组件和工作原理
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <button 
            onClick={() => setStep((prevStep) => (prevStep - 1 + steps.length) % steps.length)} 
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            上一步
          </button>
          <button 
            onClick={() => setPaused(!paused)} 
            className={`px-3 py-1 rounded ${paused ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
          >
            {paused ? '继续' : '暂停'}
          </button>
          <button 
            onClick={() => setStep((prevStep) => (prevStep + 1) % steps.length)} 
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            下一步
          </button>
        </div>
        
        <div className="flex overflow-x-auto pb-2 mb-4">
          {steps.map((s, i) => (
            <button 
              key={i}
              onClick={() => setStep(i)}
              className={`flex-shrink-0 px-3 py-1 mr-2 rounded text-sm ${
                i === step ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {i+1}. {s.title}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-2 text-center">
            {steps[step].title}
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {steps[step].description}
          </p>
          
          <div className="py-4">
            {renderContent()}
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        步骤 {step + 1} / {steps.length} • 每5秒自动前进 • 点击按钮手动导航
      </div>
    </div>
  );
};

export default TransformersAnimation;
