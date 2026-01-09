import { useState, useEffect } from 'react';

const HomeSection = () => {
  // Date cible : 6 juin 2026 à 15h00
  const targetDate = new Date('2026-06-06T15:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          jours: Math.floor(distance / (1000 * 60 * 60 * 24)),
          heures: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secondes: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center text-center space-y-8 p-6 max-w-2xl mx-auto">
      {/* Texte d'accueil */}
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed font-light">
          Tout a commencé à <span className="font-medium text-slate-800">Montréal</span>, 
          un chapitre que nous n'oublierons jamais. 
          Aujourd'hui, de retour à <span className="font-medium text-slate-800">Reims</span>, 
          nous en écrivons un nouveau, plus grand, plus beau… et nous rêvons de vous y compter à nos côtés.
        </p>
        <p className="text-slate-700 font-medium">
          Nous sommes heureux de vous inviter pour notre mariage 
          que nous célébrerons le <span className="text-citrus-deep">6 juin 2026</span> à l'église Saint-Martin de Saint-Quentin.
        </p>
      </div>

      <hr className="w-24 border-t border-slate-200" />

      {/* Décompte Dynamique */}
      <div className="w-full">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Le grand jour approche</p>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center p-3 bg-white/50 rounded-lg shadow-sm border border-slate-100">
              <span className="text-2xl md:text-3xl font-light text-slate-800">{value}</span>
              <span className="text-[10px] uppercase text-slate-500 font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;