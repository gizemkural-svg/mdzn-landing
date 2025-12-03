/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                           MDZN LANDING PAGE                                   ║
║                                                                              ║
║  Structure:                                                                  ║
║  ├── 1. IMPORTS & CONFIGURATION                                              ║
║  ├── 2. SHARED COMPONENTS (Navbar, Footer, LogoStrip, Modal)                 ║
║  ├── 3. PAGE: HOME (HomePage)                                                ║
║  ├── 4. PAGE: CONNECT (ConnectPage)                                          ║
║  ├── 5. PAGE: SOLUTIONS (SolutionsPage)                                      ║
║  └── 6. APP ORCHESTRATOR (Main App)                                          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
*/

/*
================================================================================
📷 IMAGE UPLOAD GUIDE
================================================================================
Place images in: /public/images/
Recommended sizes:
  - platform-hero.png      → 1920x1080px
  - ecosystem-visual.png   → 800x800px
  - influencer-panel.png   → 1280x720px
  - dashboard-screenshot.png → 1200x900px
Search for "📷 IMAGE PLACEHOLDER" to find insertion points.
================================================================================
*/


/* ============================================================================
   1. IMPORTS & CONFIGURATION
   ============================================================================ */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  BarChart2, 
  Layers, 
  PieChart, 
  CheckCircle2, 
  Zap, 
  Globe, 
  Briefcase, 
  Smartphone, 
  RotateCw, 
  TrendingUp, 
  Activity, 
  Users, 
  Paperclip, 
  MessageSquare, 
  Search, 
  Bell
} from 'lucide-react';
import { LOGOS } from './LOGOS';
import { IMAGES } from './IMAGES';

/* --- Solutions Page Data Configuration --- */
const solutionsData = {
  brands: {
    id: 'brands',
    tabLabel: "Markalar",
    title: "Markalar için",
    subtitle: "Kampanyalarınızı ölçün, optimize edin ve büyütün.",
    description: "Markanızın performans pazarlama süreçlerini uçtan uca yönetin. Doğru partnerleri bulun, gerçek zamanlı verilerle kararlar alın ve ROI odaklı büyüme sağlayın.",
    features: ["Gerçek zamanlı performans takibi", "Özel komisyon kurguları", "Detaylı ilişkilendirme (Attribution)"],
    capabilities: [
      { title: "Partner Keşfi", desc: "Binlerce onaylı yayıncı ve influencer arasından markanıza en uygun olanları filtreleyin.", icon: Search, visual: "Discovery UI" },
      { title: "Marka Güvenliği", desc: "Dolandırıcılık önleme (Fraud Detection) ve marka güvenliği araçlarıyla bütçenizi koruyun.", icon: CheckCircle2, visual: "Security Shield" },
      { title: "Otomatik Ödemeler", desc: "Tek faturayla yüzlerce partnerinize otomatik ve zamanında ödeme yapın.", icon: PieChart, visual: "Payment Flow" }
    ],
    cta: "Demo Talep Et",
    modalType: 'demo'
  },
  agencies: {
    id: 'agencies',
    tabLabel: "Ajanslar",
    title: "Ajanslar için",
    subtitle: "Tüm müşterilerinizi ve partnerlerinizi tek panelden yönetin.",
    description: "Operasyonel yükü azaltın, stratejiye odaklanın. Çoklu müşteri yönetimi ve birleştirilmiş raporlama ile ajans verimliliğini maksimuma çıkarın.",
    features: ["Çoklu marka/müşteri yönetimi", "Konsolide raporlama", "Beyaz etiket (White-label) seçenekleri"],
    capabilities: [
      { title: "Müşteri Portföyü", desc: "Tüm müşterilerinizin kampanyalarını tek bir dashboard üzerinden izleyin ve yönetin.", icon: Briefcase, visual: "Portfolio View" },
      { title: "Ekip İzinleri", desc: "Farklı departmanlar ve müşteri temsilcileri için gelişmiş yetkilendirme sistemi.", icon: Users, visual: "Permissions Grid" },
      { title: "Özel Raporlar", desc: "Müşterileriniz için otomatik, markalı ve detaylı performans raporları oluşturun.", icon: BarChart2, visual: "Report Builder" }
    ],
    cta: "Demo Talep Et",
    modalType: 'demo'
  },
  publishers: {
    id: 'publishers',
    tabLabel: "Yayıncılar",
    title: "Yayıncılar için",
    subtitle: "İçerik temelli gelir akışınızı optimize edin.",
    description: "Trafiğinizi en verimli şekilde gelire dönüştürün. Yüksek dönüşümlü markalarla çalışın ve detaylı link analizleriyle içeriğinizi güçlendirin.",
    features: ["İçerik performans takibi", "Derin linkleme (Deep-linking)", "Şeffaf gelir görünürlüğü"],
    capabilities: [
      { title: "Link Oluşturucu", desc: "Tarayıcı eklentisi veya panel üzerinden saniyeler içinde takip edilebilir linkler yaratın.", icon: Paperclip, visual: "Link Tool" },
      { title: "Anlık Bildirimler", desc: "Dönüşüm gerçekleştiğinde veya kampanya koşulları değiştiğinde anında haberdar olun.", icon: Bell, visual: "Notification Center" },
      { title: "API Entegrasyonu", desc: "Verilerinizi kendi sistemlerinize aktarmak için güçlü API desteğinden yararlanın.", icon: Zap, visual: "API Docs" }
    ],
    cta: "Demo Talep Et",
    modalType: 'demo'
  },
  influencers: {
    id: 'influencers',
    tabLabel: "İçerik Üreticisi",
    title: "İçerik Üreticileri için",
    subtitle: "Tüm iş birliklerinizi ve kazançlarınızı tek yerden yönetin.",
    description: "Hangi içeriğin ne kadar kazandırdığını net bir şekilde görün. Markalarla doğrudan iletişim kurun ve ödemelerinizi garanti altına alın.",
    features: ["Tek panel yönetimi", "Gelir ve ödeme takibi", "Performans analizi"],
    capabilities: [
      { title: "Medya Kiti", desc: "Profilinizi, istatistiklerinizi ve geçmiş iş birliklerinizi sergileyen profesyonel bir vitrin.", icon: Smartphone, visual: "Profile Card" },
      { title: "İş Birliği Teklifleri", desc: "Markalardan gelen teklifleri inceleyin, pazarlık yapın ve onaylayın.", icon: MessageSquare, visual: "Offer Chat" },
      { title: "Kazanç Cüzdanı", desc: "Onaylanan komisyonlarınızı takip edin ve dilediğiniz zaman çekim talebi oluşturun.", icon: PieChart, visual: "Wallet UI" }
    ],
    cta: "Başvuru Yap",
    modalType: 'influencer'
  }
};

/* ============================================================================
   2. SHARED COMPONENTS
   ============================================================================ */

