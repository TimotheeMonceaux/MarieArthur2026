import { useAppDispatch, useAppSelector } from '../store/store'; 
import { checkPassword } from '../store/slices/passwordSlice';
import { useState, useEffect } from 'react';
import lieux_illustres from '../assets/webp/lieux_illustres.webp';
import lieux_illustres_legacy from '../assets/legacy/lieux_illustres.png';
import fresque_haut from '../assets/webp/fresque_haut.webp';
import fresque_haut_legacy from '../assets/legacy/fresque_haut.png';
import fresque_haut_droite_2 from '../assets/webp/fresque_haut_droite_2.webp';
import fresque_haut_droite_2_legacy from '../assets/legacy/fresque_haut_droite_2.png';
import fresque_haut_2 from '../assets/webp/fresque_haut_2.webp';
import fresque_haut_2_legacy from '../assets/legacy/fresque_haut_2.png';
import icone_clementine from '../assets/webp/icone_clementine.webp';
import icone_clementine_legacy from '../assets/legacy/icone_clementine.png';
import icone_feuille from '../assets/webp/icone_feuille.webp';
import icone_feuille_legacy from '../assets/legacy/icone_feuille.png';
import icone_fleur from '../assets/webp/icone_fleur.webp';
import icone_fleur_legacy from '../assets/legacy/icone_fleur.png';

function PasswordPrompt() {
    const dispatch = useAppDispatch();  
    const hasError = useAppSelector((state) => state.passwordSlice.hasError);
    
    const [inputValue, setInputValue] = useState<string>();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(checkPassword(inputValue ?? ''));
    };

    // Hack for weird behaviour on mobile when the keyboard opens
    const [viewHeight, setViewHeight] = useState('100dvh');
    useEffect(() => {
        const height = window.innerHeight;
        setViewHeight(`${height}px`);
    }, []);

    return (
      <div style={{ minHeight: viewHeight }} className="relative flex items-center justify-center bg-linear-to-br from-light-blue to-dresscode-blue-light p-4 overflow-hidden">
        <picture className="hidden md:block absolute top-0 left-0 w-2/10 opacity-80 pointer-events-none">
          <source srcSet={fresque_haut_2} type="image/webp" />
          <img src={fresque_haut_2_legacy} alt="" loading="lazy"/>
        </picture>
        <picture className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-3/5 opacity-80 pointer-events-none">
          <source srcSet={fresque_haut} type="image/webp" />
          <img src={fresque_haut_legacy} alt="" loading="lazy"/>
        </picture>
        <picture className="hidden md:block absolute top-0 right-0 w-1/5 opacity-80 pointer-events-none">
          <source srcSet={fresque_haut_droite_2} type="image/webp" />
          <img src={fresque_haut_droite_2_legacy} alt="" loading="lazy"/>
        </picture>
        <picture className="absolute bottom-0 left-0 opacity-80 pointer-events-none">
          <source srcSet={lieux_illustres} type="image/webp" />
          <img src={lieux_illustres_legacy} alt="" loading="lazy"/>
        </picture>
        <picture className="hidden md:block absolute bottom-3/7 left-1/5 opacity-80 pointer-events-none">
          <source srcSet={icone_feuille} type="image/webp" />
          <img src={icone_feuille_legacy} alt="" loading="lazy"/>
        </picture>
        <picture className="hidden md:block absolute bottom-2/3 left-1/8 opacity-80 pointer-events-none">
          <source srcSet={icone_clementine} type="image/webp" />
          <img src={icone_clementine_legacy} alt="" loading="lazy"/>
        </picture>
        <picture className="hidden md:block absolute bottom-3/4 left-5/6 opacity-80 pointer-events-none">
          <source srcSet={icone_fleur} type="image/webp" />
          <img src={icone_fleur_legacy} alt="" loading="lazy"/>
        </picture>

        <div
          className="
            relative z-10 bg-off-white p-8 sm:p-10 rounded-2xl md:rounded-3xl shadow-2xl
            max-w-md w-full border-t-4 border-dresscode-yellow
            transform transition-all duration-300 hover:scale-[1.02]
          "
        >
          <h1 className="text-4xl font-extrabold text-dresscode-orange text-center mb-3">
            Bienvenue !
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Entrez ci-dessous le mot de passe inscrit sur votre faire-part pour commencer.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-dresscode-yellow focus:ring-2 focus:ring-dresscode-yellow-light outline-none text-lg text-gray-800"
                placeholder="Entrez ici le mot de passe..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </div>
            {hasError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative text-sm animate-pulse">
                  <strong className="font-bold">Aïe aïe aïe ! </strong>
                  <span className="block sm:inline">Mot de passe incorrect.</span>
                </div>
              )}

            <button
              type="submit"
              className="w-full bg-dresscode-yellow hover:bg-dresscode-yellow-light text-dresscode-orange font-bold text-lg py-3 rounded-lg shadow-md transition-colors duration-200"
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    );
}

export default PasswordPrompt;