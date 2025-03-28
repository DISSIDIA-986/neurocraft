import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NeuroCraft</h3>
            <p className="text-gray-300 text-sm">
              一个通过交互式动画和可视化来解释神经网络、机器学习和自然语言处理概念的React应用。
              旨在帮助学习数据分析和人工智能的学生更直观地理解复杂概念。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">主要功能</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>卷积神经网络 (CNN) 可视化</li>
              <li>词嵌入动画</li>
              <li>超参数调优可视化</li>
              <li>多层感知机 (MLP) 可视化</li>
              <li>深度学习架构可视化</li>
              <li>NLP处理流程动画</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">相关资源</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">React 官方文档</a></li>
              <li><a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Framer Motion</a></li>
              <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Tailwind CSS</a></li>
              <li><a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">React Router</a></li>
              <li><a href="https://recharts.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Recharts</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} NeuroCraft. All rights reserved.</p>
          <p className="mt-2">
            Created for educational purposes. 
            <span className="ml-1">Questions or suggestions? Open an issue on GitHub.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;