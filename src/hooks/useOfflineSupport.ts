import { useState, useEffect, useCallback } from 'react';
import { errorHandler, AppErrorClass, ErrorCodes } from '../utils/errorHandler';

interface OfflineData {
  [key: string]: any;
}

interface UseOfflineSupportOptions {
  storageKey?: string;
  syncOnReconnect?: boolean;
  showOfflineMessage?: boolean;
}

interface OfflineSupport {
  isOnline: boolean;
  isOfflineMode: boolean;
  offlineData: OfflineData;
  saveOfflineData: (key: string, data: any) => void;
  getOfflineData: (key: string) => any;
  clearOfflineData: (key?: string) => void;
  syncData: () => Promise<void>;
  enableOfflineMode: () => void;
  disableOfflineMode: () => void;
}

export function useOfflineSupport(options: UseOfflineSupportOptions = {}): OfflineSupport {
  const {
    storageKey = 'offlineData',
    syncOnReconnect = true,
    showOfflineMessage = true
  } = options;

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [offlineData, setOfflineData] = useState<OfflineData>({});
  const [pendingSyncData, setPendingSyncData] = useState<OfflineData>({});

  // Load offline data from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsedData = JSON.parse(stored);
        setOfflineData(parsedData);
      }

      const pendingSync = localStorage.getItem(`${storageKey}_pending`);
      if (pendingSync) {
        setPendingSyncData(JSON.parse(pendingSync));
      }
    } catch (error) {
      errorHandler.handleError(
        new AppErrorClass(
          ErrorCodes.UNKNOWN_ERROR,
          'Failed to load offline data from storage',
          'low',
          { error: error instanceof Error ? error.message : 'Unknown error' }
        ),
        false
      );
    }
  }, [storageKey]);

  // Handle online/offline events
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      
      if (showOfflineMessage) {
        // Show reconnected message
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 z-50 bg-green-500 text-white p-4 rounded-lg shadow-lg transform transition-all duration-300';
        toast.innerHTML = `
          <div class="flex items-center">
            <div class="flex-1">✅ Đã kết nối lại internet</div>
          </div>
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
      }

      // Auto-sync if enabled
      if (syncOnReconnect) {
        syncData();
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setIsOfflineMode(true);

      if (showOfflineMessage) {
        errorHandler.handleError(
          new AppErrorClass(
            ErrorCodes.OFFLINE_ERROR,
            'Internet connection lost. Working in offline mode.',
            'medium'
          )
        );
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [syncOnReconnect, showOfflineMessage]);

  // Save data to offline storage
  const saveOfflineData = useCallback((key: string, data: any) => {
    try {
      const newOfflineData = { ...offlineData, [key]: data };
      setOfflineData(newOfflineData);
      localStorage.setItem(storageKey, JSON.stringify(newOfflineData));

      // If offline, also save to pending sync
      if (!isOnline) {
        const newPendingData = { ...pendingSyncData, [key]: data };
        setPendingSyncData(newPendingData);
        localStorage.setItem(`${storageKey}_pending`, JSON.stringify(newPendingData));
      }
    } catch (error) {
      errorHandler.handleError(
        new AppErrorClass(
          ErrorCodes.UNKNOWN_ERROR,
          'Failed to save offline data',
          'medium',
          { key, error: error instanceof Error ? error.message : 'Unknown error' }
        )
      );
    }
  }, [offlineData, pendingSyncData, storageKey, isOnline]);

  // Get data from offline storage
  const getOfflineData = useCallback((key: string) => {
    return offlineData[key];
  }, [offlineData]);

  // Clear offline data
  const clearOfflineData = useCallback((key?: string) => {
    try {
      if (key) {
        const newOfflineData = { ...offlineData };
        delete newOfflineData[key];
        setOfflineData(newOfflineData);
        localStorage.setItem(storageKey, JSON.stringify(newOfflineData));
      } else {
        setOfflineData({});
        localStorage.removeItem(storageKey);
        localStorage.removeItem(`${storageKey}_pending`);
        setPendingSyncData({});
      }
    } catch (error) {
      errorHandler.handleError(
        new AppErrorClass(
          ErrorCodes.UNKNOWN_ERROR,
          'Failed to clear offline data',
          'low',
          { key, error: error instanceof Error ? error.message : 'Unknown error' }
        ),
        false
      );
    }
  }, [offlineData, storageKey]);

  // Sync pending data when back online
  const syncData = useCallback(async () => {
    if (!isOnline || Object.keys(pendingSyncData).length === 0) {
      return;
    }

    try {
      // Here you would implement your actual sync logic
      // For example, sending pending data to your API
      console.log('Syncing offline data:', pendingSyncData);

      // Simulate API calls for demo
      for (const [key, data] of Object.entries(pendingSyncData)) {
        // await apiClient.post('/sync', { key, data });
        console.log(`Synced ${key}:`, data);
      }

      // Clear pending data after successful sync
      setPendingSyncData({});
      localStorage.removeItem(`${storageKey}_pending`);

      // Show success message
      const toast = document.createElement('div');
      toast.className = 'fixed top-4 right-4 z-50 bg-blue-500 text-white p-4 rounded-lg shadow-lg transform transition-all duration-300';
      toast.innerHTML = `
        <div class="flex items-center">
          <div class="flex-1">🔄 Đã đồng bộ dữ liệu offline</div>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);

    } catch (error) {
      errorHandler.handleError(
        new AppErrorClass(
          ErrorCodes.API_ERROR,
          'Failed to sync offline data',
          'medium',
          { 
            pendingData: pendingSyncData,
            error: error instanceof Error ? error.message : 'Unknown error'
          }
        )
      );
    }
  }, [isOnline, pendingSyncData, storageKey]);

  // Manual offline mode controls
  const enableOfflineMode = useCallback(() => {
    setIsOfflineMode(true);
  }, []);

  const disableOfflineMode = useCallback(() => {
    if (isOnline) {
      setIsOfflineMode(false);
    }
  }, [isOnline]);

  return {
    isOnline,
    isOfflineMode,
    offlineData,
    saveOfflineData,
    getOfflineData,
    clearOfflineData,
    syncData,
    enableOfflineMode,
    disableOfflineMode
  };
}

// Service Worker registration for offline support
export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);

        // Handle service worker updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available, show update notification
                const toast = document.createElement('div');
                toast.className = 'fixed top-4 right-4 z-50 bg-blue-500 text-white p-4 rounded-lg shadow-lg';
                toast.innerHTML = `
                  <div class="flex items-center justify-between">
                    <div class="flex-1">Có phiên bản mới. Tải lại để cập nhật?</div>
                    <button onclick="window.location.reload()" class="ml-4 bg-white text-blue-500 px-3 py-1 rounded text-sm font-medium">
                      Tải lại
                    </button>
                  </div>
                `;
                document.body.appendChild(toast);
              }
            });
          }
        });

      } catch (error) {
        errorHandler.handleError(
          new AppErrorClass(
            ErrorCodes.UNKNOWN_ERROR,
            'Service Worker registration failed',
            'low',
            { error: error instanceof Error ? error.message : 'Unknown error' }
          ),
          false
        );
      }
    });
  }
}