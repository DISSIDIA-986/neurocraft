import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CNNPage from './pages/CNNPage';
import EmbeddingsPage from './pages/EmbeddingsPage';
import HyperparametersPage from './pages/HyperparametersPage';
import MLPPage from './pages/MLPPage';
import NeuralNetworksPage from './pages/NeuralNetworksPage';
import NLPPage from './pages/NLPPage';
import DeepLearningPage from './pages/DeepLearningPage';
import MLFrameworksPage from './pages/MLFrameworksPage.jsx'; // 导入新页面

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cnn" element={<CNNPage />} />
        <Route path="/embeddings" element={<EmbeddingsPage />} />
        <Route path="/hyperparameters" element={<HyperparametersPage />} />
        <Route path="/mlp" element={<MLPPage />} />
        <Route path="/neural-networks" element={<NeuralNetworksPage />} />
        <Route path="/nlp" element={<NLPPage />} />
        <Route path="/deep-learning" element={<DeepLearningPage />} />
        <Route path="/ml-frameworks" element={<MLFrameworksPage />} /> {/* 添加新路由 */}
      </Routes>
    </Router>
  );
}

export default App;