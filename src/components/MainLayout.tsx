import React, { useRef, useState, useEffect } from 'react';
import photo_mariearthur from '../assets/webp/photo_mariearthur.webp';
import photo_mariearthur_legacy from '../assets/legacy/photo_mariearthur.jpg';
import photo_eglise from '../assets/webp/photo_eglise.webp';
import photo_eglise_legacy from '../assets/legacy/photo_eglise.jpg';
import photo_lieu from '../assets/webp/photo_lieu.webp';
import photo_lieu_legacy from '../assets/legacy/photo_lieu.jpg';
import photo_exterieur from '../assets/webp/photo_exterieur.webp';
import photo_exterieur_legacy from '../assets/legacy/photo_exterieur.jpg';
import photo_repas from '../assets/webp/photo_repas.webp';
import photo_repas_legacy from '../assets/legacy/photo_repas.jpg';
import photo_lieu2 from '../assets/webp/photo_lieu2.webp';
import photo_lieu2_legacy from '../assets/legacy/photo_lieu2.jpg';
import photo_amour from '../assets/webp/photo_amour.webp';
import photo_amour_legacy from '../assets/legacy/photo_amour.jpg';
import HomeSection from './sections/HomeSection';
import InfoSection from './sections/InfoSection';
import FormSection from './sections/FormSection';
import AccomodationSection from './sections/AccomodationSection';
import ListSection from './sections/ListSection';
import PhotosSection from './sections/PhotosSection';
import SongsSection from './sections/SongsSection';
import QuestionsSection from './sections/QuestionsSection';
import { useAppSelector } from '../store/store';
import fresque_gauche from '../assets/webp/fresque_gauche.webp';
import fresque_gauche_legacy from '../assets/legacy/fresque_gauche.png';
import fresque_gauche_2 from '../assets/webp/fresque_gauche_2.webp';
import fresque_gauche_2_legacy from '../assets/legacy/fresque_gauche_2.png';
import fresque_droite from '../assets/webp/fresque_droite.webp';
import fresque_droite_legacy from '../assets/legacy/fresque_droite.png';
import fresque_haut_droite from '../assets/webp/fresque_haut_droite.webp';
import fresque_haut_droite_legacy from '../assets/legacy/fresque_haut_droite.png';
import icone_feuille from '../assets/webp/icone_feuille.webp';
import icone_feuille_legacy from '../assets/legacy/icone_feuille.png';
import icone_citron from '../assets/webp/icone_citron.webp';
import icone_citron_legacy from '../assets/legacy/icone_citron.png';
import icone_clementine from '../assets/webp/icone_clementine.webp';
import icone_clementine_legacy from '../assets/legacy/icone_clementine.png';
import icone_fleur from '../assets/webp/icone_fleur.webp';
import icone_fleur_legacy from '../assets/legacy/icone_fleur.png';
import icone_orange_ouverte from '../assets/webp/icone_orange_ouverte.webp';
import icone_orange_ouverte_legacy from '../assets/legacy/icone_orange_ouverte.png';
import icone_quartier_orange from '../assets/webp/icone_quartier_orange.webp';
import icone_quartier_orange_legacy from '../assets/legacy/icone_quartier_orange.png';
import fresque_gauche_3 from '../assets/webp/fresque_gauche_3.webp';
import fresque_gauche_3_legacy from '../assets/legacy/fresque_gauche_3.png';
import fresque_droite_2 from '../assets/webp/fresque_droite_2.webp';
import fresque_droite_2_legacy from '../assets/legacy/fresque_droite_2.png';


