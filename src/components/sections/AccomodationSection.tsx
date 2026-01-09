import { Hotel, Car, Tent, Mail, AlertTriangle } from 'lucide-react';

const AccommodationSection = () => {
  return (
    <div className="space-y-10 p-4 md:p-8 max-w-4xl mx-auto">
      
      {/* --- ENTÊTE HÉBERGEMENTS --- */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-citrus-yellow/30 text-citrus-deep mb-2">
          <Hotel size={32} />
        </div>
        <h2 className="text-3xl font-bold text-citrus-deep uppercase tracking-tight">Où dormir ?</h2>
        <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
          Pour ceux qui souhaiteraient dormir proche du lieu de réception, nous vous indiquons à titre d’information 
          quelques hébergements que vous pouvez contacter afin d’y réserver une chambre. 
          La grande majorité de ces logements se situent entre <span className="font-bold text-citrus-orange font-sans">5 et 20 minutes</span> de voiture.
        </p>
      </section>

      {/* --- PRÉVENTION / SAM --- */}
      <section className="bg-white rounded-2xl border-2 border-citrus-punch/20 overflow-hidden shadow-sm">
        <div className="bg-citrus-punch/10 p-4 flex items-center gap-3 border-b border-citrus-punch/20">
          <AlertTriangle className="text-citrus-punch" size={24} />
          <h3 className="font-bold text-citrus-punch uppercase tracking-wider text-sm">Sécurité & Transports</h3>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-slate-700">
            Il n’y aura pas de service de taxi pour vous ramener à vos hébergements et les contrôles de police 
            sont fréquents dans la région.
          </p>
          <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
            <div className="bg-citrus-green p-2 rounded-lg text-white">
              <Car size={20} />
            </div>
            <p className="text-sm text-slate-600 leading-snug">
              Nous vous invitons <span className="font-bold text-slate-900">fortement</span> à choisir un 
              <span className="text-citrus-green font-bold text-lg mx-1 italic underline decoration-citrus-green/30">SAM</span> 
              à l’avance qui pourra limiter sa consommation d’alcool et vous ramener en toute sérénité.
            </p>
          </div>
        </div>
      </section>

      {/* --- OPTION TENTE / DOMAINE --- */}
      <section className="bg-citrus-lime/10 rounded-2xl border-2 border-dashed border-citrus-green p-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-citrus-green border border-citrus-lime">
              <Tent size={40} />
            </div>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-xl font-bold text-citrus-green italic">Envie de dormir à la belle étoile ?</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Il est possible de dormir sous tente dans le parc du <strong>domaine de Foreste</strong>. 
              C'est l'option la plus simple pour profiter jusqu'au bout !
            </p>
            <div className="pt-2">
              <a 
                href="mailto:mariearthur2026@gmail.com" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-citrus-green text-white rounded-full font-bold hover:bg-citrus-deep transition-all shadow-md group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                Nous prévenir par mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLACEHOLDER POUR LISTE D'HÔTELS --- */}
      <p className="text-center text-xs text-slate-400 italic">
        (La liste détaillée des hôtels à proximité sera disponible prochainement)
      </p>

    </div>
  );
};

export default AccommodationSection;