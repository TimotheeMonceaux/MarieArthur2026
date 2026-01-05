import photo from './assets/photo.jpg';
import photo2 from './assets/photo2.jpg';
import PasswordPrompt from './components/PasswordPrompt';
import { useAppSelector } from './store/store';

function App() {
  const profile = useAppSelector((state) => state.passwordSlice.profile);
  if (profile === undefined) return <PasswordPrompt />

  let description = (profile === 'GUEST_ALL') ? 
    "Vous êtes invité pour tout le mariage" : "Vous êtes invité pour le vin d'honneur";
  let image = (profile === 'GUEST_ALL') ? photo2 : photo;
  
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-citrus-pink to-citrus-orange p-4">
      <div
        className="
          bg-white overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl
          max-w-md w-full border-t-4 border-citrus-bright
          transform transition-all duration-300 hover:scale-[1.02]
        "
      >
        {/* Section Image */}
        <div className="relative h-64 w-full bg-gray-200">
          <img
            src={image}
            alt="photo"
            className="w-full h-full object-cover"
          />
          {/* Overlay subtil pour le contraste */}
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Section Contenu */}
        <div className="p-8 sm:p-10 text-center">
          <h1 className="text-3xl font-extrabold text-citrus-deep mb-4">
            Vous êtes connecté !
          </h1>
          
          <div className="bg-orange-50 p-4 rounded-xl border border-citrus-yellow/30">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>

  return <><img src={photo} className="logo" alt="Photo" /></>
}

export default App
