'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    WOW: any;
    jQuery: any;
    $: any;
  }
}

export default function ScriptInitializer() {
  useEffect(() => {
    // Wait for all scripts to load
    const initScripts = () => {
      if (typeof window !== 'undefined' && window.jQuery) {
        const $ = window.jQuery;

        // Initialize WOW.js for animations
        if (window.WOW) {
          const wow = new window.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
          });
          wow.init();
        }

        // Initialize Swiper for hero slider
        if ((window as any).Swiper) {
          new (window as any).Swiper('.hero .swiper', {
            loop: false,
            pagination: {
              el: '.hero-pagination',
              clickable: true,
            },
            autoplay: {
              delay: 5000,
            },
          });
        }

        // Initialize counter animation
        if ($.fn.counterUp) {
          $('.counter').counterUp({
            delay: 10,
            time: 1000
          });
        }

        // Initialize slicknav for mobile menu
        if ($.fn.slicknav) {
          $('#menu').slicknav({
            prependTo: '.responsive-menu',
            label: '',
            closeOnClick: true,
          });
        }

        // Re-trigger any custom function.js initialization
        if (typeof (window as any).initCustomScripts === 'function') {
          (window as any).initCustomScripts();
        }
      }
    };

    // Delay to ensure all scripts are loaded
    const timer = setTimeout(initScripts, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
