import React, { createContext, useContext, useState } from 'react';

interface LoadingOverlayContextType {
  show: (images: string[]) => void;
  hide: () => void;
  visible: boolean;
}

const LoadingOverlayContext = createContext<LoadingOverlayContextType>({
  show: () => {},
  hide: () => {},
  visible: false,
});

export const useLoadingOverlay = () => useContext(LoadingOverlayContext);

export const LoadingOverlayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const show = (images: string[]) => {
    setVisible(true);
    Promise.all(
      images.map(src => {
        return new Promise(resolve => {
          const img = new window.Image();
          img.onload = img.onerror = resolve;
          img.src = src;
        });
      })
    ).then(() => setTimeout(() => setVisible(false), 500));
  };

  const hide = () => setVisible(false);

  return (
    <LoadingOverlayContext.Provider value={{ show, hide, visible }}>
      {children}
      {visible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-700 opacity-100">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full border-4 border-gray-200 border-t-blue-500 h-12 w-12 mb-6"></div>
            <div className="text-white text-lg font-semibold flex items-center gap-2">
              Đang tải... <span className="ml-2 loading-dots"></span>
            </div>
          </div>
          <style>{`.loading-dots::after { content: ''; display: inline-block; width: 1.2em; text-align: left; animation: dots 1.2s steps(3, end) infinite; } @keyframes dots { 0%, 20% { content: ''; } 40% { content: '.'; } 60% { content: '..'; } 80%, 100% { content: '...'; } }`}</style>
        </div>
      )}
    </LoadingOverlayContext.Provider>
  );
}; 