module.exports = {
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      /**
       * We need to define a no-op rewrite to trigger checking all pages/static files
       * before we attempt proxying.
       */
      {
        source: "/:path*",
        destination: "/:path*",
      },

      // English
      {
        // source: "/en",
        source: "/en(/|)",
        destination: "https://globalvacuumpresses.com/",
        // locale: false,
      },
      {
        // source: "/en/about",
        source: "/en/about(/|)",
        destination: "https://globalvacuumpresses.com/company/",
        // locale: false,
      },
      {
        // source: "/en/partners",
        source: "/en/partners(/|)",
        destination: "https://globalvacuumpresses.com/partners/",
        // locale: false,
      },
      {
        // source: "/en/training",
        source: "/en/training(/|)",
        destination: "https://globalvacuumpresses.com/rdt_centre/",
        // locale: false,
      },

      // Spanish
      {
        // source: "/es",
        source: "/es(/|)",
        destination: "https://globalvacuumpresses.com/es/",
        // locale: false,
      },
      {
        // source: "/es/about",
        source: "/es/about(/|)",
        destination: "https://globalvacuumpresses.com/es/empresa/",
        // locale: false,
      },

      {
        // source: "/es/partners",
        source: "/es/partners(/|)",
        destination: "https://globalvacuumpresses.com/es/socio-de-global-vp/",
        // locale: false,
      },
      {
        // source: "/es/training",
        source: "/es/training(/|)",
        destination:
          "https://globalvacuumpresses.com/es/centro-de-investigacion-desarrollo-y-formacion/",
        // locale: false,
      },

      // French
      {
        // source: "/fr",
        source: "/fr(/|)",
        destination: "https://globalvacuumpresses.com/fr/",
        // locale: false,
      },
      {
        // source: "/fr/about",
        source: "/fr/about(/|)",
        destination: "https://globalvacuumpresses.com/fr/societe/",
        // locale: false,
      },
      {
        // source: "/fr/partners",
        source: "/fr/partners(/|)",
        destination: "https://globalvacuumpresses.com/fr/nouvelles/",
        // locale: false,
      },
      {
        // source: "/fr/training",
        source: "/fr/training(/|)",
        destination:
          "https://globalvacuumpresses.com/fr/centre-de-recherche-de-developpement-et-de-formation/",
        // locale: false,
      },
    ];
  },
};
