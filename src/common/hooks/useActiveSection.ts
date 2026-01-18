import { useState, useEffect, useRef } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');
  const activeSectionRef = useRef<string>('');

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    
    // Update URL without jump
    history.pushState(null, '', href);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let ticking = false;
    // Query sections once (or when DOM might change if needed, but for static landing page this is fine)
    // Moving this inside the effect ensures it runs after mount
    const sections = document.querySelectorAll('section[id], footer[id]');

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          let currentSection = '';
   
          const scrollPosition = window.scrollY + window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;
          
          // Bottom of page detection
          if (scrollPosition >= docHeight - 50) {  
            const footer = document.querySelector('footer[id]');
            // Prefer footer id, fallback to 'contact' if footer has no id or not found (though querySelectorAll implies it exists)
            const footerId = footer?.id || 'contact';
            
            if (footerId !== activeSectionRef.current) {
                setActiveSection(footerId);
            }
            ticking = false;
            return;
          }

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            // Check if section is in the upper part of the viewport
            // Using a threshold like 150px (approx header height + buffer)
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = section.id;
            }
          });

          if (currentSection && currentSection !== activeSectionRef.current) {
            setActiveSection(currentSection);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll(); // Check on mount

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { activeSection, scrollToSection };
}
