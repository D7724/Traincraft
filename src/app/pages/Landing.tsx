import { Link } from 'react-router';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Zap, Target, Calendar, TrendingUp, Clock, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoSvg from '../../ressources/logo.svg';

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoSvg} alt="Traincraft" className="h-12" />
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
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-7xl mb-8 text-white">
            Dein Training.<br />Dein Tempo.
          </h1>
          <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
            Erstelle personalisierte Trainingspläne in Sekunden und erreiche deine Fitnessziele schneller.
          </p>
          <Link to="/dashboard">
            <Button variant="primary" className="text-lg px-12 py-6">
              Jetzt starten
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-5xl text-center mb-16 text-white">Warum TRAINCRAFT?</h2>
        <div className="grid grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i}>
              <benefit.icon size={48} className="text-[#1ED760] mb-6" />
              <h3 className="text-xl mb-4 text-white">{benefit.title}</h3>
              <p className="text-white/60">{benefit.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-5xl text-center mb-16 text-white">So funktioniert's</h2>
        <div className="grid grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-7xl font-bold text-[#1ED760] mb-8 opacity-30">{step.number}</div>
              <h3 className="text-2xl mb-4 text-white">{step.title}</h3>
              <p className="text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-32">
        <Card className="bg-gradient-to-r from-[#1A1A2E] to-[#1A1A2E]/50">
          <div className="flex items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl mb-8 text-white">Dein persönlicher Trainingsassistent</h2>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <Clock className="text-[#1ED760]" size={24} />
                  <span className="text-white/80">Automatische Zeitplanung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="text-[#1ED760]" size={24} />
                  <span className="text-white/80">Achievements & Belohnungen</span>
                </div>
              </div>
            </div>
            <div className="w-96 h-64 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683758575782-a632dbbe9eed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Runner in nature"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
          </div>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto px-8 py-32 text-center">
        <h2 className="text-5xl mb-8 text-white">Bereit durchzustarten?</h2>
        <p className="text-xl text-white/60 mb-12">
          Tausende Athleten vertrauen bereits auf TRAINCRAFT
        </p>
        <Link to="/dashboard">
          <Button variant="primary" className="text-lg px-12 py-6">
            Kostenlos testen
          </Button>
        </Link>
      </section>
    </div>
  );
}
