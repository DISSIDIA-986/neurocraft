import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import CNNPage from './pages/CNNPage';
import EmbeddingsPage from './pages/EmbeddingsPage';
import HyperparametersPage from './pages/HyperparametersPage';
import MLPPage from './pages/MLPPage';
import NeuralNetworksPage from './pages/NeuralNetworksPage';
import NLPPage from './pages/NLPPage';
import DeepLearningPage from './pages/DeepLearningPage';
import MLFrameworksPage from './pages/MLFrameworksPage'; 
import LSTMPage from './pages/LSTMPage'; 
import RAGPage from './pages/RAGPage';
import EmbeddingModelPage from './pages/EmbeddingModelPage';

function App() {
  // 使用HashRouter替代BrowserRouter，这样在GitHub Pages环境中更可靠
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cnn" element={<CNNPage />} />
        <Route path="/embeddings" element={<EmbeddingsPage />} />
        <Route path="/hyperparameters" element={<HyperparametersPage />} />
        <Route path="/mlp" element={<MLPPage />} />
        <Route path="/neural-networks" element={<NeuralNetworksPage />} />
        <Route path="/nlp" element={<NLPPage />} />
        <Route path="/deep-learning" element={<DeepLearningPage />} />
        <Route path="/ml-frameworks" element={<MLFrameworksPage />} />
        <Route path="/lstm" element={<LSTMPage />} />
        <Route path="/rag" element={<RAGPage />} />
        <Route path="/embedding-model" element={<EmbeddingModelPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;