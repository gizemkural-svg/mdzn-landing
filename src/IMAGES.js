/*
================================================================================
📷 IMAGE SOURCES - MDZN Landing Page
================================================================================

All image paths are centralized here for easy management.
To add a new image:
1. Place the image file in: /public/images/
2. Add the path below in the appropriate category
3. Import and use in your components

Usage example:
  import { IMAGES } from './IMAGES';
  <img src={IMAGES.hero.platform} alt="Platform" />

================================================================================
*/

export const IMAGES = {
  // ============================================
  // HERO SECTION IMAGES
  // ============================================
  hero: {
    // Main platform screenshot for homepage hero
    // Recommended: 1920x1080px or 16:9 aspect ratio PNG/JPG
    platform: "/images/platform-hero.png",
  },

  // ============================================
  // HOMEPAGE SECTION IMAGES
  // ============================================
  home: {
    // "Ne Yapıyoruz" section ecosystem visual
    // Recommended: 800x800px square image PNG/JPG
    ecosystem: "/images/ecosystem-visual.png",

    // Influencer panel screenshot
    // Recommended: 1280x720px or 16:9 aspect ratio PNG/JPG
    influencerPanel: "/images/influencer-panel.png",

    // Influencer phone mockup screen image
    // Recommended: 300x580px or similar phone screen ratio PNG/JPG
    // This replaces the built-in UI in the phone mockup
    influencerPhoneMockup: "/images/influencer-phone-mockup.jpg",
  },

  // ============================================
  // CONNECT PAGE IMAGES
  // ============================================
  connect: {
    // Performance dashboard screenshot
    // Recommended: 1200x900px or 4:3 aspect ratio PNG/JPG
    dashboard: "/images/dashboard-screenshot.png",

    // Campaign flow/management screenshot
    // Recommended: 1200x900px or 4:3 aspect ratio PNG/JPG
    campaignFlow: "/images/campaign-flow.jpg",

    // Earnings/revenue report screenshot
    // Recommended: 1200x900px or 4:3 aspect ratio PNG/JPG
    earningsReport: "/images/earnings-report.png",
  },

  // ============================================
  // SOLUTIONS PAGE IMAGES
  // ============================================
  solutions: {
    // Main hero screenshots for each solution type
    // Recommended: 1200x900px (4:3 aspect ratio) PNG/JPG
    brands: "/images/solutions-brands.png",
    agencies: "/images/solutions-agencies.png",
    publishers: "/images/solutions-publishers.png",
    influencers: "/images/solutions-influencers.jpg",
    
    // Capability preview images (Mini Screen Previews)
    // Each solution has 3 capabilities with preview images
    // Recommended: 640x360px (16:9 aspect ratio) PNG/JPG
    capabilities: {
      brands: [
        "/images/capabilities/brands-partner-discovery.png",      // Partner Keşfi
        "/images/capabilities/brands-brand-security.png",          // Marka Güvenliği
        "/images/capabilities/brands-auto-payments.png",            // Otomatik Ödemeler
      ],
      agencies: [
        "/images/capabilities/agencies-portfolio.png",              // Müşteri Portföyü
        "/images/capabilities/agencies-permissions.png",            // Ekip İzinleri
        "/images/capabilities/agencies-reports.png",                // Özel Raporlar
      ],
      publishers: [
        "/images/capabilities/publishers-link-creator.png",         // Link Oluşturucu
        "/images/capabilities/publishers-notifications.png",       // Anlık Bildirimler
        "/images/capabilities/publishers-api.png",                  // API Entegrasyonu
      ],
      influencers: [
        "/images/capabilities/influencers-offers.png",             // İş Birliği Teklifleri
        "/images/capabilities/influencers-media-kit.png",           // Medya Kiti
        "/images/capabilities/influencers-wallet.png",             // Kazanç Cüzdanı
      ],
    },
  },

  // ============================================
  // PARTNER/BRAND LOGOS (PNG versions if needed)
  // ============================================
  partners: {
    // Example: If you need PNG logos instead of SVG
    // ikas: "/images/partners/ikas-logo.png",
    // webtekno: "/images/partners/webtekno-logo.png",
  },

  // ============================================
  // MISC / OTHER IMAGES
  // ============================================
  misc: {
    // Add any other images here
    // example: "/images/example.png",
  },
};

// ============================================
// HELPER: Check if image exists (optional utility)
// ============================================
export const getImageWithFallback = (imagePath, fallbackPath = null) => {
  // This is a simple helper - in production you might want
  // to implement actual image existence checking
  return imagePath || fallbackPath;
};

export default IMAGES;

