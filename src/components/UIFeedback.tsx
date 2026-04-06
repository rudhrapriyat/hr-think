import React from 'react';
import { X, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="font-bold text-slate-900 font-display">{title}</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-200/50 rounded-full text-slate-400 hover:text-slate-600 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'warning';
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-[100] min-w-[320px]"
        >
          <div className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border",
            type === 'success' ? "bg-emerald-50 border-emerald-100 text-emerald-800" :
            type === 'warning' ? "bg-amber-50 border-amber-100 text-amber-800" :
            "bg-indigo-50 border-indigo-100 text-indigo-800"
          )}>
            {type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-500" />}
            {type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500" />}
            {type === 'info' && <Info className="w-5 h-5 text-indigo-500" />}
            <p className="text-sm font-semibold flex-1">{message}</p>
            <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-md transition-colors">
              <X className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