/* --- 2.1 MdznLogo --- */
const MdznLogo = ({ className }) => (
  <svg 
    width="121" 
    height="27" 
    viewBox="0 0 121 27" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <g clipPath="url(#clip0_132_6425)">
      <path d="M26.3 0H0V26.85H26.85V0H26.31H26.3ZM26.3 26.3H0.54V0.54H26.3V26.3Z" fill="currentColor"/>
      <path d="M10.23 12.43V5.62L7.71002 9.25L5.20002 5.62V12.43H3.40002V2.25H5.09002L7.71002 6.04L10.33 2.25H12.04V12.43H10.24H10.23Z" fill="currentColor"/>
      <path d="M14.82 12.43V2.25H18.24C21.11 2.25 23.46 4.54 23.46 7.34C23.46 10.14 21.11 12.43 18.24 12.43H14.82ZM18.23 10.56C20.06 10.56 21.55 9.12 21.55 7.34C21.55 5.56 20.06 4.12 18.23 4.12H16.71V10.55H18.23V10.56Z" fill="currentColor"/>
      <path d="M12.03 14.41H3.39001V16.24H9.58001L3.39001 22.76L3.40001 22.77H3.39001V24.6H12.03V22.77H5.84001L12.03 16.24V14.41Z" fill="currentColor"/>
      <path d="M23.45 24.6V14.41H21.9V21.7L16.37 14.41H14.82V24.6H16.37V17.3L21.9 24.6H23.45Z" fill="currentColor"/>
      <path d="M39.64 10.92C39.64 9.93 39.44 9.06 39.03 8.3C38.62 7.54 38.05 6.94 37.3 6.49C36.55 6.05 35.66 5.83 34.62 5.83H29.37V21.02H32.69V15.77H34.62C35.66 15.77 36.55 15.57 37.3 15.16C38.05 14.76 38.63 14.19 39.03 13.47C39.44 12.75 39.64 11.89 39.64 10.91V10.92ZM36.12 12.04C36 12.36 35.83 12.62 35.58 12.8C35.33 12.98 35.02 13.08 34.62 13.08H32.69V8.52H34.62C35.02 8.52 35.34 8.63 35.58 8.86C35.82 9.09 36 9.38 36.12 9.75C36.23 10.12 36.29 10.52 36.29 10.94C36.29 11.36 36.23 11.72 36.12 12.04Z" fill="currentColor"/>
      <path d="M45.71 5.83H43.51L38.78 21.02H42.32L43.07 18.04H47.02L47.77 21.02H51.31L46.56 5.83H45.72H45.71ZM43.73 15.35L45.03 10.13L46.34 15.35H43.73Z" fill="currentColor"/>
      <path d="M61.26 14.01C61.66 13.63 61.98 13.14 62.19 12.56C62.41 11.98 62.52 11.27 62.52 10.43C62.52 9.42 62.33 8.58 61.94 7.89C61.55 7.2 60.99 6.69 60.26 6.35C59.53 6.01 58.66 5.83 57.64 5.83H52.6V21.02H55.92V15.56H57.21L59.42 21.02H62.98V20.86L60.34 14.66C60.68 14.47 60.99 14.26 61.27 14L61.26 14.01ZM55.92 8.52H57.64C58 8.52 58.3 8.61 58.53 8.78C58.76 8.96 58.93 9.21 59.05 9.53C59.16 9.86 59.22 10.25 59.22 10.71C59.22 11.17 59.16 11.53 59.04 11.85C58.92 12.17 58.74 12.42 58.49 12.6C58.25 12.78 57.94 12.87 57.56 12.87H55.92V8.52Z" fill="currentColor"/>
      <path d="M67.07 5.83H63.43V8.52H67.07V21.02H70.37V8.52H74.11V5.83H70.37H67.07Z" fill="currentColor"/>
      <path d="M83.33 15.33L79.01 5.83H75.77V21.02H79V11.57L83.3 21.02H86.56V5.83H83.33V15.33Z" fill="currentColor"/>
      <path d="M91.04 5.83H88.81V21.02H91.04H92.13H97.66V18.34H92.13V14.51H96.78V11.92H92.13V8.52H97.66V5.83H92.13H91.04Z" fill="currentColor"/>
      <path d="M107.94 14.01C108.34 13.63 108.65 13.14 108.87 12.56C109.09 11.98 109.2 11.27 109.2 10.43C109.2 9.42 109.01 8.58 108.62 7.89C108.23 7.2 107.67 6.69 106.94 6.35C106.21 6.01 105.34 5.83 104.32 5.83H99.28V21.02H102.6V15.56H103.88L106.09 21.02H109.65V20.86L107.01 14.66C107.35 14.47 107.66 14.26 107.94 14V14.01ZM102.6 8.52H104.32C104.68 8.52 104.98 8.61 105.21 8.78C105.44 8.96 105.61 9.21 105.73 9.53C105.84 9.86 105.9 10.25 105.9 10.71C105.9 11.17 105.84 11.53 105.72 11.85C105.6 12.17 105.42 12.42 105.17 12.6C104.93 12.78 104.62 12.87 104.24 12.87H102.6V8.52Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_132_6425">
        <rect width="120.94" height="26.85" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

/* --- 2.2 Navbar --- */
const Navbar = ({ activePage, onNavigate, onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, section = null, tab = null) => {
    onNavigate(page, section, tab);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-neutral-200 py-3 shadow-sm' : 'bg-white border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <MdznLogo className="h-8 w-auto text-neutral-900" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* Ürün Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 font-medium transition-colors py-2 ${activePage === 'connect' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'}`}
              onMouseEnter={() => setActiveDropdown('product')}
            >
              Ürün <ChevronDown size={16} />
            </button>
            <div 
              className={`absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg border border-neutral-100 py-2 transition-all duration-200 ${activeDropdown === 'product' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'} `} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
               <button onClick={() => handleNavClick('connect')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm font-medium text-neutral-700 hover:text-neutral-900">MDZN Connect</button>
            </div>
          </div>

          {/* Çözümler Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 font-medium transition-colors py-2 ${activePage === 'solutions' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'}`}
              onMouseEnter={() => setActiveDropdown('solutions')}
            >
              Çözümler <ChevronDown size={16} />
            </button>
            <div 
              className={`absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg border border-neutral-100 py-2 transition-all duration-200 ${activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
              onMouseLeave={() => setActiveDropdown(null)}
            >
               <button onClick={() => handleNavClick('solutions', 'solutions-hero', 'brands')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm font-medium text-neutral-700 hover:text-neutral-900">Marka</button>
               <button onClick={() => handleNavClick('solutions', 'solutions-hero', 'agencies')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm font-medium text-neutral-700 hover:text-neutral-900">Ajans</button>
               <button onClick={() => handleNavClick('solutions', 'solutions-hero', 'publishers')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm font-medium text-neutral-700 hover:text-neutral-900">Yayıncı</button>
               <button onClick={() => handleNavClick('solutions', 'solutions-hero', 'influencers')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm font-medium text-neutral-700 hover:text-neutral-900">İçerik Üreticisi</button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={() => onOpenModal('influencer')} 
            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-400 transition-all font-inter"
          >
            Influencer Başvuru
          </button>
          <button 
            onClick={() => onOpenModal('demo')} 
            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-400 transition-all font-inter"
          >
            Demo Talebi
          </button>
          <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md font-inter">
            Giriş Yap
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-neutral-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
           <button onClick={() => handleNavClick('connect')} className="text-left font-medium text-neutral-600 py-2">MDZN Connect</button>
           <p className="text-xs text-neutral-400 font-heading font-semibold uppercase mt-2">Çözümler</p>
           <button onClick={() => handleNavClick('solutions', 'solutions-hero', 'brands')} className="text-left text-sm text-neutral-600 pl-2 py-2">Markalar için</button>
           <button onClick={() => handleNavClick('solutions', 'solutions-hero', 'agencies')} className="text-left text-sm text-neutral-600 pl-2 py-2">Ajanslar için</button>
           <button onClick={() => handleNavClick('solutions', 'solutions-hero', 'publishers')} className="text-left text-sm text-neutral-600 pl-2 py-2">Yayıncılar için</button>
           <button onClick={() => handleNavClick('solutions', 'solutions-hero', 'influencers')} className="text-left text-sm text-neutral-600 pl-2 py-2">Influencerlar için</button>
           <div className="h-px bg-neutral-100 my-2"></div>
           <button onClick={() => onOpenModal('influencer')} className="w-full border border-neutral-200 text-neutral-700 py-3 rounded-full font-medium">Influencer Başvuru</button>
           <button onClick={() => onOpenModal('demo')} className="w-full border border-neutral-200 text-neutral-700 py-3 rounded-full font-medium">Demo Talebi</button>
           <button className="w-full bg-neutral-900 text-white py-3 rounded-full font-medium">Giriş Yap</button>
        </div>
      )}
    </nav>
  );
};

/* --- 2.3 Footer --- */
const Footer = ({ onNavigate }) => (
  <footer className="bg-black text-neutral-400 py-12 sm:py-16 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
         <div className="flex items-center gap-2 mb-4 text-white">
            <MdznLogo className="h-5 sm:h-6 w-auto text-white" />
         </div>
         <p className="text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
            MDZN Partners, iş ortaklığı pazarlama programlarını, medya networklerini ve performans odaklı reklam çözümlerini destekleyen teknolojiler geliştirir.
         </p>
         <div className="flex gap-4">
            <div className="w-6 h-6 sm:w-5 sm:h-5 border border-neutral-600 rounded flex items-center justify-center text-xs sm:text-[10px] cursor-pointer hover:border-white hover:text-white transition-colors">in</div>
            <div className="w-6 h-6 sm:w-5 sm:h-5 border border-neutral-600 rounded flex items-center justify-center text-xs sm:text-[10px] cursor-pointer hover:border-white hover:text-white transition-colors">X</div>
         </div>
      </div>
      
      <div>
        <h4 className="text-white font-heading font-bold text-sm mb-3 sm:mb-4">Çözümler</h4>
        <ul className="space-y-2 sm:space-y-2 text-sm sm:text-xs">
          <li className="cursor-pointer hover:text-white" onClick={() => onNavigate('connect')}>MDZN Connect</li>
          <li className="cursor-pointer hover:text-white opacity-50 cursor-not-allowed">MDZN Suite</li>
          <li className="cursor-pointer hover:text-white opacity-50 cursor-not-allowed">MDZN Funooka</li>
          <li className="mt-4 cursor-pointer hover:text-white">Referanslar</li>
          <li className="cursor-pointer hover:text-white">API Entegrasyonları</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-heading font-bold text-sm mb-3 sm:mb-4">Şirket</h4>
        <ul className="space-y-2 sm:space-y-2 text-sm sm:text-xs">
          <li className="cursor-pointer hover:text-white">Mediazone</li>
          <li className="cursor-pointer hover:text-white">Kariyer & Basın</li>
          <li className="cursor-pointer hover:text-white">Blog</li>
          <li className="cursor-pointer hover:text-white">İletişim</li>
        </ul>
      </div>

      <div>
         <div className="mb-6">
            <h4 className="text-white font-heading font-bold text-xs flex items-center gap-2 mb-2"><Globe size={12}/> HQ</h4>
            <p className="text-xs sm:text-xs leading-relaxed">Merkez Mah. Abide-i Hürriyet Cad. Divan Saray No: 136-4 Şişli/İSTANBUL</p>
         </div>
         <div>
            <h4 className="text-white font-heading font-bold text-xs flex items-center gap-2 mb-2"><Briefcase size={12}/> R&D</h4>
            <p className="text-xs sm:text-xs leading-relaxed">İkitelli OSB Mah. YTÜ İkitelli Teknopark Sk. Yıldız Teknik Üniversitesi Teknopark No:1 İç Kapı No: 1B25 Başakşehir/İstanbul</p>
            <p className="text-xs mt-2 text-neutral-400">hello@mdznpartners.com</p>
         </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center sm:text-left">
         <span>MDZN Partners © 2025</span>
         <span className="cursor-pointer hover:text-white">Gizlilik Politikası</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center grayscale opacity-70">
         <span>YTU YILDIZ TEKNOPARK</span>
         <span>ikas</span>
         <span>mediazone</span>
      </div>
    </div>
  </footer>
);

/* --- 2.4 LogoStrip (Partner Marquee) --- */
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

/* --- 2.5 Modal (Demo & Influencer Forms) --- */
const Modal = ({ type, onClose }) => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [platform, setPlatform] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (type) {
      setPhone('+90 ');
      setPhoneError('');
      setPlatform('');
      setIsSuccess(false);
    }
  }, [type]);

  if (!type) return null;

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (value.length < 4 && value.includes('+90')) { setPhone(value); return; }
    if (value === '' || value === '+') { setPhone(value); return; }
    if (value.startsWith('+90')) {
        const rawInput = value.replace(/\D/g, '').slice(2);
        const limitedInput = rawInput.slice(0, 10);
        let formatted = limitedInput;
        if (limitedInput.length > 3) formatted = `${limitedInput.slice(0, 3)} ${limitedInput.slice(3)}`;
        if (limitedInput.length > 6) formatted = `${limitedInput.slice(0, 3)} ${limitedInput.slice(3, 6)} ${limitedInput.slice(6)}`;
        if (limitedInput.length > 8) formatted = `${limitedInput.slice(0, 3)} ${limitedInput.slice(3, 6)} ${limitedInput.slice(6, 8)} ${limitedInput.slice(8)}`;
        setPhone('+90 ' + formatted);
    } else { setPhone(value); }
    setPhoneError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.startsWith('+90')) {
        const rawDigits = phone.replace(/\D/g, '').slice(2);
        if (rawDigits.length > 0 && rawDigits.length < 10) { setPhoneError('Lütfen numaranızı eksiksiz giriniz.'); return; }
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[90vh] animate-fadeIn">
        
        {isSuccess ? (
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center relative min-h-[280px] sm:min-h-[300px]">
            <button onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 text-neutral-400 hover:text-neutral-600 transition-colors">
              <X size={20} />
            </button>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <CheckCircle2 size={28} className="sm:hidden" />
              <CheckCircle2 size={32} className="hidden sm:block" />
            </div>
            
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mb-2">
              {type === 'demo' ? 'Talebiniz Alındı!' : 'Başvurunuz Alındı!'}
            </h3>
            
            <p className="text-neutral-600 mb-6 sm:mb-8 max-w-[95%] sm:max-w-[90%] mx-auto text-sm sm:text-base">
              {type === 'demo' 
                ? "Demo talebiniz tarafımıza ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçerek MDZN Connect'i size tanıtacaktır."
                : "İçerik üreticisi başvurunuz başarıyla tamamlandı. Profiliniz değerlendirildikten sonra sizinle iletişime geçeceğiz."
              }
            </p>
            
            <button 
              onClick={onClose} 
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2.5 sm:py-3 rounded-lg font-bold transition-colors font-inter text-sm sm:text-base"
            >
              Tamam
            </button>
          </div>
        ) : (
          <>
            <div className="p-3 sm:p-4 border-b border-neutral-100 flex justify-between items-center bg-neutral-50">
              <h3 className="font-heading font-bold text-base sm:text-lg text-neutral-900">
                {type === 'demo' ? 'Demo Talebi' : 'İçerik Üreticisi Başvurusu'}
              </h3>
              <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 transition-colors p-1">
                <X size={20} />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto">
              <p className="text-neutral-500 mb-4 sm:mb-6 text-xs sm:text-sm">
                {type === 'demo' 
                  ? 'MDZN Connect platformunun her bir kullanıcı grubu için özel olarak tasarlanmış çözümlerini deneyin.' 
                  : 'İş birliklerinizi yönetin, kazançlarınızı takip edin.'}
              </p>
              <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700">İsim*</label>
                    <input type="text" required className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm" placeholder="İsim" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700">Soyisim*</label>
                    <input type="text" required className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm" placeholder="Soyisim" />
                  </div>
                </div>
                
                {type === 'demo' ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-neutral-700">Email*</label>
                        <input type="email" required className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm" placeholder="ornek@sirket.com" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-neutral-700">Telefon</label>
                        <input 
                          type="text" 
                          maxLength={17} 
                          className={`w-full px-3 py-2.5 sm:py-2 border rounded focus:outline-none text-sm ${phoneError ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-neutral-400'}`}
                          placeholder="+90 555 555 55 55"
                          value={phone}
                          onChange={handlePhoneChange}
                        />
                        {phoneError && <span className="text-xs text-red-500 block mt-1">{phoneError}</span>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-neutral-700">Şirket Adı*</label>
                        <input type="text" required className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm" placeholder="Şirketiniz" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-neutral-700">Web Sitesi</label>
                        <input type="url" className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm" placeholder="sirket.com" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-neutral-700">Email*</label>
                        <input type="email" required className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm" placeholder="ornek@gmail.com" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-neutral-700">Telefon</label>
                        <input 
                          type="text" 
                          maxLength={17} 
                          className={`w-full px-3 py-2.5 sm:py-2 border rounded focus:outline-none text-sm ${phoneError ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-neutral-400'}`}
                          placeholder="+90 555 555 55 55"
                          value={phone}
                          onChange={handlePhoneChange}
                        />
                        {phoneError && <span className="text-xs text-red-500 block mt-1">{phoneError}</span>}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-neutral-700">Platform*</label>
                      <select 
                        className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm text-neutral-600"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                      >
                        <option value="">Seçiniz</option>
                        <option value="Instagram">Instagram</option>
                        <option value="YouTube">YouTube</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Twitter">Twitter / X</option>
                      </select>
                    </div>
                    {platform && (
                      <div className="space-y-1 animate-fadeIn">
                        <label className="text-xs font-bold text-neutral-700">Kullanıcı Adı*</label>
                        <input type="text" required className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm" placeholder="@kullaniciadi" />
                      </div>
                    )}
                  </>
                )}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-700">Mesaj</label>
                  <textarea rows={3} className="w-full px-3 py-2.5 sm:py-2 border border-neutral-200 rounded focus:outline-none focus:border-neutral-400 text-sm resize-none" placeholder="Mesajınız..."></textarea>
                </div>
                <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2.5 sm:py-3 rounded font-bold transition-colors mt-2 text-sm font-inter">
                  Gönder
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


/* ============================================================================
   3. PAGE: HOME
   ============================================================================ */

const HomePage = ({ onNavigate, onOpenModal }) => {
  const stats = [
    { val: "60m+", label: "Medya Gücü", icon: <Globe size={20} className="sm:w-6 sm:h-6 text-neutral-800 mb-2 mx-auto" />, desc: "Aktif mecra ve yayıncıların toplamda aylık eriştiği tekil kullanıcı sayısı" },
    { val: "100+", label: "Aktif Partner", icon: <Briefcase size={20} className="sm:w-6 sm:h-6 text-neutral-800 mb-2 mx-auto" />, desc: "Farklı sektörlerden iş ortaklıkları ile ölçeklenebilir büyüme fırsatları" },
    { val: "₺50m+", label: "İşlem Hacmi", icon: <TrendingUp size={20} className="sm:w-6 sm:h-6 text-neutral-800 mb-2 mx-auto" />, desc: "Çözümlerimiz ile bağlantılı tüm işlemlerden gerçekleşen ticaret hacmi" },
    { val: "1000+", label: "Influencer", icon: <Users size={20} className="sm:w-6 sm:h-6 text-neutral-800 mb-2 mx-auto" />, desc: "Aktif influencer ve içerik üretici sayısı. Her segmentte, geniş bir yaratıcı havuzu" },
    { val: "%3+", label: "Dönüşüm Oranı", icon: <PieChart size={20} className="sm:w-6 sm:h-6 text-neutral-800 mb-2 mx-auto" />, desc: "Platform üzerinden oluşturulan linklerin ortalama dönüşüm oranı" },
    { val: "500+", label: "Aktif Kampanya", icon: <Activity size={20} className="sm:w-6 sm:h-6 text-neutral-800 mb-2 mx-auto" />, desc: "Çözümlerimiz ile bağlantılı yayında olan ve yayıncılar tarafından tanıtılan canlı kampanya sayısı" },
  ];

  return (
    <div>
      {/* Hero */}
      <header className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 lg:pt-52 lg:pb-24 px-4 sm:px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-neutral-900 tracking-tight mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1]">
              İçerik, iş birliği ve iş akışı süreçlerinizi tek bir ekosistemde birleştirin
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Markalar, ajanslar, yayıncılar ve içerik üreticileri için iş birliği ve performans akışlarında daha düzenli ve daha görünür bir yapı
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <button 
                onClick={() => onNavigate('connect')}
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg flex items-center justify-center gap-2 font-inter"
              >
                MDZN Connect'i Keşfet <ArrowRight size={18} />
              </button>
            </div>
            
            {/* Updated Image Section */}
            <div className="mt-10 sm:mt-12 md:mt-16 mx-auto max-w-5xl bg-neutral-100 rounded-xl sm:rounded-2xl border border-neutral-200 overflow-hidden shadow-2xl">
               <img 
                 src={IMAGES.hero.platform} 
                 alt="MDZN Connect Platform Arayüzü" 
                 className="w-full h-auto block"
               />
            </div>
          </div>
        </div>
      </header>

      <LogoStrip />

      {/* Ne Yapıyoruz */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
             {/* Ecosystem Visual Image */}
             {IMAGES.home.ecosystem ? (
                <img 
                  src={IMAGES.home.ecosystem} 
                  alt="MDZN Ekosistem" 
                  className="bg-neutral-100 border border-neutral-200 rounded-xl sm:rounded-2xl aspect-square object-cover order-2 lg:order-1"
                  onError={(e) => {
                     e.target.style.display = 'none';
                     const fallback = e.target.nextElementSibling;
                     if (fallback) fallback.style.display = 'flex';
                  }}
                />
             ) : null}
             <div className={`bg-neutral-100 border border-neutral-200 rounded-xl sm:rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden order-2 lg:order-1 ${IMAGES.home.ecosystem ? 'hidden' : ''}`}>
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:20px_20px] opacity-50"></div>
                <div className="w-3/4 h-3/4 bg-white shadow-xl rounded-lg sm:rounded-xl border border-neutral-100 relative z-10 flex items-center justify-center">
                    <span className="text-neutral-400 text-xs sm:text-sm">Ekosistem Görseli</span>
                </div>
             </div>

             <div className="order-1 lg:order-2">
               <div className="inline-block bg-neutral-900 text-white px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide mb-4 sm:mb-6 font-heading">
                 Ne yapıyoruz?
               </div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                 MDZN Partners, içerik ve iş birliği süreçlerinin daha uyumlu ve daha izlenebilir ilerlemesini sağlayan ortak bir çalışma yapısı sunar
               </h2>
               <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                 Bu bileşik yapı, verimliliği arttırırken, operasyonel aksaklıkları azaltır ve ekip ve ürünler arasında tutarlı bir uçtan uca deneyim yaratır.
               </p>

               <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-neutral-300 rounded-full text-xs sm:text-sm font-medium text-neutral-700">Verimlilik</span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-neutral-300 rounded-full text-xs sm:text-sm font-medium text-neutral-700">Entegrasyon</span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-neutral-300 rounded-full text-xs sm:text-sm font-medium text-neutral-700">Netlik</span>
               </div>
               <div className="space-y-3 sm:space-y-4">
                 {[
                   { title: "Çok segmentli iş akışlarında bütüncül yaklaşım", icon: Layers },
                   { title: "Birbirine bağlı veriler ve paylaşımlı performans katmanları", icon: RotateCw },
                   { title: "Birbiriyle konuşan ürün ekosistemi", icon: MessageSquare }
                 ].map((item,i) => {
                   const Icon = item.icon;
                   return (
                     <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-neutral-200 rounded-lg bg-neutral-50/50">
                        <div className="p-2 sm:p-2.5 bg-white border border-neutral-200 text-neutral-700 rounded-lg shadow-sm flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <h4 className="font-bold text-neutral-900 text-xs sm:text-sm font-heading">{item.title}</h4>
                     </div>
                   );
                 })}
               </div>
             </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 px-0 sm:px-4">
             {stats.map((stat, idx) => (
               <div key={idx} className="group bg-white border border-neutral-200 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg hover:border-neutral-300 transition-all duration-300 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex flex-col justify-center relative overflow-hidden cursor-default">
                 <div className="absolute inset-0 bg-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="relative z-10 flex flex-col items-center justify-center h-full">
                   <div className="mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                     {stat.icon}
                   </div>
                   <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-1 sm:mb-2 tracking-tight transition-all duration-300">{stat.val}</div>
                   <div className="text-[10px] sm:text-xs text-neutral-500 font-bold uppercase tracking-wider sm:tracking-widest">{stat.label}</div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="py-16 sm:py-20 md:py-24 bg-neutral-800 text-white text-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 sm:mb-12 text-neutral-200">Ürün Ekosistemi</h2>
          <div className="max-w-4xl mx-auto bg-neutral-600/50 rounded-xl sm:rounded-2xl border border-neutral-500 p-6 sm:p-8 md:p-12 hover:bg-neutral-600 transition-colors cursor-pointer group" onClick={() => onNavigate('connect')}>
             <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">MDZN Connect</h3>
             <p className="text-neutral-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
               Markalar, ajanslar, yayıncılar ve içerik üreticileri için performans odaklı işbirliği platformu.
             </p>
             <span className="inline-flex items-center gap-2 font-bold text-white group-hover:underline decoration-2 underline-offset-4 font-inter text-sm sm:text-base">
               MDZN Connect'i Keşfet <ArrowRight size={18} className="sm:w-5 sm:h-5" />
             </span>
          </div>
        </div>
      </section>

      {/* NEW: Influencer Funnel Section for Homepage */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-neutral-100">
         <div className="max-w-7xl mx-auto">
            <div className="relative bg-neutral-50 border border-neutral-200 rounded-[2.5rem] overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none"></div>
               
               {/* Decorative Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none"></div>

               {/* Content Wrapper */}
               <div className="relative z-10 px-6 pt-12 pb-12 sm:px-12 sm:pt-20 sm:pb-20">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                     {/* Left: Hero Text Content */}
                     <div className="text-center lg:text-left">
                        <div className="inline-block bg-white border border-neutral-200 text-neutral-700 text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-6 sm:mb-8 font-heading shadow-sm">
                           Influencerlar İçin
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4 sm:mb-6">Potansiyelini Gelire Dönüştür</h2>
                        <p className="text-neutral-600 text-base sm:text-lg mb-8 sm:mb-12 px-2 sm:px-0 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                           İş birliklerinizi yönetin, kazançlarınızı takip edin ve performansınızı tek panelden görün. Hızlı başvuru, net kazanç.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-8 sm:gap-y-4 max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-8 sm:mb-12 text-left">
                           <div className="flex items-center gap-3 bg-white/50 p-2 rounded-lg border border-neutral-100 sm:border-0 sm:bg-transparent sm:p-0">
                              <div className="p-1.5 sm:p-2 bg-white sm:bg-neutral-100 rounded-full text-neutral-600 border border-neutral-100 sm:border-0"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
                              <span className="font-medium text-neutral-700 text-sm sm:text-base">Şeffaf Ödeme</span>
                           </div>
                           <div className="flex items-center gap-3 bg-white/50 p-2 rounded-lg border border-neutral-100 sm:border-0 sm:bg-transparent sm:p-0">
                              <div className="p-1.5 sm:p-2 bg-white sm:bg-neutral-100 rounded-full text-neutral-600 border border-neutral-100 sm:border-0"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
                              <span className="font-medium text-neutral-700 text-sm sm:text-base">Influencer Paneli</span>
                           </div>
                           <div className="flex items-center gap-3 bg-white/50 p-2 rounded-lg border border-neutral-100 sm:border-0 sm:bg-transparent sm:p-0">
                              <div className="p-1.5 sm:p-2 bg-white sm:bg-neutral-100 rounded-full text-neutral-600 border border-neutral-100 sm:border-0"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
                              <span className="font-medium text-neutral-700 text-sm sm:text-base">Kazanç Takibi</span>
                           </div>
                           <div className="flex items-center gap-3 bg-white/50 p-2 rounded-lg border border-neutral-100 sm:border-0 sm:bg-transparent sm:p-0">
                              <div className="p-1.5 sm:p-2 bg-white sm:bg-neutral-100 rounded-full text-neutral-600 border border-neutral-100 sm:border-0"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
                              <span className="font-medium text-neutral-700 text-sm sm:text-base">Hızlı Başvuru Akışı</span>
                           </div>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                           <button onClick={() => onOpenModal('influencer')} className="bg-neutral-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200 font-inter text-sm sm:text-base">
                              Hemen Başvur
                           </button>
                        </div>
                     </div>

                     {/* Right: Phone Mockup Area */}
                     <div className="relative z-10 flex justify-center lg:justify-end overflow-visible">
                        {/* Phone Frame */}
                        <div className="relative w-[280px] sm:w-[300px] bg-neutral-900 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-visible lg:mr-12">
                           {/* Phone Inner Container (for overflow-hidden on image only) */}
                           <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] sm:rounded-[3rem]">
                              {/* Notch */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-20 sm:w-24 bg-neutral-900 rounded-b-xl z-20"></div>
                              
                              {/* Phone Bezel (covers image edges) */}
                              <div className="absolute inset-0 border-[8px] border-neutral-900 rounded-[2.5rem] sm:rounded-[3rem] z-10 pointer-events-none"></div>
                              
                              {/* Screen Image */}
                              <img 
                                 src={IMAGES.home.influencerPhoneMockup} 
                                 alt="MDZN Influencer Paneli" 
                                 className="w-full h-auto block"
                              />
                           </div>

                           {/* Floating Widgets (Hidden on mobile only) */}
                           <div className="absolute top-32 -left-12 bg-white p-3 rounded-xl shadow-xl border border-neutral-100 hidden md:flex items-center gap-3 z-30">
                              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                 <CheckCircle2 size={16} />
                              </div>
                              <div className="text-left">
                                 <div className="text-xs font-bold text-neutral-800">Ödeme Onaylandı</div>
                                 <div className="text-[10px] text-neutral-500">Az önce</div>
                              </div>
                           </div>
                           <div className="absolute top-64 -right-12 bg-white p-3 rounded-xl shadow-xl border border-neutral-100 hidden md:flex items-center gap-3 z-30">
                              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                 <MessageSquare size={16} />
                              </div>
                              <div className="text-left">
                                 <div className="text-xs font-bold text-neutral-800">Yeni İş Birliği</div>
                                 <div className="text-[10px] text-neutral-500">Marka B'den teklif var</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};


/* ============================================================================
   4. PAGE: CONNECT (MDZN Connect)
   ============================================================================ */

const ConnectPage = ({ onOpenModal }) => {
  return (
    <div className="pt-16 sm:pt-20">
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24">
             <div className="inline-block bg-neutral-500 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider mb-4 sm:mb-6 font-heading">
               MDZN Connect
             </div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
               Tüm iş birliklerini tek performans akışında yöneten, şeffaf ve optimize edilebilir platform.
             </h2>
             <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
               Affiliate, influencer ve kampanya akışlarını tek bir performans hattında birleştirerek tam görünürlük ve ölçülebilir gelir etkisi sağlar.
             </p>

             <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                <button onClick={() => onOpenModal('demo')} className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors font-inter text-sm sm:text-base">
                  Demo Talep Et
                </button>
                <button onClick={() => onOpenModal('influencer')} className="bg-white border border-neutral-300 text-neutral-700 hover:border-neutral-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors font-inter text-sm sm:text-base">
                  Influencer Başvuru
                </button>
             </div>
          </div>

          <div className="mb-16 sm:mb-20">
             <div className="text-center mb-16 sm:mb-20">
               <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">Gerçek Zamanlı Performans</h3>
               <p className="text-neutral-600 text-sm sm:text-base px-2 sm:px-0 max-w-2xl mx-auto">Tüm gelir, dönüşüm ve partner etkisini anında görün. Kurulumdan optimizasyona tek akış.</p>
             </div>

             <div className="space-y-20 sm:space-y-24 max-w-6xl mx-auto">
               {/* 
                 ============================================
                 📷 IMAGE PLACEHOLDERS: Connect Page Features
                 ============================================
                 To add images for each feature:
                 1. Place images in: public/images/ folder
                 2. Uncomment the "image" field in each object below
                 3. Image paths are already defined in src/IMAGES.js
                 
                 Recommended images:
                 - dashboard-screenshot.png (1200x900px)
                 - campaign-flow.png (1200x900px)  
                 - earnings-report.png (1200x900px)
                 ============================================
               */}
               {[
                 { 
                   icon: <BarChart2 className="w-6 h-6"/>, 
                   title: "Performans Paneli", 
                   subtitle: "Anlık veri akışı ile tüm kampanyalarınızın nabzını tutun. Hangi partnerin ne kadar trafik ve satış getirdiğini saniye saniye izleyin.", 
                   label: "Dashboard Ekran Görüntüsü",
                   bullets: ["Anlık trafik izleme", "Dönüşüm oranları analizi"],
                   // image: IMAGES.connect.dashboard  // Uncomment when image is ready
                 },
                 { 
                   icon: <Layers className="w-6 h-6"/>, 
                   title: "Bileşik Kampanya", 
                   subtitle: "Farklı kanalları ve partnerleri tek bir kampanya yapısında birleştirin. Karmaşık kurguları tek merkezden yönetmenin rahatlığını yaşayın.", 
                   label: "Kampanya Akış Ekranı",
                   bullets: ["Çoklu kanal yönetimi", "Otomatik kural setleri"],
                   // image: IMAGES.connect.campaignFlow  // Uncomment when image is ready
                 },
                 { 
                   icon: <PieChart className="w-6 h-6"/>, 
                   title: "Şeffaf Kazanç", 
                   subtitle: "Doğrulanabilir ve şeffaf gelir verileriyle hem markalar hem de partnerler için güvenilir bir ekosistem oluşturun.", 
                   label: "Kazanç Raporu Ekranı",
                   bullets: ["Net hakediş raporları", "Otomatik ödeme planı"],
                   // image: IMAGES.connect.earningsReport  // Uncomment when image is ready
                 }
               ].map((feat, idx) => (
                 <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                    
                    {/* Text Side */}
                    <div className="flex-1 text-center lg:text-left px-4 sm:px-0">
                       <div className="inline-flex items-center justify-center p-3 rounded-xl bg-neutral-100 text-neutral-900 mb-6 shadow-sm">
                          {feat.icon}
                       </div>
                       <h4 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-heading mb-4">{feat.title}</h4>
                       <p className="text-neutral-600 text-base leading-relaxed mb-6">{feat.subtitle}</p>
                       <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                          {feat.bullets.map((bullet, bIdx) => (
                            <span key={bIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600">
                              <CheckCircle2 size={14} className="text-green-600"/> {bullet}
                            </span>
                          ))}
                       </div>
                    </div>

                    {/* Image Side */}
                    {/* 
                      To use your own image:
                      1. Add your image to public/images/
                      2. Uncomment the "image" field in the features array above
                      3. Replace this div with:
                      
                      {feat.image && (
                        <div className="flex-1 w-full px-4 sm:px-0">
                          <img 
                            src={feat.image} 
                            alt={feat.title} 
                            className="w-full aspect-[4/3] object-cover rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-500"
                          />
                        </div>
                      )}
                    */}
                    <div className="flex-1 w-full px-4 sm:px-0">
                       <div className="w-full aspect-[4/3] bg-white border border-neutral-200 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500">
                          <div className="absolute inset-0 bg-neutral-50/50"></div>
                          {/* Decorative Elements inside preview */}
                          <div className="absolute top-4 left-4 right-4 h-2 bg-neutral-100 rounded-full w-1/3"></div>
                          <div className="absolute top-8 left-4 right-4 h-32 bg-neutral-50 rounded-lg border border-neutral-100"></div>
                          
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                             <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center mx-auto mb-3 text-neutral-400">
                                   {feat.icon}
                                </div>
                                <span className="text-neutral-400 font-medium text-sm">{feat.label}</span>
                             </div>
                          </div>
                       </div>
                    </div>

                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Moved "How it Works" section here */}
      <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
           <div className="max-w-4xl mx-auto text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 mb-6 sm:mb-8">Potansiyelinizi Kısıtlayan Engelleri Kaldırın</h3>
              <ul className="space-y-3 sm:space-y-4 inline-block text-left">
                {[
                  "Dağınık süreçleri tek bir merkezden yönetin",
                  "Anlık veri akışı ile performans körlüğünü aşın",
                  "Paydaşlar arasındaki iletişimi senkronize edin",
                  "Gelir ve komisyon takibini şeffaflaştırın",
                  "Manuel işleri azaltıp optimizasyona odaklanın"
                ].map((item, i) => (
                   <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-neutral-700">
                     <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 mt-0.5 flex-shrink-0" />
                     <span className="text-sm sm:text-base lg:text-lg">{item}</span>
                   </li>
                ))}
              </ul>
           </div>

           <div className="bg-neutral-900 text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl relative overflow-hidden mt-10 sm:mt-12 md:mt-16 max-w-4xl mx-auto">
              <div className="relative z-10">
                <div className="inline-block bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                    MDZN Çözümü
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 sm:mb-8">Nasıl Çözüyoruz?</h3>
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {["Affiliate + influencer + kampanya tek panelde", "Gelir, komisyon ve dönüşüm gerçek zamanlı takip", "Otomasyon kurallarıyla operasyonel hız", "Partner katkısının şeffaf görünürlüğü", "Tüm ekipler için senkronize çalışma"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-neutral-300 text-sm sm:text-base">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neutral-500 rounded-full flex-shrink-0"></div>
                        {item}
                      </li>
                  ))}
                </ul>
                <button onClick={() => onOpenModal('demo')} className="bg-white text-neutral-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm hover:bg-neutral-50 transition-colors font-inter">
                  Demo Talep Et
                </button>
              </div>
              
              {/* Abstract decorative circle */}
              <div className="absolute -top-16 sm:-top-20 lg:-top-24 -right-16 sm:-right-20 lg:-right-24 w-40 sm:w-52 lg:w-64 h-40 sm:h-52 lg:h-64 border-[20px] sm:border-[28px] lg:border-[32px] border-neutral-800 rounded-full opacity-50"></div>
           </div>
        </div>
      </section>
    </div>
  );
};


/* ============================================================================
   5. PAGE: SOLUTIONS (Brands, Agencies, Publishers, Influencers)
   ============================================================================ */

const SolutionsPage = ({ initialTab, onOpenModal }) => {
  const [activeTab, setActiveTab] = useState(initialTab || 'brands');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (key) => {
    setActiveTab(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentData = solutionsData[activeTab];

  return (
    <div className="pt-16 sm:pt-20 bg-neutral-50 min-h-screen">
      
      {/* Sticky Chip Bar Container */}
      <div className="sticky top-[60px] sm:top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 sm:py-4 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3">
            {Object.keys(solutionsData).map((key) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`px-2 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-lg sm:rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 font-inter border text-center ${
                  activeTab === key 
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md transform scale-105' 
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300'
                }`}
              >
                {solutionsData[key].tabLabel} 
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 1) MAIN HERO SEGMENT */}
      <section id="solutions-hero" className="bg-neutral-50 pt-12 sm:pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div key={activeTab} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center animate-fadeIn">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-white border border-neutral-200 text-neutral-800 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full mb-3 sm:mb-4 font-heading font-bold uppercase tracking-wider shadow-sm">
                {currentData.title.toLocaleUpperCase('tr-TR')}
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
                {currentData.subtitle}
              </h3>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                {currentData.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {currentData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full flex-shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium text-neutral-800 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => onOpenModal(currentData.modalType)}
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl font-inter flex items-center gap-2"
              >
                {currentData.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Right Visual (Screenshot Image) */}
            {activeTab === 'influencers' ? (
               /* Phone Mockup for Influencers */
               <div className="relative flex justify-center overflow-visible">
                  {/* Phone Frame */}
                  <div className="relative w-[210px] sm:w-[240px] lg:w-[270px] bg-neutral-900 rounded-[1.875rem] sm:rounded-[2.25rem] shadow-2xl overflow-visible">
                     {/* Phone Inner Container (for overflow-hidden on image only) */}
                     <div className="relative w-full h-full overflow-hidden rounded-[1.875rem] sm:rounded-[2.25rem]">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[15px] sm:h-[18px] w-[60px] sm:w-[72px] bg-neutral-900 rounded-b-xl z-20"></div>
                        
                        {/* Phone Bezel (covers image edges) */}
                        <div className="absolute inset-0 border-[6px] border-neutral-900 rounded-[1.875rem] sm:rounded-[2.25rem] z-10 pointer-events-none"></div>
                        
                        {/* Screen Image */}
                        {IMAGES.solutions && IMAGES.solutions[activeTab] ? (
                           <img 
                              src={IMAGES.solutions[activeTab]} 
                              alt={`${currentData.title} - MDZN Connect Screenshot`}
                              className="w-full h-auto block"
                              onError={(e) => {
                                 e.target.style.display = 'none';
                                 const fallback = e.target.nextElementSibling;
                                 if (fallback) fallback.style.display = 'flex';
                              }}
                           />
                        ) : null}
                        <div className={`w-full h-full bg-neutral-50 flex items-center justify-center ${IMAGES.solutions && IMAGES.solutions[activeTab] ? 'hidden' : ''}`}>
                           <div className="text-center p-8">
                              <div className="text-neutral-400 text-sm mb-2">📷 Screenshot Placeholder</div>
                              <div className="text-neutral-300 text-xs">
                                 Add image: solutions-{activeTab}.png
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Floating Widgets (Hidden on mobile only) */}
                     <div className="absolute top-24 -left-9 bg-white p-3 rounded-xl shadow-xl border border-neutral-100 hidden md:flex items-center gap-3 z-30">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                           <CheckCircle2 size={16} />
                        </div>
                        <div className="text-left">
                           <div className="text-xs font-bold text-neutral-800">Ödeme Onaylandı</div>
                           <div className="text-[10px] text-neutral-500">Az önce</div>
                        </div>
                     </div>
                     <div className="absolute top-48 -right-9 bg-white p-3 rounded-xl shadow-xl border border-neutral-100 hidden md:flex items-center gap-3 z-30">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                           <MessageSquare size={16} />
                        </div>
                        <div className="text-left">
                           <div className="text-xs font-bold text-neutral-800">Yeni İş Birliği</div>
                           <div className="text-[10px] text-neutral-500">Marka B'den teklif var</div>
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               /* Regular Image Container for other tabs */
               <div className="relative aspect-square lg:aspect-[4/3] bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden group">
                  {/* 
                     ============================================
                     📷 SCREENSHOT IMAGE: Solutions Page
                     ============================================
                     Displays different screenshots based on active tab:
                     - brands: /images/solutions-brands.png
                     - agencies: /images/solutions-agencies.png
                     - publishers: /images/solutions-publishers.png
                     - influencers: /images/solutions-influencers.jpg
                     
                     To add screenshots:
                     1. Place images in: public/images/
                     2. Paths are already configured in src/IMAGES.js
                     3. Images will automatically display based on active tab
                     
                     Recommended sizes: 1200x900px (4:3 aspect ratio)
                     ============================================
                  */}
                  {IMAGES.solutions && IMAGES.solutions[activeTab] ? (
                     <img 
                        src={IMAGES.solutions[activeTab]} 
                        alt={`${currentData.title} - MDZN Connect Screenshot`}
                        className="w-full h-full object-contain bg-neutral-50"
                        onError={(e) => {
                           e.target.style.display = 'none';
                           e.target.nextElementSibling.style.display = 'flex';
                        }}
                     />
                  ) : null}
                  <div className={`w-full h-full bg-neutral-50 flex items-center justify-center ${IMAGES.solutions && IMAGES.solutions[activeTab] ? 'hidden' : ''}`}>
                     <div className="text-center p-8">
                        <div className="text-neutral-400 text-sm mb-2">📷 Screenshot Placeholder</div>
                        <div className="text-neutral-300 text-xs">
                           Add image: solutions-{activeTab}.png
                        </div>
                     </div>
                  </div>
               </div>
            )}
          </div>
        </div>
      </section>

      {/* 2) DEEP DIVE / CAPABILITIES SECTION */}
      <section className="bg-white py-16 sm:py-24 border-t border-neutral-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
               <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">Derinlemesine Bakış</h3>
               <p className="text-neutral-500 max-w-2xl mx-auto">
                  {currentData.title} özel geliştirilmiş araçlarla operasyonel süreçlerinizi nasıl kolaylaştırıyoruz?
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {currentData.capabilities.map((cap, idx) => {
                  const Icon = cap.icon;
                  const capabilityImage = IMAGES.solutions?.capabilities?.[activeTab]?.[idx];
                  return (
                    <div key={idx} className="bg-neutral-50 rounded-xl border border-neutral-100 overflow-hidden hover:border-neutral-300 transition-all duration-300 group">
                       {/* Mini Screen Preview */}
                       <div className="aspect-[16/9] bg-neutral-200 relative overflow-hidden">
                          {capabilityImage ? (
                            <img 
                              src={capabilityImage} 
                              alt={`${cap.title} - Screenshot`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                const fallback = e.target.nextElementSibling;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div className={`absolute inset-0 flex items-center justify-center ${capabilityImage ? 'hidden' : ''}`}>
                             <div className="text-center">
                                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors"></div>
                                <span className="relative font-heading font-bold text-neutral-400 text-sm">{cap.visual}</span>
                             </div>
                          </div>
                          {/* Decorative overlay */}
                          <div className="absolute inset-0 border-b-4 border-neutral-900/10 pointer-events-none"></div>
                       </div>
                       
                       <div className="p-6">
                          <div className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-900 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                             <Icon size={20} />
                          </div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-2">{cap.title}</h4>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                             {cap.desc}
                          </p>
                       </div>
                    </div>
                  );
               })}
            </div>
         </div>
      </section>

    </div>
  );
};


/* ============================================================================
   6. APP ORCHESTRATOR (Main App Component)
   ============================================================================ */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [currentSolutionTab, setCurrentSolutionTab] = useState('brands');
  const [activeModal, setActiveModal] = useState(null);

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = (page, sectionId = null, tab = null) => {
    setCurrentPage(page);
    if (tab) setCurrentSolutionTab(tab);
    
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-neutral-900">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          
          .font-heading {
            font-family: 'Plus Jakarta Sans', sans-serif;
          }
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee 100s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 100s linear infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      
      <Navbar 
        activePage={currentPage} 
        onNavigate={navigate} 
        onOpenModal={setActiveModal} 
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={navigate} onOpenModal={setActiveModal} />}
        {currentPage === 'connect' && <ConnectPage onOpenModal={setActiveModal} />}
        {currentPage === 'solutions' && <SolutionsPage initialTab={currentSolutionTab} onOpenModal={setActiveModal} />}
      </main>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white text-center border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4 sm:mb-6 px-2 sm:px-0">
             Dijital iş birliklerinizi bir sonraki<br className="hidden sm:block"/>seviyeye taşıyın.
           </h2>
           <p className="text-neutral-600 mb-8 sm:mb-10 text-sm sm:text-base">Hangi Rolde Olursanız Olun, MDZN Partners Yanınızda</p>
            
           <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0">
              <button onClick={() => setActiveModal('demo')} className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 rounded-full font-medium transition-colors font-inter text-sm sm:text-base">
                 Demo Talep Et
              </button>
              {currentPage !== 'connect' && (
                <button onClick={() => navigate('connect')} className="border border-neutral-800 text-neutral-900 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 rounded-full font-medium hover:bg-neutral-50 transition-colors font-inter text-sm sm:text-base">
                   MDZN Connect'i Keşfet
                </button>
              )}
           </div>
        </div>
      </section>

      <Footer onNavigate={navigate} />
      <Modal type={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
};

export default App;
