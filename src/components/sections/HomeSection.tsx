import { Heart } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const HomeSection = () => {
  // Date cible : 6 juin 2026 à 15h00
  const targetDate = new Date('2026-06-06T15:00:00').getTime();

  // Fonction de calcul mémorisée pour éviter les recréations inutiles
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) return { jours: 0, heures: 0, minutes: 0, secondes: 0 };

    return {
      jours: Math.floor(distance / (1000 * 60 * 60 * 24)),
      heures: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      secondes: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Mise à jour immédiate pour éviter le délai d'une seconde
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex flex-col items-center text-center space-y-8 p-6 max-w-2xl mx-auto relative">
      {/* Texte d'accueil */}
      <div className="space-y-4">
        <p className="text-slate-700 font-medium">
          Nous sommes heureux de vous inviter pour notre mariage 
          que nous célébrerons le <span className="text-dresscode-orange">6 juin 2026</span> à l'église Saint-Martin de Saint-Quentin.
        </p>
      </div>

      <hr className="w-24 border-t border-slate-200" />

      {/* Décompte Dynamique */}
      <div className="w-full">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Le grand jour approche</p>
        
        {/* Changement ici : grid-cols-2 sur mobile, grid-cols-4 sur desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center p-2 md:p-3 bg-white/50 rounded-lg shadow-sm border border-slate-100">
              <span className="text-xl md:text-3xl font-light text-slate-800">
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-[9px] md:text-[10px] uppercase text-slate-500 font-semibold tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Heart 
          className="absolute -bottom-4 -right-12 text-dresscode-orange-dark/15 -rotate-12" 
          size={120} 
        />
    </div>
  );
};

export default HomeSection;