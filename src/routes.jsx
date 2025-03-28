import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CNNPage from './pages/CNNPage';
import EmbeddingsPage from './pages/EmbeddingsPage';
import HyperparametersPage from './pages/HyperparametersPage';
import MLPPage from './pages/MLPPage';
import NeuralNetworksPage from './pages/NeuralNetworksPage';
import NLPPage from './pages/NLPPage';
import DeepLearningPage from './pages/DeepLearningPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cnn" element={<CNNPage />} />
      <Route path="/embeddings" element={<EmbeddingsPage />} />
      <Route path="/hyperparameters" element={<HyperparametersPage />} />
      <Route path="/mlp" element={<MLPPage />} />
      <Route path="/neural-networks" element={<NeuralNetworksPage />} />
      <Route path="/nlp" element={<NLPPage />} />
      <Route path="/deep-learning" element={<DeepLearningPage />} />
    </Routes>
  );
};

export default AppRoutes;