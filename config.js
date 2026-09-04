// ============================================================
// VSI-FORMS KONFIGURATION
// ============================================================

// EmailJS
const EMAILJS_PUBLIC_KEY  = 'wZmpyDsQjzlNFK-u1';
// Custom SMTP mot Migadu (magnus@sverigeisrael.se) i stället för Gmail — bytt 2026-09-04.
// Gamla Gmail-tjänsten (service_ngqkjn8) finns kvar i EmailJS men refereras inte längre.
const EMAILJS_SERVICE_ID  = 'service_oqlj4we';
const EMAILJS_TEMPLATE_ID = 'template_cbw0eoi';
// Bekräftelse-mall för nyhetsbrevsformuläret (To Email = nyhetsbrev@sverigeisrael.se).
// Skapas i EmailJS-dashboarden; klistra in mall-ID:t här. Tomt = ingen bekräftelse skickas.
const EMAILJS_CONFIRM_TEMPLATE_ID = 'template_fatfj1a';

// Cloudinary (fil-uppladdning)
const CLOUDINARY_CLOUD_NAME    = 'dh2npg32u';
const CLOUDINARY_UPLOAD_PRESET = 'VSI-ADMIN';

// Admin-mejladress (formulärsvar landar här → alias till magnus@ som läses via IMAP)
const ADMIN_EMAIL = 'admin@sverigeisrael.se';
