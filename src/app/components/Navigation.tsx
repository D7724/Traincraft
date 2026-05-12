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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoSvg} alt="Traincraft" className="h-10" />
          <span className="text-2xl font-bold text-[#1ED760]">TRAIN<span className="text-white">CRAFT</span></span>
        </Link>

        <div className="flex gap-8">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-2 transition-colors ${location.pathname === path
                  ? 'text-[#1ED760]'
                  : 'text-white/60 hover:text-white'
                }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
