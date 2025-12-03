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
    campaignFlow: "/images/campaign-flow.png",

    // Earnings/revenue report screenshot
    // Recommended: 1200x900px or 4:3 aspect ratio PNG/JPG
    earningsReport: "/images/earnings-report.png",
  },

  // ============================================
  // SOLUTIONS PAGE IMAGES
  // ============================================
  solutions: {
    // Brand solutions visual
    brands: "/images/solutions-brands.png",
    
    // Agency solutions visual
    agencies: "/images/solutions-agencies.png",
    
    // Publisher solutions visual
    publishers: "/images/solutions-publishers.png",
    
    // Influencer solutions visual
    influencers: "/images/solutions-influencers.jpg",
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

