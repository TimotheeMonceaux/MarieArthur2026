import { Music, Navigation, Info, Clock, Utensils } from 'lucide-react';
import { useAppSelector } from '../../store/store';

interface InfoSectionProps {
  scrollToSongs: () => void;
}

const InfoSection = ({scrollToSongs }: InfoSectionProps) => {
  const isInvitedToDinner = useAppSelector(state => state.passwordSlice.profile === "GUEST_ALL");
  return (
    <div className="space-y-12 p-4 md:p-8 max-w-4xl mx-auto">
      
      {/* --- CÉRÉMONIE --- */}
      <section className="relative pl-8 border-l-2 border-citrus-bright">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-citrus-bright shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold text-citrus-deep uppercase tracking-wide font-sans">14h45 — Bénédiction</h3>
            <p className="text-lg font-medium text-slate-800">Église Saint-Martin, Saint-Quentin</p>
          </div>
          <div 
            onClick={scrollToSongs}
            className="inline-flex items-center gap-2 px-4 py-2 bg-citrus-pink text-white rounded-full text-sm font-bold hover:bg-citrus-punch transition-all transform hover:scale-105 shadow-sm cursor-pointer"
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

      {/* --- VIN D'HONNEUR --- */}
      <section className="relative pl-8 border-l-2 border-citrus-lime">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-citrus-lime shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
        
        <h3 className="text-2xl font-bold text-citrus-green uppercase tracking-wide">16h30 — Vin d’honneur</h3>
        <p className="text-lg font-medium text-slate-800">Domaine de Foreste</p>

        <div className="mt-4 space-y-4">
          <div className="flex items-start gap-3 p-4 bg-citrus-lime/10 rounded-xl border border-citrus-lime/30">
            <Navigation className="text-citrus-green shrink-0" size={20} />
            <p className="text-sm text-slate-700">
              <strong>GPS :</strong> Indiquez bien <span className="underline decoration-citrus-green font-bold text-citrus-green">"Entrée Nord"</span>. L'entrée principale est réservée aux prestataires.
            </p>
          </div>

          {/* Google Maps dézoomé (via paramètre z=15 ou équivalent embed) */}
          <div className="overflow-hidden rounded-2xl shadow-inner border-2 border-white bg-slate-100">
            <iframe
              title="Carte Domaine de Foreste"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130585.9832635293!2d2.990542296965113!3d49.81491734264966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e80f6c4a7b0f5f%3A0x41c9c51808c1b4c1!2sDomaine%20de%20Foreste!5e0!3m2!1sfr!2sfr!4v1767973603663!5m2!1sfr!2sfr"
              width="100%"
              height="250"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- SOIRÉE & BRUNCH --- */}

      {isInvitedToDinner &&
        <div className="grid md:grid-cols-2 gap-6">
            {/* Dîner - Affichage conditionnel et coloré */}
            <div className="p-6 bg-citrus-orange/10 rounded-2xl border-2 border-citrus-orange flex flex-col justify-between">
                <div>
                <div className="flex justify-between items-start">
                    <Utensils className="text-citrus-deep mb-2" size={24} />
                    <span className="text-citrus-deep font-bold italic tracking-tighter text-xl">19h30</span>
                </div>
                <h4 className="text-xl font-bold text-citrus-deep uppercase">Dîner de célébration</h4>
                <p className="text-sm text-slate-700 mt-2">Nous avons hâte de partager ce premier banquet avec vous au Domaine.</p>
                </div>
            </div>

            {/* Brunch */}
            <div className="p-6 bg-citrus-yellow rounded-2xl border-2 border-citrus-bright shadow-sm flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start">
                <Clock className="text-citrus-deep mb-2" size={24} />
                <span className="text-citrus-deep font-bold italic text-xl">Dim. 11h30</span>
                </div>
                <h4 className="text-xl font-bold text-citrus-deep uppercase text-white drop-shadow-sm">Le Brunch</h4>
                <p className="text-sm text-citrus-deep/80 mt-2 font-medium">Pour débriefer de la veille et finir les douceurs ensemble.</p>
            </div>
            </div>
        </div>
      }

    </div>
  );
};

export default InfoSection;