
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      trending: 'Trending',
      subscriptions: 'Subscriptions',
      history: 'History',
      watchLater: 'Watch Later',
      liked: 'Liked Videos',
      playlists: 'Playlists',
      downloads: 'Downloads',
      profile: 'Profile',
      settings: 'Settings',
      upload: 'Upload',
      search: 'Search',
      notifications: 'Notifications',
      
      // Common
      signIn: 'Sign In',
      signUp: 'Sign Up',
      signOut: 'Sign Out',
      subscribe: 'Subscribe',
      subscribed: 'Subscribed',
      like: 'Like',
      share: 'Share',
      download: 'Download',
      save: 'Save',
      
      // Upload page
      uploadVideos: 'Upload Videos',
      shareContent: 'Share your tech and engineering content with the community',
      videoFile: 'Video File',
      videoTitle: 'Video Title',
      videoDescription: 'Video Description',
      category: 'Category',
      location: 'Location',
      language: 'Language',
      privacy: 'Privacy',
      public: 'Public',
      private: 'Private',
      unlisted: 'Unlisted',
      
      // Footer
      allRightsReserved: '© 2024 TechView Kenya. All rights reserved.',
      
      // Categories
      technology: 'Technology',
      engineering: 'Engineering',
      programming: 'Programming',
      aiMl: 'AI & Machine Learning',
      webDev: 'Web Development',
      mobileDev: 'Mobile Development',
      devops: 'DevOps',
      cybersecurity: 'Cybersecurity',
      
      // Auth
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      forgotPassword: 'Forgot password?',
      dontHaveAccount: "Don't have an account?",
      alreadyHaveAccount: 'Already have an account?',
      enterEmail: 'Enter your email',
      enterPassword: 'Enter your password',
      createAccount: 'Create Account',
      welcomeBack: 'Welcome back',
      joinCommunity: 'Join our community of tech enthusiasts',
      
      // Locations
      kenya: 'Kenya',
      uganda: 'Uganda',
      tanzania: 'Tanzania',
      rwanda: 'Rwanda',
      ethiopia: 'Ethiopia',
      ghana: 'Ghana',
      nigeria: 'Nigeria',
      southAfrica: 'South Africa',
    }
  },
  sw: {
    translation: {
      // Navigation
      home: 'Nyumbani',
      trending: 'Mzunguko',
      subscriptions: 'Michango',
      history: 'Historia',
      watchLater: 'Tazama Baadaye',
      liked: 'Vipengele Vipendwa',
      playlists: 'Orodha za Kucheza',
      downloads: 'Upakuzi',
      profile: 'Wasifu',
      settings: 'Mipangilio',
      upload: 'Pakia',
      search: 'Tafuta',
      notifications: 'Arifa',
      
      // Common
      signIn: 'Ingia',
      signUp: 'Jisajili',
      signOut: 'Toka',
      subscribe: 'Jiunge',
      subscribed: 'Umejiunge',
      like: 'Pendeza',
      share: 'Shiriki',
      download: 'Pakua',
      save: 'Hifadhi',
      
      // Upload page
      uploadVideos: 'Pakia Video',
      shareContent: 'Shiriki maudhui yako ya teknolojia na uhandisi na jamii',
      videoFile: 'Faili la Video',
      videoTitle: 'Kichwa cha Video',
      videoDescription: 'Maelezo ya Video',
      category: 'Aina',
      location: 'Mahali',
      language: 'Lugha',
      privacy: 'Faragha',
      public: 'Hadharani',
      private: 'Binafsi',
      unlisted: 'Haijaorodheshwa',
      
      // Footer
      allRightsReserved: '© 2024 TechView Kenya. Haki zote zimehifadhiwa.',
      
      // Categories
      technology: 'Teknolojia',
      engineering: 'Uhandisi',
      programming: 'Programu',
      aiMl: 'AI & Kujifunza kwa Mashine',
      webDev: 'Maendeleo ya Wavuti',
      mobileDev: 'Maendeleo ya Simu',
      devops: 'DevOps',
      cybersecurity: 'Usalama wa Mtandao',
      
      // Auth
      email: 'Barua pepe',
      password: 'Nenosiri',
      confirmPassword: 'Thibitisha Nenosiri',
      forgotPassword: 'Umesahau nenosiri?',
      dontHaveAccount: 'Huna akaunti?',
      alreadyHaveAccount: 'Una akaunti tayari?',
      enterEmail: 'Ingiza barua pepe yako',
      enterPassword: 'Ingiza nenosiri lako',
      createAccount: 'Unda Akaunti',
      welcomeBack: 'Karibu tena',
      joinCommunity: 'Jiunge na jamii yetu ya wapenda teknolojia',
      
      // Locations
      kenya: 'Kenya',
      uganda: 'Uganda',
      tanzania: 'Tanzania',
      rwanda: 'Rwanda',
      ethiopia: 'Ethiopia',
      ghana: 'Ghana',
      nigeria: 'Nigeria',
      southAfrica: 'Afrika Kusini',
    }
  },
  fr: {
    translation: {
      // Navigation
      home: 'Accueil',
      trending: 'Tendances',
      subscriptions: 'Abonnements',
      history: 'Historique',
      watchLater: 'Regarder Plus Tard',
      liked: 'Vidéos Aimées',
      playlists: 'Listes de Lecture',
      downloads: 'Téléchargements',
      profile: 'Profil',
      settings: 'Paramètres',
      upload: 'Télécharger',
      search: 'Rechercher',
      notifications: 'Notifications',
      
      // Common
      signIn: 'Se Connecter',
      signUp: "S'inscrire",
      signOut: 'Se Déconnecter',
      subscribe: "S'abonner",
      subscribed: 'Abonné',
      like: 'Aimer',
      share: 'Partager',
      download: 'Télécharger',
      save: 'Sauvegarder',
      
      // Upload page
      uploadVideos: 'Télécharger des Vidéos',
      shareContent: 'Partagez votre contenu tech et ingénierie avec la communauté',
      videoFile: 'Fichier Vidéo',
      videoTitle: 'Titre de la Vidéo',
      videoDescription: 'Description de la Vidéo',
      category: 'Catégorie',
      location: 'Emplacement',
      language: 'Langue',
      privacy: 'Confidentialité',
      public: 'Public',
      private: 'Privé',
      unlisted: 'Non Répertorié',
      
      // Footer
      allRightsReserved: '© 2024 TechView Kenya. Tous droits réservés.',
      
      // Categories
      technology: 'Technologie',
      engineering: 'Ingénierie',
      programming: 'Programmation',
      aiMl: 'IA & Apprentissage Automatique',
      webDev: 'Développement Web',
      mobileDev: 'Développement Mobile',
      devops: 'DevOps',
      cybersecurity: 'Cybersécurité',
      
      // Auth
      email: 'Email',
      password: 'Mot de Passe',
      confirmPassword: 'Confirmer le Mot de Passe',
      forgotPassword: 'Mot de passe oublié?',
      dontHaveAccount: "Vous n'avez pas de compte?",
      alreadyHaveAccount: 'Vous avez déjà un compte?',
      enterEmail: 'Entrez votre email',
      enterPassword: 'Entrez votre mot de passe',
      createAccount: 'Créer un Compte',
      welcomeBack: 'Content de vous revoir',
      joinCommunity: 'Rejoignez notre communauté de passionnés de tech',
      
      // Locations
      kenya: 'Kenya',
      uganda: 'Ouganda',
      tanzania: 'Tanzanie',
      rwanda: 'Rwanda',
      ethiopia: 'Éthiopie',
      ghana: 'Ghana',
      nigeria: 'Nigéria',
      southAfrica: 'Afrique du Sud',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
