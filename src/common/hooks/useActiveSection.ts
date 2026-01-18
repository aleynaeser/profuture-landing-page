import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop });
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = document.querySelectorAll('section[id], footer[id]');
          let currentSection = '';
   
          const scrollPosition = window.scrollY + window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;
          
          if (scrollPosition >= docHeight - 50) {  
            setActiveSection('contact');
            ticking = false;
            return;
          }

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            if (sectionTop <= 300 && sectionTop + sectionHeight > 300) {
              currentSection = section.id;
            }
          });

          if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return { activeSection, scrollToSection };
}
