import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
import { useAuth } from '../../App';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

const Header = ({ children, isMobileOpen, setIsMobileOpen, collapsed, setCollapsed, onLogout }) => {
  const { user } = useAuth();
  const location = useLocation();

  console.log('Header rendered - collapsed:', collapsed, 'isMobileOpen:', isMobileOpen, 'window.innerHeight:', window.innerHeight, 'children:', !!children);

  const pathLabels = {
    '/admin': 'Dashboard',
    '/admin/moderator': 'Moderators',
    '/admin/content': 'Contents',
    '/admin/analytics': 'Analytics',
    '/admin/notification': 'Notification',
    '/admin/security': 'Security',
    '/admin/settings': 'Settings',
    '/moderator': 'Dashboard',
    '/moderator/charity': 'Charity',
    '/moderator/bookcircle': 'BookCircle',
    '/moderator/competitions': 'Competitions',
    '/moderator/users': 'Users',
    '/moderator/hub': 'Hub',
    '/moderator/compliance': 'Compliance',
    '/moderator/support': 'Support',
    '/moderator/test': 'Testing',
    '/moderator/settings': 'Settings',
    '/bookstore': 'Dashboard',
    '/bookstore/inventory': 'Inventory',
    '/bookstore/listings': 'Listings',
    '/bookstore/transactions': 'Transactions',
    '/bookstore/finances': 'Finances',
    '/bookstore/support': 'Support',
    '/manager': 'Dashboard',
    '/manager/agents': 'Delivery Agents',
    '/manager/delivery': 'Delivery',
    '/manager/hubs': 'Hubs',
    '/manager/messages': 'Messages',
    '/manager/support': 'Support',
    '/manager/schedule': 'Settings',
    '/agent': 'Dashboard',
    '/agent/tasks': 'Tasks',
    '/agent/delivery': 'Active Delivery',
    '/agent/notification': 'Notification',
    '/agent/performance': 'Performance',
    '/agent/support': 'Support',
    '/hubmanager': 'Dashboard',
    '/hubmanager/deliveries': 'Delivery',
    '/hubmanager/agents': 'Agents',
    '/hubmanager/messages': 'Messages',
    '/hubmanager/routes': 'Routes',
    '/hubmanager/performance': 'Performance',
    '/hubmanager/support': 'Support',
    '/hubmanager/settings': 'Hub Settings',
    '/organization': 'Dashboard',
    '/organization/reports': 'Reports',
    '/dashboard': 'Dashboard',
    '/user': 'Dashboard',
    '/user/browse-books': 'Browse Books',
    '/user/orders': 'Orders',
    '/user/competitions': 'Competitions',
    '/user/messages': 'Messages',
    '/user/profile-settings': 'Profile Settings',
  };

  const normalize = (str) => str.replace(/\/+$/, '').toLowerCase();
  const pathToCheck = normalize(location.pathname);

  let label = pathLabels[pathToCheck];
  if (!label) {
    const found = Object.entries(pathLabels).find(([key]) =>
      pathToCheck.startsWith(normalize(key))
    );
    label = found ? found[1] : 'Dashboard';
  }

  const displayName = user?.name || 'Guest';
  const displayRole = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Guest';

  return (
    <div className="min-h-screen h-screen bg-background relative">
      {/* Sidebar: fixed on desktop */}
      <Sidebar
        key="main-sidebar"
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onLogout={onLogout}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      {/* Main content: only add left margin on desktop */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
          lg:ml-0
          ${collapsed ? 'lg:ml-16' : 'lg:ml-64'}
        `}
      >
        <header
          className="shadow-sm border-b px-6 py-4"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E7EB',
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F3F4F6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{
                    color: '#0F172A',
                    fontFamily: 'Poppins, system-ui, sans-serif',
                  }}
                >
                  {label}
                </h1>
                <p className="text-sm" style={{ color: '#6B7280' }}></p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="relative p-2 rounded-lg transition-colors"
                style={{
                  color: '#6B7280',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0F172A';
                  e.target.style.backgroundColor = '#F3F4F6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#6B7280';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <Bell className="w-5 h-5" />
                <span
                  className="absolute top-0 right-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#EF4444' }}
                ></span>
              </button>
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden md:block">
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: '#0F172A',
                      fontFamily: 'Open Sans, system-ui, sans-serif',
                    }}
                  >
                    {displayName}
                  </p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>
                    {displayRole}
                  </p>
                  {user && (
                    <button
                      onClick={onLogout}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4">
          {children || <div className="text-gray-500">No content available</div>}
        </main>
      </div>
    </div>
  );
};

export default Header;