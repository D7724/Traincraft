import { Link } from 'react-router';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Zap, Target, Calendar, TrendingUp, Clock, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoSvg from '../../ressources/logo.svg';
import image from '../../ressources/Image_Traincraft.png'

export function Landing() {
  const benefits = [
    { icon: Zap, title: 'Schnelle Planerstellung', text: 'Dein personalisierter Trainingsplan in unter 2 Minuten' },
    { icon: Target, title: 'Zielgerichtet', text: 'Erreiche deine Fitnessziele mit strukturierten Plänen' },
    { icon: TrendingUp, title: 'Fortschritt im Blick', text: 'Verfolge deinen Erfolg mit detaillierten Statistiken' },
    { icon: Calendar, title: 'Flexibel anpassbar', text: 'Passe deinen Plan jederzeit an deinen Alltag an' }
  ];

  const steps = [
    { number: '01', title: 'Ziel definieren', desc: 'Wähle dein Trainingsziel aus' },
    { number: '02', title: 'Plan erstellen', desc: 'KI generiert deinen individuellen Plan' },
    { number: '03', title: 'Loslegen', desc: 'Starte direkt mit deinem ersten Workout' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoSvg} alt="Traincraft" className="h-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-2xl font-bold text-[#1ED760]">TRAIN<span className="text-white">CRAFT</span></span>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1683758575782-a632dbbe9eed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Runner in nature"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0A0A0A]/60 to-[#0A0A0A]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1ED760] opacity-[0.04] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-7xl mb-8 text-white">
            Dein Training.<br />Dein Tempo.
          </h1>
          <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
            Erstelle personalisierte Trainingspläne in Sekunden und erreiche deine Fitnessziele schneller.
          </p>
          <Link to="/dashboard">
            <Button variant="primary" className="text-lg px-12 py-6 group">
              Jetzt starten
              <ArrowRight size={24} className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-5xl text-center mb-16 text-white">Warum TRAINCRAFT?</h2>
        <div className="grid grid-cols-4 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Card key={i} glass className="group">
                <div className="w-14 h-14 rounded-2xl bg-[#1ED760]/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#1ED760]/20 group-hover:scale-110">
                  <Icon size={28} className="text-[#1ED760]" />
                </div>
                <h3 className="text-xl mb-4 text-white">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed">{benefit.text}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-5xl text-center mb-16 text-white">So funktioniert's</h2>
        <div className="grid grid-cols-3 gap-8 relative">
          <div className="absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-[#1ED760]/40 via-[#1ED760]/60 to-[#1ED760]/40 hidden md:block" />
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-[#1ED760]/10 border-2 border-[#1ED760]/30 flex items-center justify-center mx-auto mb-8 relative z-10 backdrop-blur-sm">
                <span className="text-2xl font-bold text-[#1ED760]">{step.number}</span>
              </div>
              <h3 className="text-2xl mb-4 text-white">{step.title}</h3>
              <p className="text-white/60 max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-32">
        <Card glass className="group">
          <div className="flex items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl mb-8 text-white">Dein persönlicher Trainingsassistent</h2>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#1ED760]/10 flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#1ED760]/20 group-hover/item:scale-110">
                    <Clock className="text-[#1ED760]" size={20} />
                  </div>
                  <span className="text-white/80">Automatische Zeitplanung</span>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-[#1ED760]/10 flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#1ED760]/20 group-hover/item:scale-110">
                    <Award className="text-[#1ED760]" size={20} />
                  </div>
                  <span className="text-white/80">Achievements & Belohnungen</span>
                </div>
              </div>
            </div>
            <div className="w-96 h-64 rounded-xl overflow-hidden border border-white/10">
              <img src={image} className="w-full h-full object-cover" />
            </div>
          </div>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto px-8 py-32 text-center">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1ED760] opacity-[0.03] rounded-full blur-[100px]" />
          <h2 className="text-5xl mb-8 text-white relative">Bereit durchzustarten?</h2>
          <p className="text-xl text-white/60 mb-12 relative">
            Tausende Athleten vertrauen bereits auf TRAINCRAFT
          </p>
          <div className="relative">
            <Link to="/dashboard">
              <Button variant="primary" className="text-lg px-12 py-6 group">
                Kostenlos testen
                <ArrowRight size={24} className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
