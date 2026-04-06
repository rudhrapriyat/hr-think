import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';
import Recruitment from './components/Recruitment';
import Schedule from './components/Schedule';
import Analytics from './components/Analytics';
import Login from './components/Login';
import { Modal, Toast } from './components/UIFeedback';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Interaction States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'warning'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false
  });

  // Check for existing session
  useEffect(() => {
    const session = localStorage.getItem('hr_session');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('hr_session', 'true');
    setIsAuthenticated(true);
    showToast('Welcome back, HR Admin!', 'success');
  };

  const handleLogout = () => {
    localStorage.removeItem('hr_session');
    setIsAuthenticated(false);
  };

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ message, type, isVisible: true });
  };

  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const renderContent = () => {
    const commonProps = { showToast, openModal };
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard {...commonProps} />;
      case 'employees':
        return <Employees {...commonProps} />;
      case 'recruitment':
        return <Recruitment {...commonProps} />;
      case 'schedule':
        return <Schedule {...commonProps} />;
      case 'analytics':
        return <Analytics {...commonProps} />;
      default:
        return <Dashboard {...commonProps} />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
        showToast={showToast}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle}
      >
        {modalContent}
      </Modal>

      <Toast 
        isVisible={toast.isVisible} 
        message={toast.message} 
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
}
