/**
 * CONFIGURACIÓN TÉCNICA — Solo el implementador modifica este archivo.
 * No exponer acceso a este archivo al cliente final.
 *
 * Para un nuevo cliente: actualizar todos los valores de este objeto.
 */
export const site = {
  nombre: 'Rashag Motos',
  razon_social: 'Grupo Rashag Corp. S.A.C.',
  ruc: '20601527171',

  // WhatsApp: número completo con código de país, sin espacios ni +
  whatsapp: '51982481403',
  whatsapp_display: '+51 982 481 403',

  // URL completa de Google Maps del local (sin embed, solo link externo)
  google_maps_url: 'https://maps.app.goo.gl/Nqj4tbCx3LjSFBfJ7',

  // Redes sociales: URLs completas al perfil oficial
  facebook_url: 'https://www.facebook.com/rashagmotos',
  instagram_url: 'https://www.instagram.com/rashagmotos/',
  tiktok_url: 'https://www.tiktok.com/@rashagmotos',

  // Logo: ruta relativa a /public
  logo: '/images/logo.png',
  logo_alt: 'Rashag Motos',

  // Colores de marca
  colors: {
    primary: '#E63B2E',
    secondary: '#1A1A2E',
  },

  // SEO / Open Graph
  meta: {
    description:
      'Distribuidor autorizado multimarca de motos. Advance, SSenda, Katers, Polux, Hero, Motofox. Envíos a todo el país.',
    og_image: '/images/og.jpg',
    lang: 'es',
  },
} as const;

/** Genera un link de WhatsApp con mensaje pre-escrito opcional. */
export function waLink(mensaje?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!mensaje) return `${base}?text=${encodeURIComponent('Hola, me comunico desde su sitio web.')}`;
  return `${base}?text=${encodeURIComponent(mensaje)}`;
}
