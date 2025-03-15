import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart2, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useStore();

  return (
    <div 
      className={`bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      } min-h-screen relative flex flex-col`}
    >
      <div className={`p-6 ${isSidebarOpen ? '' : 'text-center'} flex items-center justify-between`}>
        <h1 className={`text-2xl font-bold text-gray-800 dark:text-white transition-all ${
          isSidebarOpen ? '' : 'text-sm'
        }`}>
          {isSidebarOpen ? 'Analytics' : 'A'}
        </h1>
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
      
      <nav className="mt-6 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                isActive ? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className={`transition-opacity duration-300 ${
                isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
      
     
    </div>
  );
}