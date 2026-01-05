import { useAppDispatch } from '../store/store'; 
import { checkPassword } from '../store/slices/passwordSlice';
import { useState } from 'react';

function PasswordPrompt() {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>();
    const handleSubmit = () => dispatch(checkPassword(inputValue ?? ''));
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-citrus-pink to-citrus-orange p-4">
      <div
        className="
          bg-white p-8 sm:p-10 rounded-2xl md:rounded-3xl shadow-2xl
          max-w-md w-full border-t-4 border-citrus-bright
          transform transition-all duration-300 hover:scale-[1.02]
        "
      >
        <h1 className="text-4xl font-extrabold text-citrus-deep text-center mb-3">
          Bienvenue !
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Entrez ci-dessous le mot de passe inscrit sur votre faire-part pour commencer.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              id="simple-input"
              className="
                w-full p-3 border-2 border-gray-300 rounded-lg
                focus:border-citrus-bright focus:ring-2 focus:ring-citrus-yellow
                outline-none transition-colors duration-200
                text-lg text-gray-800
              "
              placeholder="Entrez ici le mot de passe..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="
              w-full bg-citrus-bright hover:bg-citrus-yellow
              text-citrus-deep font-bold text-lg
              py-3 rounded-lg shadow-md
              transition-colors duration-200
              focus:outline-none focus:ring-4 focus:ring-citrus-yellow focus:ring-opacity-50
            "
          >
            Valider
          </button>
        </form>
      </div>
    </div>;
}

export default PasswordPrompt;
