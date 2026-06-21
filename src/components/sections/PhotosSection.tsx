import { Camera, Image as ImageIcon, Sparkles, ExternalLink, Clapperboard, Heart, KeyRound, Lock } from 'lucide-react';

interface GalleryCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  url: string;
  instructions?: string;
  buttonLabel: string;
  pendingLabel: string;
  accentClass: string;
  buttonClass: string;
}

const GalleryCard = ({
  icon,
  title,
  subtitle,
  url,
  instructions,
  buttonLabel,
  pendingLabel,
  accentClass,
  buttonClass,
}: GalleryCardProps) => (
  <div className={`bg-off-white p-8 rounded-[2rem] shadow-lg border ${accentClass} transition-shadow group flex flex-col items-center text-center`}>
    <div className="mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-slate-800 mb-1">{title}</h4>
    <p className="text-sm text-slate-500 italic mb-4">{subtitle}</p>

    {/* Instructions badge */}
    {instructions && (
      <div className="flex items-center gap-2 bg-dresscode-yellow/20 border border-dresscode-yellow/40 rounded-xl px-4 py-2 mb-5 text-sm text-slate-600">
        <KeyRound size={14} className="text-dresscode-orange shrink-0" />
        <span>{instructions}</span>
      </div>
    )}

    <div className="mt-auto pt-2">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all ${buttonClass}`}
        >
          {buttonLabel} <ExternalLink size={16} />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          <Lock size={13} />
          {pendingLabel}
        </span>
      )}
    </div>
  </div>
);

const PhotosSection = () => {
  // --- Liens à remplir après le mariage ---
  const charleneUrl = "";          // ← à compléter dès réception
  const lucasUrl   = "https://lucashutinphotographie92.pixieset.com/marieandarthur/";
  const photoboothUrl = "https://photos.app.goo.gl/S3WUMMFzRV7nrsYs8";

  const anyAvailable = charleneUrl || lucasUrl || photoboothUrl;

  return (
    <div className="space-y-10 p-4 md:p-8 max-w-4xl mx-auto text-center">

      {/* --- EN-TÊTE --- */}
      <section className="space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dresscode-yellow/30 text-dresscode-orange mb-2">
          <Camera size={32} />
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-dresscode-orange uppercase tracking-tight">
          Souvenirs en images
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto">
          Revivez chaque instant de notre journée à travers ces souvenirs en images.
        </p>
      </section>

      {!anyAvailable ? (
        /* --- ÉTAT AVANT DISPONIBILITÉ --- */
        <div className="bg-off-white rounded-[2.5rem] p-12 shadow-xl shadow-slate-200/50 border-2 border-dashed border-slate-200 flex flex-col items-center space-y-4 relative overflow-hidden">
          <div className="p-4 bg-dresscode-yellow-lighter/20 rounded-full animate-pulse">
            <Sparkles className="text-dresscode-yellow" size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">
            Le développement est en cours...
          </h3>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Revenez ici quelques jours après le mariage pour découvrir les sourires, les larmes et les pas de danse de cette journée.
          </p>
          <Heart
            className="absolute -bottom-8 -right-4 text-dresscode-yellow/15 -rotate-24"
            size={120}
          />
        </div>
      ) : (
        /* --- GALERIES --- */
        <div className="grid md:grid-cols-3 gap-6">

          {/* Charlène */}
          <GalleryCard
            icon={<ImageIcon size={40} className="text-dresscode-orange" />}
            title="Les photos de Charlène"
            subtitle="La cérémonie et les portraits."
            url={charleneUrl}
            buttonLabel="Voir la galerie"
            pendingLabel="Bientôt disponible"
            accentClass="border-dresscode-orange shadow-dresscode-orange/30 hover:shadow-dresscode-orange/50"
            buttonClass="bg-dresscode-orange text-off-white hover:bg-dresscode-orange-dark"
          />

          {/* Lucas */}
          <GalleryCard
            icon={<ImageIcon size={40} className="text-dresscode-green" />}
            title="Les photos de Lucas"
            subtitle="La cérémonie, la fête et les moments du soir."
            url={lucasUrl}
            instructions='Mot de passe : "M&A"'
            buttonLabel="Voir la galerie"
            pendingLabel="Bientôt disponible"
            accentClass="border-dresscode-green shadow-dresscode-green/30 hover:shadow-dresscode-green/50"
            buttonClass="bg-dresscode-green-dark text-white hover:bg-dresscode-green"
          />

          {/* Photobooth */}
          <GalleryCard
            icon={<Clapperboard size={40} className="text-dresscode-orange-dark" />}
            title="Le Photobooth"
            subtitle="Des grimaces, principalement !"
            url={photoboothUrl}
            buttonLabel="Constater les dégâts"
            pendingLabel="Arrivage imminent"
            accentClass="border-dresscode-yellow shadow-dresscode-yellow/30 hover:shadow-dresscode-yellow/50"
            buttonClass="bg-dresscode-orange-dark text-off-white hover:bg-dresscode-orange"
          />

        </div>
      )}
    </div>
  );
};

export default PhotosSection;