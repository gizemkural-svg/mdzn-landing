/*
================================================================================
📷 IMAGE UPLOAD GUIDE - MDZN Landing Page
================================================================================

HOW TO ADD YOUR OWN IMAGES:

1. FOLDER LOCATION:
   Place all images in: /public/images/
   
2. RECOMMENDED IMAGE NAMES & SIZES:
   - platform-hero.png      → 1920x1080px (Hero section)
   - ecosystem-visual.png   → 800x800px (Ne Yapıyoruz section)
   - influencer-panel.png   → 1280x720px (Influencer section)
   - dashboard-screenshot.png → 1200x900px (Connect page)
   - campaign-flow.png      → 1200x900px (Connect page)
   - earnings-report.png    → 1200x900px (Connect page)

3. HOW TO USE:
   After placing images in public/images/, reference them with:
   <img src="/images/your-image-name.png" alt="Description" />

4. SEARCH FOR PLACEHOLDERS:
   Look for "📷 IMAGE PLACEHOLDER" comments throughout this file
   to find all the locations where you can add images.

================================================================================
*/

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
  ArrowUpRight, 
  RefreshCw, 
  TrendingUp, 
  Activity, 
  Users, 
  Paperclip, 
  MessageSquare, 
  Filter, 
  Plus, 
  Search, 
  Bell, 
  Settings
} from 'lucide-react';

/* --- 1. DATA & CONFIG --- */
const solutionsData = {
  brands: {
    id: 'brands',
    tabLabel: "Markalar",
    title: "Markalar için",
    subtitle: "Kampanyalarınızı ölçün, optimize edin ve büyütün.",
    description: "Markanızın performans pazarlama süreçlerini uçtan uca yönetin. Doğru partnerleri bulun, gerçek zamanlı verilerle kararlar alın ve ROI odaklı büyüme sağlayın.",
    features: ["Gerçek zamanlı performans takibi", "Özel komisyon kurguları", "Detaylı ilişkilendirme (Attribution)"],
    capabilities: [
      { title: "Partner Keşfi", desc: "Binlerce onaylı yayıncı ve influencer arasından markanıza en uygun olanları filtreleyin.", icon: <Search size={20}/>, visual: "Discovery UI" },
      { title: "Marka Güvenliği", desc: "Dolandırıcılık önleme (Fraud Detection) ve marka güvenliği araçlarıyla bütçenizi koruyun.", icon: <CheckCircle2 size={20}/>, visual: "Security Shield" },
      { title: "Otomatik Ödemeler", desc: "Tek faturayla yüzlerce partnerinize otomatik ve zamanında ödeme yapın.", icon: <PieChart size={20}/>, visual: "Payment Flow" }
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
      { title: "Müşteri Portföyü", desc: "Tüm müşterilerinizin kampanyalarını tek bir dashboard üzerinden izleyin ve yönetin.", icon: <Briefcase size={20}/>, visual: "Portfolio View" },
      { title: "Ekip İzinleri", desc: "Farklı departmanlar ve müşteri temsilcileri için gelişmiş yetkilendirme sistemi.", icon: <Users size={20}/>, visual: "Permissions Grid" },
      { title: "Özel Raporlar", desc: "Müşterileriniz için otomatik, markalı ve detaylı performans raporları oluşturun.", icon: <BarChart2 size={20}/>, visual: "Report Builder" }
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
      { title: "Link Oluşturucu", desc: "Tarayıcı eklentisi veya panel üzerinden saniyeler içinde takip edilebilir linkler yaratın.", icon: <Paperclip size={20}/>, visual: "Link Tool" },
      { title: "Anlık Bildirimler", desc: "Dönüşüm gerçekleştiğinde veya kampanya koşulları değiştiğinde anında haberdar olun.", icon: <Bell size={20}/>, visual: "Notification Center" },
      { title: "API Entegrasyonu", desc: "Verilerinizi kendi sistemlerinize aktarmak için güçlü API desteğinden yararlanın.", icon: <Zap size={20}/>, visual: "API Docs" }
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
      { title: "Medya Kiti", desc: "Profilinizi, istatistiklerinizi ve geçmiş iş birliklerinizi sergileyen profesyonel bir vitrin.", icon: <Smartphone size={20}/>, visual: "Profile Card" },
      { title: "İş Birliği Teklifleri", desc: "Markalardan gelen teklifleri inceleyin, pazarlık yapın ve onaylayın.", icon: <MessageSquare size={20}/>, visual: "Offer Chat" },
      { title: "Kazanç Cüzdanı", desc: "Onaylanan komisyonlarınızı takip edin ve dilediğiniz zaman çekim talebi oluşturun.", icon: <PieChart size={20}/>, visual: "Wallet UI" }
    ],
    cta: "Başvuru Yap",
    modalType: 'influencer'
  }
};

/* --- 2. SHARED COMPONENTS --- */

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
            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 px-5 py-2.5 rounded-lg border border-neutral-300 hover:border-neutral-400 transition-all font-inter"
          >
            Influencer Başvuru
          </button>
          <button 
            onClick={() => onOpenModal('demo')} 
            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 px-5 py-2.5 rounded-lg border border-neutral-300 hover:border-neutral-400 transition-all font-inter"
          >
            Demo Talebi
          </button>
          <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md font-inter">
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
           <button onClick={() => onOpenModal('influencer')} className="w-full border border-neutral-200 text-neutral-700 py-3 rounded-lg font-medium">Influencer Başvuru</button>
           <button onClick={() => onOpenModal('demo')} className="w-full border border-neutral-200 text-neutral-700 py-3 rounded-lg font-medium">Demo Talebi</button>
           <button className="w-full bg-neutral-900 text-white py-3 rounded-lg font-medium">Giriş Yap</button>
        </div>
      )}
    </nav>
  );
};

// ... (Footer, LOGOS, LogoStrip, Modal components same as before)
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

