import { Gift, Heart, ExternalLink, Sparkles } from 'lucide-react';

const ListSection = () => {
  // À remplir dès que le lien est disponible
  const listUrl = ""; // ex: "https://www.millesimes.com/ma-liste-marie-arthur"

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-2xl mx-auto text-center">
      
      {/* Icône animée */}
      <div className="relative inline-block">
        <div className="absolute inset-0 animate-ping rounded-full bg-citrus-pink/20 scale-150 duration-[3000ms]" />
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-citrus-pink to-citrus-orange text-white shadow-lg">
          <Gift size={36} />
        </div>
      </div>

      {/* Texte d'introduction */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">Liste de Mariage</h2>
        <p className="text-slate-600 leading-relaxed italic font-serif text-lg">
          "Votre présence à nos côtés est le plus beau des cadeaux..."
        </p>
        <p className="text-slate-700 max-w-md mx-auto">
          Si vous souhaitez néanmoins nous accompagner dans la réalisation de nos futurs projets et de notre voyage de noces, 
          une liste de mariage en ligne est à votre disposition.
        </p>
      </div>

      {/* Bloc d'action ou d'attente */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-citrus-pink/10 border border-slate-100 relative overflow-hidden group">
        
        {listUrl ? (
          <div className="space-y-6 animate-in fade-in zoom-in duration-700">
            <p className="text-sm font-bold text-citrus-punch uppercase tracking-[0.2em]">Contribuer à nos projets</p>
            <a 
              href={listUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-citrus-punch text-white rounded-full font-bold shadow-lg hover:bg-citrus-deep hover:scale-105 transition-all group"
            >
              Voir notre liste de mariage
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="flex justify-center gap-2 text-citrus-pink">
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
          className="absolute -bottom-4 -right-4 text-citrus-pink/5 -rotate-12" 
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