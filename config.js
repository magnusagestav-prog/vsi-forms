// ============================================================
// VSI-FORMS KONFIGURATION
// Fyll i dessa värden efter att du skapat kontona
// ============================================================

// EmailJS — hämtas från emailjs.com → Account / Email Services / Templates
const EMAILJS_PUBLIC_KEY  = 'wZmpyDsQjzlNFK-u1';        // Account → Public Key
const EMAILJS_SERVICE_ID  = 'service_ngqkjn8';           // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'template_cbw0eoi';           // Email Templates → Settings-fliken → Template ID

// Firebase — hämtas från Firebase Console → Project Settings → Your apps → Web
const FIREBASE_CONFIG = {
  apiKey:            'FYLL_I_apiKey',
  authDomain:        'FYLL_I_authDomain',
  projectId:         'FYLL_I_projectId',
  storageBucket:     'FYLL_I_storageBucket',
  messagingSenderId: 'FYLL_I_messagingSenderId',
  appId:             'FYLL_I_appId'
};

// Admin-mejladress som tar emot svar (ska matcha EmailJS-mallens "To")
const ADMIN_EMAIL = 'magnusagestav@gmail.com';
