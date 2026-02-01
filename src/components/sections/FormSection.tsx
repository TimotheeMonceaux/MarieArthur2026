import { useAppSelector } from "../../store/store";
import { ExternalLink, ClipboardCheck, Utensils, GlassWater } from "lucide-react";

const FormSection = () => {
  const profile = useAppSelector(state => state.passwordSlice.profile);
  const isInvitedToDinner = profile === "GUEST_ALL";

  // Remplace ces liens par tes vrais liens Google Forms
  const googleFormUrl = isInvitedToDinner 
    ? "https://docs.google.com/forms/d/e/1FAIpQLSdVipG-2HvqpEmtpnnlApSHeoQCM7FDbZNKPGzPZxHCkAmqag/viewform?usp=dialog" 
    : "https://docs.google.com/forms/d/e/1FAIpQLSck6ymW7X24KUhXE6W8nLU3eCwOTEhTMLFSexqsI1jy3I9n0A/viewform?usp=dialog";

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-xl mx-auto text-center">
      
      {/* Icône et Titre */}
      <div className="space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dresscode-yellow/20 text-dresscode-orange mb-2">
          <ClipboardCheck size={32} />
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-dresscode-orange uppercase tracking-tight">Confirmation</h2>
        <p className="text-slate-600 leading-relaxed">
          Afin de nous aider à organiser au mieux cette journée, merci de remplir 
          <span className="text-dresscode-orange-light font-bold"> un formulaire par personne</span>.
        </p>
      </div>

      {/* Carte d'appel à l'action */}
      <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-dresscode-orange/10 border border-slate-100 relative overflow-hidden">
        {/* Décoration subtile en arrière-plan */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-dresscode-yellow/10 rounded-full blur-2xl" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col items-center gap-2">
            {isInvitedToDinner ? (
              <>
                <Utensils className="text-dresscode-orange" size={24} />
                <span className="text-xs font-bold uppercase tracking-widest text-dresscode-orange">Invitation Complète</span>
              </>
            ) : (
              <>
                <GlassWater className="text-dresscode-green" size={24} />
                <span className="text-xs font-bold uppercase tracking-widest text-dresscode-green">Invitation Vin d'Honneur</span>
              </>
            )}
          </div>

          <p className="text-sm text-slate-500 italic">
            Le formulaire s'ouvrira dans une nouvelle fenêtre sur Google Forms.
          </p>

          <a 
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group w-full py-4 px-6 rounded-2xl font-bold text-off-white shadow-lg transition-all hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3 ${
              isInvitedToDinner ? "bg-dresscode-orange shadow-dresscode-orange/30" : "bg-dresscode-green shadow-dresscode-green/30"
            }`}
          >
            Accéder au formulaire
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Rappel date limite */}
      <div className="pt-4">
        <p className="inline-block px-4 py-1 bg-dresscode-orange/10 text-dresscode-orange-dark rounded-full text-xs font-bold uppercase tracking-widest">
          Réponse souhaitée avant le 31 mars
        </p>
      </div>
    </div>
  );
};

export default FormSection;