const LOGOS = {
  ikas: (props) => (
    <svg viewBox="0 0 159 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21.3784 11.1998C21.7453 10.7973 22.4094 11.0422 22.4094 11.5847V27.6159H44.2337C44.7404 27.6159 45.0025 28.2109 44.6706 28.5959H44.6532V28.5784L23.4227 52.8003C23.0557 53.2028 22.3916 52.9576 22.3916 52.4151V36.3839H0.584783C0.0780691 36.3839 -0.184094 35.789 0.147859 35.4039L21.3784 11.1998Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M115.386 23.1883C117.133 23.1883 118.811 23.5557 120.453 24.2907C122.096 25.0258 123.459 26.0757 124.56 27.4233V24.8331C124.56 24.2907 125.031 23.7655 125.625 23.7655H130.64C131.234 23.7656 131.706 24.2381 131.706 24.8331V51.2952C131.706 51.8902 131.235 52.3627 130.64 52.3627H125.608C125.014 52.3627 124.542 51.8902 124.542 51.2952V48.705C123.459 50.0526 122.096 51.1028 120.453 51.8378C118.811 52.5728 117.186 52.9403 115.386 52.9403C113.586 52.9403 111.856 52.5729 110.214 51.8204C108.571 51.0678 107.139 50.035 105.933 48.7224C104.71 47.3923 103.749 45.8347 103.032 44.0146C102.316 42.1944 101.966 40.2343 101.966 38.0992V38.0468C101.966 35.9117 102.316 33.9513 103.032 32.1311C103.749 30.3111 104.71 28.7359 105.933 27.4233C107.139 26.1108 108.571 25.0782 110.214 24.3256C111.839 23.5731 113.639 23.1883 115.386 23.1883ZM116.836 30.591C115.84 30.5911 114.914 30.7661 114.058 31.1686C113.202 31.5712 112.468 32.0789 111.856 32.7439C111.245 33.3915 110.773 34.1791 110.441 35.0891C110.109 35.9816 109.952 36.9616 109.952 38.0116V38.0643C109.952 39.1143 110.109 40.0944 110.441 41.0045C110.773 41.9145 111.227 42.6847 111.856 43.3497C112.485 44.0147 113.202 44.5397 114.058 44.9247C114.914 45.3097 115.84 45.5023 116.836 45.5023C118.898 45.5023 120.558 44.8022 121.851 43.3672V43.3322C123.109 41.9497 123.756 40.1819 123.791 38.0294C123.738 35.8767 123.109 34.1088 121.851 32.7262C120.558 31.3086 118.881 30.591 116.836 30.591Z" fill="currentColor"/>
      <path d="M147.834 23.2054C149.687 23.2054 151.434 23.4681 153.094 23.9582C154.404 24.3607 155.645 24.9207 156.833 25.6382C157.358 25.9707 157.497 26.6708 157.13 27.1783L154.737 30.5209C154.405 30.9759 153.793 31.0986 153.304 30.8011C152.727 30.4336 152.098 30.1535 151.434 29.9084C150.456 29.5584 149.442 29.3835 148.394 29.3835C147.345 29.3835 146.559 29.6111 146.017 30.0661C145.476 30.5387 145.213 31.1161 145.213 31.7986C145.213 32.3061 145.388 32.7613 145.755 33.1638C146.122 33.5663 146.734 33.864 147.572 34.0565L150.124 34.6864C153.321 35.579 155.61 36.769 156.956 38.274C158.301 39.7792 158.983 41.5995 158.983 43.7172V43.8397H159C159 45.0472 158.755 46.1848 158.249 47.2874C157.742 48.3899 157.008 49.3523 156.047 50.1924C155.086 51.0324 153.88 51.6975 152.465 52.1875C151.032 52.6951 149.407 52.9403 147.607 52.9403C145.406 52.9403 143.344 52.6076 141.387 51.9251C139.779 51.3651 138.329 50.5775 137.053 49.5624C136.599 49.1949 136.512 48.5475 136.861 48.075L139.499 44.5747C139.866 44.1022 140.548 44.0146 141.002 44.382C141.736 44.9596 142.557 45.4321 143.466 45.7996C144.707 46.3072 145.912 46.5524 147.031 46.5524C148.341 46.5524 149.285 46.2722 149.844 45.6771C150.403 45.0996 150.682 44.4345 150.682 43.6994C150.682 43.122 150.455 42.597 150.019 42.107C149.582 41.617 148.865 41.2669 147.904 41.0394L144.549 39.9893C143.658 39.7618 142.767 39.4468 141.876 39.0268C140.985 38.6243 140.181 38.099 139.447 37.4515C138.713 36.8215 138.119 36.0515 137.682 35.1415C137.245 34.2314 137.018 33.1637 137.018 31.9211C137.018 30.6785 137.263 29.611 137.735 28.561C138.224 27.5109 138.905 26.6007 139.814 25.7956C140.723 25.0081 141.859 24.378 143.204 23.9055C144.549 23.4505 146.087 23.2054 147.834 23.2054Z" fill="currentColor"/>
      <path d="M80.9455 11.6197C81.5396 11.6197 82.0114 12.0922 82.0114 12.6872V38.2566L90.9753 24.4481C91.2374 24.0456 91.692 23.8004 92.1637 23.8004H99.4151C99.9917 23.8004 100.324 24.4481 99.9917 24.9207L91.8491 36.5064L101.11 51.2952C101.407 51.7676 101.075 52.3801 100.516 52.3802H100.498V52.3627H93.0547C92.5306 52.3627 92.0589 52.0827 91.8143 51.6277L87.1139 43.2094L81.1027 51.7502C80.8406 52.1351 80.4039 52.3452 79.9323 52.3453H74.9695C74.3755 52.3452 73.9037 51.8727 73.9037 51.2777V12.6872C73.9037 12.0922 74.3755 11.6197 74.9695 11.6197H80.9455Z" fill="currentColor"/>
      <path d="M65.7436 23.7655C66.3377 23.7655 66.8095 24.2381 66.8095 24.8331V51.2777C66.8095 51.8727 66.3377 52.3452 65.7436 52.3453H59.7676C59.1736 52.3452 58.7018 51.8727 58.7018 51.2777V24.8331C58.7018 24.2381 59.1736 23.7655 59.7676 23.7655H65.7436Z" fill="currentColor"/>
      <path d="M65.7611 11.6197C66.3552 11.6197 66.8269 12.0922 66.8269 12.6872V18.6727C66.8269 19.2677 66.3552 19.7403 65.7611 19.7403H59.7851C59.191 19.7402 58.7192 19.2677 58.7192 18.6727V12.6872C58.7192 12.0922 59.191 11.6197 59.7851 11.6197H65.7611Z" fill="currentColor"/>
    </svg>
  ),
  webtekno: (props) => (
    <svg viewBox="0 0 251 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M77.6365 11V26.175L79.8338 24.14C86.7334 18.3735 96.434 19.3618 102.153 26.175V20.3385H128.423V26.175C135.447 18.3424 146.983 18.1089 153.824 26.3151C155.09 27.8365 157.318 31.9921 157.318 33.9104V39.0155L132.51 38.7236C132.346 45.5835 141.529 48.0777 146.371 44.5563C146.823 44.2294 148.541 42.2217 148.709 42.2217H156.15C154.993 46.5485 150.711 50.8753 146.387 52.1594C132.346 56.3228 120.507 42.6886 126.529 29.389C126.974 28.4046 127.874 27.5291 128.131 26.4669H118.5V52.1477H111.203V26.4669H102.445L104.927 31.4279C110.128 48.4901 89.628 60.4239 77.6365 47.4785V52.1477H73.842V11H77.6365ZM88.0813 24.214C73.5498 25.8988 75.1393 50.2644 90.3331 49.2255C105.527 48.1866 104.697 22.2879 88.0813 24.214ZM149.437 33.1789C147.622 24.6108 134.8 24.8793 132.802 33.1789H149.437Z" fill="currentColor"/>
      <path d="M230.872 20.6303V27.782C221.927 32.961 224.966 47.3267 236.486 45.6536C244.734 44.4551 245.871 31.6809 238.75 28.0739V20.6342C251.645 24.2879 255.443 40.7236 244.882 49.3812C239.435 53.8442 230.26 54.1166 224.736 49.673C213.816 40.887 217.412 24.0272 230.868 20.6342L230.872 20.6303Z" fill="currentColor"/>
      <path d="M208.689 52.1477V35.3696C208.689 34.3423 207.922 31.1828 207.45 30.1906C205.818 26.7704 199.577 26.6731 197.309 29.533C195.79 31.4474 195.408 35.5875 195.268 37.9999C195.003 42.6341 195.459 47.494 195.268 52.1516H188.699L188.263 21.2179H195.56L195.704 24.428C201.256 17.3502 213.294 20.1712 215.32 29.0388C216.321 33.4201 216.531 46.6574 216.006 51.1438C215.955 51.5679 215.97 51.8948 215.554 52.1516H208.693L208.689 52.1477Z" fill="currentColor"/>
      <path d="M166.661 20.3385V35.2217L176.728 21.214H184.753L174.304 35.9065L186.798 52.1477H177.748L166.661 36.6808V52.1477H159.652V20.3385H166.661Z" fill="currentColor"/>
      <path d="M4.37894 21.214L11.82 44.2722L18.817 21.498L21.8479 21.2529L29.0397 44.2722L36.4847 21.214H40.5714L30.3214 52.1127L27.5748 51.8637L20.1416 28.8015L12.7083 52.1672L10.4759 51.9765L0 21.214H4.37894Z" fill="currentColor"/>
      <path d="M71.2162 37.8481H42.905C43.9842 50.4434 60.2104 53.5446 65.8165 42.2256H70.0474C66.1905 53.9609 50.95 56.7819 42.8972 47.3384C35.6237 38.8092 38.6819 24.3385 49.8474 21.0039C61.796 17.4358 71.5356 25.782 71.2162 37.8481ZM66.8372 34.3462C64.6828 20.5058 45.0555 20.3774 43.1972 34.3462H66.8372Z" fill="currentColor"/>
      <path d="M237 18.8793H233.206V32.8871H237V18.8793Z" fill="currentColor"/>
    </svg>
  ),
  // ... (paen, proteinocean, zeki, miniso, petzzshop, wunder logos - assuming they are imported or defined above)
  paen: (props) => (
    <svg viewBox="0 0 85 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M81.1238 20.2249C83.1329 22.2998 81.5408 26.1424 80.6524 28.4854C79.9008 30.4676 78.6778 33.208 78.5005 35.3663C78.4496 35.9861 78.6094 36.9225 79.2726 37.019C79.6196 37.0698 79.5667 36.9688 79.7805 36.8694C80.162 36.6922 80.7723 36.2739 81.0879 35.9765C81.7821 35.3229 82.3514 34.2369 83.2388 33.8356C83.7642 33.598 84.308 33.6674 84.6871 34.1743C85.152 34.7963 85.0272 35.3381 84.774 36.0222C84.4853 36.8006 83.9979 37.6257 83.4905 38.2404C82.0832 39.9467 79.0843 42.4403 76.9509 40.8859C74.6361 39.1999 75.198 35.0655 75.8102 32.4381C76.3131 30.2814 77.24 28.2991 77.9492 26.2762C78.0176 26.0814 78.3866 25.0158 78.3931 24.9108C78.4266 24.365 77.9766 23.6595 77.4438 23.8429C76.9289 24.0201 76.1418 24.8707 75.7233 25.2845C72.8148 28.1625 70.3288 32.8625 68.2987 36.5917C67.7494 37.6003 67.1426 38.9364 66.5314 39.8434C65.7338 41.0264 64.3804 41.3425 63.6693 39.8677C63.3926 39.2942 63.9959 38.4323 63.5115 38.1811C63.2308 38.0361 62.9701 38.5136 62.8153 38.6914C62.0218 39.6001 60.971 40.6234 59.9842 41.3053C57.4767 43.0398 54.7979 43.2881 51.9988 42.1638C51.1239 41.8121 49.4264 40.6771 48.8051 39.9032C48.6134 39.6639 48.5335 39.2361 48.1549 39.2208C47.8658 39.209 47.2895 39.9196 47.0018 40.1217C45.0706 41.4808 42.3884 42.4375 40.0716 42.2112C38.9035 42.0972 37.2625 41.0801 36.6737 39.8987C36.5489 39.6475 36.6373 39.3134 36.2218 39.3343C35.8497 39.3529 35.8482 39.6616 35.6724 39.9038C34.367 41.706 30.9785 43.401 28.9909 42.3726C27.8024 41.7574 26.825 40.1612 26.5693 38.7315C25.9781 35.4222 26.454 32.3788 27.4693 29.2784C28.6638 25.631 31.1498 20.4704 34.746 19.3845C35.8582 19.0486 37.1831 18.9363 38.3058 19.2586C38.9645 19.4477 39.7096 19.8981 40.1415 20.5139C40.2929 20.7301 40.3098 21.0749 40.6649 21.1116C41.1473 21.1613 41.1339 20.6686 41.3641 20.4292C41.9354 19.8343 42.9632 19.6436 43.6349 20.1216C43.953 20.348 44.1987 20.7374 44.1827 21.1833C44.1362 22.4572 43.3911 23.8006 42.8788 24.9069C42.2101 26.3501 41.5044 27.7719 40.9301 29.2519C40.2799 30.9282 39.4589 33.283 39.5902 35.1355C39.7011 36.7052 40.7598 37.7053 42.1601 37.5275C42.8298 37.4429 44.0189 37.0275 44.6212 36.6967C45.562 36.1797 46.5833 35.3692 47.2056 34.4249C47.3034 33.6301 47.3649 32.827 47.4323 32.0283C47.4538 31.7726 47.4118 31.4955 47.4338 31.2398C47.8728 26.0871 49.9053 20.9869 54.3889 19.0069C56.5009 18.0739 58.7262 18.2234 60.3698 20.1171C62.0462 22.048 62.3938 24.7658 61.6937 27.3198C60.8107 30.5427 58.7167 32.3884 56.3236 34.1195C55.0047 35.074 53.8461 35.6598 52.4308 36.3801C52.0123 36.5928 51.6912 36.8739 52.0043 37.4169C52.0757 37.5411 52.7434 38.1851 52.8793 38.2906C55.5825 40.3988 58.493 38.1422 60.4916 36.0645C63.0291 33.4264 65.3623 29.5883 66.7841 25.9612C67.6241 23.8192 68.2843 21.5891 69.0858 19.4189C69.3525 18.6964 69.8604 18.0761 70.586 18.0107C72.284 17.8577 72.3728 19.3788 71.9898 20.8385C71.7786 21.6433 71.4714 22.4584 71.2382 23.2627C71.1388 23.6042 70.9076 24.2849 70.8677 24.5936C70.7318 25.6412 71.2986 25.5498 71.854 25.031C72.2435 24.6675 72.647 24.0602 73.0271 23.6476C74.8119 21.7111 78.6303 17.6489 81.1243 20.2244L81.1238 20.2249ZM56.4595 22.0254C55.3533 22.1976 54.0743 23.2898 53.4031 24.2719C52.277 25.9211 51.1878 29.4161 51.1254 31.5186C51.1189 31.7387 51.1174 32.0892 51.3281 32.1976C51.6298 32.3534 51.824 32.0085 52.0408 31.8759C54.1767 30.5704 56.5793 29.3709 57.9117 26.8841C58.523 25.7428 58.8591 23.7498 58.0206 22.6593C57.6555 22.1846 57.0103 21.9402 56.4595 22.026V22.0254ZM36.6328 22.9285C34.4564 23.2215 32.2101 26.5951 31.3266 28.6716C30.3598 30.9429 29.6022 33.3423 29.6516 35.9274C29.6676 36.7599 30.0562 37.7234 30.7678 38.0519C31.0629 38.1885 31.3371 38.1659 31.6428 38.0598C33.2368 37.5067 35.5236 33.8824 36.2662 32.2225C37.0762 30.4123 38.3931 26.384 38.2423 24.4107C38.1589 23.3174 37.6091 22.797 36.6328 22.9285Z" fill="currentColor"/>
      <path d="M22.6795 20.7498C25.4482 23.3044 25.3618 26.9806 24.5068 30.6155C22.9597 37.1917 18.6384 42.7626 13.3587 45.8422C12.0133 46.6267 10.6355 47.2561 9.22667 47.7759C8.00963 48.2246 6.96089 49.564 6.56536 50.9203C6.15286 52.3342 5.76482 53.7747 5.34782 55.1886C4.81896 56.9806 4.27861 58.7992 3.74924 60.6065C3.6154 61.0637 3.53001 61.7326 3.37369 62.1576C3.00114 63.1713 1.60781 64.548 0.6195 63.773C0.587039 63.7476 0.213987 63.112 0.179029 63.0291C-0.211502 62.0927 0.125593 60.5095 0.352321 59.533C1.03051 56.6138 2.10272 53.7882 2.89976 50.8978C4.48136 45.1626 5.92463 39.3478 7.35391 33.5805C8.05707 30.7431 8.83514 27.9384 9.60521 25.1185C10.0362 23.5404 10.4502 21.4012 11.1344 19.9608C11.472 19.2496 12.0063 18.5316 12.7994 18.6225C13.4236 18.6942 14.0848 19.4601 14.2002 20.1453C14.2531 20.4614 14.1757 20.8023 14.2551 21.0992C14.4599 21.8612 15.2469 20.8452 15.5236 20.6319C17.9602 18.7529 20.3478 18.5988 22.6795 20.7498ZM18.3572 24.2854C15.3763 24.6167 14.0269 27.6974 12.8638 30.3813C11.3931 33.7735 10.2864 37.4039 9.25513 40.9779C9.1178 41.4537 8.84812 41.7286 8.951 42.2772C9.06886 42.9071 9.60072 42.8134 10.0127 42.6243C14.7351 40.4592 18.9155 35.8032 20.5376 30.3056C20.9161 29.0227 21.3811 27.9424 21.1613 26.5008C20.9416 25.0593 19.6402 24.1426 18.3572 24.2854Z" fill="currentColor"/>
    </svg>
  ),
  proteinocean: (props) => (
    <svg viewBox="0 0 291 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7.57856 42.0246V52.0403C7.57856 52.0834 7.32433 52.5727 7.26077 52.6158C5.87777 52.91 0.470323 53.554 0 51.9921L0.188129 19.0622C0.752517 18.1189 4.67781 18.0809 5.25745 19.1078C5.56761 19.6555 5.38202 20.9563 5.91844 20.723C6.34046 20.5404 7.37009 19.3994 8.24209 18.981C15.0173 15.7355 22.6187 19.7899 24.4797 26.8135C27.2813 37.3895 17.9409 46.7992 7.57601 42.0246H7.57856ZM11.331 24.5949C4.44646 25.5914 5.06678 37.7597 13.0241 36.677C19.7586 35.7617 19.3976 23.4285 11.331 24.5949Z" fill="currentColor"/>
      <path d="M168.95 18.0023C180.81 16.4936 187.954 30.2391 180.205 39.1163C173.28 47.0476 160.83 43.2848 158.707 33.1601C157.301 26.4585 161.933 18.8948 168.95 18.0023Z" fill="currentColor"/>
      <path d="M261.553 42.1514C261.291 43.016 256.99 42.9298 256.199 42.6737C255.057 42.3035 255.154 40.9546 255.195 39.9961C245.557 48.7009 233.303 39.1391 235.995 27.3105C238.016 18.4308 248.336 14.7263 255.195 20.9791C255.225 20.2159 254.963 18.8188 255.937 18.5551C257.17 18.2204 260.541 18.1798 261.553 19.0774V42.1514ZM252.309 35.0872C254.953 32.4502 254.44 26.7856 250.957 25.0817C244.817 22.077 240.271 30.2822 244.304 35.0137C246.322 37.3794 250.169 37.2222 252.309 35.0872Z" fill="currentColor"/>
      <path d="M290.474 42.4709C289.971 42.9729 284.057 43.0034 283.651 42.3618C282.926 41.2208 283.714 30.8705 283.302 28.3197C282.357 22.47 274.442 24.0269 273.367 28.0712C272.559 31.1114 273.558 37.5873 273.258 41.1473C273.141 42.552 273.026 42.6763 271.605 42.7954C270.631 42.8766 266.963 42.9577 266.386 42.3999C265.977 42.0069 265.91 41.1828 265.865 40.6376C265.323 34.1364 266.297 26.9124 265.865 20.33C265.842 19.8 266.053 18.9861 266.493 18.6742C267.029 18.2964 271.969 18.3066 272.683 18.6083C273.53 18.9658 273.186 20.761 273.253 21.4812C277.058 16.0093 286.165 16.9272 289.221 22.6678C291.214 26.4104 291.171 36.7708 290.802 41.1448C290.764 41.6088 290.764 42.0728 290.477 42.4683L290.474 42.4709Z" fill="currentColor"/>
      <path d="M147.913 28.4591C147.064 22.4396 138.445 24.1131 137.756 28.2183C137.144 31.8695 138.082 37.2349 137.754 41.1473C137.652 42.3466 137.627 42.6509 136.35 42.7853C135.555 42.869 131.647 42.9019 131.134 42.6585C130.648 42.4278 130.424 41.6468 130.366 41.1422C129.606 34.646 130.958 26.7273 130.356 20.0764C130.259 19.4603 130.717 18.6692 131.314 18.4967C131.876 18.337 135.944 18.3294 136.592 18.4486C137.06 18.5348 137.35 18.8441 137.609 19.2093L137.993 21.4837C139.986 17.3532 146.365 17.0793 150.028 18.9963C157.289 22.7946 154.904 34.9224 155.229 41.591C155.158 41.8978 155.008 42.192 154.767 42.3973C154.052 43.011 148.79 43.1377 147.91 42.1514V28.4591H147.913Z" fill="currentColor"/>
      <path d="M216.809 31.8822C217.043 35.607 220.233 37.3515 223.772 36.9255C225.516 36.7151 226.68 35.5512 228.323 35.2114C228.714 35.3129 231.615 38.5939 231.696 38.9591C231.971 40.204 228.165 42.1793 227.115 42.5419C216.506 46.1957 207.051 37.1918 210.273 26.5042C213.644 15.312 230.484 14.8531 233.219 26.2937C233.468 27.3384 233.992 31.8847 232.444 31.8847H216.809V31.8822ZM226.215 27.5717C225.941 22.148 217.846 22.2799 217.317 27.5717H226.215Z" fill="currentColor"/>
      <path d="M98.3382 31.8822C98.6 35.64 101.704 37.3591 105.302 36.9255C107.046 36.7151 108.21 35.5512 109.852 35.2114C111.609 37.3464 114.794 38.566 111.642 40.9673C104.524 46.3833 93.4163 42.4303 91.5452 33.7129C87.9174 16.8182 111.767 11.8915 114.789 26.7577C114.988 27.739 115.549 31.8797 113.976 31.8797H98.3407L98.3382 31.8822ZM107.745 27.5717C107.33 22.1024 99.4237 22.3027 98.8466 27.5717H107.745Z" fill="currentColor"/>
      <path d="M55.31 18.0023C74.6237 15.383 74.3466 46.1247 55.1041 43.1783C41.6782 41.1219 41.7723 19.8381 55.31 18.0023ZM56.0701 24.5898C49.3559 25.7435 50.5483 37.9879 58.4929 36.639C65.4791 35.4523 64.5614 23.1344 56.0701 24.5898Z" fill="currentColor"/>
      <path d="M196.664 18.0023C199.877 17.5687 203.418 18.2052 205.999 20.226C210.14 23.4665 207.087 24.3641 204.212 26.8262C203.589 26.8871 201.593 24.8408 200.355 24.5873C191.094 22.6982 190.631 38.2897 200.353 36.639C203.124 36.1699 203.505 32.8077 206.253 34.9325C207.359 35.787 209.014 36.9306 208.381 38.3049C207.362 40.5134 203.752 42.9045 201.364 43.229C191.188 44.6109 182.676 35.1759 187.021 25.3733C188.564 21.8894 192.848 18.5196 196.666 18.0048L196.664 18.0023Z" fill="currentColor"/>
      <path d="M73.9322 11.9777C73.9551 11.894 74.3263 11.5289 74.4458 11.4757C74.8983 11.2652 79.4846 11.2272 80.1558 11.3514C82.0879 11.7115 80.7913 16.3212 79.3981 17.1757L77.2398 18.446H88.0445C88.1157 18.446 88.7385 18.8391 88.8072 18.9532C88.9419 19.8229 89.3029 24.785 88.2987 24.785H81.4345L81.0532 25.1654V35.0542C81.0532 35.1734 81.4396 35.8859 81.5642 36.0659C83.1302 38.3556 86.4021 35.4878 87.1013 37.1385C87.3784 37.7978 87.7724 41.591 87.4292 42.1134C87.2055 42.4531 84.4649 43.158 83.9107 43.229C80.5981 43.6499 76.9169 42.9881 75.1576 39.9201C74.761 39.2304 73.9348 37.0067 73.9348 36.322V11.9777H73.9322Z" fill="currentColor"/>
      <path d="M36.3064 41.8978C36.0776 43.158 31.7023 42.9121 30.571 42.8005C29.7854 42.7244 29.3583 42.6256 28.9872 41.8446L29.1016 19.0089C29.4244 18.2508 34.5293 18.2432 35.3657 18.4942C36.8123 18.9278 36.075 21.9857 36.431 21.9984C36.9115 20.9259 38.0148 19.6149 39.0851 19.0647C40.0486 18.5703 43.1451 17.8045 43.4223 19.3335C43.5367 19.9623 43.4807 24.9879 43.2951 25.2922C43.1324 25.4215 42.6545 25.7993 42.5325 25.7993H36.3039V41.9004L36.3064 41.8978Z" fill="currentColor"/>
      <path d="M118.676 22.3737C118.946 21.4913 123.929 21.6282 124.89 21.7626C125.993 21.9173 125.973 22.3635 126.059 23.3752C126.542 29.0575 125.665 35.394 126.064 41.1498C126.151 41.8877 125.642 42.6382 124.897 42.7752C123.512 43.0338 119.823 43.0084 118.676 42.1489V22.3737Z" fill="currentColor"/>
      <path d="M119.622 11.146C120.405 10.9761 124.109 10.9483 124.897 11.0953C125.243 11.1587 125.635 11.4148 125.81 11.7064C126.237 12.4189 126.283 17.8806 125.543 18.3167C123.919 19.2726 120.731 17.698 119.693 16.2832C118.834 15.1117 117.738 11.5492 119.622 11.1435V11.146Z" fill="currentColor"/>
    </svg>
  ),
  fropie: (props) => (
    <svg viewBox="0 0 114 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M58.1101 53C57.9225 50.4632 61.2683 51.9895 61.2527 49.7183C60.424 42.7747 62.3002 33.4453 61.2058 26.7986C60.7159 23.8138 58.0059 25.5068 58.1101 23.0898L64.7339 21.5323L64.9268 25.0275C74.3596 15.8492 83.0784 27.5383 77.7991 37.4667C75.0683 42.608 70.0809 43.2331 64.7339 42.1236V50.4788L68.2152 51.4738L68.2413 53H58.1049H58.1101ZM68.137 25.1161C67.2094 25.3088 65.0831 26.7205 64.8173 27.6321C64.5515 28.5436 64.5411 36.5812 64.7444 37.6438C64.9059 38.4825 65.8544 39.269 66.5528 39.7274C76.5275 46.2126 79.4304 22.7825 68.137 25.1161Z" fill="currentColor"/>
      <path d="M3.54061 24.2514H0.0280664C0.0437009 23.5013 -0.232508 22.2668 0.66908 21.9751L3.54061 21.923C2.85269 16.0576 8.03813 10.0151 14.1668 11.1351C18.0129 11.8383 17.497 16.5108 14.3388 16.0211C12.1552 15.6826 12.5148 12.9478 10.7533 12.9478C7.62121 12.9478 7.05837 19.6518 7.43881 21.923H13.2861C13.2705 22.6783 13.5467 23.9024 12.6451 24.1993L7.43881 24.2514V40.1806L11.2901 40.6129L11.337 42.1184H0.80979L0.976558 40.5348L3.5354 39.592V24.2462L3.54061 24.2514Z" fill="currentColor"/>
      <path d="M42.804 21.6208C58.1779 19.0215 58.0789 41.0245 46.1758 42.4674C31.2501 44.2749 31.4898 23.5378 42.804 21.6208ZM43.987 23.1575C35.8675 24.1055 37.4101 41.087 45.0084 40.9255C53.5345 40.7432 52.1795 22.199 43.987 23.1575Z" fill="currentColor"/>
      <path d="M113.847 30.4658H100.594C100.209 36.8937 104.706 41.462 111.137 38.4512C111.59 38.2376 113.284 36.4509 113.456 37.6646C113.654 39.0607 109.73 41.9933 108.401 42.3319C95.5495 45.5824 92.3392 26.3923 103.059 22.2459C109.735 19.6622 114.973 23.2304 113.847 30.471V30.4658ZM109.949 28.9135C110.121 20.4801 101.402 21.8032 100.594 28.9135H109.949Z" fill="currentColor"/>
      <path d="M22.6407 21.5323V26.9705C24.9755 24.8036 26.6067 20.0477 30.7394 21.7875C31.8703 22.2616 31.9537 25.0171 31.0469 25.8245C29.1134 27.5591 27.3728 24.9442 26.7891 25.0484C26.5806 25.0848 24.3188 27.3456 24.0061 27.7414C21.4577 30.9189 23.0368 35.6227 22.6981 39.5399L26.0959 40.6234L26.1533 42.1184H16.6058L16.1993 41.337C16.5746 39.5607 18.7061 40.6442 19.0865 39.5399C18.8468 35.6227 19.5868 30.9658 19.149 27.1476C18.753 23.6888 16.1003 25.637 16.0221 23.0794L22.6511 21.5219L22.6407 21.5323Z" fill="currentColor"/>
      <path d="M89.6814 21.5323V39.5972C90.9894 40.8369 93.3763 39.5138 92.7978 42.1236H83.4432L83.61 40.54L86.1167 39.5451C85.7675 36.7895 87.0079 27.2049 85.5799 25.4182C84.6158 24.2097 82.6823 25.0536 83.0471 23.0898L89.6762 21.5323H89.6814Z" fill="currentColor"/>
      <path d="M89.1915 17.1515C86.3669 19.8081 83.0367 14.0105 86.5701 12.3905C89.0195 11.2705 91.3021 15.1669 89.1915 17.1515Z" fill="currentColor"/>
    </svg>
  ),
  zeki: (props) => (
    <svg viewBox="0 0 85 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M26.9692 11.38V17.7048L10.1771 34.4865H18.9972C19.0277 31.8132 20.4305 29.2007 22.0554 27.1548C29.539 17.725 45.3745 18.8516 50.117 30.2767L51.3942 34.1509V11.38H58.5182V27.4028L66.2358 19.813H76.1584L66.324 29.6797L77.685 38.8717V19.813H84.6393V41.4016H68.9497L58.3486 32.7999V41.4016H26.4604C27.4102 46.1663 34.1627 46.9674 38.1335 46.0094C39.7856 45.6114 40.8253 44.8457 41.9753 43.6515L48.3411 46.0432C45.9834 50.0522 41.0441 52.287 36.5289 52.8486C35.0057 53.0375 33.8829 53.0729 32.3597 52.8199C26.6656 51.8788 20.5645 47.0973 19.1651 41.3999H0.169618V34.7378L16.4529 18.4637H0.254427L0 18.2107V11.38H26.9692ZM44.7791 34.4865C42.5877 25.1191 27.0642 24.3432 25.6123 34.4865H44.7791Z" fill="currentColor"/>
      <path d="M83.8998 17.7284C83.2434 18.376 81.917 18.8297 80.9925 18.8129C75.9108 18.7218 75.7225 10.3461 81.8406 11.041C84.9616 11.3951 86.0064 15.6471 83.8998 17.7284Z" fill="currentColor"/>
    </svg>
  ),
  miniso: (props) => (
    <svg viewBox="0 0 52 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22.9909 41.5098C25.0029 41.4434 25.5492 43.9018 25.647 45.4451C25.7615 47.2444 25.8103 51.0977 23.8175 51.9334C21.4107 52.9409 20.5054 49.8378 20.3897 48.0634C20.2597 46.0792 20.1763 41.6034 22.9921 41.5098H22.9909Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M33.8656 0.17664L36.6147 3.01549V7.5197L36.7936 7.69749H51.8211L52 7.87529V63.8222L51.8211 64H0.298165C0.258807 64 0.116881 63.8435 0 63.8815V7.87529L0.178899 7.69749H15.3853L15.5296 2.92185L18.6902 0.017826L33.447 0L33.8656 0.17664ZM28.4688 48.9701C29.2524 44.4541 27.8856 39.183 22.2777 39.7354C15.73 40.3802 16.0556 52.0934 20.9932 53.7434C24.8955 55.0473 27.8081 52.7797 28.4688 48.9701ZM32.4237 45.9997C32.1387 45.8077 30.4772 45.7698 30.4081 46.0626C30.2376 52.116 36.9951 56.2302 42.2571 52.8355C44.4099 51.4475 46.1714 48.4984 45.686 45.9168H43.8815C43.6955 46.046 43.7849 46.7726 43.7372 47.0772C43.0848 51.1843 38.61 53.3143 35.026 51.0598C33.3611 50.012 32.3974 47.933 32.4249 46.0009L32.4237 45.9997ZM15.2171 40.1716C11.886 39.0254 5.49938 39.4793 6.37479 44.4493C6.89957 47.4304 10.5324 47.4778 12.3977 48.8943C13.1646 49.4763 13.3614 50.5359 12.6315 51.2471C11.3911 52.4537 8.19233 51.8481 6.68123 51.3183L6.33776 53.4376C9.17033 54.3799 14.6256 54.6727 15.7515 51.1475C16.4754 48.8801 15.3209 47.3083 13.3947 46.2463C12.2509 45.6157 8.39154 44.6532 9.156 42.8148C9.85013 41.1459 13.5128 41.7421 14.8987 42.0645V42.0622L15.2171 40.1716ZM33.4541 42.5458C35.5508 41.1957 33.1023 38.0724 31.2882 39.8598C29.9823 41.1459 31.6306 43.7204 33.4541 42.5458ZM38.6422 39.8788V41.7753L38.8211 41.9531H45.3807L45.5596 41.7753V39.8196C45.4428 39.8575 45.3008 39.701 45.2615 39.701H38.8211L38.6422 39.8788ZM29.2202 33.8337L29.3991 34.0115H31.3073L31.4862 33.8337V25.8328L38.4383 33.8573C38.703 34.0695 39.5808 34.1312 39.8349 33.8337V20.4989H37.6881V28.4405C37.4245 28.2746 37.1824 28.0173 36.9761 27.785C34.8854 25.4405 33.014 22.8695 30.9495 20.4989H29.2202V33.8337ZM23.6147 33.8337L23.7936 34.0115H26.656L26.8349 33.8337V20.4989H23.6147V33.8337ZM6.3211 20.6767V33.893H8.46789V26.544L8.73507 26.6969C9.31478 27.5553 11.9493 33.6168 12.4025 33.8349C12.6912 33.9735 13.96 33.9628 14.1986 33.7222C15.5284 31.6207 16.5303 29.1244 17.866 27.0548C17.9614 26.9067 18.0605 26.7123 18.2477 26.6637V33.7163L18.4266 33.8941H21.0505L21.2294 33.7163V20.6186L19.0849 20.5616L18.844 20.7964L13.7764 30.2185L8.71353 20.7051C8.65625 20.6304 8.48931 20.5143 8.40942 20.5012L8.40826 20.4989H6.5L6.3211 20.6767ZM42.3395 20.6767V33.893H45.5596V20.6767L45.3807 20.4989H42.5183L42.3395 20.6767ZM18.7248 7.69749H33.5138V3.07476H18.7248V7.69749Z" fill="currentColor"/>
    </svg>
  ),
  petzzshop: (props) => (
     <svg viewBox="0 0 187 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.6974 11.3379C21.5185 10.8909 24.8454 10.8909 27.7 11.317C36.6398 12.7329 44.1712 19.9883 46.3488 28.7055C48.497 37.3058 45.0698 47.3095 37.9188 52.61C37.8017 52.6978 36.9951 53.3201 37.1915 52.7855C37.3336 52.3928 37.902 51.9 37.9689 51.5575C38.1862 50.4005 37.1581 48.3914 37.0244 47.2093L35.4738 43.2579L35.2982 43.1284C35.0391 43.0491 34.3119 43.4876 34.0695 43.6672C33.3673 44.1977 33.0079 44.9955 32.3099 45.5093C31.754 45.5218 32.8533 43.7132 32.9912 43.5419C33.9107 42.4184 36.2303 41.3783 37.5886 40.9815C37.9856 40.8645 39.4526 40.852 39.2604 40.1837C39.2102 40.0041 38.9302 39.9498 38.9762 39.7117C39.9542 40.121 40.8736 40.1837 41.7806 39.5572C42.2445 39.2355 43.0762 37.8237 43.3061 37.2807C43.9456 35.7687 42.8714 36.1237 41.952 35.4972C41.0325 34.8706 40.8945 33.7721 40.2802 32.9618C39.4317 31.8424 37.7641 31.1281 36.6984 30.2301C36.2679 30.0296 35.8708 30.7814 35.5574 30.3721C35.2105 29.9126 35.6535 28.2962 35.666 27.7156C35.5239 27.7156 35.3735 27.6905 35.2355 27.7365C35.0391 27.7991 33.9984 28.4674 33.7309 28.6345C27.5202 32.4731 25.3344 39.7744 24.348 46.5786C24.277 47.0589 24.4985 47.6479 24.0889 48.0112C23.951 47.9444 23.8841 47.9361 23.8047 47.794C23.5539 47.3471 23.3659 46.0648 23.2029 45.5009C22.6721 43.6714 22.0911 41.8252 21.6565 39.9414C21.5311 39.3984 21.0588 36.2073 20.7704 36.1195C20.0474 36.249 19.7381 37.2724 19.0234 37.4144C18.852 37.2766 20.6701 34.7036 20.8874 34.4237C21.1884 34.0353 21.5561 33.58 21.878 33.2124C22.158 32.8991 23.4286 31.5667 23.7002 31.4247C24.1892 31.1699 24.8078 31.7505 25.3887 31.8131C25.9697 31.8758 27.5579 31.88 28.0343 31.6544C30.1324 30.6478 30.7677 27.4733 30.8555 25.3681C30.8764 24.917 30.9349 23.5011 30.6966 23.217C30.542 23.0332 29.6852 22.6949 29.7479 23.0625C29.8022 23.3966 30.2871 23.4259 30.4041 23.806C30.5796 24.3573 30.2787 25.6605 29.61 25.6062C29.1879 25.5728 27.5788 24.6831 27.537 24.2529L27.5871 24.0065C27.6791 23.8269 28.866 23.3883 29.1461 23.359L29.2464 23.0082C29.0249 22.7952 26.6426 23.4635 26.187 23.5052C24.7618 23.6431 23.2196 23.4802 21.8696 23.0124C20.2605 22.4527 17.7779 20.7652 16.2608 20.6065C12.6831 20.2389 9.70318 20.8654 7.54657 23.9104C4.53735 28.1583 4.82574 37.8154 5.38579 42.8528C5.59894 44.7741 5.95837 47.5894 6.71904 49.3228C7.01578 49.9953 7.50478 50.6218 7.79316 51.3027C7.61344 51.4865 6.0545 49.8073 5.8915 49.6235C3.08708 46.4366 0.871962 42.08 0.274298 37.8488C-0.0851365 35.5055 -0.0976749 32.8741 0.274298 30.4515C2.02132 20.9824 9.17239 13.3344 18.6974 11.3379Z" fill="currentColor"/>
      <path d="M184.906 26.4458C185.671 27.16 186.236 28.2335 186.595 29.2151C187.222 32.0011 187.138 35.0586 186.223 37.7402C185.32 40.1753 183.276 43.0449 180.468 43.2997C179.594 43.379 178.295 43.1159 177.576 42.6105C177.12 42.293 176.903 41.6999 176.322 41.8127C176.376 43.5503 176.159 45.2545 175.921 46.9628C175.829 47.6186 176.113 48.2076 175.273 48.5167C173.551 49.1474 170.721 48.9176 170.705 46.5619C170.696 45.1668 170.985 43.3206 171.106 41.8628C171.361 38.7635 171.833 35.539 172.004 32.4606C172.025 32.093 172.071 30.4222 171.908 30.2593C171.591 29.9377 170.654 30.2927 170.395 29.9419C169.986 29.3905 170.078 27.749 170.383 27.1392C171.436 25.0423 175.812 24.9463 177.007 27.1726C177.112 27.3689 177.254 28.1876 177.379 28.2168C177.843 28.3171 178.056 27.632 178.324 27.3605C180.083 25.5478 182.8 24.4826 184.902 26.4458H184.906ZM179.803 30.3345C178.926 30.5099 177.998 31.9301 177.651 32.6903C177.154 33.7721 176.911 35.564 176.823 36.767C176.761 37.6608 177.246 38.0827 178.098 38.2957C181.383 39.106 181.784 35.0252 181.638 32.7613C181.575 31.763 181.153 30.0714 179.803 30.3387V30.3345Z" fill="currentColor"/>
      <path d="M55.6146 41.8127C55.5728 42.765 55.5937 43.8176 55.5143 44.7616C55.4642 45.3673 55.2886 45.9687 55.2176 46.566C55.1214 47.3805 55.5269 48.0739 54.5447 48.4916C53.0777 49.1181 50.687 49.0221 50.0977 47.2678C49.7383 46.1901 50.3025 43.851 50.4028 42.6606C50.6035 40.238 50.7038 37.7903 50.9086 35.3635C50.988 34.4279 51.5647 31.0571 51.2596 30.4097C51.0381 29.9502 50.2315 30.1967 49.8762 30.0922C49.5544 29.9962 49.2953 28.693 49.3036 28.3672C49.3705 25.6898 53.1362 24.9463 55.0922 25.9905C55.8654 26.404 56.438 27.3021 56.6135 28.1542C56.647 28.2502 56.7932 28.2335 56.8727 28.2168C57.0524 28.175 57.7169 27.2561 57.976 27.0097C61.0981 24.019 64.8805 25.5185 65.9421 29.4657C67.0664 33.6552 65.7875 40.0793 61.9298 42.552C60.3959 43.5378 58.1808 43.5921 56.6929 42.4935C56.2708 42.1844 56.2081 41.6832 55.623 41.8085L55.6146 41.8127ZM59.1003 30.3345C57.9133 30.5684 56.7097 32.8198 56.4631 33.9058C56.346 34.4237 56.3669 35.0294 56.3084 35.5515C56.2332 36.2198 55.7902 37.3016 56.4254 37.853C57.2613 38.5756 58.837 38.5296 59.6729 37.807C60.9811 36.6751 61.2277 33.1665 60.7596 31.6252C60.5631 30.9819 59.8108 30.1883 59.0961 30.3303L59.1003 30.3345Z" fill="currentColor"/>
      <path d="M143.638 28.5134L144.023 28.4967C144.6 27.419 146.058 26.0114 147.245 25.5645C150.677 24.2696 152.695 26.546 152.662 29.8667C152.641 32.2434 152.198 34.9291 152.052 37.3643C152.022 37.8571 151.713 38.8638 151.964 39.2564C152.311 39.7994 153.289 39.1102 153.364 40.1628C153.552 42.7817 149.139 43.7215 147.442 42.3682C145.929 41.1653 146.706 38.7134 146.84 37.0677C146.903 36.32 146.877 35.5055 146.94 34.7704C147.032 33.7011 147.346 32.5357 147.325 31.4665C147.308 30.5141 145.983 30.4891 145.306 30.6394C143.76 30.9819 143.074 33.8557 142.932 35.1714C142.736 36.9675 142.627 38.7761 142.431 40.5721C142.376 41.0734 142.568 42.1093 142.234 42.4768C142.059 42.6731 140.207 43.0407 139.877 43.024C139.212 42.9822 138.159 42.6982 137.779 42.1134C137.026 40.9648 137.62 39.7702 137.72 38.5714C138.176 33.0203 138.464 27.419 139.028 21.8721C139.066 21.5045 139.308 19.6374 139.4 19.4411C139.505 19.2239 140.441 18.8856 140.704 18.8438C141.026 18.7937 141.862 18.731 142.184 18.7394C143.346 18.7686 144.282 19.3158 144.349 20.5689L143.638 28.5217V28.5134Z" fill="currentColor"/>
      <path d="M161.56 25.3389C168.527 24.6748 170.262 31.2033 168.736 36.7962C167.704 40.5847 164.465 43.6505 160.331 43.3122C151.019 42.5478 153.117 26.1451 161.56 25.3389ZM161.765 29.733C160.666 29.85 159.926 31.337 159.708 32.2893C159.433 33.5006 159.299 36.4746 159.729 37.6107C160.327 39.1854 162.191 39.3608 163.106 37.9825C164.076 36.5205 164.302 32.2851 163.528 30.723C163.215 30.0922 162.463 29.662 161.761 29.733H161.765Z" fill="currentColor"/>
      <path d="M72.7755 37.0259C72.4454 37.5564 73.5905 38.396 74.0377 38.4879C74.6897 38.6257 76.0271 38.5798 76.7084 38.4962C77.9915 38.3458 79.2035 37.8321 80.4156 37.4144C81.6318 38.8972 81.1219 40.7685 79.6131 41.7918C75.7931 44.3815 69.9418 43.8218 68.0026 39.2063C65.3862 32.9785 69.5114 24.5578 76.909 25.222C81.9411 25.6731 83.6965 31.5124 79.6299 34.6117C78.3802 35.564 75.8433 36.4453 74.2885 36.7837C74.0294 36.8422 72.8382 36.9257 72.7755 37.0259ZM75.3417 29.637C74.021 29.8458 72.6669 31.88 72.4036 33.108C72.3158 33.5131 72.2531 33.8682 72.763 33.7721C73.7452 33.5925 75.7889 32.8741 76.5621 32.2559C77.9706 31.1281 77.2267 29.3446 75.3417 29.637Z" fill="currentColor"/>
      <path d="M108.301 38.5129C109.003 38.7092 108.84 40.5805 108.723 41.136C108.464 42.3849 107.737 42.8778 106.483 43.0031C102.976 43.354 98.939 42.7734 95.3781 43.0031C94.0114 42.811 94.4001 40.5847 94.8306 39.6741C95.2611 38.7635 96.1011 38.0409 96.7197 37.2598C98.5545 34.9458 100.398 32.6694 102.241 30.3637L101.986 30.1131C100.431 29.9795 98.5921 30.2886 97.0708 30.1131C96.5567 30.0547 96.3937 29.7372 96.331 29.2527C96.1137 27.6487 96.5149 25.9028 98.2786 25.5102C101.668 25.7441 105.467 25.2011 108.811 25.506C109.463 25.5645 109.551 25.8568 109.634 26.4876C109.835 28.0247 108.915 29.0355 108.054 30.1591C105.994 32.8448 103.699 35.3677 101.593 38.0159L101.539 38.5129H108.305H108.301Z" fill="currentColor"/>
      <path d="M111.707 30.1131C110.738 28.6303 111.214 26.2745 112.957 25.5561L124.187 25.5645C124.534 25.719 124.664 26.663 124.643 27.018C124.563 28.551 123.205 29.8918 122.281 31.0613C120.434 33.4004 118.44 35.6392 116.564 37.9574L116.468 38.5129H123.234C123.798 38.5129 123.807 40.3257 123.773 40.7518C123.627 42.5019 122.616 42.9238 121.036 43.0198C117.605 43.2328 113.956 42.8486 110.499 43.0198C109.872 43.0449 109.643 42.6773 109.48 42.1385C108.97 40.451 110.111 39.1812 111.059 37.9699C112.882 35.6267 115.264 33.1999 116.915 30.8065C117.07 30.5809 117.228 30.418 117.174 30.1173H111.711L111.707 30.1131Z" fill="currentColor"/>
      <path d="M93.7648 25.5102C93.9362 25.5478 94.2162 25.9111 94.2872 26.0866C94.7303 27.1433 94.3207 28.6637 93.4054 29.3529C92.3271 30.1674 91.2279 29.6035 90.0451 29.9043C89.7651 31.0446 89.8904 32.2099 89.7985 33.3586C89.7316 34.2316 89.5352 35.1797 89.5018 36.0611C89.485 36.5164 89.3931 37.7068 89.7316 37.9783C90.183 38.3417 92.3981 37.9198 93.117 38.1537C93.7523 38.3584 93.6436 40.0835 93.4848 40.6306C93.1337 41.8461 91.5873 42.5645 90.4296 42.7817C86.7349 43.4751 84.0684 42.2805 84.2858 38.1537C84.4195 35.6601 84.9461 32.9367 85.0924 30.4556C85.105 30.2259 85.1509 29.9586 84.942 29.8082H83.337C82.3549 29.8082 82.5388 27.5318 82.7352 26.9094C83.149 25.5979 84.244 25.4224 85.4936 25.5102C85.5647 24.7458 85.4895 22.7158 85.8531 22.1185C86.2167 21.5212 88.4861 21.3165 89.159 21.5045C90.4129 21.8554 90.6804 22.6156 90.5926 23.8477C90.5759 24.1067 90.1579 25.5102 90.4547 25.5102H93.7648Z" fill="currentColor"/>
      <path d="M134.786 41.2822C132.613 43.6881 127.673 44.0724 125.353 41.7041C124.191 40.5178 124.2 38.4043 125.362 37.2264C125.688 37.1178 126.335 37.7235 126.666 37.8989C127.907 38.5463 129.875 39.0309 131.234 38.492C131.698 38.3083 131.902 37.736 131.505 37.3726C130.749 36.6834 129.085 36.1279 128.166 35.5014C123.489 32.3185 125.951 25.5853 131.355 25.2136C133.762 25.0465 136.517 25.9487 136.818 28.6804C136.863 29.0981 136.533 30.4849 136.12 30.6728C135.84 30.7981 134.318 30.2384 133.838 30.1465C133.278 30.0379 132.203 29.875 131.656 29.9168C130.569 29.9962 129.855 30.9276 130.912 31.6669C132.479 32.7613 133.975 32.8991 135.259 34.6284C136.692 36.5581 136.383 39.5196 134.786 41.2906V41.2822Z" fill="currentColor"/>
      <path d="M10.8567 23.7141C10.9863 23.6723 11.0657 23.7141 11.1535 23.8143C11.4544 24.1777 11.2287 25.4392 11.3123 25.9571C11.5171 27.2436 12.8211 28.4925 13.331 29.6453C13.6319 30.3303 13.8743 30.9067 13.3519 31.5082C12.4157 32.5859 10.1629 31.692 9.25179 30.9151C8.54964 30.3136 7.60508 28.6303 7.41701 27.7448C7.36685 27.5026 7.28327 26.6755 7.74301 26.8217C7.83496 26.851 8.36157 28.3254 8.49113 28.5718C8.91326 29.3822 9.79095 30.6561 10.7564 30.8107C12.7375 31.1281 11.935 29.1441 11.5087 28.0581C11.003 26.7716 10.4429 25.9279 10.6018 24.3657C10.6185 24.207 10.6979 23.7684 10.8525 23.7183L10.8567 23.7141Z" fill="currentColor"/>
      <path d="M19.5918 25.1802C19.3494 25.4559 17.9869 26.2996 17.6442 26.3873C17.0465 26.5419 15.9598 26.3998 16.616 25.6564C17.5104 25.7733 18.2293 25.4976 18.9691 25.0089C19.2616 24.8168 19.316 24.3782 19.7088 24.8711C19.7088 24.988 19.6628 25.0925 19.5876 25.1802H19.5918Z" fill="currentColor"/>
      <path d="M39.344 34.6326C39.5362 34.6326 39.7243 34.8623 39.67 35.0503C39.5279 35.5222 37.505 35.9399 37.1706 35.3635C37.4841 34.9291 38.0776 35.0962 38.4997 34.9918C38.7463 34.9333 39.0974 34.6367 39.344 34.6326Z" fill="currentColor"/>
      <path d="M18.3212 38.8137C18.501 39.4402 18.0872 39.5112 17.9326 39.7702C17.7779 40.0291 17.9117 40.38 17.6233 40.5137C17.4059 40.0835 17.7403 39.9498 17.874 39.6156C17.9785 39.3567 17.8824 38.8178 18.3212 38.8137Z" fill="currentColor"/>
    </svg>
  ),
  wunder: (props) => (
    <svg viewBox="0 0 214 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.40083 11.0044L11.7169 33.5538L15.4752 11.0044H21.2231L24.7648 33.1074C25.6446 32.9261 25.5164 32.1967 25.6402 31.5557C26.9445 24.8011 27.3204 17.7502 28.7397 11.0044H37.1405L30.0661 53H21.6653L18.3492 34.4291L15.0331 53H7.07438L0 12.3306V11.0044H8.40083Z" fill="currentColor"/>
      <path d="M94.1777 11.0044L101.031 31.3435L101.252 11.0044H109.653L109.211 53H101.252L93.9566 32.6609L93.2934 53H85.7769L85.3347 11.0044H94.1777Z" fill="currentColor"/>
      <path d="M137.95 11.0044C141.824 12.2864 144.773 14.174 145.883 18.3249C146.992 22.4758 146.798 38.4828 146.347 43.0493C145.909 47.4654 143.65 51.1036 139.197 52.2573C137.818 52.6154 136.376 52.2573 135.298 53H123.802L123.36 11.0044H137.95ZM131.76 45.485C134.347 45.706 136.987 45.233 137.858 42.5188C137.575 36.0205 138.556 28.6514 137.973 22.2548C137.61 18.3072 135.187 18.3426 131.76 18.5194V45.485Z" fill="currentColor"/>
      <path d="M204.273 11.0044C214.959 13.0202 215.238 28.1254 209.229 34.9994L214 51.6738V53H206.041L201.646 36.3963L198.967 36.1973V52.9956H191.008L190.566 11H204.273V11.0044ZM198.967 18.5194V29.5709L203.981 29.1686C206.285 24.3988 206.236 16.8661 198.967 18.5194Z" fill="currentColor"/>
      <path d="M57.4793 11.0044L57.4926 42.5984C58.8146 45.9624 62.8559 45.7547 63.6473 42.143L63.6738 11.0044H72.5168C72.0968 20.0799 73.0695 29.6328 72.5345 38.6508C72.11 45.8077 70.5979 50.6527 63.2317 53H57.9259C50.7985 50.6836 49.0476 46.1348 48.6231 39.0928C48.0748 29.9334 49.0697 20.2169 48.6408 11.0044H57.4838H57.4793Z" fill="currentColor"/>
      <path d="M177.744 11.0044V19.4035H167.574V26.9185H174.649V35.3176H167.574V44.1588H177.744L177.302 53H159.174V11.0044H177.744Z" fill="currentColor"/>
    </svg>
  ),
};

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

