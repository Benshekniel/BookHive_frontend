// src/components/shared/Sidebar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sidebarMenuConfig } from '../../config/menuConfig';
import { BookOpen, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ collapsed, setCollapsed, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine role based on URL path
  const getRoleFromPath = () => {
    const path = location.pathname;
    if (path.startsWith('/admin')) return 'admin';
    if (path.startsWith('/moderator')) return 'moderator';
    if (path.startsWith('/bookstore')) return 'bookstore';
    if (path.startsWith('/delivery-hub')) return 'delivery-hub';
    if (path.startsWith('/agent')) return 'delivery-agent';
    if (path.startsWith('/organization')) return 'organization';
    if (path.startsWith('/dashboard')) return 'user';
    return 'guest'; // Fallback for public routes (e.g., '/', '/login')
  };

  const role = getRoleFromPath();
  const menuItems = sidebarMenuConfig[role] || sidebarMenuConfig.guest;

  // Capitalize role for display
  const displayRole = role === 'guest' ? 'Home' : role.charAt(0).toUpperCase() + role.slice(1);

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle logout (use prop or redirect to '/')
  const handleLogout = () => {
    if (onLogout) onLogout();
    else navigate('/');
  };

  return (
    <div
      className={`bg-blue-900 text-white transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'}`}
      style={{ backgroundColor: '#1E3A8A' }}
    >
      {/* Header */}
      <div
        className="p-4 border-b"
        style={{ borderColor: 'rgba(59, 130, 246, 0.3)' }}
      >
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8" style={{ color: '#FBBF24' }} />
              <h1 className="text-xl font-bold">BookHive</h1>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded transition-colors hover:bg-amber-200 hover:text-gray-800"
            style={{ backgroundColor: 'transparent' }}
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
        {!collapsed && (
          <p className="text-sm mt-1" style={{ color: '#BFDBFE' }}>
            {displayRole} Dashboard
          </p>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center rounded-lg transition-colors ${
                    collapsed ? 'justify-center py-3' : 'px-3 py-2'
                  } ${
                    isActive ? 'bg-amber-400 text-gray-800' : 'text-white hover:bg-amber-200 hover:text-gray-800'
                  }`}
                  title={collapsed ? item.label : ''}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${collapsed ? '' : 'mr-3'}`} />
                  {!collapsed && <span className="ml-3 font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-2 border-t" style={{ borderColor: 'rgba(59, 130, 246, 0.3)' }}>
        <button
          onClick={handleLogout}
          className={`w-full flex items-center rounded-lg transition-colors hover:bg-red-600 ${
            collapsed ? 'justify-center py-3' : 'px-3 py-2'
          }`}
          title={collapsed ? 'Logout' : ''}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="ml-3 font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;