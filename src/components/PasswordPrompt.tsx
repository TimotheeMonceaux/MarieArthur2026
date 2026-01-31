import { useAppDispatch, useAppSelector } from '../store/store'; 
import { checkPassword } from '../store/slices/passwordSlice';
import { useState } from 'react';
import lieux_illustres from '../assets/lieux_illustres.png';
import fresque_haut from '../assets/fresque_haut.png';
import fresque_gauche from '../assets/fresque_haut_droite_2.png';
import fresque_haut_2 from '../assets/fresque_haut_2.png';
import icone_clementine from '../assets/icone_clementine.png';
import icone_feuille from '../assets/icone_feuille.png';
import icone_fleur from '../assets/icone_fleur.png';

function PasswordPrompt() {
    const dispatch = useAppDispatch();  
    const hasError = useAppSelector((state) => state.passwordSlice.hasError);
    
    const [inputValue, setInputValue] = useState<string>();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(checkPassword(inputValue ?? ''));
    };

    return (
      <div className="relative min-h-dvh flex items-center justify-center bg-linear-to-br from-light-blue to-dresscode-blue-light p-4 overflow-hidden">
        <img 
          src={fresque_haut_2} 
          alt="" 
          className="absolute top-0 left-0 w-2/10 opacity-80 pointer-events-none"
        />
        <img 
          src={fresque_haut} 
          alt="" 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 opacity-80 pointer-events-none"
        />
        <img 
          src={fresque_gauche} 
          alt="" 
          className="absolute top-0 right-0 w-1/5 opacity-80 pointer-events-none"
        />
        <img 
          src={lieux_illustres} 
          alt="" 
          className="absolute bottom-0 left-0 opacity-80 pointer-events-none"
        />
        <img 
          src={icone_feuille} 
          alt="" 
          className="absolute bottom-3/7 left-1/5 opacity-80 pointer-events-none"
        />
        <img 
          src={icone_clementine} 
          alt="" 
          className="absolute bottom-2/3 left-1/8 opacity-80 pointer-events-none"
        />
        <img 
          src={icone_fleur} 
          alt="" 
          className="absolute bottom-3/4 left-5/6 opacity-80 pointer-events-none"
        />

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