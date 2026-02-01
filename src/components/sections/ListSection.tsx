import { Gift, Heart, ExternalLink, Sparkles } from 'lucide-react';

const ListSection = () => {
  // À remplir dès que le lien est disponible
  const listUrl = ""; // ex: "https://www.millesimes.com/ma-liste-marie-arthur"

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-2xl mx-auto text-center">
      
      {/* Icône animée */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dresscode-yellow/30 text-dresscode-orange mb-2">
          <Gift size={32} />
        </div>

      {/* Texte d'introduction */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-dresscode-orange uppercase tracking-tight">Liste de Mariage</h2>
        <p className="text-slate-700 max-w-md mx-auto">
          Si vous souhaitez nous accompagner dans la réalisation de nos futurs projets et de notre voyage de noces, 
          une liste de mariage en ligne est à votre disposition.
        </p>
      </div>

      {/* Bloc d'action ou d'attente */}
      <div className="bg-off-white rounded-[2.5rem] p-8 shadow-xl shadow-dresscode-orange-dark/10 border border-slate-100 relative overflow-hidden group">
        
        {listUrl ? (
          <div className="space-y-6 animate-in fade-in zoom-in duration-700">
            <p className="text-sm font-bold text-dresscode-orange-dark uppercase tracking-[0.2em]">Contribuer à nos projets</p>
            <a 
              href={listUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-dresscode-orange-dark text-off-white rounded-full font-bold shadow-lg hover:bg-dresscode-orange hover:scale-105 transition-all group"
            >
              Voir notre liste de mariage
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="flex justify-center gap-2 text-dresscode-orange-dark">
              <Sparkles size={20} className="animate-pulse" />
              <span className="font-bold uppercase tracking-widest text-sm">Bientôt disponible !</span>
              <Sparkles size={20} className="animate-pulse" />
            </div>
            <p className="text-slate-400 text-sm italic">
              Nous sommes encore en train de peaufiner nos projets. <br />
              La liste sera accessible très prochainement !
            </p>
          </div>
        )}

        {/* Décoration de coin */}
        <Heart 
          className="absolute -bottom-4 -right-4 text-dresscode-orange-dark/15 -rotate-12" 
          size={120} 
        />
      </div>

      <p className="text-xs text-slate-400">
        Une urne sera également mise à votre disposition sur le lieu de réception.
      </p>
    </div>
  );
};

export default ListSection;