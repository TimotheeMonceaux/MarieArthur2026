import { Music, Navigation, Info, Clock, Utensils, Church, GlassWater } from 'lucide-react';
import { useAppSelector } from '../../store/store';

interface InfoSectionProps {
  scrollToSongs: () => void;
}

const InfoSection = ({ scrollToSongs }: InfoSectionProps) => {
  const isInvitedToDinner = useAppSelector(state => state.passwordSlice.profile === "GUEST_ALL");

  return (
    <div className="space-y-0 p-4 md:p-8 max-w-4xl mx-auto">
      
      {/* --- 1. CÉRÉMONIE --- */}
      <section className="relative pl-8 pb-12 border-l-2 border-citrus-bright">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-citrus-bright shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold text-citrus-deep uppercase tracking-wide font-sans">14h45 — Bénédiction</h3>
              <Church className="text-citrus-bright" size={24} />
            </div>
            <p className="text-lg font-medium text-slate-800">Église Saint-Martin, Saint-Quentin</p>
          </div>
          <div 
            onClick={scrollToSongs}
            className="inline-flex items-center gap-2 px-4 py-2 bg-citrus-pink text-white rounded-full text-sm font-bold hover:bg-citrus-punch transition-all transform hover:scale-105 shadow-sm cursor-pointer w-fit"
          >
            <Music size={16} /> Réviser les chants
          </div>
        </div>

        <div className="mt-4 flex items-start gap-3 p-4 bg-citrus-yellow/20 rounded-xl border border-citrus-yellow">
          <Info className="text-citrus-bright shrink-0" size={20} />
          <p className="text-sm text-slate-700 italic">
            <strong>Indication importante :</strong> Pour le respect des lieux, merci de ne pas vous garer devant le parvis.
          </p>
        </div>
      </section>

      {/* --- 2. VIN D'HONNEUR --- */}
      <section className={`relative pl-8 border-l-2 border-citrus-lime ${isInvitedToDinner ? 'pb-12' : 'pb-0'}`}>
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-citrus-lime shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
        
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-2xl font-bold text-citrus-green uppercase tracking-wide">16h30 — Vin d’honneur</h3>
          <GlassWater className="text-citrus-lime" size={24} />
        </div>
        <p className="text-lg font-medium text-slate-800">Domaine de Foreste</p>

        <div className="mt-4 space-y-4">
          <div className="flex items-start gap-3 p-4 bg-citrus-lime/10 rounded-xl border border-citrus-lime/30">
            <Navigation className="text-citrus-green shrink-0" size={20} />
            <p className="text-sm text-slate-700">
              <strong>GPS :</strong> Indiquez <span className="underline decoration-citrus-green font-bold text-citrus-green">"Entrée Nord"</span>. L'entrée principale est réservée aux prestataires.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-inner border-2 border-white bg-slate-100 h-[200px]">
            <iframe
              title="Carte Domaine de Foreste"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130585.9832635293!2d2.990542296965113!3d49.81491734264966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e80f6c4a7b0f5f%3A0x41c9c51808c1b4c1!2sDomaine%20de%20Foreste!5e0!3m2!1sfr!2sfr!4v1767973603663!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- 3. DÎNER (Conditionnel) --- */}
      {isInvitedToDinner && (
        <>
          <section className="relative pl-8 pb-12 border-l-2 border-citrus-orange">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-citrus-orange shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold text-citrus-deep uppercase tracking-wide">19h30 — Dîner</h3>
              <Utensils className="text-citrus-orange" size={24} />
            </div>
            <p className="text-lg font-medium text-slate-800 italic">Domaine de Foreste</p>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Nous avons hâte de partager ce premier banquet avec vous dans la salle du Domaine.
            </p>
          </section>

          {/* --- 4. BRUNCH (Conditionnel) --- */}
          <section className="relative pl-8 border-l-2 border-transparent">
            {/* Dégradé pour finir la ligne proprement */}
            <div className="absolute -left-[2px] -top-12 bottom-0 w-[2px] bg-gradient-to-b from-citrus-orange to-transparent" />
            
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-citrus-bright shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold text-citrus-deep uppercase tracking-wide">Dimanche 11h30 — Brunch</h3>
              <Clock className="text-citrus-bright" size={24} />
            </div>
            <p className="text-lg font-medium text-slate-800 italic">Domaine de Foreste</p>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Pour prolonger la fête et débriefer de la veille tout en douceur.
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default InfoSection;