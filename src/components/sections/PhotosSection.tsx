import { Camera, Image as ImageIcon, Sparkles, ExternalLink, Clapperboard } from 'lucide-react';

const PhotosSection = () => {
  // Liens à remplir après le mariage
  const photoboothUrl = ""; 
  const officialPhotosUrl = ""; 

  const isAvailable = photoboothUrl || officialPhotosUrl;

  return (
    <div className="space-y-10 p-4 md:p-8 max-w-4xl mx-auto text-center">
      
      {/* --- EN-TÊTE --- */}
      <section className="space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-citrus-lime/20 text-dresscode-green rotate-3 mb-2">
          <Camera size={32} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">Souvenirs en images</h2>
        <p className="text-slate-600 max-w-lg mx-auto">
          Revivez chaque instant de notre journée à travers ces souvenirs en images.
        </p>
      </section>

      {!isAvailable ? (
        /* --- ÉTAT AVANT DISPONIBILITÉ --- */
        <div className="bg-off-white rounded-[2.5rem] p-12 shadow-xl shadow-slate-200/50 border-2 border-dashed border-slate-200 flex flex-col items-center space-y-4">
          <div className="p-4 bg-dresscode-yellow-lighter/20 rounded-full animate-pulse">
            <Sparkles className="text-dresscode-yellow" size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">Le développement est en cours...</h3>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Revenez ici quelques jours après le mariage pour découvrir les sourires, les larmes et les pas de danse de cette journée.
          </p>
        </div>
      ) : (
        /* --- LIENS VERS LES PHOTOS --- */
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Bloc Photobooth */}
          <div className="bg-off-white p-8 rounded-[2rem] shadow-lg border border-dresscode-orange-dark shadow-dresscode-orange-dark/40 hover:shadow-dresscode-orange-dark/60 transition-shadow group">
            <Clapperboard className="mx-auto mb-4 text-dresscode-orange-dark group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-xl font-bold text-slate-800 mb-2">Le Photobooth</h4>
            <p className="text-sm text-slate-500 mb-6 italic">Vos grimaces et vos plus beaux accessoires !</p>
            {photoboothUrl ? (
              <a 
                href={photoboothUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-dresscode-orange-dark text-off-white rounded-xl font-bold shadow-md hover:bg-dresscode-orange transition-all"
              >
                Accéder aux folies <ExternalLink size={16} />
              </a>
            ) : (
              <span className="text-xs font-bold text-dresscode-orange-dark uppercase tracking-widest">Arrivage imminent</span>
            )}
          </div>

          {/* Bloc Photos Officielles */}
          <div className="bg-off-white p-8 rounded-[2rem] shadow-lg border border-dresscode-green shadow-dresscode-green/40 hover:shadow-dresscode-green/60 transition-shadow group">
            <ImageIcon className="mx-auto mb-4 text-dresscode-green group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-xl font-bold text-slate-800 mb-2">Photos Officielles</h4>
            <p className="text-sm text-slate-500 mb-6 italic">Les moments forts capturés par notre photographe.</p>
            {officialPhotosUrl ? (
              <a 
                href={officialPhotosUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-dresscode-green-dark text-white rounded-xl font-bold shadow-md hover:bg-dresscode-green transition-all"
              >
                Voir la galerie <ExternalLink size={16} />
              </a>
            ) : (
              <span className="text-xs font-bold text-dresscode-green uppercase tracking-widest">En cours de tri</span>
            )}
          </div>

        </div>
      )}
    </div>
  );
};

export default PhotosSection;