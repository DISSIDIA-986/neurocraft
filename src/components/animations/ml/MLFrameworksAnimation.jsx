import React, { useState, useEffect } from 'react';

const MLFrameworksAnimation = () => {
  const [activeCategory, setActiveCategory] = useState('supervised');
  const [activeAlgorithm, setActiveAlgorithm] = useState(null);
  const [isComparing, setIsComparing] = useState(false);
  const [selectedAlgorithms, setSelectedAlgorithms] = useState([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);
  
  const categories = [
    { id: 'supervised', name: '监督学习', description: '使用带标签的数据进行训练', icon: '📋' },
    { id: 'unsupervised', name: '无监督学习', description: '从无标签数据中发现模式', icon: '🔍' },
    { id: 'ensemble', name: '集成学习', description: '组合多个模型提高性能', icon: '🔄' },
    { id: 'deep', name: '深度学习', description: '多层神经网络架构', icon: '🧠' },
    { id: 'reinforcement', name: '强化学习', description: '通过环境反馈学习策略', icon: '🎮' },
  ];

  // 自动切换类别的动画效果
  useEffect(() => {
    if (!isAnimating) return;
    
    const categoryIds = categories.map(c => c.id);
    
    const timer = setTimeout(() => {
      setAnimationStep((prev) => {
        const nextStep = prev + 1;
        if (nextStep >= categoryIds.length) {
          // 动画完成一轮后返回第一个类别
          setActiveCategory(categoryIds[0]);
          return 0;
        }
        setActiveCategory(categoryIds[nextStep]);
        return nextStep;
      });
    }, 3000); // 每3秒切换一个类别
    
    return () => clearTimeout(timer);
  }, [animationStep, isAnimating]);

  // ML frameworks data
  const mlFrameworks = {
    supervised: [
      {
        name: "线性回归",
        description: "预测连续值的简单线性方法",
        pros: ["简单易懂", "计算效率高", "高度可解释性", "适合小数据集"],
        cons: ["只能捕获线性关系", "对异常值敏感", "假设严格"],
        useCases: ["房价预测", "销售额预测", "基准模型"],
        complexity: "低",
        dataRequirement: "小",
        interpretability: "高",
        icon: "📉",
        color: "bg-blue-100 border-blue-400"
      },
      {
        name: "逻辑回归",
        description: "预测二分类问题的线性模型",
        pros: ["简单易实现", "计算效率高", "可解释性强", "提供概率输出"],
        cons: ["只能捕获线性关系", "在复杂数据上表现不佳", "容易欠拟合"],
        useCases: ["垃圾邮件分类", "疾病诊断", "信用风险评估"],
        complexity: "低",
        dataRequirement: "小到中",
        interpretability: "高",
        icon: "📊",
        color: "bg-blue-100 border-blue-400"
      },
      {
        name: "决策树",
        description: "基于特征条件分支的树状模型",
        pros: ["易于理解和可视化", "可处理分类和回归", "处理非线性关系", "自动特征选择"],
        cons: ["容易过拟合", "不稳定", "偏向于主导特征"],
        useCases: ["客户细分", "医疗诊断", "风险评估"],
        complexity: "中",
        dataRequirement: "中",
        interpretability: "高",
        icon: "🌲",
        color: "bg-green-100 border-green-400"
      },
      {
        name: "随机森林",
        description: "多个决策树的集成学习方法",
        pros: ["减少过拟合", "高精度", "处理大量特征", "鲁棒性好"],
        cons: ["计算成本较高", "可解释性降低", "难以调优"],
        useCases: ["预测分析", "特征重要性分析", "分类和回归"],
        complexity: "中",
        dataRequirement: "中到大",
        interpretability: "中",
        icon: "🌳",
        color: "bg-green-100 border-green-400"
      },
      {
        name: "支持向量机(SVM)",
        description: "寻找最佳分隔超平面的判别模型",
        pros: ["在高维空间有效", "适用于复杂决策边界", "记忆占用小", "抗过拟合"],
        cons: ["对大数据集计算昂贵", "需要特征缩放", "参数调优复杂"],
        useCases: ["文本分类", "图像识别", "基因组分析"],
        complexity: "中到高",
        dataRequirement: "小到中",
        interpretability: "中",
        icon: "🔄",
        color: "bg-purple-100 border-purple-400"
      },
      {
        name: "K近邻(KNN)",
        description: "基于相似性的懒惰学习方法",
        pros: ["简单易实现", "无需训练", "对分布无假设", "适合多分类"],
        cons: ["计算密集", "需要特征缩放", "维度灾难", "存储整个数据集"],
        useCases: ["推荐系统", "图像识别", "异常检测"],
        complexity: "低",
        dataRequirement: "小到中",
        interpretability: "中",
        icon: "👥",
        color: "bg-indigo-100 border-indigo-400"
      }
    ],
    unsupervised: [
      {
        name: "K-Means聚类",
        description: "将数据分为K个不同的分组",
        pros: ["简单易实现", "可扩展性好", "执行快速", "结果易解释"],
        cons: ["需要预先指定K值", "对异常值敏感", "只找到球形簇", "结果依赖初始化"],
        useCases: ["客户细分", "图像压缩", "异常检测"],
        complexity: "低",
        dataRequirement: "中",
        interpretability: "中",
        icon: "🔵",
        color: "bg-red-100 border-red-400"
      },
      {
        name: "主成分分析(PCA)",
        description: "降维技术，保留最大方差方向",
        pros: ["减少维度", "去除多重共线性", "减少计算复杂度", "可视化高维数据"],
        cons: ["线性关系", "特征不可解释", "信息损失", "对缩放敏感"],
        useCases: ["特征提取", "数据压缩", "图像处理"],
        complexity: "中",
        dataRequirement: "中",
        interpretability: "中",
        icon: "📏",
        color: "bg-orange-100 border-orange-400"
      },
      {
        name: "层次聚类",
        description: "创建数据的嵌套聚类层次结构",
        pros: ["不需要预定义簇数", "创建视觉层次结构", "适应各种距离度量", "可处理任意形状的簇"],
        cons: ["计算昂贵", "对噪音敏感", "难以处理大数据集", "不易解释合并决策"],
        useCases: ["生物分类学", "社交网络分析", "客户细分"],
        complexity: "高",
        dataRequirement: "小到中",
        interpretability: "中",
        icon: "🌿",
        color: "bg-red-100 border-red-400"
      },
      {
        name: "t-SNE",
        description: "非线性降维技术，保留局部结构",
        pros: ["保留局部结构", "可视化高维数据", "发现数据簇", "处理非线性关系"],
        cons: ["计算昂贵", "随机性", "困难调参", "不可解释的降维"],
        useCases: ["高维数据可视化", "单细胞基因组学", "图像特征可视化"],
        complexity: "高",
        dataRequirement: "中",
        interpretability: "低",
        icon: "🔍",
        color: "bg-orange-100 border-orange-400"
      },
      {
        name: "DBSCAN",
        description: "基于密度的聚类算法",
        pros: ["自动确定簇数", "发现任意形状的簇", "对异常值鲁棒", "不需要均衡簇"],
        cons: ["参数敏感", "变密度问题", "高维空间问题", "计算密集"],
        useCases: ["空间数据分析", "异常检测", "噪音数据聚类"],
        complexity: "中",
        dataRequirement: "中",
        interpretability: "中",
        icon: "🔎",
        color: "bg-red-100 border-red-400"
      }
    ],
    ensemble: [
      {
        name: "AdaBoost",
        description: "自适应提升算法，聚焦误分类样本",
        pros: ["高精度", "抗过拟合", "可用于各类基学习器", "特征选择内置"],
        cons: ["对噪声敏感", "连续训练（慢）", "难以并行化", "需要调优"],
        useCases: ["人脸检测", "文本分类", "医学诊断"],
        complexity: "中",
        dataRequirement: "中",
        interpretability: "低",
        icon: "🔄",
        color: "bg-yellow-100 border-yellow-400"
      },
      {
        name: "XGBoost",
        description: "梯度提升算法的高效实现",
        pros: ["高性能", "正则化支持", "处理缺失值", "并行处理"],
        cons: ["参数繁多", "过拟合风险", "调优复杂", "内存密集"],
        useCases: ["竞赛模型", "推荐系统", "风险评估"],
        complexity: "高",
        dataRequirement: "中到大",
        interpretability: "中",
        icon: "⚡",
        color: "bg-yellow-100 border-yellow-400"
      },
      {
        name: "Bagging",
        description: "使用随机子样本建立并行模型的方法",
        pros: ["减少方差", "并行训练", "抗过拟合", "鲁棒性好"],
        cons: ["计算成本", "不减少偏差", "可解释性降低", "需要适当基学习器"],
        useCases: ["噪声数据集", "不稳定学习器优化", "随机森林基础"],
        complexity: "中",
        dataRequirement: "中到大",
        interpretability: "中",
        icon: "📦",
        color: "bg-yellow-100 border-yellow-400"
      },
      {
        name: "Stacking",
        description: "结合多个模型预测的元学习方法",
        pros: ["通常提高性能", "利用多种学习器", "自适应融合", "降低方差和偏差"],
        cons: ["计算密集", "复杂实现", "过拟合风险", "难以解释"],
        useCases: ["高性能需求场景", "竞赛", "复杂预测任务"],
        complexity: "高",
        dataRequirement: "大",
        interpretability: "低",
        icon: "🏗️",
        color: "bg-yellow-100 border-yellow-400"
      }
    ],
    deep: [
      {
        name: "卷积神经网络(CNN)",
        description: "利用卷积操作的深度学习架构",
        pros: ["空间特征提取", "参数共享", "自动特征学习", "平移不变性"],
        cons: ["需要大量数据", "计算密集", "黑盒模型", "调参复杂"],
        useCases: ["图像识别", "视频分析", "医疗影像"],
        complexity: "高",
        dataRequirement: "大",
        interpretability: "低",
        icon: "📷",
        color: "bg-pink-100 border-pink-400"
      },
      {
        name: "循环神经网络(RNN/LSTM)",
        description: "处理序列数据的神经网络",
        pros: ["捕获序列依赖", "可变长度输入", "共享参数", "长依赖捕获(LSTM)"],
        cons: ["训练困难", "梯度问题", "计算顺序", "难以并行"],
        useCases: ["自然语言处理", "时间序列预测", "语音识别"],
        complexity: "高",
        dataRequirement: "大",
        interpretability: "低",
        icon: "📝",
        color: "bg-pink-100 border-pink-400"
      },
      {
        name: "Transformer",
        description: "基于自注意力机制的序列模型",
        pros: ["并行处理", "捕获长距离依赖", "上下文理解", "可扩展"],
        cons: ["计算复杂度高", "需要大量数据", "内存密集", "调优复杂"],
        useCases: ["大语言模型", "机器翻译", "文本生成"],
        complexity: "非常高",
        dataRequirement: "非常大",
        interpretability: "低",
        icon: "🤖",
        color: "bg-pink-100 border-pink-400"
      },
      {
        name: "生成对抗网络(GAN)",
        description: "生成器和判别器对抗的生成模型",
        pros: ["生成高质量样本", "无需显式概率估计", "学习复杂分布", "创造性"],
        cons: ["训练不稳定", "模式崩溃", "评估困难", "超参数敏感"],
        useCases: ["图像生成", "风格迁移", "数据增强"],
        complexity: "非常高",
        dataRequirement: "大",
        interpretability: "低",
        icon: "🎨",
        color: "bg-pink-100 border-pink-400"
      },
      {
        name: "自编码器",
        description: "自监督学习架构，学习数据表示",
        pros: ["无监督特征学习", "降维", "数据压缩", "去噪"],
        cons: ["任务特定", "黑盒特性", "训练困难", "结果可变"],
        useCases: ["异常检测", "图像去噪", "特征提取"],
        complexity: "高",
        dataRequirement: "中到大",
        interpretability: "低",
        icon: "🔄",
        color: "bg-pink-100 border-pink-400"
      }
    ],
    reinforcement: [
      {
        name: "Q-Learning",
        description: "基于值的无模型强化学习算法",
        pros: ["无需环境模型", "简单实现", "保证收敛", "适合离散空间"],
        cons: ["维度灾难", "样本低效", "离散动作空间", "过度估计"],
        useCases: ["游戏AI", "机器人控制", "资源分配"],
        complexity: "中",
        dataRequirement: "中",
        interpretability: "中",
        icon: "🎮",
        color: "bg-teal-100 border-teal-400"
      },
      {
        name: "策略梯度(Policy Gradient)",
        description: "直接优化策略的强化学习方法",
        pros: ["直接策略优化", "可处理连续动作", "处理随机策略", "自然处理不确定性"],
        cons: ["高方差", "局部最优", "样本低效", "收敛慢"],
        useCases: ["机器人控制", "连续控制任务", "游戏AI"],
        complexity: "高",
        dataRequirement: "大",
        interpretability: "低",
        icon: "🎯",
        color: "bg-teal-100 border-teal-400"
      },
      {
        name: "深度Q网络(DQN)",
        description: "结合深度学习的Q-Learning扩展",
        pros: ["处理高维状态空间", "端到端学习", "无需手动特征", "处理复杂环境"],
        cons: ["超参数敏感", "训练不稳定", "样本低效", "离散动作限制"],
        useCases: ["Atari游戏", "控制系统", "自动驾驶"],
        complexity: "高",
        dataRequirement: "大",
        interpretability: "低",
        icon: "🕹️",
        color: "bg-teal-100 border-teal-400"
      },
      {
        name: "Actor-Critic",
        description: "结合策略和值方法的混合架构",
        pros: ["结合两种方法优势", "降低方差", "处理连续动作", "稳定学习"],
        cons: ["实现复杂", "两个网络调优", "训练不稳定", "计算密集"],
        useCases: ["复杂控制任务", "机器人学习", "游戏AI"],
        complexity: "高",
        dataRequirement: "大",
        interpretability: "低",
        icon: "🎭",
        color: "bg-teal-100 border-teal-400"
      }
    ]
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveAlgorithm(null);
    setIsComparing(false);
    setSelectedAlgorithms([]);
    setIsAnimating(false); // 用户交互时停止自动动画
  };

  const handleAlgorithmClick = (algorithm) => {
    setIsAnimating(false); // 用户交互时停止自动动画
    
    if (isComparing) {
      // 在比较模式下，添加或移除算法
      if (selectedAlgorithms.some(a => a.name === algorithm.name)) {
        setSelectedAlgorithms(selectedAlgorithms.filter(a => a.name !== algorithm.name));
      } else if (selectedAlgorithms.length < 3) {
        setSelectedAlgorithms([...selectedAlgorithms, algorithm]);
      }
    } else {
      // 在单选模式下，显示算法详情
      setActiveAlgorithm(algorithm);
    }
  };

  const toggleCompareMode = () => {
    setIsAnimating(false); // 用户交互时停止自动动画
    setIsComparing(!isComparing);
    setActiveAlgorithm(null);
    setSelectedAlgorithms([]);
  };

  // 复杂度和数据需求的映射
  const complexityMap = {
    "低": "w-1/4 bg-green-500",
    "中": "w-2/4 bg-yellow-500",
    "高": "w-3/4 bg-orange-500",
    "非常高": "w-full bg-red-500"
  };

  const dataRequirementMap = {
    "小": "w-1/4 bg-green-500",
    "小到中": "w-1/3 bg-green-500",
    "中": "w-2/4 bg-yellow-500",
    "中到大": "w-3/4 bg-orange-500",
    "大": "w-full bg-red-500",
    "非常大": "w-full bg-red-600"
  };

  const interpretabilityMap = {
    "高": "w-3/4 bg-green-500",
    "中": "w-2/4 bg-yellow-500",
    "低": "w-1/4 bg-red-500"
  };

  const renderAlgorithmCard = (algorithm) => {
    const isSelected = selectedAlgorithms.some(a => a.name === algorithm.name);
    
    return (
      <div 
        key={algorithm.name}
        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${algorithm.color} ${
          (isComparing && isSelected) ? 'ring-4 ring-blue-500' : 
          activeAlgorithm?.name === algorithm.name ? 'ring-4 ring-blue-500' : ''
        } hover:shadow-lg`}
        onClick={() => handleAlgorithmClick(algorithm)}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold">{algorithm.name}</h3>
          <span className="text-2xl">{algorithm.icon}</span>
        </div>
        <p className="text-sm text-gray-700 mb-2">{algorithm.description}</p>
        <div className="text-xs text-gray-600">
          <div className="flex items-center gap-2 mb-1">
            <span>复杂度:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className={`${complexityMap[algorithm.complexity]} h-2 rounded-full`}></div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span>数据需求:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className={`${dataRequirementMap[algorithm.dataRequirement]} h-2 rounded-full`}></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>可解释性:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className={`${interpretabilityMap[algorithm.interpretability]} h-2 rounded-full`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderComparisonView = () => {
    if (selectedAlgorithms.length === 0) {
      return (
        <div className="text-center p-8 bg-gray-50 rounded-lg mt-6">
          <p className="text-gray-500">选择最多3个算法进行比较</p>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6 overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">算法比较</h2>
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-2 text-left">特性</th>
              {selectedAlgorithms.map(algo => (
                <th key={algo.name} className="py-2 text-left">
                  <div className="flex items-center gap-2">
                    <span>{algo.icon}</span>
                    <span>{algo.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 font-medium">描述</td>
              {selectedAlgorithms.map(algo => (
                <td key={algo.name} className="py-2">{algo.description}</td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 font-medium">优势</td>
              {selectedAlgorithms.map(algo => (
                <td key={algo.name} className="py-2">
                  <ul className="list-disc pl-5 space-y-1">
                    {algo.pros.map((pro, idx) => (
                      <li key={idx} className="text-green-700 text-sm">{pro}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 font-medium">局限性</td>
              {selectedAlgorithms.map(algo => (
                <td key={algo.name} className="py-2">
                  <ul className="list-disc pl-5 space-y-1">
                    {algo.cons.map((con, idx) => (
                      <li key={idx} className="text-red-700 text-sm">{con}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 font-medium">应用场景</td>
              {selectedAlgorithms.map(algo => (
                <td key={algo.name} className="py-2">
                  <div className="flex flex-wrap gap-1">
                    {algo.useCases.map((useCase, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 font-medium">计算复杂度</td>
              {selectedAlgorithms.map(algo => (
                <td key={algo.name} className="py-2">
                  <div className="bg-gray-200 rounded-full h-4 w-48">
                    <div className={`${complexityMap[algo.complexity]} h-4 rounded-full`}></div>
                  </div>
                  <div className="text-xs mt-1">{algo.complexity}</div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 font-medium">数据需求</td>
              {selectedAlgorithms.map(algo => (
                <td key={algo.name} className="py-2">
                  <div className="bg-gray-200 rounded-full h-4 w-48">
                    <div className={`${dataRequirementMap[algo.dataRequirement]} h-4 rounded-full`}></div>
                  </div>
                  <div className="text-xs mt-1">{algo.dataRequirement}</div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 font-medium">可解释性</td>
              {selectedAlgorithms.map(algo => (
                <td key={algo.name} className="py-2">
                  <div className="bg-gray-200 rounded-full h-4 w-48">
                    <div className={`${interpretabilityMap[algo.interpretability]} h-4 rounded-full`}></div>
                  </div>
                  <div className="text-xs mt-1">{algo.interpretability}</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const renderAlgorithmDetail = (algorithm) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{algorithm.icon}</span>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{algorithm.name}</h2>
            <p className="text-gray-600">{algorithm.description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <h3 className="font-bold text-lg mb-2">优势</h3>
            <ul className="list-disc pl-5 space-y-1">
              {algorithm.pros.map((pro, idx) => (
                <li key={idx} className="text-green-700">{pro}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">局限性</h3>
            <ul className="list-disc pl-5 space-y-1">
              {algorithm.cons.map((con, idx) => (
                <li key={idx} className="text-red-700">{con}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">常见应用场景</h3>
          <div className="flex flex-wrap gap-2">
            {algorithm.useCases.map((useCase, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {useCase}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold mb-1 text-sm">计算复杂度</h3>
            <div className="bg-gray-200 rounded-full h-4">
              <div className={`${complexityMap[algorithm.complexity]} h-4 rounded-full`}></div>
            </div>
            <div className="text-xs text-center mt-1">{algorithm.complexity}</div>
          </div>
          
          <div>
            <h3 className="font-bold mb-1 text-sm">数据需求量</h3>
            <div className="bg-gray-200 rounded-full h-4">
              <div className={`${dataRequirementMap[algorithm.dataRequirement]} h-4 rounded-full`}></div>
            </div>
            <div className="text-xs text-center mt-1">{algorithm.dataRequirement}</div>
          </div>
          
          <div>
            <h3 className="font-bold mb-1 text-sm">可解释性</h3>
            <div className="bg-gray-200 rounded-full h-4">
              <div className={`${interpretabilityMap[algorithm.interpretability]} h-4 rounded-full`}></div>
            </div>
            <div className="text-xs text-center mt-1">{algorithm.interpretability}</div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* 分类导航 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
      
      {/* 操作按钮 */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{categories.find(c => c.id === activeCategory).name}</h2>
        <div className="flex gap-2">
          <button 
            className={`px-4 py-2 rounded-lg ${
              isAnimating ? 'bg-purple-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => {
              setAnimationStep(0);
              setActiveCategory(categories[0].id);
              setIsAnimating(!isAnimating);
              setActiveAlgorithm(null);
              setIsComparing(false);
              setSelectedAlgorithms([]);
            }}
          >
            {isAnimating ? '停止动画' : '播放动画'}
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${
              isComparing ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
            }`}
            onClick={toggleCompareMode}
          >
            {isComparing ? '退出比较模式' : '比较算法'}
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">
        {categories.find(c => c.id === activeCategory).description}
        {isComparing && ' - 选择最多3个算法进行比较'}
      </p>
      
      {/* 算法卡片网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mlFrameworks[activeCategory].map(algorithm => renderAlgorithmCard(algorithm))}
      </div>
      
      {/* 算法详情或比较视图 */}
      {isComparing ? (
        renderComparisonView()
      ) : (
        activeAlgorithm && renderAlgorithmDetail(activeAlgorithm)
      )}
    </div>
  );
};

export default MLFrameworksAnimation;