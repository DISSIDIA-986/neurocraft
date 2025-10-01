import React, { useState, useEffect, useRef } from 'react';

const DiffusionAnimation = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState('forward'); // 'forward' for adding noise, 'reverse' for denoising
  const canvasRef = useRef(null);
  const totalSteps = 50;

  // Initialize canvas with a simple image
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    drawCurrentState(ctx, step, direction);
  }, [step, direction]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setStep(prev => {
        if (direction === 'forward') {
          if (prev >= totalSteps) {
            setIsPlaying(false);
            return totalSteps;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPlaying, direction]);

  const drawCurrentState = (ctx, currentStep, dir) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Calculate noise level (0 = clear, 1 = full noise)
    const noiseLevel = currentStep / totalSteps;

    // Draw a simple smiley face that gets increasingly noisy
    drawImage(ctx, width, height, noiseLevel);
  };

  const drawImage = (ctx, width, height, noiseLevel) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.3;

    // Draw base image with reduced opacity based on noise
    ctx.globalAlpha = 1 - noiseLevel * 0.7;

    // Face circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFD700';
    ctx.fill();
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Eyes
    const eyeY = centerY - radius * 0.2;
    const eyeOffset = radius * 0.3;

    ctx.beginPath();
    ctx.arc(centerX - eyeOffset, eyeY, radius * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX + eyeOffset, eyeY, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.beginPath();
    ctx.arc(centerX, centerY + radius * 0.1, radius * 0.5, 0, Math.PI);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Reset alpha for noise
    ctx.globalAlpha = 1;

    // Add noise overlay
    if (noiseLevel > 0) {
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 255 * noiseLevel;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));     // R
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise)); // G
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise)); // B
      }

      ctx.putImageData(imageData, 0, 0);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    if (direction === 'forward') {
      setStep(0);
    } else {
      setStep(totalSteps);
    }
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    setStep(prev => Math.min(totalSteps, prev + 1));
  };

  const handleStepBackward = () => {
    setIsPlaying(false);
    setStep(prev => Math.max(0, prev - 1));
  };

  const switchDirection = () => {
    setIsPlaying(false);
    const newDirection = direction === 'forward' ? 'reverse' : 'forward';
    setDirection(newDirection);
    // Reset to appropriate starting point
    setStep(newDirection === 'forward' ? 0 : totalSteps);
  };

  const getStepDescription = () => {
    const noisePercent = Math.round((step / totalSteps) * 100);

    if (direction === 'forward') {
      if (step === 0) return '原始清晰图像';
      if (step < totalSteps * 0.3) return `轻微噪声(${noisePercent}%):图像仍然清晰可见`;
      if (step < totalSteps * 0.6) return `中等噪声(${noisePercent}%):细节开始模糊`;
      if (step < totalSteps) return `重度噪声(${noisePercent}%):图像几乎不可辨认`;
      return '完全随机噪声:原始图像信息完全被噪声覆盖';
    } else {
      if (step === totalSteps) return '完全随机噪声:开始去噪过程';
      if (step > totalSteps * 0.7) return `去噪初期(剩余${noisePercent}%):开始出现模糊轮廓`;
      if (step > totalSteps * 0.4) return `去噪中期(剩余${noisePercent}%):轮廓逐渐清晰`;
      if (step > 0) return `去噪后期(剩余${noisePercent}%):细节逐渐恢复`;
      return '完全去噪:恢复出清晰图像';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Direction Selector */}
      <div className="mb-6 bg-indigo-50 p-4 rounded-lg">
        <div className="flex items-center justify-center gap-4">
          <span className="font-semibold text-gray-700">选择过程:</span>
          <button
            onClick={switchDirection}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              direction === 'forward'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            前向扩散(加噪)
          </button>
          <button
            onClick={switchDirection}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              direction === 'reverse'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            反向扩散(去噪)
          </button>
        </div>
        <p className="text-center mt-3 text-sm text-gray-600">
          {direction === 'forward'
            ? '演示如何向图像逐步添加噪声,直到完全变成随机噪声'
            : '演示模型如何从随机噪声中逐步恢复出清晰图像'}
        </p>
      </div>

      {/* Canvas */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="w-full border-2 border-gray-200 rounded"
        />
      </div>

      {/* Step Description */}
      <div className="mb-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-center font-medium text-gray-800">
          步骤 {step}/{totalSteps}: {getStepDescription()}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all ${
              direction === 'forward' ? 'bg-indigo-600' : 'bg-green-600'
            }`}
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={handleStepBackward}
          disabled={step === 0}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 rounded-lg font-medium transition-colors"
        >
          ← 后退
        </button>
        <button
          onClick={handlePlayPause}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            isPlaying
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : direction === 'forward'
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isPlaying ? '暂停' : '播放'}
        </button>
        <button
          onClick={handleStepForward}
          disabled={step === totalSteps}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 rounded-lg font-medium transition-colors"
        >
          前进 →
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
        >
          重置
        </button>
      </div>

      {/* Process Explanation */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-semibold text-indigo-800 mb-2">前向扩散过程</h4>
          <p className="text-sm text-gray-700">
            这是一个固定的数学过程,不需要学习。在每个时间步,向图像添加一点高斯噪声。
            经过足够多的步骤后,任何图像都会变成纯随机噪声。这个过程是可以精确计算的。
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-800 mb-2">反向扩散过程</h4>
          <p className="text-sm text-gray-700">
            这是模型需要学习的核心部分。神经网络学习在每一步预测并去除噪声,
            逐步将随机噪声转换回清晰图像。通过大量训练数据,模型学会了如何正确去噪。
          </p>
        </div>
      </div>

      {/* Mathematical Intuition */}
      <div className="mt-4 p-4 bg-purple-50 rounded-lg">
        <h4 className="font-semibold text-purple-800 mb-2">数学直觉</h4>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>前向过程:</strong> x₀ → x₁ → x₂ → ... → xₜ (逐步加噪)
          </p>
          <p>
            <strong>反向过程:</strong> xₜ → xₜ₋₁ → xₜ₋₂ → ... → x₀ (逐步去噪)
          </p>
          <p className="mt-3">
            模型在每一步 t 预测噪声 ε,然后通过 x₍ₜ₋₁₎ = (xₜ - ε) / α 来恢复前一步的图像。
            这个过程重复多次,最终从纯噪声生成清晰图像。
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiffusionAnimation;
