import React, { useState } from 'react';

export const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [particleCount, setParticleCount] = useState(50);
  const [glowIntensity, setGlowIntensity] = useState(1);

  const handleSave = () => {
    localStorage.setItem('animationSpeed', animationSpeed.toString());
    localStorage.setItem('particleCount', particleCount.toString());
    localStorage.setItem('glowIntensity', glowIntensity.toString());
    setIsOpen(false);
  };

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full dark:hover:bg-slate-800 light:hover:bg-slate-100 transition"
        aria-label="Settings"
        title="Advanced Settings"
      >
        ⚙️
      </button>

      {/* Settings Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 dark:bg-black/50 light:bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative z-50 dark:bg-slate-900 light:bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border dark:border-slate-700/50 light:border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold dark:text-slate-100 light:text-slate-900">
                Advanced Settings
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl dark:text-slate-400 light:text-slate-600 hover:dark:text-slate-200 hover:light:text-slate-900 transition"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Animation Speed */}
              <div>
                <label className="block dark:text-slate-300 light:text-slate-700 font-semibold mb-2">
                  Animation Speed: {animationSpeed}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={animationSpeed}
                  onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              {/* Particle Count */}
              <div>
                <label className="block dark:text-slate-300 light:text-slate-700 font-semibold mb-2">
                  Particle Count: {particleCount}
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={particleCount}
                  onChange={(e) => setParticleCount(parseInt(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              {/* Glow Intensity */}
              <div>
                <label className="block dark:text-slate-300 light:text-slate-700 font-semibold mb-2">
                  Glow Intensity: {glowIntensity}x
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={glowIntensity}
                  onChange={(e) => setGlowIntensity(parseFloat(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setAnimationSpeed(1);
                  setParticleCount(50);
                  setGlowIntensity(1);
                }}
                className="w-full px-4 py-2 dark:bg-slate-800 light:bg-slate-100 dark:text-slate-300 light:text-slate-700 rounded-lg hover:dark:bg-slate-700 hover:light:bg-slate-200 transition"
              >
                Reset to Defaults
              </button>

              {/* Save Button */}
              <button
                onClick={handleSave}
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
