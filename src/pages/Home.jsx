import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const cards = [
    {
      id: 'cnn',
      title: 'CNN Visualization',
      description: 'Understand how convolutional neural networks process image data through animations, including convolution operations, pooling layers, and classification processes.',
      image: '🖼️',
      color: 'from-blue-400 to-blue-600',
      path: '/cnn'
    },
    {
      id: 'embeddings',
      title: 'Word Embedding Animation',
      description: 'Learn how text is converted into vectors, and how word embeddings capture semantic relationships.',
      image: '📝',
      color: 'from-green-400 to-green-600',
      path: '/embeddings'
    },
    {
      id: 'embedding-model',
      title: 'Embedding Model Explained',
      description: 'Explore how embedding models work and compare mainstream English and Chinese embedding models. Learn how to choose the right model for specific application scenarios.',
      image: '🧩',
      color: 'from-purple-400 to-purple-600',
      path: '/embedding-model'
    },
    {
      id: 'transformers',
      title: 'Transformers Architecture Explained',
      description: 'Understand the revolutionary Transformer architecture, master core concepts like self-attention mechanisms and multi-head attention, and explore various model variants from BERT to GPT.',
      image: '⚡',
      color: 'from-yellow-400 to-yellow-600',
      path: '/transformers'
    },
    {
      id: 'pretrained-model',
      title: 'Pre-trained Models Explained',
      description: 'Learn how pre-trained models work through the vivid analogy of a university graduate seeking employment. Understand concepts like transfer learning, fine-tuning, and few-shot learning.',
      image: '🎓',
      color: 'from-indigo-400 to-indigo-600',
      path: '/pretrained-model'
    },
    {
      id: 'expert-system',
      title: 'Expert Systems',
      description: 'Learn about expert systems, an important technology from the early development of AI. Explore their components, working principles, and their influence and applications in modern AI.',
      image: '🧠',
      color: 'from-red-400 to-red-600',
      path: '/expert-system'
    },
    {
      id: 'hyperparameters',
      title: 'Hyperparameter Tuning',
      description: 'Explore how hyperparameters affect model performance, and various hyperparameter search strategies.',
      image: '🔧',
      color: 'from-yellow-400 to-yellow-600',
      path: '/hyperparameters'
    },
    {
      id: 'mlp',
      title: 'Multilayer Perceptron',
      description: 'Learn about the basic building blocks of neural networks and how multilayer perceptrons work.',
      image: '🧠',
      color: 'from-purple-400 to-purple-600',
      path: '/mlp'
    },
    {
      id: 'neural-networks',
      title: 'Neural Network Fundamentals',
      description: 'Explore the basic structure of neural networks and the forward propagation process.',
      image: '🔮',
      color: 'from-indigo-400 to-indigo-600',
      path: '/neural-networks'
    },
    {
      id: 'nlp',
      title: 'NLP Processing Pipeline',
      description: 'Understand the basic steps of natural language processing, from text cleaning to lemmatization.',
      image: '📊',
      color: 'from-red-400 to-red-600',
      path: '/nlp'
    },
    {
      id: 'rag',
      title: 'Retrieval-Augmented Generation (RAG)',
      description: 'Learn how to enhance large language models\' generation capabilities by retrieving relevant documents, improving the accuracy and reliability of responses.',
      image: '🔎',
      color: 'from-orange-400 to-orange-600',
      path: '/rag'
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning Architectures',
      description: 'Compare different neural network architectures (CNN, RNN, LSTM, ResNet) and their suitable scenarios.',
      image: '🏗️',
      color: 'from-pink-400 to-pink-600',
      path: '/deep-learning'
    },
    {
      id: 'ml-frameworks',
      title: 'Machine Learning Frameworks Cheatsheet',
      description: 'Explore features, advantages, and suitable scenarios for different machine learning algorithms and frameworks.',
      image: '🔍',
      color: 'from-teal-400 to-teal-600',
      path: '/ml-frameworks'
    },
    {
      id: 'lstm',
      title: 'LSTM Networks',
      description: 'Learn how LSTM handles sequence data and its application in text prediction.',
      image: '📊',
      color: 'from-cyan-400 to-cyan-600',
      path: '/lstm'
    },
    {
      id: 'rlhf',
      title: 'Reinforcement Learning from Human Feedback (RLHF)',
      description: 'Understand how modern AI systems optimize behavior through human feedback, and master the complete RLHF process from pre-training to reinforcement learning.',
      image: '🤖',
      color: 'from-rose-400 to-red-600',
      path: '/rlhf'
    },
    {
      id: 'opencv',
      title: 'OpenCV Computer Vision',
      description: 'Learn computer vision fundamentals, basic image processing techniques (filtering, edge detection, transformations), and practical applications in various industries.',
      image: '👁️',
      color: 'from-sky-400 to-sky-600',
      path: '/opencv'
    },
    {
      id: 'pytorch',
      title: 'PyTorch Deep Learning Framework',
      description: 'Understand PyTorch as a deep learning framework, covering tensors, automatic differentiation, neural network modules, and practical implementation examples.',
      image: '🔥',
      color: 'from-amber-400 to-orange-600',
      path: '/pytorch'
    },
    {
      id: 'llm',
      title: 'Large Language Models (LLM)',
      description: 'Explore the architecture, training process, capabilities, and limitations of large language models, including recent developments and future trends.',
      image: '🧠',
      color: 'from-violet-400 to-purple-600',
      path: '/llm'
    },
    {
      id: 'attention',
      title: 'Attention Mechanism',
      description: 'Dive deep into the attention mechanism, including query, key, value concepts, self-attention, multi-head attention, and its applications.',
      image: '🎯',
      color: 'from-pink-400 to-rose-600',
      path: '/attention'
    },
    {
      id: 'rnn',
      title: 'Recurrent Neural Networks (RNN)',
      description: 'Learn how RNNs handle sequential data, explore LSTM and GRU variants, and understand applications in time series and NLP tasks.',
      image: '🔄',
      color: 'from-emerald-400 to-green-600',
      path: '/rnn'
    },
    {
      id: 'gan',
      title: 'Generative Adversarial Networks (GAN)',
      description: 'Understand the adversarial training process, generator and discriminator roles, and applications in image and content generation.',
      image: '🎨',
      color: 'from-fuchsia-400 to-pink-600',
      path: '/gan'
    },
    {
      id: 'autoencoder',
      title: 'AutoEncoders',
      description: 'Study the encoder-decoder architecture, compression and reconstruction concepts, and applications in dimensionality reduction and anomaly detection.',
      image: '🔐',
      color: 'from-lime-400 to-green-600',
      path: '/autoencoder'
    },
    {
      id: 'diffusion',
      title: 'Diffusion Models',
      description: 'Understand how diffusion models generate images from noise through a step-by-step denoising process. Learn the principles behind DALL-E, Stable Diffusion, and other AI image generators.',
      image: '✨',
      color: 'from-blue-400 to-cyan-600',
      path: '/diffusion'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          NeuroCraft
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Easily understand complex concepts of neural networks, deep learning, and natural language processing through interactive animations and visualizations.
        </p>
      </div>

      {/* Information Section */}
      <div className="bg-blue-50 rounded-lg p-6 mb-12 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">🎯 Project Goals</h2>
        <p className="text-gray-700 mb-4">
          NeuroCraft aims to help learners of data analysis and artificial intelligence better understand complex concepts through intuitive animations and interactive visualizations.
          Whether you're a beginner or a student seeking review, these visualization tools can help you build a deeper understanding.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">🧩 How to Use</h2>
        <p className="text-gray-700">
          Select any topic below to explore the corresponding animations and visualization content. Each animation contains interactive elements
          that help you understand how various machine learning and deep learning concepts work.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link 
            key={card.id} 
            to={card.path}
            className="block"
          >
            <div className={`h-full rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200`}>
              <div className={`bg-gradient-to-r ${card.color} h-24 flex items-center justify-center text-5xl`}>
                <span>{card.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Ready to dive deeper into learning?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Click on any card above to start exploring, or select a topic from the navigation bar.
        </p>
      </div>
    </div>
  );
};

export default Home;