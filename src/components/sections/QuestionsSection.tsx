import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const QuestionsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // --- CONFIGURATION DES QUESTIONS ---
  const faqs = [
    {
      question: "Quelle est la date limite pour confirmer ma présence ?",
      answer: "Nous vous remercions de nous donner une réponse avant le 1er avril 2026 via le formulaire dédié sur ce site."
    },
    {
      question: "Y a-t-il un code vestimentaire (Dress Code) ?",
      answer: "Pas de thème imposé, venez comme vous êtes ! Une tenue de cocktail élégante sera parfaite. Petit clin d'œil : le thème du mariage étant 'Agrumes d'été', n'hésitez pas à porter une touche de couleur si vous le souhaitez."
    },
    {
      question: "Les enfants sont-ils les bienvenus ?",
      answer: "Oui, les enfants sont les bienvenus ! Précisez bien leur présence et leur âge dans le formulaire pour que nous puissions prévoir les menus et les animations adaptés."
    },
    {
      question: "Où pouvons-nous garer nos voitures au domaine ?",
      answer: "Le Domaine de Foreste dispose d'un parking dédié. Attention : merci d'utiliser l'Entrée Nord comme indiqué dans la section Infos."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-10 p-4 md:p-8 max-w-2xl mx-auto">
      
      {/* --- EN-TÊTE --- */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-citrus-orange/20 text-citrus-deep mb-2">
          <MessageCircleQuestion size={32} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">Questions Fréquentes</h2>
        <p className="text-slate-600 italic">
          Une petite interrogation ? Vous trouverez sans doute la réponse ici.
        </p>
      </div>

      {/* --- LISTE DES QUESTIONS (ACCORDÉON) --- */}
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div 
            key={index}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-citrus-orange/50 shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between p-5 text-left transition-colors"
            >
              <span className={`font-bold transition-colors ${openIndex === index ? 'text-citrus-deep' : 'text-slate-700'}`}>
                {item.question}
              </span>
              <ChevronDown 
                className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-citrus-orange' : ''}`} 
                size={20} 
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- NOTE FINALE --- */}
      <div className="bg-citrus-yellow/10 rounded-2xl p-6 text-center border border-citrus-yellow">
        <p className="text-sm text-slate-700 font-medium">
          Vous ne trouvez pas votre réponse ? N'hésitez pas à nous contacter directement par mail à : 
          <a href="mailto:mariearthur2026@gmail.com" className="block text-citrus-deep font-bold hover:underline mt-1">
            mariearthur2026@gmail.com
          </a>
        </p>
      </div>

    </div>
  );
};

export default QuestionsSection;