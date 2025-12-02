/**
 * LogoStrip Component Backup
 * 
 * This file contains the LogoStrip component that displays partner logos
 * in a marquee animation. Copy and paste into App.jsx when needed.
 * 
 * REQUIREMENTS:
 * 1. Import LOGOS from './LOGOS' at the top of App.jsx
 * 2. Add the marquee animations in index.css (already included)
 * 3. Place <LogoStrip /> after the hero header section
 */

// ============================================
// COPY FROM HERE
// ============================================

const LogoStrip = () => {
  const partners = ["ikas", "onedio", "mynet", "webtekno", "paen", "proteinocean", "fropie", "wunder", "zeki", "miniso", "petzzshop"];
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-8 sm:py-12 bg-neutral-50 border-y border-neutral-200 overflow-hidden">
      {/* Row 1: Left to Right */}
      <div className="mb-4 sm:mb-8">
        <div className="flex animate-marquee gap-8 sm:gap-12 md:gap-16 whitespace-nowrap min-w-full items-center">
          {marqueeItems.map((logoKey, idx) => {
            const LogoComponent = LOGOS[logoKey];
            return LogoComponent ? (
              <div key={`r1-${idx}`} className="flex-shrink-0">
                 <LogoComponent className="h-5 sm:h-6 md:h-8 w-auto text-neutral-400 hover:text-neutral-900 transition-colors duration-300" />
              </div>
            ) : null;
          })}
        </div>
      </div>
      
      {/* Row 2: Right to Left */}
      <div>
        <div className="flex animate-marquee-reverse gap-8 sm:gap-12 md:gap-16 whitespace-nowrap min-w-full items-center">
          {marqueeItems.map((logoKey, idx) => {
            const LogoComponent = LOGOS[logoKey];
            return LogoComponent ? (
              <div key={`r2-${idx}`} className="flex-shrink-0">
                 <LogoComponent className="h-5 sm:h-6 md:h-8 w-auto text-neutral-400 hover:text-neutral-900 transition-colors duration-300" />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// END COPY
// ============================================

/**
 * USAGE IN App.jsx:
 * 
 * 1. Add this import at the top:
 *    import { LOGOS } from './LOGOS';
 * 
 * 2. Place the LogoStrip component definition before the HomePage component
 * 
 * 3. Use <LogoStrip /> in your HomePage, typically after the hero header:
 *    
 *    const HomePage = ({ onNavigate, onOpenModal }) => {
 *      return (
 *        <main>
 *          <header>...</header>
 *          
 *          <LogoStrip />   <-- Place here
 *          
 *          {/ * Rest of content * /}
 *        </main>
 *      );
 *    };
 */

export default LogoStrip;

