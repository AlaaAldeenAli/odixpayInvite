// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiUrl: 'https://l0s6c3s1-5001.inc1.devtunnels.ms/odixpay/us-central1/createInvitation',
    }

  },
  app: {
      baseURL: '/odixpayInvite/', // baseURL: '/<repository>/'
      buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    
    head: {
      title: 'Redirecting to AppStore - OdixPay',
      meta: [
        {
          name: 'description',
          content: 'Redirecting to AppStore - OdixPay'
        }
      ],

      link: [
        {
          href: 'https://framerusercontent.com/images/0RQFtCL4NYjSUgIaRrVRObqq2M.png',
          rel: 'icon',
          media: '(prefers-color-scheme: light)'
        },
        {
          href: 'https://framerusercontent.com/images/eMYjFBdNpfHeZMS4vZcaQD1VaI.png',
          rel: 'icon',
          media: '(prefers-color-scheme: dark)'
        },
        {
          href: 'https://framerusercontent.com/images/eMYjFBdNpfHeZMS4vZcaQD1VaI.png',
          rel: 'apple-touch-icon'
        }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      allowedHosts: true,
    },
  },

  css: ['~/assets/main.css'],
  modules: ['@nuxtjs/google-fonts', 'motion-v/nuxt'],

  googleFonts: {
    // Options
    families: {
      Alexandria: [200, 300, 400, 500, 600, 700, 800, 900],

    },
    preload: true,
    useStylesheet: true

  }
})