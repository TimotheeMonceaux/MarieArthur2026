import { Hotel, Car, Tent, Mail, AlertTriangle } from 'lucide-react';

const AccommodationSection = () => {
  return (
    <div className="space-y-10 p-4 md:p-8 max-w-4xl mx-auto">
      
      {/* --- ENTÊTE HÉBERGEMENTS --- */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dresscode-yellow/30 text-dresscode-orange mb-2">
          <Hotel size={32} />
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-dresscode-orange uppercase tracking-tight">Où dormir ?</h2>
        <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
          Il n'y aura <span className="font-bold text-dresscode-orange font-sans">pas de logements prévus sur place</span>. 
          Pour ceux qui souhaiteraient dormir proches du lieu de réception, il y a de nombreux hôtels, Airbnb et 
          chambre d'hôtes réservables en ligne et assez proches en voiture.
        </p>
      </section>

      {/* --- OPTION TENTE / DOMAINE --- */}
      <section className="bg-dresscode-green/10 rounded-2xl border-2 border-dashed border-dresscode-green p-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-dresscode-green border border-dresscode-lime">
              <Tent size={40} />
            </div>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-xl font-bold text-dresscode-green italic">Envie de dormir à la belle étoile ?</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Il est possible de dormir sous tente dans le parc du <strong>domaine de Foreste</strong>. 
              C'est l'option la plus simple pour profiter jusqu'au bout !
            </p>
            <div className="pt-2">
              <a 
                href="mailto:mariearthur2026@gmail.com" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-dresscode-green-dark text-off-white rounded-full font-bold hover:bg-dresscode-green transition-all shadow-md group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                Nous prévenir par mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRÉVENTION / SAM --- */}
      <section className="bg-off-white rounded-2xl border-2 border-dresscode-orange-dark/20 overflow-hidden shadow-sm">
        <div className="bg-dresscode-orange-dark/10 p-4 flex items-center gap-3 border-b border-dresscode-orange-dark/20">
          <AlertTriangle className="text-dresscode-orange-dark" size={24} />
          <h3 className="font-bold text-dresscode-orange-dark uppercase tracking-wider text-sm">Sécurité & Transports</h3>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-slate-700">
            Il n’y aura pas de service de taxi pour vous ramener à vos hébergements et les contrôles de police 
            sont fréquents dans la région.
          </p>
          <div className="flex items-start gap-4 p-4 bg-off-white-light rounded-xl">
            <div className="bg-dresscode-green p-2 rounded-lg text-off-white">
              <Car size={20} />
            </div>
            <p className="text-sm text-slate-600 leading-snug">
              Nous vous invitons <span className="font-bold text-slate-900">fortement</span> à choisir un 
              <span className="text-dresscode-green font-bold text-lg mx-1 italic underline decoration-dresscode-green/30">SAM</span> 
              à l’avance qui pourra limiter sa consommation d’alcool et vous ramener en toute sérénité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationSection;