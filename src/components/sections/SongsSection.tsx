import { Mic2, Youtube, FileText } from 'lucide-react';

const SongsSection = () => {
  // Liens à remplir (Google Doc ou Playlist YouTube)
  const playlistUrl = "a"; 
  const lyricsUrl = "a"; 

  return (
    <div className="space-y-10 p-4 md:p-8 max-w-3xl mx-auto text-center">
      
      {/* --- EN-TÊTE ET TEXTE D'ACCUEIL --- */}
      <section className="space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dresscode-yellow/30 text-dresscode-orange mb-2">
          <Mic2 size={32} />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-dresscode-orange uppercase tracking-tight">
            Chanter ensemble
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg px-4">
            Nous avons réuni ici les chants que nous avons choisi pour notre célébration à l'église. 
            Nous vous invitons à les découvrir, et pourquoi pas à vous entraîner à les chanter. 
            <span className="text-dresscode-orange font-semibold"> Plus vos voix seront fortes, plus le moment sera joyeux !</span>
          </p>
        </div>
      </section>

      {/* --- CARTES DE RESSOURCES --- */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        {/* Playlist YouTube */}
        <div className="bg-off-white p-6 rounded-[2rem] border-2 border-dresscode-yellow/50 shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 bg-dresscode-orange/20 text-dresscode-orange rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Youtube size={28} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">La Playlist</h3>
          <p className="text-sm text-slate-500 mb-6">Pour écouter les mélodies et se familiariser avec le rythme.</p>
          
          {playlistUrl ? (
            <a 
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-dresscode-yellow text-off-white rounded-full font-bold text-sm shadow-sm hover:bg-dresscode-yellow-light transition-colors"
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
        <div className="bg-off-white p-6 rounded-[2rem] border-2 border-dresscode-orange/50 shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-12 h-12 bg-dresscode-orange/10 text-dresscode-orange rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <FileText size={28} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Les Paroles</h3>
          <p className="text-sm text-slate-500 mb-6">Le livret de messe numérique pour suivre et chanter les textes.</p>
          
          {lyricsUrl ? (
            <a 
              href={lyricsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-dresscode-orange-dark text-off-white rounded-full font-bold text-sm shadow-sm hover:bg-dresscode-orange transition-colors"
            >
              Lire le livret
            </a>
          ) : (
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest">
              Bientôt disponible
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
              className="w-1 bg-dresscode-yellow rounded-full animate-bounce" 
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