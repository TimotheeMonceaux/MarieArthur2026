import React from 'react';
import { Music, Mic2, Youtube, FileText, Sparkles, Volume2 } from 'lucide-react';

const SongsSection = () => {
  // Liens à remplir (Google Doc ou Playlist YouTube)
  const playlistUrl = ""; 
  const lyricsUrl = ""; 

  return (
    <div className="space-y-10 p-4 md:p-8 max-w-3xl mx-auto text-center">
      
      {/* --- EN-TÊTE ET TEXTE D'ACCUEIL --- */}
      <section className="space-y-6">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-citrus-pink to-citrus-yellow rounded-full blur opacity-30 animate-pulse" />
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg text-citrus-punch">
            <Mic2 size={36} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-tight font-sans">
            Chanter ensemble
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg px-4">
            Nous avons réuni ici les chants que nous avons choisi pour notre célébration à la messe. 
            Nous vous invitons à les découvrir, et pourquoi pas à vous entraîner à les chanter. 
            <span className="text-citrus-punch font-semibold"> Plus vos voix seront fortes, plus le moment sera joyeux !</span>
          </p>
        </div>
      </section>

      {/* --- CARTES DE RESSOURCES --- */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        {/* Playlist YouTube */}
        <div className="bg-white p-6 rounded-[2rem] border-2 border-citrus-yellow shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Youtube size={28} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">La Playlist</h3>
          <p className="text-sm text-slate-500 mb-6">Pour écouter les mélodies et se familiariser avec le rythme.</p>
          
          {playlistUrl ? (
            <a 
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-full font-bold text-sm shadow-sm hover:bg-red-600 transition-colors"
            >
              Écouter sur YouTube
            </a>
          ) : (
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest">
              Bientôt disponible
            </span>
          )}
        </div>

        {/* Livret / Google Doc */}
        <div className="bg-white p-6 rounded-[2rem] border-2 border-citrus-pink/20 shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 bg-citrus-pink/10 text-citrus-punch rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <FileText size={28} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Les Paroles</h3>
          <p className="text-sm text-slate-500 mb-6">Le livret de messe numérique pour suivre et chanter les textes.</p>
          
          {lyricsUrl ? (
            <a 
              href={lyricsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-citrus-punch text-white rounded-full font-bold text-sm shadow-sm hover:bg-citrus-deep transition-colors"
            >
              Lire le livret
            </a>
          ) : (
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest">
              En cours de saisie
            </span>
          )}
        </div>
      </div>

      {/* Petit clin d'oeil visuel */}
      <div className="pt-4 flex items-center justify-center gap-4">
        <div className="h-[1px] w-12 bg-slate-200" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 bg-citrus-yellow rounded-full animate-bounce" 
              style={{ height: `${12 + (i % 3) * 8}px`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <div className="h-[1px] w-12 bg-slate-200" />
      </div>
    </div>
  );
};

export default SongsSection;