/* --- PAGE 1: HOME PAGE --- */
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
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-base sm:text-lg transition-all shadow-lg flex items-center justify-center gap-2 font-inter"
              >
                MDZN Connect'i Keşfet <ArrowRight size={18} />
              </button>
            </div>
            
            {/* 
              ============================================
              📷 IMAGE PLACEHOLDER: Platform Hero Image
              ============================================
              To add your own image:
              1. Place your image in: public/images/ folder
              2. Replace this entire div with:
                 <img 
                   src="/images/your-platform-screenshot.png" 
                   alt="MDZN Connect Platform" 
                   className="mt-10 sm:mt-12 md:mt-16 mx-auto max-w-5xl rounded-xl sm:rounded-2xl border border-neutral-200 shadow-xl w-full"
                 />
              
              Recommended: 1920x1080px or 16:9 aspect ratio PNG/JPG
              ============================================
            */}
            <div className="mt-10 sm:mt-12 md:mt-16 mx-auto max-w-5xl bg-neutral-100 rounded-xl sm:rounded-2xl border border-neutral-200 aspect-[16/9] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-neutral-50/50 to-white/20"></div>
               <div className="text-neutral-400 font-medium flex flex-col items-center">
                  <Layers size={32} className="sm:w-12 sm:h-12 mb-2 sm:mb-4 text-neutral-300 group-hover:text-neutral-200 transition-colors" />
                  <span className="text-sm sm:text-base">Platform Arayüz Görseli</span>
               </div>
            </div>
          </div>
        </div>
      </header>

      <LogoStrip />

      {/* Ne Yapıyoruz */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
             {/* 
               ============================================
               📷 IMAGE PLACEHOLDER: Ecosystem Visual
               ============================================
               To add your own image:
               1. Place your image in: public/images/ folder
               2. Replace this entire div with:
                  <img 
                    src="/images/ecosystem-visual.png" 
                    alt="MDZN Ekosistem" 
                    className="bg-neutral-100 border border-neutral-200 rounded-xl sm:rounded-2xl aspect-square object-cover order-2 lg:order-1"
                  />
               
               Recommended: 800x800px square image PNG/JPG
               ============================================
             */}
             <div className="bg-neutral-100 border border-neutral-200 rounded-xl sm:rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden order-2 lg:order-1">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:20px_20px] opacity-50"></div>
                <div className="w-3/4 h-3/4 bg-white shadow-xl rounded-lg sm:rounded-xl border border-neutral-100 relative z-10 flex items-center justify-center">
                    <span className="text-neutral-400 text-xs sm:text-sm">Ekosistem Görseli</span>
                </div>
             </div>

             <div className="order-1 lg:order-2">
               <div className="inline-block bg-neutral-900 text-white px-2.5 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-bold tracking-wide mb-4 sm:mb-6 font-heading">
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
                   { title: "Çok segmentli iş akışlarında bütüncül yaklaşım", icon: <Layers size={18}/> },
                   { title: "Birbirine bağlı veriler ve paylaşımlı performans katmanları", icon: <RefreshCw size={18}/> },
                   { title: "Birbiriyle konuşan ürün ekosistemi", icon: <MessageSquare size={18}/> }
                 ].map((item,i) => (
                   <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-neutral-200 rounded-lg bg-neutral-50/50">
                      <div className="p-2 sm:p-2.5 bg-white border border-neutral-200 text-neutral-700 rounded-lg shadow-sm flex-shrink-0">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-neutral-900 text-xs sm:text-sm font-heading">{item.title}</h4>
                   </div>
                 ))}
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
         <div className="max-w-7xl mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-neutral-50 text-neutral-700 text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded mb-6 sm:mb-8 font-heading">
                 Influencerlar İçin
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4 sm:mb-6">Potansiyelini Gelire Dönüştür</h2>
              <p className="text-neutral-600 text-base sm:text-lg mb-8 sm:mb-12 px-2 sm:px-0">
                 İş birliklerinizi yönetin, kazançlarınızı takip edin ve performansınızı tek panelden görün. Hızlı başvuru, net kazanç.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-8 sm:gap-y-4 max-w-2xl mx-auto mb-8 sm:mb-12 text-left">
                 <div className="flex items-center gap-3">
                    <div className="p-1.5 sm:p-2 bg-neutral-100 rounded-full text-neutral-600"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
                    <span className="font-medium text-neutral-700 text-sm sm:text-base">Şeffaf Ödeme</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-1.5 sm:p-2 bg-neutral-100 rounded-full text-neutral-600"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
                    <span className="font-medium text-neutral-700 text-sm sm:text-base">Influencer Paneli</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-1.5 sm:p-2 bg-neutral-100 rounded-full text-neutral-600"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
                    <span className="font-medium text-neutral-700 text-sm sm:text-base">Kazanç Takibi</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-1.5 sm:p-2 bg-neutral-100 rounded-full text-neutral-600"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
                    <span className="font-medium text-neutral-700 text-sm sm:text-base">Hızlı Başvuru Akışı</span>
                 </div>
              </div>

              <button onClick={() => onOpenModal('influencer')} className="bg-neutral-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-neutral-800 transition-colors mb-10 sm:mb-16 shadow-lg shadow-neutral-200 font-inter text-sm sm:text-base">
                 Hemen Başvur
              </button>

              {/* 
                ============================================
                📷 IMAGE PLACEHOLDER: Influencer Panel
                ============================================
                To add your own image:
                1. Place your image in: public/images/ folder
                2. Replace this entire div with:
                   <img 
                     src="/images/influencer-panel.png" 
                     alt="Influencer Paneli" 
                     className="w-full max-w-3xl mx-auto rounded-xl sm:rounded-2xl border border-neutral-200 shadow-xl sm:shadow-2xl"
                   />
                
                Recommended: 1280x720px or 16:9 aspect ratio PNG/JPG
                ============================================
              */}
              <div className="w-full max-w-3xl mx-auto aspect-video bg-neutral-50 border border-neutral-200 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl sm:shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white to-neutral-50"></div>
                 <div className="relative z-10 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-3 sm:mb-4 text-neutral-500">
                      <Smartphone size={24} className="sm:w-8 sm:h-8" />
                    </div>
                    <span className="text-neutral-400 font-medium text-sm sm:text-base">Influencer Paneli Arayüzü</span>
                 </div>
                 <div className="absolute -top-10 -right-10 w-24 sm:w-40 h-24 sm:h-40 bg-neutral-500/5 rounded-full blur-3xl"></div>
                 <div className="absolute -bottom-10 -left-10 w-24 sm:w-40 h-24 sm:h-40 bg-neutral-500/5 rounded-full blur-3xl"></div>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
};

