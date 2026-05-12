import { Link, useLocation } from 'react-router';
import { Home, Calendar, TrendingUp, User } from 'lucide-react';
import logoSvg from '../../ressources/logo.svg';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Home' },
    { path: '/training', icon: Calendar, label: 'Training' },
    { path: '/progress', icon: TrendingUp, label: 'Fortschritt' },
    { path: '/profile', icon: User, label: 'Profil' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoSvg} alt="Traincraft" className="h-10 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl font-bold text-[#1ED760]">TRAIN<span className="text-white">CRAFT</span></span>
        </Link>

        <div className="flex gap-1">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-[#1ED760] bg-[#1ED760]/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
