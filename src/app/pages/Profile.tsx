import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { User, Target, Bell, Settings, LogOut, Edit3 } from 'lucide-react';

export function Profile() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <Navigation />

      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-5xl mb-4 text-white">Profil & Einstellungen</h1>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <Card glass className="col-span-1 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:100ms]">
            <div className="relative w-32 h-32 mx-auto mb-6 group/avatar">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1ED760] to-[#1ED760]/40 flex items-center justify-center">
                <User size={56} className="text-[#0A0A0A]" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-[#1ED760] border-4 border-[#0A0A0A] flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 cursor-pointer">
                <Edit3 size={16} className="text-[#0A0A0A]" />
              </div>
            </div>
            <h2 className="text-2xl mb-2 text-white">Alex Müller</h2>
            <p className="text-white/60 mb-6">alex@traincraft.de</p>
            <Button variant="outline" className="w-full">
              Profil bearbeiten
            </Button>
          </Card>

          <Card glass className="col-span-2 animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:200ms]">
            <h2 className="text-2xl mb-6 text-white">Deine Ziele</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1ED760]/10 flex items-center justify-center mt-1">
                  <Target className="text-[#1ED760]" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-white">Hauptziel</h3>
                  <p className="text-white/60">Ausdauer verbessern & Gewicht halten</p>
                </div>
                <Button variant="outline">Ändern</Button>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl mb-4 text-white">Wöchliches Pensum</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="text-white/60 mb-2 text-sm">Trainingstage</div>
                    <div className="text-2xl text-white font-bold">4-5 Tage</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="text-white/60 mb-2 text-sm">Zeitbudget</div>
                    <div className="text-2xl text-white font-bold">45-60 Min</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card glass className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:300ms]">
          <h2 className="text-2xl mb-6 text-white">Körperliche Daten</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-white/5 rounded-xl p-5">
              <div className="text-white/60 mb-2 text-sm">Größe</div>
              <div className="text-3xl text-white font-bold">178 <span className="text-lg text-white/40">cm</span></div>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <div className="text-white/60 mb-2 text-sm">Gewicht</div>
              <div className="text-3xl text-white font-bold">75 <span className="text-lg text-white/40">kg</span></div>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <div className="text-white/60 mb-2 text-sm">Alter</div>
              <div className="text-3xl text-white font-bold">28</div>
            </div>
            <div className="bg-white/5 rounded-xl p-5 bg-gradient-to-br from-[#1ED760]/5 to-transparent border border-[#1ED760]/10">
              <div className="text-white/60 mb-2 text-sm">BMI</div>
              <div className="text-3xl font-bold text-[#1ED760]">23.7</div>
            </div>
          </div>
        </Card>

        <Card glass className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:400ms]">
          <h2 className="text-2xl mb-6 text-white">Einstellungen</h2>
          <div className="space-y-4">
            {[
              { icon: Bell, label: 'Benachrichtigungen', value: 'Aktiviert' },
              { icon: Settings, label: 'App-Einstellungen', value: 'Konfigurieren' }
            ].map((setting, i) => {
              const Icon = setting.icon;
              return (
                <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl p-5 transition-all duration-300 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1ED760]/10 flex items-center justify-center">
                      <Icon className="text-[#1ED760]" size={20} />
                    </div>
                    <span className="text-lg text-white">{setting.label}</span>
                  </div>
                  <Button variant="outline">{setting.value}</Button>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 [--delay:500ms]">
          <Button variant="outline" className="w-full text-red-400 border-red-400/30 hover:bg-red-400/10 hover:border-red-400/50">
            <LogOut size={20} className="inline mr-2" />
            Abmelden
          </Button>
        </div>
      </div>
    </div>
  );
}