/* --- PAGE 2: MDZN CONNECT PAGE --- */
const ConnectPage = ({ onOpenModal }) => {
  return (
    <div className="pt-16 sm:pt-20">
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24">
             <div className="inline-block bg-neutral-500 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded uppercase tracking-wider mb-4 sm:mb-6 font-heading">
               MDZN Connect
             </div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
               Tüm iş birliklerini tek performans akışında yöneten, şeffaf ve optimize edilebilir platform.
             </h2>
             <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
               Affiliate, influencer ve kampanya akışlarını tek bir performans hattında birleştirerek tam görünürlük ve ölçülebilir gelir etkisi sağlar.
             </p>

             <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                <button onClick={() => onOpenModal('demo')} className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded font-medium transition-colors font-inter text-sm sm:text-base">
                  Demo Talep Et
                </button>
                <button onClick={() => onOpenModal('influencer')} className="bg-white border border-neutral-300 text-neutral-700 hover:border-neutral-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded font-medium transition-colors font-inter text-sm sm:text-base">
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
                 2. Add an "image" field to each object below:
                    image: "/images/dashboard-screenshot.png"
                 3. Then in the Image Side div below, replace the placeholder
                    with: <img src={feat.image} alt={feat.title} className="..." />
                 
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
                   // image: "/images/dashboard-screenshot.png"  // Uncomment and add your image
                 },
                 { 
                   icon: <Layers className="w-6 h-6"/>, 
                   title: "Bileşik Kampanya", 
                   subtitle: "Farklı kanalları ve partnerleri tek bir kampanya yapısında birleştirin. Karmaşık kurguları tek merkezden yönetmenin rahatlığını yaşayın.", 
                   label: "Kampanya Akış Ekranı",
                   bullets: ["Çoklu kanal yönetimi", "Otomatik kural setleri"],
                   // image: "/images/campaign-flow.png"  // Uncomment and add your image
                 },
                 { 
                   icon: <PieChart className="w-6 h-6"/>, 
                   title: "Şeffaf Kazanç", 
                   subtitle: "Doğrulanabilir ve şeffaf gelir verileriyle hem markalar hem de partnerler için güvenilir bir ekosistem oluşturun.", 
                   label: "Kazanç Raporu Ekranı",
                   bullets: ["Net hakediş raporları", "Otomatik ödeme planı"],
                   // image: "/images/earnings-report.png"  // Uncomment and add your image
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
                      To use your own image, replace this div with:
                      <div className="flex-1 w-full px-4 sm:px-0">
                        <img 
                          src={feat.image} 
                          alt={feat.title} 
                          className="w-full aspect-[4/3] object-cover rounded-2xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-500"
                        />
                      </div>
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
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 sm:mb-8">Nasıl Çözüyoruz?</h3>
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {["Affiliate + influencer + kampanya tek panelde", "Gelir, komisyon ve dönüşüm gerçek zamanlı takip", "Otomasyon kurallarıyla operasyonel hız", "Partner katkısının şeffaf görünürlüğü", "Tüm ekipler için senkronize çalışma"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-neutral-300 text-sm sm:text-base">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neutral-500 rounded-full flex-shrink-0"></div>
                        {item}
                      </li>
                  ))}
                </ul>
                <button onClick={() => onOpenModal('demo')} className="bg-white text-neutral-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm hover:bg-neutral-50 transition-colors font-inter">
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

/* --- PAGE 3: SOLUTIONS PAGE (Segments + How it Works) --- */
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
              <div className="inline-block bg-white border border-neutral-200 text-neutral-800 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded mb-3 sm:mb-4 font-heading font-bold uppercase tracking-wider shadow-sm">
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
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-xl font-inter flex items-center gap-2"
              >
                {currentData.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Right Visual (Enhanced Placeholder) */}
            <div className="relative aspect-square lg:aspect-[4/3] bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden flex flex-col group">
               {/* Header Bar */}
               <div className="h-12 bg-neutral-50 border-b border-neutral-100 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-auto w-24 h-2 bg-neutral-200 rounded-full"></div>
               </div>
               
               {/* Body Content Abstract */}
               <div className="flex-1 p-6 relative">
                  <div className="flex gap-6 h-full">
                     {/* Sidebar Abstract */}
                     <div className="w-16 h-full hidden sm:flex flex-col gap-4 border-r border-neutral-100 pr-4">
                        <div className="w-8 h-8 rounded-lg bg-neutral-100"></div>
                        <div className="w-8 h-8 rounded-lg bg-neutral-50"></div>
                        <div className="w-8 h-8 rounded-lg bg-neutral-50"></div>
                        <div className="mt-auto w-8 h-8 rounded-full bg-neutral-200"></div>
                     </div>
                     
                     {/* Main Area Abstract */}
                     <div className="flex-1 flex flex-col gap-4">
                        <div className="flex justify-between items-end">
                           <div className="w-32 h-6 bg-neutral-200 rounded"></div>
                           <div className="w-24 h-8 bg-neutral-900 rounded"></div>
                        </div>
                        
                        {/* Chart Area */}
                        <div className="h-48 bg-neutral-50 rounded-xl border border-neutral-100 relative overflow-hidden">
                           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-100 to-transparent"></div>
                           <svg className="absolute bottom-0 left-0 right-0 w-full h-24 text-neutral-300" preserveAspectRatio="none">
                              <path d="M0,80 C100,50 200,90 300,40 C400,10 500,60 600,20 L600,100 L0,100 Z" fill="currentColor" opacity="0.5" />
                           </svg>
                        </div>

                        {/* Grid Rows */}
                        <div className="space-y-2 mt-2">
                           <div className="h-10 w-full bg-white border border-neutral-100 rounded flex items-center px-3 gap-3 shadow-sm">
                              <div className="w-6 h-6 rounded-full bg-neutral-100"></div>
                              <div className="w-1/3 h-2 bg-neutral-100 rounded"></div>
                              <div className="ml-auto w-16 h-2 bg-neutral-100 rounded"></div>
                           </div>
                           <div className="h-10 w-full bg-white border border-neutral-100 rounded flex items-center px-3 gap-3 shadow-sm opacity-80">
                              <div className="w-6 h-6 rounded-full bg-neutral-100"></div>
                              <div className="w-1/3 h-2 bg-neutral-100 rounded"></div>
                              <div className="ml-auto w-16 h-2 bg-neutral-100 rounded"></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 right-6 bg-white border border-neutral-200 shadow-lg px-4 py-3 rounded-lg flex items-center gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                     <div className="p-2 bg-green-50 text-green-600 rounded-md">
                        <TrendingUp size={20} />
                     </div>
                     <div>
                        <div className="text-xs text-neutral-500 font-bold">ROI ARTIŞI</div>
                        <div className="text-lg font-bold text-neutral-900">%245</div>
                     </div>
                  </div>
               </div>
            </div>
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
               {currentData.capabilities.map((cap, idx) => (
                  <div key={idx} className="bg-neutral-50 rounded-xl border border-neutral-100 overflow-hidden hover:border-neutral-300 transition-all duration-300 group">
                     {/* Mini Screen Preview */}
                     <div className="aspect-[16/9] bg-neutral-200 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors"></div>
                        <span className="font-heading font-bold text-neutral-400 text-sm">{cap.visual}</span>
                        {/* Decorative overlay */}
                        <div className="absolute inset-0 border-b-4 border-neutral-900/10"></div>
                     </div>
                     
                     <div className="p-6">
                        <div className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-900 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                           {cap.icon}
                        </div>
                        <h4 className="text-lg font-bold text-neutral-900 mb-2">{cap.title}</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                           {cap.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

/* --- MAIN APP ORCHESTRATOR --- */
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
              <button onClick={() => setActiveModal('demo')} className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 rounded font-medium transition-colors font-inter text-sm sm:text-base">
                 Demo Talep Et
              </button>
              {currentPage !== 'connect' && (
                <button onClick={() => navigate('connect')} className="border border-neutral-800 text-neutral-900 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 rounded font-medium hover:bg-neutral-50 transition-colors font-inter text-sm sm:text-base">
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