# NeuroCraft - 记忆学习可视化项目

NeuroCraft是一个通过交互式动画和可视化来解释神经网络、机器学习和自然语言处理概念的React应用。该项目旨在帮助学习数据分析和人工智能的学生更直观地理解复杂概念。

![NeuroCraft Logo](public/logo192.png)

## 主要功能

NeuroCraft包含以下主要动画组件：

1. **卷积神经网络 (CNN) 可视化**
   - 展示CNN如何进行图像分类
   - 演示卷积操作和池化过程

2. **词嵌入动画**
   - 展示如何将文本转换为数值向量
   - 说明语义关系的向量表示

3. **超参数调优可视化**
   - 解释超参数与模型参数的区别
   - 展示不同超参数调优策略

4. **多层感知机 (MLP) 可视化**
   - 解释神经元的基本原理
   - 展示多层神经网络的结构和数据流动

5. **神经网络基础可视化**
   - 展示神经网络的基本结构
   - 演示前向传播过程

6. **NLP处理流程动画**
   - 展示NLP处理文本的基本步骤
   - 包括分词、去停用词、词性标注和词形还原等过程

7. **深度学习架构可视化**
   - 比较不同的神经网络架构（CNN, RNN, LSTM, ResNet）
   - 展示各架构的特点和应用场景

## 技术栈

- **React** - 前端框架
- **React Router** - 页面路由
- **Framer Motion** - 动画库
- **Tailwind CSS** - 样式框架
- **Recharts** - 图表可视化

## 项目设置

1. 克隆仓库

```bash
git clone git@github.com:DISSIDIA-986/neurocraft.git
cd neurocraft
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm start
```

4. 构建生产版本

```bash
npm run build
```

## 项目结构

```
neurocraft/
├── public/                  # 静态资源
├── src/
│   ├── components/
│   │   ├── common/          # 公共组件
│   │   │   ├── Layout.jsx   # 布局组件
│   │   │   ├── Navbar.jsx   # 导航栏组件
│   │   │   └── Footer.jsx   # 页脚组件
│   │   ├── animations/      # 动画组件
│   │   │   ├── cnn/         # CNN相关动画
│   │   │   ├── embeddings/  # 词嵌入相关动画
│   │   │   └── ...
│   ├── pages/               # 页面组件
│   ├── App.jsx              # 应用主组件
│   ├── index.jsx            # 入口文件
│   └── routes.jsx           # 路由配置
├── package.json
└── README.md
```

## 贡献指南

欢迎贡献新的可视化动画或改进现有组件！请按照以下步骤：

1. Fork 项目仓库
2. 创建新的分支 `git checkout -b feature/your-feature-name`
3. 提交更改 `git commit -m 'Add some feature'`
4. 推送到分支 `git push origin feature/your-feature-name`
5. 创建一个 Pull Request

## 未来计划

- 添加更多机器学习算法的可视化
- 增加深度强化学习的可视化组件
- 支持多语言（中文/英文）切换
- 添加交互式练习和测验

## 许可证

MIT

---

项目由数据分析专业学生创建，用于辅助记忆学习和理解复杂的人工智能概念。