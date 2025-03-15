import { Bell, Moon, Search, Settings, Sun } from "lucide-react";
import { useStore } from "../store/useStore";

export function Navbar() {
    const { theme, toggleTheme } = useStore();
  
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
            />
          </div>
        </div>
       
        <div className="flex items-center gap-4">
        <div className="border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-3 w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors
          }`}
        >
          {theme === 'light' ? (
            <>
              <Moon className="w-5 h-5" />
            </>
          ) : (
            <>
              <Sun className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
            <span className="text-sm font-medium">AR</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
