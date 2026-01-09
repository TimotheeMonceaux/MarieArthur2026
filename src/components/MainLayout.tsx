import React, { useRef } from 'react';
import photo_mariearthur from '../assets/photo_mariearthur.jpg';
import photo_eglise from '../assets/photo_eglise.jpg';
import photo_lieu from '../assets/photo_lieu.jpg';
import photo_exterieur from '../assets/photo_exterieur.jpg';
import photo_repas from '../assets/photo_repas.jpg';
import photo_lieu2 from '../assets/photo_lieu2.jpg';
import photo_amour from '../assets/photo_amour.jpg';
import HomeSection from './sections/HomeSection';
import InfoSection from './sections/InfoSection';
import FormSection from './sections/FormSection';
import AccomodationSection from './sections/AccomodationSection';
import ListSection from './sections/ListSection';
import PhotosSection from './sections/PhotosSection';
import SongsSection from './sections/SongsSection';
import QuestionsSection from './sections/QuestionsSection';

const photos = [photo_mariearthur, photo_eglise, photo_lieu, photo_exterieur, photo_repas, photo_lieu2, photo_amour];

const MainLayout = () => {
  // Create an array of refs to target each section
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { title: "Notre histoire", content: <HomeSection /> },
    { title: "Informations pratiques", content: <InfoSection scrollToSongs={() => scrollToSection(6)}/> },
    { title: "Formulaire de réponse", content: <FormSection /> },
    { title: "Hébergements", content: <AccomodationSection /> },
    { title: "Liste de mariage", content: <ListSection /> },
    { title: "Les photos", content: <PhotosSection /> },
    { title: "Les chants", content: <SongsSection /> },
    { title: "FAQ", content: <QuestionsSection /> },
  ];

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* --- Sticky Navigation Bar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-citrus-pink/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-6 md:justify-center items-center">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className="whitespace-nowrap text-sm font-bold text-citrus-deep hover:text-citrus-orange transition-colors cursor-pointer uppercase tracking-tighter"
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="bg-gradient-to-br from-citrus-pink to-citrus-orange p-4">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {/* Content Card Section */}
            <div 
              ref={(el) => {sectionRefs.current[index] = el}}
              className="min-h-screen flex items-center justify-center p-6 md:p-12"
            >
              <div className="
                bg-white p-10 md:p-16 rounded-2xl shadow-xl 
                max-w-4xl w-full border-t-8 border-citrus-bright
                transform transition-transform hover:scale-[1.01]
              ">
                <h2 className="text-4xl font-extrabold text-citrus-deep mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>

            {/* Parallax Divider (7 images total) */}
            {index < photos.length && (
              <div 
                className="h-[50vh] md:h-[80vh] bg-fixed bg-center bg-cover bg-no-repeat shadow-inner"
                style={{ backgroundImage: `url(${photos[index]})` }}
              />
            )}
          </React.Fragment>
        ))}
      </main>

      {/* --- Footer --- */}
      <footer className="bg-citrus-deep py-8 text-center text-white">
        <p className="font-sans">06 Juin 2026 • On a hâte de vous voir !</p>
      </footer>
    </div>
  );
};

export default MainLayout;