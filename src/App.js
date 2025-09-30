import { Routes, Route, HashRouter } from 'react-router-dom';
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
import TransformersPage from './pages/TransformersPage';
import RLHFPage from './pages/RLHFPage';
import ExpertSystemPage from './pages/ExpertSystemPage';
import PretrainedModelPage from './pages/PretrainedModelPage';
import OpenCVPage from './pages/OpenCVPage';
import PyTorchPage from './pages/PyTorchPage';
import LLMPage from './pages/LLMPage';
import AttentionPage from './pages/AttentionPage';
import RNNPage from './pages/RNNPage';
import GANPage from './pages/GANPage';
import AutoEncoderPage from './pages/AutoEncoderPage';

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
        <Route path="/transformers" element={<TransformersPage />} />
        <Route path="/rlhf" element={<RLHFPage />} />
        <Route path="/expert-system" element={<ExpertSystemPage />} />
        <Route path="/pretrained-model" element={<PretrainedModelPage />} />
        <Route path="/opencv" element={<OpenCVPage />} />
        <Route path="/pytorch" element={<PyTorchPage />} />
        <Route path="/llm" element={<LLMPage />} />
        <Route path="/attention" element={<AttentionPage />} />
        <Route path="/rnn" element={<RNNPage />} />
        <Route path="/gan" element={<GANPage />} />
        <Route path="/autoencoder" element={<AutoEncoderPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;