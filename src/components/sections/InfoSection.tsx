import { Music, Navigation, Info, Clock, Utensils, Church, GlassWater, Disc3 } from 'lucide-react';
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
        <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-citrus-bright shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
        
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
            <strong>Indication importante :</strong> Des places de parking sont disponibles sur les côtés de l'église et dans les rues avoisinantes. Merci de ne pas vous garer devant le parvis.
          </p>
        </div>
      </section>

      {/* --- 2. VIN D'HONNEUR --- */}
      <section className={`relative pl-8 border-l-2 border-citrus-lime ${isInvitedToDinner ? 'pb-12' : 'pb-0'}`}>
        <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-citrus-lime shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
        
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-2xl font-bold text-citrus-green uppercase tracking-wide">16h30 — Vin d’honneur</h3>
          <GlassWater className="text-citrus-lime" size={24} />
        </div>
        <p className="text-lg font-medium text-slate-800">Domaine de Foreste</p>

        <div className="mt-4 space-y-4">
          <div className="flex items-start gap-3 p-4 bg-citrus-lime/10 rounded-xl border border-citrus-lime/30">
            <Navigation className="text-citrus-green shrink-0" size={20} />
            <p className="text-sm text-slate-700">
              <strong>GPS :</strong> Indiquez <a className="underline decoration-citrus-green font-bold text-citrus-green" href="https://www.google.com/maps?ll=49.811192,3.103762&z=10&t=m&hl=fr&gl=FR&mapclient=embed&cid=11849643337129732948" target="_blank">"Entrée Nord"</a> sur votre GPS afin d'accéder au parking du domaine.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-inner border-2 border-white bg-slate-100 h-50">
            <iframe
              title="Carte Domaine de Foreste"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d95481.05879754206!2d3.0596383234853106!3d49.80251126119276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e80f003a7e22a7%3A0xa47263d540b12b54!2sDomaine%20de%20Foreste%20-%20Acc%C3%A8s%20du%20Nord%2C%20Foreste!5e0!3m2!1sfr!2sfr!4v1769794876952!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      
      {isInvitedToDinner && (
        <>
          {/* --- 3. DÎNER (Conditionnel) --- */}
          <section className="relative pl-8 pb-12 border-l-2 border-citrus-orange">
            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-citrus-orange shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold text-citrus-deep uppercase tracking-wide">19h30 — Dîner</h3>
              <Utensils className="text-citrus-orange" size={24} />
            </div>
            <p className="text-lg font-medium text-slate-800">Domaine de Foreste</p>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Nous avons hâte de partager ce premier banquet avec vous dans la salle du Domaine.
            </p>
          </section>

          {/* --- 4. SOIREE (Conditionnel) --- */}
          <section className="relative pl-8 pb-12 border-l-2 border-citrus-orange">
            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-citrus-orange shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold text-citrus-deep uppercase tracking-wide">23h00 — Soirée</h3>
              <Disc3 className="text-citrus-orange" size={24} />
            </div>
            <p className="text-lg font-medium text-slate-800">Domaine de Foreste</p>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Montrez nous vos meilleurs moves sur le dancefloor !
            </p>
          </section>

          {/* --- 4. BRUNCH (Conditionnel) --- */}
          <section className="relative pl-8 border-l-2 border-transparent">
            {/* Dégradé pour finir la ligne proprement */}
            <div className="absolute -left-0.5 -top-12 bottom-0 w-0.5 bg-linear-to-b from-citrus-orange to-transparent" />
            
            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-citrus-bright shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold text-citrus-deep tracking-wide">DIMANCHE — à partir de 11h30 — BRUNCH</h3>
              <Clock className="text-citrus-bright" size={24} />
            </div>
            <p className="text-lg font-medium text-slate-800">Domaine de Foreste</p>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Pour débriefer de la veille tout en douceur, pour celles et ceux qui le souhaitent.
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default InfoSection;