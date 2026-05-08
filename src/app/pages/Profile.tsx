import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { User, Target, Bell, Settings, LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <Navigation />

      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-white">Profil & Einstellungen</h1>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <Card className="col-span-1 text-center">
            <div className="w-32 h-32 bg-[#1ED760] rounded-full mx-auto mb-6 flex items-center justify-center">
              <User size={64} className="text-[#0A0A0A]" />
            </div>
            <h2 className="text-2xl mb-2 text-white">Alex Müller</h2>
            <p className="text-white/60 mb-6">alex@traincraft.de</p>
            <Button variant="outline" className="w-full">
              Profil bearbeiten
            </Button>
          </Card>

          <Card className="col-span-2">
            <h2 className="text-2xl mb-6 text-white">Deine Ziele</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="text-[#1ED760] mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-white">Hauptziel</h3>
                  <p className="text-white/60">Ausdauer verbessern & Gewicht halten</p>
                </div>
                <Button variant="outline">Ändern</Button>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl mb-4 text-white">Wöchliches Pensum</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-white/60 mb-2">Trainingstage</div>
                    <div className="text-2xl text-white">4-5 Tage</div>
                  </div>
                  <div>
                    <div className="text-white/60 mb-2">Zeitbudget</div>
                    <div className="text-2xl text-white">45-60 Min</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <h2 className="text-2xl mb-6 text-white">Körperliche Daten</h2>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="text-white/60 mb-2">Größe</div>
              <div className="text-3xl text-white">178 cm</div>
            </div>
            <div>
              <div className="text-white/60 mb-2">Gewicht</div>
              <div className="text-3xl text-white">75 kg</div>
            </div>
            <div>
              <div className="text-white/60 mb-2">Alter</div>
              <div className="text-3xl text-white">28</div>
            </div>
            <div>
              <div className="text-white/60 mb-2">BMI</div>
              <div className="text-3xl text-[#1ED760]">23.7</div>
            </div>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl mb-6 text-white">Einstellungen</h2>
          <div className="space-y-6">
            {[
              { icon: Bell, label: 'Benachrichtigungen', value: 'Aktiviert' },
              { icon: Settings, label: 'App-Einstellungen', value: 'Konfigurieren' }
            ].map((setting, i) => (
              <div key={i} className="flex items-center justify-between pb-6 border-b border-white/10 last:border-0">
                <div className="flex items-center gap-4">
                  <setting.icon className="text-[#1ED760]" size={24} />
                  <span className="text-xl text-white">{setting.label}</span>
                </div>
                <Button variant="outline">{setting.value}</Button>
              </div>
            ))}
          </div>
        </Card>

        <Button variant="outline" className="w-full text-red-400 border-red-400 hover:bg-red-400/10">
          <LogOut size={20} className="inline mr-2" />
          Abmelden
        </Button>
      </div>
    </div>
  );
}
