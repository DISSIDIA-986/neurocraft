import React from 'react';
import Layout from '../components/common/Layout';

const OpenCVPage = () => {
  return (
    <Layout
      title="OpenCV计算机视觉"
      description="学习计算机视觉基础、图像处理技术及其在各行业中的实际应用"
    >
      <div className="p-4">
        {/* Quick Overview Section */}
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="mr-2">📚</span>
            快速概览
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800 mb-1">🎯 适合人群</p>
              <p className="text-gray-700">计算机视觉初学者、图像处理开发者、AI应用工程师</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">⏱️ 预计学习时间</p>
              <p className="text-gray-700">基础掌握：2-3周 | 深入实践：2-3个月</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">🔧 核心技能</p>
              <p className="text-gray-700">图像处理、特征提取、目标检测、视频分析</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">💼 应用领域</p>
              <p className="text-gray-700">自动驾驶、安防监控、医疗影像、工业检测、AR/VR</p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">什么是OpenCV？</h3>
          <p className="text-gray-700 mb-3">
            OpenCV (Open Source Computer Vision Library) 是一个开源的计算机视觉和机器学习软件库，
            最初由Intel于1999年开发。它包含超过2500个优化算法，提供了从基础图像处理到高级机器学习的全面工具。
            OpenCV支持多种编程语言（Python、C++、Java等），跨平台运行（Windows、Linux、macOS、Android、iOS），
            是计算机视觉领域最流行的工具库之一。
          </p>
          <p className="text-gray-700">
            <strong>生动类比</strong>：如果说人类的视觉系统能够轻松识别物体、理解场景，那么OpenCV就是教计算机"看"的工具箱。
            它提供了从最基本的"看清图像"（读取和显示）到高级的"理解图像"（目标检测、人脸识别）的全套工具。
          </p>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">核心概念</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>图像表示 (Image Representation)</strong> - 数字图像以像素矩阵表示，每个像素包含颜色信息（灰度图单通道，彩色图RGB三通道）</li>
            <li><strong>图像滤波 (Image Filtering)</strong> - 通过卷积核对图像进行操作，实现模糊、锐化、降噪等效果</li>
            <li><strong>边缘检测 (Edge Detection)</strong> - 识别图像中物体边界和轮廓，常用算法包括Canny、Sobel</li>
            <li><strong>特征检测 (Feature Detection)</strong> - 识别图像中的关键点（如角点、斑点），常用SIFT、ORB等算法</li>
            <li><strong>图像变换 (Image Transformation)</strong> - 几何变换（旋转、缩放、透视）和色彩空间转换（RGB↔HSV↔灰度）</li>
            <li><strong>轮廓检测 (Contour Detection)</strong> - 找到并分析图像中的物体轮廓形状</li>
            <li><strong>模板匹配 (Template Matching)</strong> - 在大图像中搜索与模板图像相似的区域</li>
            <li><strong>目标跟踪 (Object Tracking)</strong> - 在视频序列中跟踪移动物体的位置</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">OpenCV基本操作流程</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">步骤1：图像读取与显示</h4>
              <p className="text-gray-700 mb-2">使用<code className="bg-gray-200 px-2 py-1 rounded">cv2.imread()</code>读取图像，<code className="bg-gray-200 px-2 py-1 rounded">cv2.imshow()</code>显示图像</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>import cv2</code><br/>
                <code>img = cv2.imread('image.jpg')</code><br/>
                <code>cv2.imshow('Image', img)</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2">步骤2：图像预处理</h4>
              <p className="text-gray-700 mb-2">转换色彩空间、调整大小、应用滤波降噪</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)</code><br/>
                <code>resized = cv2.resize(img, (640, 480))</code><br/>
                <code>blurred = cv2.GaussianBlur(img, (5,5), 0)</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">步骤3：特征提取</h4>
              <p className="text-gray-700 mb-2">边缘检测、角点检测、轮廓提取</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>edges = cv2.Canny(gray, 50, 150)</code><br/>
                <code>corners = cv2.goodFeaturesToTrack(gray, 100, 0.01, 10)</code><br/>
                <code>contours, _ = cv2.findContours(edges, ...)</code>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">步骤4：分析与应用</h4>
              <p className="text-gray-700 mb-2">目标检测、图像分类、场景理解</p>
              <div className="bg-white p-3 rounded mt-2 font-mono text-sm">
                <code>face_cascade = cv2.CascadeClassifier(...)</code><br/>
                <code>faces = face_cascade.detectMultiScale(gray)</code><br/>
                <code>for (x,y,w,h) in faces: cv2.rectangle(img, ...)</code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">OpenCV的优势</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>开源免费</strong> - BSD许可证，可免费用于商业和研究项目</li>
              <li><strong>性能优化</strong> - C++核心，充分利用多核CPU和GPU加速</li>
              <li><strong>跨平台支持</strong> - 支持桌面、移动、嵌入式等多种平台</li>
              <li><strong>丰富生态</strong> - 庞大社区，丰富的文档、教程和示例代码</li>
              <li><strong>广泛集成</strong> - 与深度学习框架（TensorFlow、PyTorch）无缝集成</li>
              <li><strong>实时处理</strong> - 优化算法支持实时视频处理和分析</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">OpenCV的挑战</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>学习曲线</strong> - 大量API和参数需要学习和理解</li>
              <li><strong>传统方法局限</strong> - 某些复杂任务需结合深度学习才能达到最佳效果</li>
              <li><strong>调参复杂</strong> - 许多算法需要针对具体场景调整参数</li>
              <li><strong>环境差异</strong> - 光照、遮挡、视角变化会影响算法效果</li>
              <li><strong>实时性权衡</strong> - 复杂算法可能难以满足实时性要求</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">OpenCV主要应用场景</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300">应用领域</th>
                  <th className="py-2 px-4 border border-gray-300">具体应用</th>
                  <th className="py-2 px-4 border border-gray-300">核心技术</th>
                  <th className="py-2 px-4 border border-gray-300">实际案例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">自动驾驶</td>
                  <td className="py-2 px-4 border border-gray-300">车道检测、障碍识别、交通标志识别</td>
                  <td className="py-2 px-4 border border-gray-300">边缘检测、霍夫变换、目标检测</td>
                  <td className="py-2 px-4 border border-gray-300">百度Apollo、小鹏汽车NGP、特斯拉Autopilot</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">医疗影像</td>
                  <td className="py-2 px-4 border border-gray-300">病灶检测、图像分割、辅助诊断</td>
                  <td className="py-2 px-4 border border-gray-300">形态学操作、区域生长、轮廓分析</td>
                  <td className="py-2 px-4 border border-gray-300">肿瘤检测、X光/CT图像分析</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">安防监控</td>
                  <td className="py-2 px-4 border border-gray-300">人脸识别、行为分析、异常检测</td>
                  <td className="py-2 px-4 border border-gray-300">人脸检测、光流法、背景减除</td>
                  <td className="py-2 px-4 border border-gray-300">海康威视智能监控、商汤科技人脸识别、旷视Face++</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">工业检测</td>
                  <td className="py-2 px-4 border border-gray-300">缺陷检测、尺寸测量、产品分类</td>
                  <td className="py-2 px-4 border border-gray-300">模板匹配、轮廓分析、颜色识别</td>
                  <td className="py-2 px-4 border border-gray-300">生产线质检、PCB板检测</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">增强现实</td>
                  <td className="py-2 px-4 border border-gray-300">标记识别、姿态估计、三维重建</td>
                  <td className="py-2 px-4 border border-gray-300">特征匹配、相机标定、立体视觉</td>
                  <td className="py-2 px-4 border border-gray-300">AR眼镜、虚拟试衣、游戏应用</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border border-gray-300 font-medium">机器人视觉</td>
                  <td className="py-2 px-4 border border-gray-300">导航、抓取、场景理解</td>
                  <td className="py-2 px-4 border border-gray-300">SLAM、深度估计、目标跟踪</td>
                  <td className="py-2 px-4 border border-gray-300">京东物流机器人、极智嘉仓储AGV、优必选服务机器人</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-300 font-medium">文档处理</td>
                  <td className="py-2 px-4 border border-gray-300">OCR、文档矫正、表格识别</td>
                  <td className="py-2 px-4 border border-gray-300">透视变换、二值化、形态学</td>
                  <td className="py-2 px-4 border border-gray-300">支付宝OCR识别、微信扫一扫、腾讯云文字识别</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">OpenCV发展历程</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">1999年</div>
              <div className="flex-grow">Intel研究院启动OpenCV项目</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2006年</div>
              <div className="flex-grow">OpenCV 1.0正式发布</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2009年</div>
              <div className="flex-grow">OpenCV 2.0发布，重构C++ API</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2012年</div>
              <div className="flex-grow">支持GPU加速（CUDA模块）</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2015年</div>
              <div className="flex-grow">OpenCV 3.0发布，增强深度学习支持</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2018年</div>
              <div className="flex-grow">OpenCV 4.0发布，改进DNN模块</div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium">2023年</div>
              <div className="flex-grow">持续更新，深度集成AI模型，支持ONNX、TensorFlow Lite等</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-800 mb-2">OpenCV与深度学习的结合</h3>
          <p className="text-gray-700 mb-3">
            现代计算机视觉应用通常结合OpenCV的传统图像处理能力和深度学习模型的强大识别能力：
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>DNN模块</strong> - OpenCV的深度神经网络模块可加载TensorFlow、PyTorch、ONNX等框架训练的模型</li>
            <li><strong>预处理流水线</strong> - 使用OpenCV进行图像预处理（调整大小、归一化），然后输入深度学习模型</li>
            <li><strong>后处理优化</strong> - 对模型输出结果进行非极大值抑制(NMS)、轮廓优化等后处理</li>
            <li><strong>混合方案</strong> - 传统算法处理简单任务（快速高效），深度学习处理复杂任务（准确但慢）</li>
            <li><strong>端到端方案</strong> - YOLO、SSD等目标检测模型可通过OpenCV DNN模块高效部署</li>
          </ul>
        </div>

        <div className="mt-8 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">学习建议</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li><strong>从基础开始</strong> - 掌握图像读取、显示、色彩空间转换等基本操作</li>
            <li><strong>理解原理</strong> - 学习卷积、滤波、边缘检测等核心算法的数学原理</li>
            <li><strong>动手实践</strong> - 通过实际项目（人脸检测、车牌识别等）巩固所学</li>
            <li><strong>结合深度学习</strong> - 学习如何在OpenCV中集成YOLO、ResNet等深度学习模型</li>
            <li><strong>性能优化</strong> - 了解GPU加速、多线程处理等性能优化技巧</li>
            <li><strong>关注社区</strong> - 参与OpenCV社区，学习最新技术和最佳实践</li>
          </ol>
        </div>

        {/* Key Takeaways Section */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600 shadow-sm">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
            <span className="mr-2">💡</span>
            关键要点总结
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2">✅ 核心优势</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 开源免费，社区活跃，文档完善</li>
                <li>• 跨平台支持，性能优化优秀</li>
                <li>• 算法丰富，覆盖图像处理全流程</li>
                <li>• 与深度学习框架无缝集成</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2">🎯 适用场景</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 图像预处理和特征提取</li>
                <li>• 实时视频分析和目标跟踪</li>
                <li>• 传统CV算法快速原型开发</li>
                <li>• 与深度学习模型配合使用</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2">⚠️ 注意事项</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 复杂任务需结合深度学习</li>
                <li>• 调参需要针对具体场景优化</li>
                <li>• 光照、遮挡等会影响效果</li>
                <li>• 需要平衡准确率和实时性</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-2">🔗 相关技术</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 深度学习框架：PyTorch、TensorFlow</li>
                <li>• 神经网络：CNN用于图像分类</li>
                <li>• 目标检测：YOLO、Faster R-CNN</li>
                <li>• 图像分割：U-Net、Mask R-CNN</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning Path Section */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600 shadow-sm">
          <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
            <span className="mr-2">🗺️</span>
            学习路径建议
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
              <div>
                <h4 className="font-semibold text-purple-800">基础入门（1-2周）</h4>
                <p className="text-sm text-gray-700">学习图像基础概念、OpenCV安装配置、基本操作（读取、显示、保存）</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
              <div>
                <h4 className="font-semibold text-purple-800">图像处理技术（2-3周）</h4>
                <p className="text-sm text-gray-700">掌握滤波、边缘检测、形态学操作、特征提取等核心技术</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
              <div>
                <h4 className="font-semibold text-purple-800">实战项目（3-4周）</h4>
                <p className="text-sm text-gray-700">完成人脸检测、车牌识别、文档扫描等实际项目，积累经验</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
              <div>
                <h4 className="font-semibold text-purple-800">深度学习集成（2-3周）</h4>
                <p className="text-sm text-gray-700">学习OpenCV DNN模块，集成YOLO、ResNet等深度学习模型</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</div>
              <div>
                <h4 className="font-semibold text-purple-800">性能优化（1-2周）</h4>
                <p className="text-sm text-gray-700">掌握GPU加速、多线程处理、算法优化等性能提升技巧</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 下一步学习建议：</strong>
              完成OpenCV学习后，推荐学习
              <span className="text-purple-700 font-semibold"> PyTorch深度学习框架</span>，
              掌握 <span className="text-purple-700 font-semibold">CNN卷积神经网络</span>，
              以及 <span className="text-purple-700 font-semibold">目标检测算法</span>，
              全面提升计算机视觉能力。
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default OpenCVPage;