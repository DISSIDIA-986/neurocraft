import React, { useState, useEffect } from 'react';

const PretrainedModelAnimation = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  const steps = [
    {
      title: "预训练模型概览",
      description: "预训练模型就像一个大学毕业生，具备了广泛的基础知识，可以快速适应各种工作",
      content: "overview"
    },
    {
      title: "预训练阶段：大学教育",
      description: "在大学里学习数学、语言、科学等基础学科，建立知识体系和学习能力",
      content: "pretraining"
    },
    {
      title: "知识表示与特征提取",
      description: "通过学习将知识编码为向量表示，就像在大学中形成思维模式和知识结构",
      content: "representation"
    },
    {
      title: "迁移学习：求职准备",
      description: "毕业生找工作时，可以将大学知识迁移到不同的职业领域",
      content: "transfer"
    },
    {
      title: "微调阶段：岗位培训",
      description: "针对特定工作进行专门培训，快速掌握专业技能",
      content: "finetuning"
    },
    {
      title: "特征提取：发挥专长",
      description: "保持核心能力不变，只在特定任务上发挥专长，就像顾问的工作模式",
      content: "feature-extraction"
    },
    {
      title: "零样本与少样本学习",
      description: "凭借丰富的基础知识，能够在没有或仅有少量示例的情况下处理新任务",
      content: "few-shot"
    },
    {
      title: "实际应用：工作表现",
      description: "在实际工作中发挥能力，解决具体问题，创造价值",
      content: "application"
    }
  ];

  useEffect(() => {
    let timer;
    if (!paused) {
      timer = setTimeout(() => {
        setStep((prevStep) => (prevStep + 1) % steps.length);
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [step, paused, steps.length]);

  const renderContent = () => {
    const currentStep = steps[step];

    if (currentStep.content === "overview") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="w-full md:w-1/3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">🎓</span>
                  <h4 className="font-medium text-blue-800">大学毕业生小明</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="p-2 bg-blue-100 rounded">📚 数学基础</div>
                  <div className="p-2 bg-blue-100 rounded">🗣️ 语言能力</div>
                  <div className="p-2 bg-blue-100 rounded">🔬 科学素养</div>
                  <div className="p-2 bg-blue-100 rounded">🧠 学习能力</div>
                  <div className="p-2 bg-blue-100 rounded">💭 思维方式</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm text-gray-600 text-center">快速适应</div>
              </div>

              <div className="w-full md:w-1/3 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">💼</span>
                  <h4 className="font-medium text-green-800">各种工作机会</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="p-2 bg-green-100 rounded">👨‍💻 程序员</div>
                  <div className="p-2 bg-green-100 rounded">🌐 翻译员</div>
                  <div className="p-2 bg-green-100 rounded">💼 咨询师</div>
                  <div className="p-2 bg-green-100 rounded">🎨 设计师</div>
                  <div className="p-2 bg-green-100 rounded">📊 分析师</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">≡</div>
                <div className="text-sm text-gray-600 text-center">类比</div>
              </div>

              <div className="w-full md:w-1/3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">🤖</span>
                  <h4 className="font-medium text-purple-800">预训练模型</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="p-2 bg-purple-100 rounded">📝 文本分类</div>
                  <div className="p-2 bg-purple-100 rounded">❓ 问答系统</div>
                  <div className="p-2 bg-purple-100 rounded">🔍 信息检索</div>
                  <div className="p-2 bg-purple-100 rounded">🌍 机器翻译</div>
                  <div className="p-2 bg-purple-100 rounded">📄 文本摘要</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-2xl">
            预训练模型就像拥有广泛基础知识的大学毕业生，能够快速适应各种具体任务，无需从零开始学习
          </div>
        </div>
      );
    } else if (currentStep.content === "pretraining") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <div className="flex flex-col items-center">
              <div className="text-center mb-4">
                <span className="text-5xl">🏫</span>
                <h4 className="text-lg font-medium text-gray-800 mt-2">名牌大学 - 通识教育阶段</h4>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 w-full">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
                  <div className="text-2xl mb-1">📐</div>
                  <div className="text-sm font-medium">数学</div>
                  <div className="text-xs text-gray-600">逻辑思维基础</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200 text-center">
                  <div className="text-2xl mb-1">📚</div>
                  <div className="text-sm font-medium">语言学</div>
                  <div className="text-xs text-gray-600">语言理解能力</div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
                  <div className="text-2xl mb-1">🔬</div>
                  <div className="text-sm font-medium">科学</div>
                  <div className="text-xs text-gray-600">分析推理能力</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 text-center">
                  <div className="text-2xl mb-1">📖</div>
                  <div className="text-sm font-medium">文学</div>
                  <div className="text-xs text-gray-600">文本理解能力</div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-center">
                  <div className="text-2xl mb-1">🌍</div>
                  <div className="text-sm font-medium">历史</div>
                  <div className="text-xs text-gray-600">知识关联能力</div>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200 text-center">
                  <div className="text-2xl mb-1">🎨</div>
                  <div className="text-sm font-medium">艺术</div>
                  <div className="text-xs text-gray-600">创造性思维</div>
                </div>
              </div>

              <div className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-center text-sm font-medium mb-2">学习成果</h5>
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs max-w-md">
                    <div className="p-1.5 bg-white rounded">💡 批判性思维</div>
                    <div className="p-1.5 bg-white rounded">🧩 问题解决能力</div>
                    <div className="p-1.5 bg-white rounded">🔍 信息处理能力</div>
                    <div className="p-1.5 bg-white rounded">🎯 快速学习能力</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            预训练阶段如同大学教育，模型在海量数据上学习语言、知识和推理模式，建立了强大的基础能力
          </div>
        </div>
      );
    } else if (currentStep.content === "representation") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-4">知识的向量化表示</h4>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-center mb-2">
                  <span className="text-3xl">🧠</span>
                  <h5 className="text-sm font-medium">大脑中的知识</h5>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-1.5 bg-blue-100 rounded">"猫"的概念</div>
                  <div className="p-1.5 bg-blue-100 rounded">动物特征</div>
                  <div className="p-1.5 bg-blue-100 rounded">行为模式</div>
                  <div className="p-1.5 bg-blue-100 rounded">语义关系</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl mb-1">→</div>
                <div className="text-xs text-gray-500">编码</div>
              </div>

              <div className="w-full md:w-1/3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-center mb-2">
                  <span className="text-3xl">📊</span>
                  <h5 className="text-sm font-medium">向量表示</h5>
                </div>
                <div className="bg-white p-2 rounded font-mono text-xs">
                  [0.8, -0.3, 0.6, 0.1,<br/>
                   0.4, 0.9, -0.2, 0.7,<br/>
                   0.3, -0.5, 0.8, 0.2,<br/>
                   ...]
                </div>
                <div className="text-xs text-center mt-1 text-gray-600">768维向量</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-xs text-gray-500">快速计算</div>
              </div>

              <div className="w-full md:w-1/3 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-center mb-2">
                  <span className="text-3xl">🎯</span>
                  <h5 className="text-sm font-medium">语义相似度</h5>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="p-1 bg-green-100 rounded">猫 ↔ 狗: 0.85</div>
                  <div className="p-1 bg-green-100 rounded">猫 ↔ 宠物: 0.90</div>
                  <div className="p-1 bg-green-100 rounded">猫 ↔ 汽车: 0.15</div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <h5 className="text-center text-sm font-medium mb-2">向量空间的特性</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="p-1 bg-white rounded text-center">语义相似性</div>
                <div className="p-1 bg-white rounded text-center">可计算性</div>
                <div className="p-1 bg-white rounded text-center">可组合性</div>
                <div className="p-1 bg-white rounded text-center">可迁移性</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            就像大学生在学习中形成思维框架一样，预训练模型将知识编码为数学向量，便于计算和迁移应用
          </div>
        </div>
      );
    } else if (currentStep.content === "transfer") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-4">迁移学习：知识的跨领域应用</h4>

            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                  <span className="text-4xl block mb-2">🎓</span>
                  <div className="text-sm font-medium">大学毕业生小明</div>
                  <div className="text-xs text-gray-600 mt-1">
                    数学、语言、逻辑思维等基础能力
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="text-2xl">↓</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-center">
                    <span className="text-3xl block mb-2">👨‍💻</span>
                    <div className="text-sm font-medium">程序员岗位</div>
                  </div>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="p-1 bg-green-100 rounded">数学 → 算法逻辑</div>
                    <div className="p-1 bg-green-100 rounded">语言 → 代码理解</div>
                    <div className="p-1 bg-green-100 rounded">逻辑 → 问题分析</div>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-center">
                    <span className="text-3xl block mb-2">🌐</span>
                    <div className="text-sm font-medium">翻译岗位</div>
                  </div>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="p-1 bg-yellow-100 rounded">语言 → 双语能力</div>
                    <div className="p-1 bg-yellow-100 rounded">文学 → 文化理解</div>
                    <div className="p-1 bg-yellow-100 rounded">思维 → 表达转换</div>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-center">
                    <span className="text-3xl block mb-2">💼</span>
                    <div className="text-sm font-medium">咨询岗位</div>
                  </div>
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="p-1 bg-purple-100 rounded">逻辑 → 分析能力</div>
                    <div className="p-1 bg-purple-100 rounded">沟通 → 客户交流</div>
                    <div className="p-1 bg-purple-100 rounded">知识 → 方案设计</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-center text-sm font-medium mb-2">迁移学习的优势</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div className="p-1.5 bg-white rounded text-center">⚡ 学习速度快</div>
                  <div className="p-1.5 bg-white rounded text-center">💰 成本低</div>
                  <div className="p-1.5 bg-white rounded text-center">🎯 效果好</div>
                  <div className="p-1.5 bg-white rounded text-center">🔄 适应性强</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            迁移学习让预训练模型能够将通用知识应用到特定任务上，就像毕业生利用大学知识快速适应不同工作
          </div>
        </div>
      );
    } else if (currentStep.content === "finetuning") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-4">微调：针对性的专业培训</h4>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:w-2/5 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-center mb-2">
                    <span className="text-3xl">👨‍🎓</span>
                    <h5 className="text-sm font-medium">有基础的候选人</h5>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="p-1 bg-blue-100 rounded">✓ 大学数学基础</div>
                    <div className="p-1 bg-blue-100 rounded">✓ 编程概念理解</div>
                    <div className="p-1 bg-blue-100 rounded">✓ 逻辑思维能力</div>
                    <div className="p-1 bg-blue-100 rounded">✓ 学习能力强</div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-xs text-gray-500">专业培训</div>
                  <div className="text-xs text-gray-500">1-2周</div>
                </div>

                <div className="w-full md:w-2/5 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-center mb-2">
                    <span className="text-3xl">👨‍💻</span>
                    <h5 className="text-sm font-medium">专业Web开发者</h5>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="p-1 bg-green-100 rounded">✓ React框架熟练</div>
                    <div className="p-1 bg-green-100 rounded">✓ 项目架构设计</div>
                    <div className="p-1 bg-green-100 rounded">✓ 性能优化技巧</div>
                    <div className="p-1 bg-green-100 rounded">✓ 团队协作规范</div>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 my-2">VS</div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:w-2/5 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-center mb-2">
                    <span className="text-3xl">👶</span>
                    <h5 className="text-sm font-medium">零基础新人</h5>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="p-1 bg-red-100 rounded">✗ 编程基础薄弱</div>
                    <div className="p-1 bg-red-100 rounded">✗ 计算机概念模糊</div>
                    <div className="p-1 bg-red-100 rounded">✗ 逻辑思维待培养</div>
                    <div className="p-1 bg-red-100 rounded">✗ 学习曲线陡峭</div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-1">🐌</div>
                  <div className="text-xs text-gray-500">从零培训</div>
                  <div className="text-xs text-gray-500">6-12个月</div>
                </div>

                <div className="w-full md:w-2/5 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-center mb-2">
                    <span className="text-3xl">👨‍💻</span>
                    <h5 className="text-sm font-medium">初级Web开发者</h5>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="p-1 bg-orange-100 rounded">△ 基础功能实现</div>
                    <div className="p-1 bg-orange-100 rounded">△ 简单项目开发</div>
                    <div className="p-1 bg-orange-100 rounded">△ 需要指导和复习</div>
                    <div className="p-1 bg-orange-100 rounded">△ 经验有待积累</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <h5 className="text-center text-sm font-medium mb-2">微调的类型</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-white rounded">
                    <div className="font-medium">全参数微调</div>
                    <div className="text-gray-600">全面深度培训</div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <div className="font-medium">参数高效微调</div>
                    <div className="text-gray-600">重点技能强化</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            微调让预训练模型针对特定任务进行专门训练，就像有基础的人能够快速掌握专业技能
          </div>
        </div>
      );
    } else if (currentStep.content === "feature-extraction") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-4">特征提取：发挥专长而不改变核心</h4>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">👨‍🏫</span>
                  <h5 className="text-lg font-medium">资深顾问小明</h5>
                  <div className="text-sm text-gray-600">保持核心能力不变</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <div className="text-center text-xs font-medium mb-1">🔒 核心知识</div>
                    <div className="space-y-1 text-xs">
                      <div className="p-1 bg-white rounded">数学分析能力</div>
                      <div className="p-1 bg-white rounded">逻辑推理能力</div>
                      <div className="p-1 bg-white rounded">知识整合能力</div>
                    </div>
                  </div>

                  <div className="p-2 bg-green-100 rounded-lg">
                    <div className="text-center text-xs font-medium mb-1">📊 业务A项目</div>
                    <div className="space-y-1 text-xs">
                      <div className="p-1 bg-white rounded">市场分析报告</div>
                      <div className="p-1 bg-white rounded">策略建议</div>
                      <div className="p-1 bg-white rounded">风险评估</div>
                    </div>
                  </div>

                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <div className="text-center text-xs font-medium mb-1">🏢 业务B项目</div>
                    <div className="space-y-1 text-xs">
                      <div className="p-1 bg-white rounded">流程优化</div>
                      <div className="p-1 bg-white rounded">效率提升</div>
                      <div className="p-1 bg-white rounded">成本控制</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="text-2xl">≡</div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">🤖</span>
                  <h5 className="text-lg font-medium">预训练模型</h5>
                  <div className="text-sm text-gray-600">冻结预训练参数</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <div className="text-center text-xs font-medium mb-1">🔒 预训练层</div>
                    <div className="space-y-1 text-xs">
                      <div className="p-1 bg-white rounded">语言理解</div>
                      <div className="p-1 bg-white rounded">特征提取</div>
                      <div className="p-1 bg-white rounded">知识编码</div>
                    </div>
                  </div>

                  <div className="p-2 bg-green-100 rounded-lg">
                    <div className="text-center text-xs font-medium mb-1">🏷️ 分类器A</div>
                    <div className="space-y-1 text-xs">
                      <div className="p-1 bg-white rounded">情感分析</div>
                      <div className="p-1 bg-white rounded">正面/负面</div>
                      <div className="p-1 bg-white rounded">置信度</div>
                    </div>
                  </div>

                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <div className="text-center text-xs font-medium mb-1">🏷️ 分类器B</div>
                    <div className="space-y-1 text-xs">
                      <div className="p-1 bg-white rounded">主题分类</div>
                      <div className="p-1 bg-white rounded">科技/体育/娱乐</div>
                      <div className="p-1 bg-white rounded">概率分布</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-center text-sm font-medium mb-2">特征提取的优势</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div className="p-1.5 bg-white rounded text-center">🛡️ 保持稳定性</div>
                  <div className="p-1.5 bg-white rounded text-center">⚡ 训练速度快</div>
                  <div className="p-1.5 bg-white rounded text-center">💾 内存需求少</div>
                  <div className="p-1.5 bg-white rounded text-center">🔄 可复用性强</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            特征提取模式下，预训练模型的核心参数保持不变，只训练新的分类器，就像顾问保持核心能力不变，为不同项目提供专业服务
          </div>
        </div>
      );
    } else if (currentStep.content === "few-shot") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-4">零样本与少样本学习</h4>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-center mb-3">
                    <span className="text-3xl">🧑‍🎓</span>
                    <h5 className="text-sm font-medium">零样本学习 (Zero-shot)</h5>
                    <div className="text-xs text-gray-600">没有示例，直接工作</div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2 bg-blue-100 rounded">
                      <div className="text-xs font-medium">场景：</div>
                      <div className="text-xs">小明从未做过市场调研，但接到了一个市场调研任务</div>
                    </div>
                    <div className="p-2 bg-blue-100 rounded">
                      <div className="text-xs font-medium">能力发挥：</div>
                      <div className="text-xs">利用统计学知识、逻辑思维和数据分析能力，直接开始工作</div>
                    </div>
                    <div className="p-2 bg-blue-100 rounded">
                      <div className="text-xs font-medium">结果：</div>
                      <div className="text-xs">虽然不完美，但基本能够完成任务</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-center mb-3">
                    <span className="text-3xl">👨‍💼</span>
                    <h5 className="text-sm font-medium">少样本学习 (Few-shot)</h5>
                    <div className="text-xs text-gray-600">看几个示例，快速上手</div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2 bg-green-100 rounded">
                      <div className="text-xs font-medium">场景：</div>
                      <div className="text-xs">给小明看了3个优秀的市场调研报告样本</div>
                    </div>
                    <div className="p-2 bg-green-100 rounded">
                      <div className="text-xs font-medium">学习过程：</div>
                      <div className="text-xs">快速理解报告结构、分析方法和表达风格</div>
                    </div>
                    <div className="p-2 bg-green-100 rounded">
                      <div className="text-xs font-medium">结果：</div>
                      <div className="text-xs">质量显著提升，接近专业水准</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h5 className="text-center text-sm font-medium mb-3">预训练模型的少样本学习能力</h5>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-2 bg-white rounded">
                    <div className="text-center text-xs font-medium mb-1">📝 任务理解</div>
                    <div className="text-xs text-gray-600">通过少量示例快速理解任务要求</div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <div className="text-center text-xs font-medium mb-1">🎯 模式识别</div>
                    <div className="text-xs text-gray-600">从示例中提取输入输出模式</div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <div className="text-center text-xs font-medium mb-1">🚀 快速适应</div>
                    <div className="text-xs text-gray-600">无需训练即可执行类似任务</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <h5 className="text-center text-sm font-medium mb-2">实际应用示例</h5>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-white rounded">
                    <span className="font-medium">零样本：</span> "将这段文本分类为正面或负面情感" → 直接分析
                  </div>
                  <div className="p-2 bg-white rounded">
                    <span className="font-medium">少样本：</span> 给出2-3个示例 → "太棒了！[正面]" "很失望[负面]" → 然后分类新文本
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            强大的预训练模型能够通过丰富的基础知识，在零样本或少样本的情况下快速适应新任务，展现出类人的学习能力
          </div>
        </div>
      );
    } else if (currentStep.content === "application") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 mb-4">
            <h4 className="text-center font-medium mb-4">实际应用：在工作中创造价值</h4>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-gray-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">⭐</span>
                  <h5 className="text-lg font-medium">成功的预训练模型应用</h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="p-2 bg-white rounded shadow-sm">
                      <div className="text-sm font-medium text-blue-800">🔍 智能搜索</div>
                      <div className="text-xs text-gray-600">理解用户查询意图，提供精准结果</div>
                    </div>
                    <div className="p-2 bg-white rounded shadow-sm">
                      <div className="text-sm font-medium text-green-800">💬 客服机器人</div>
                      <div className="text-xs text-gray-600">24/7回答客户问题，提升服务效率</div>
                    </div>
                    <div className="p-2 bg-white rounded shadow-sm">
                      <div className="text-sm font-medium text-purple-800">📝 内容创作</div>
                      <div className="text-xs text-gray-600">辅助写作、翻译和内容生成</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2 bg-white rounded shadow-sm">
                      <div className="text-sm font-medium text-orange-800">📊 数据分析</div>
                      <div className="text-xs text-gray-600">从文本数据中提取洞察和趋势</div>
                    </div>
                    <div className="p-2 bg-white rounded shadow-sm">
                      <div className="text-sm font-medium text-red-800">🔒 安全监控</div>
                      <div className="text-xs text-gray-600">识别异常行为和安全威胁</div>
                    </div>
                    <div className="p-2 bg-white rounded shadow-sm">
                      <div className="text-sm font-medium text-indigo-800">🎯 个性化推荐</div>
                      <div className="text-xs text-gray-600">理解用户偏好，提供精准推荐</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <h5 className="text-center text-sm font-medium mb-3">部署和优化考虑</h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="p-2 bg-white rounded">
                      <div className="text-xs font-medium">⚡ 性能优化</div>
                      <div className="text-xs text-gray-600">模型压缩、量化、知识蒸馏</div>
                    </div>
                    <div className="p-2 bg-white rounded">
                      <div className="text-xs font-medium">🔧 持续改进</div>
                      <div className="text-xs text-gray-600">收集反馈，定期更新和优化</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2 bg-white rounded">
                      <div className="text-xs font-medium">📈 监控评估</div>
                      <div className="text-xs text-gray-600">实时监控性能和用户满意度</div>
                    </div>
                    <div className="p-2 bg-white rounded">
                      <div className="text-xs font-medium">🛡️ 安全合规</div>
                      <div className="text-xs text-gray-600">确保数据安全和隐私保护</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <h5 className="text-center text-sm font-medium mb-2">成功的关键因素</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div className="p-1.5 bg-white rounded text-center">🎯 明确需求</div>
                  <div className="p-1.5 bg-white rounded text-center">📊 质量数据</div>
                  <div className="p-1.5 bg-white rounded text-center">🔧 合适工具</div>
                  <div className="p-1.5 bg-white rounded text-center">👥 专业团队</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            经过适当训练的预训练模型在实际应用中能够发挥巨大价值，就像训练有素的员工能够在工作中创造价值一样
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center mb-2">预训练模型动画演示</h2>
        <p className="text-gray-600 text-center">
          通过"大学毕业生找工作"的生动比喻，轻松理解预训练模型的工作原理
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
        步骤 {step + 1} / {steps.length} • 每6秒自动前进 • 点击按钮手动导航
      </div>
    </div>
  );
};

export default PretrainedModelAnimation;