const MainLayout = () => {
  const profile = useAppSelector(state => state.passwordSlice.profile);
  const isInvitedToDinner = profile === "GUEST_ALL";
  // Create an array of refs to target each section
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const photos = [
    {webp: photo_mariearthur, legacy: photo_mariearthur_legacy},
    {webp: photo_eglise, legacy: photo_eglise_legacy},
    {webp: photo_lieu, legacy: photo_lieu_legacy},
    {webp: photo_exterieur, legacy: photo_exterieur_legacy},
    ...(isInvitedToDinner ? [{webp: photo_repas, legacy: photo_repas_legacy}] : []), 
    {webp: photo_lieu2, legacy: photo_lieu2_legacy},
    {webp: photo_amour, legacy: photo_amour_legacy}
  ];

  const sections = [
    { title: "Bienvenue", content: <HomeSection /> },
    { title: "Infos pratiques", content: <InfoSection scrollToSongs={() => scrollToSection(6)}/> },
    { title: "Formulaire (RSVP)", content: <FormSection /> },
    ...(isInvitedToDinner ? [{ title: "Hébergements", content: <AccomodationSection /> }] : []),
    { title: "Liste de mariage", content: <ListSection /> },
    { title: "Les photos", content: <PhotosSection /> },
    { title: "Les chants", content: <SongsSection /> },
    { title: "FAQ", content: <QuestionsSection /> },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Triggers when section is roughly in the middle 20% of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the element that is intersecting
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections.length]); // Re-run if the number of sections changes (e.g., guest login)

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* --- Sticky Navigation Bar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-off-white backdrop-blur-md border-b border-dresscode-orange/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-6 md:justify-center items-center">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`whitespace-nowrap text-sm font-bold transition-all duration-300 cursor-pointer uppercase tracking-tighter border-b-2 ${
                  activeSection === index 
                    ? "text-dresscode-orange border-dresscode-orange scale-110" 
                    : "text-dresscode-orange/90 border-transparent hover:text-dresscode-orange"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="bg-linear-to-br from-light-blue to-dresscode-blue-light">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {/* Content Card Section */}
            <div 
              ref={(el) => {sectionRefs.current[index] = el}}
              className="min-h-screen flex items-center justify-center p-3 md:p-12 relative overflow-hidden"
            >
              {/* Images section - hidden on mobile*/}
              {index == 0 && <>
                <picture className="hidden md:block absolute top-6 -left-4 opacity-90 pointer-events-none z-1">
                  <source srcSet={fresque_gauche} type="image/webp" />
                  <img src={fresque_gauche_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-6 -right-4 opacity-90 pointer-events-none z-1">
                  <source srcSet={fresque_haut_droite} type="image/webp" />
                  <img src={fresque_haut_droite_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-100 right-10 opacity-90 pointer-events-none z-1 rotate-12">
                  <source srcSet={icone_feuille} type="image/webp" />
                  <img src={icone_feuille_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-120 right-30 opacity-90 pointer-events-none z-1 rotate-45">
                  <source srcSet={icone_feuille} type="image/webp" />
                  <img src={icone_feuille_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-140  right-20 opacity-90 pointer-events-none z-1 -rotate-45">
                  <source srcSet={icone_feuille} type="image/webp" />
                  <img src={icone_feuille_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-16 left-30 opacity-90 pointer-events-none z-1 -rotate-90">
                  <source srcSet={icone_quartier_orange} type="image/webp" />
                  <img src={icone_quartier_orange_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-130 left-20 opacity-90 pointer-events-none z-1">
                  <source srcSet={icone_orange_ouverte} type="image/webp" />
                  <img src={icone_orange_ouverte_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden 2xl:block absolute top-160 left-0 opacity-90 pointer-events-none z-1 rotate-70">
                  <source srcSet={icone_feuille} type="image/webp" />
                  <img src={icone_feuille_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden 2xl:block absolute top-200 left-15 opacity-90 pointer-events-none z-1">
                  <source srcSet={icone_fleur} type="image/webp" />
                  <img src={icone_fleur_legacy} alt="" loading="lazy"/>
                </picture>
              </>}

              {index == 1 && <>
                <picture className="hidden md:block absolute top-10 left-10 opacity-90 pointer-events-none z-1">
                  <source srcSet={icone_orange_ouverte} type="image/webp" />
                  <img src={icone_orange_ouverte_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-25 left-25 opacity-90 pointer-events-none z-1">
                  <source srcSet={icone_quartier_orange} type="image/webp" />
                  <img src={icone_quartier_orange_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-50 -left-4 opacity-90 pointer-events-none z-1">
                  <source srcSet={fresque_gauche_2} type="image/webp" />
                  <img src={fresque_gauche_2_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute bottom-25 left-25 opacity-90 pointer-events-none z-1 rotate-12">
                  <source srcSet={icone_clementine} type="image/webp" />
                  <img src={icone_clementine_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute bottom-35 left-15 opacity-90 pointer-events-none z-1">
                  <source srcSet={icone_citron} type="image/webp" />
                  <img src={icone_citron_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute bottom-15 left-5 opacity-90 pointer-events-none z-1 rotate-45">
                  <source srcSet={icone_citron} type="image/webp" />
                  <img src={icone_citron_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-0 -right-4 opacity-90 pointer-events-none z-1">
                  <source srcSet={fresque_droite} type="image/webp" />
                  <img src={fresque_droite_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-250 right-0 opacity-90 pointer-events-none z-1 -rotate-45">
                  <source srcSet={icone_feuille} type="image/webp" />
                  <img src={icone_feuille_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-290 right-20 opacity-90 pointer-events-none z-1 rotate-45">
                  <source srcSet={icone_feuille} type="image/webp" />
                  <img src={icone_feuille} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-320 right-15 opacity-90 pointer-events-none z-1 rotate-12">
                  <source srcSet={icone_feuille} type="image/webp" />
                  <img src={icone_feuille_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-275 right-5 opacity-90 pointer-events-none z-1">
                  <source srcSet={icone_fleur} type="image/webp" />
                  <img src={icone_fleur_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-300 right-2 opacity-90 pointer-events-none z-1 -rotate-70">
                  <source srcSet={icone_fleur} type="image/webp" />
                  <img src={icone_fleur_legacy} alt="" loading="lazy"/>
                </picture>
              </>}
              {index >= 2 && index % 2 == 0 && <>
                <picture className="hidden md:block absolute top-5 left-0 opacity-90 pointer-events-none z-1">
                  <source srcSet={fresque_gauche_3} type="image/webp" />
                  <img src={fresque_gauche_3_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-10 right-0 opacity-90 pointer-events-none z-1">
                  <source srcSet={fresque_droite_2} type="image/webp" />
                  <img src={fresque_droite_2_legacy} alt="" loading="lazy"/>
                </picture>
              </>}
              {index >= 2 && index % 2 == 1 && <>
                <picture className="hidden md:block absolute top-5 right-0 opacity-90 pointer-events-none -scale-x-100 z-1">
                  <source srcSet={fresque_gauche_3} type="image/webp" />
                  <img src={fresque_gauche_3_legacy} alt="" loading="lazy"/>
                </picture>
                <picture className="hidden md:block absolute top-10 left-0 opacity-90 pointer-events-none -scale-x-100 z-1">
                  <source srcSet={fresque_droite_2} type="image/webp" />
                  <img src={fresque_droite_2_legacy} alt="" loading="lazy"/>
                </picture>
              </>}

              {/* Content */}
              <div className="
                bg-off-white p-5 md:p-16 rounded-2xl shadow-xl z-10 overflow-hidden
                max-w-4xl w-full border-t-8 border-dresscode-yellow
                transform transition-transform hover:scale-[1.01]
              ">
                <div className="flex justify-center">
                  <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 font-extrabold text-dresscode-orange uppercase">
                    {section.title}
                  </h2>
                </div>
                <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {section.content}
                </div>
              </div>
            </div>

            {/* Parallax Divider (7 images total) */}
            {index < photos.length && (
              <div 
                className="parallax h-[50vh] md:h-[80vh] bg-center bg-cover bg-no-repeat"
                style={{ 
                  '--bg-webp': `url(${photos[index].webp})`,
                  '--bg-legacy': `url(${photos[index].legacy})` 
                } as React.CSSProperties}
              />
            )}
          </React.Fragment>
        ))}
      </main>

      {/* --- Footer --- */}
      <footer className="bg-dresscode-blue py-8 text-center text-white">
        <p className="font-sans">06 Juin 2026 • On a hâte de vous voir !</p>
      </footer>
    </div>
  );
};

export default MainLayout;