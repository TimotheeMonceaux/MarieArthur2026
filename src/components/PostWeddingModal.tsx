import { useEffect, useState } from 'react';
import { X, Heart, Camera, UtensilsCrossed } from 'lucide-react';
import photo_mariage from '../assets/webp/photo_mariage.webp';
import photo_mariage_legacy from '../assets/legacy/photo_mariage.jpg';

interface PostWeddingModalProps {
  recipeFormUrl: string;
  onNavigateToPhotos: () => void;
}

const PostWeddingModal = ({ recipeFormUrl, onNavigateToPhotos }: PostWeddingModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Small delay so the page has time to render first
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handlePhotosClick = () => {
    handleClose();
    // Let the close animation finish before scrolling
    setTimeout(() => onNavigateToPhotos(), 350);
  };

  if (!isVisible) return null;

  return (
    /* Backdrop */
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center p-4 bg-dresscode-blue/60 backdrop-blur-sm transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose}
    >
      {/* Modal card */}
      <div
        className={`relative bg-off-white rounded-[2rem] shadow-2xl max-w-2xl w-full overflow-hidden border-t-8 border-dresscode-yellow transition-all duration-300 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-off-white/80 text-dresscode-orange hover:bg-dresscode-yellow/30 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Photo */}
        <div className="relative w-full h-56 md:h-64 overflow-hidden">
          <picture className="w-full h-full">
            <source srcSet={photo_mariage} type="image/webp" />
            <img
              src={photo_mariage_legacy}
              alt="Photo de mariage"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          {/* Gradient fade into card body */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-off-white to-transparent" />
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-2 text-center space-y-4">
          {/* Animated heart */}
          <div className="flex justify-center -mt-1">
            <Heart
              className="text-dresscode-orange fill-dresscode-yellow animate-pulse"
              size={28}
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-dresscode-orange uppercase tracking-tight leading-tight">
            On s'est dit OUI !!
          </h2>

          {/* Message */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
            Merci à tous d'avoir été présents pour partager ce merveilleux moment avec nous&nbsp;!<br /><br />
            Votre amour et votre joie ont rendu cette journée inoubliable. 🧡
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-dresscode-yellow/50" />
            <span className="text-dresscode-yellow text-xs font-bold uppercase tracking-widest">Et maintenant ?</span>
            <div className="flex-1 h-px bg-dresscode-yellow/50" />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            {/* Photos shortcut */}
            <button
              onClick={handlePhotosClick}
              className="flex-1 inline-flex items-center cursor-pointer justify-center gap-2 px-4 py-3 bg-dresscode-orange text-off-white rounded-xl font-bold text-sm shadow-md hover:bg-dresscode-orange-dark transition-all"
            >
              <Camera size={16} />
              Accéder aux photos
            </button>

            {/* Recipe form */}
            <a
              href={recipeFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-off-white text-dresscode-green-dark border-2 border-dresscode-green rounded-xl font-bold text-sm shadow-sm hover:bg-dresscode-green/10 transition-all"
            >
              <UtensilsCrossed size={16} />
              Partager une recette
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWeddingModal;