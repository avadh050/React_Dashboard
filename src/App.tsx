import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useStore } from './store/useStore';

// Lazy load pages for better performance
const Dashboard = React.lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));
const Analytics = React.lazy(() => import('./pages/Analytics').then(module => ({ default: module.Analytics })));
const Users = React.lazy(() => import('./pages/Users').then(module => ({ default: module.Users })));
const Settings = React.lazy(() => import('./pages/Settings').then(module => ({ default: module.Settings })));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const { theme } = useStore();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ErrorBoundary>
      <Router>
        <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 flex transition-colors duration-200`}>
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <Suspense fallback={<LoadingSpinner />}>
              <main>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </Suspense>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;