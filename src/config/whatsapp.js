/**
 * Configuración centralizada de WhatsApp Business
 * Single Source of Truth (SSOT) para toda la plataforma
 */
export const WHATSAPP_COUNTRY_CODE = '57';
export const WHATSAPP_PHONE_RAW = '3224987598';
export const WHATSAPP_PHONE = `${WHATSAPP_COUNTRY_CODE}${WHATSAPP_PHONE_RAW}`; // 573224987598
export const WHATSAPP_DISPLAY = '+57 322 498 7598';

/**
 * Remueve emojis y caracteres especiales multi-byte propensos a corrupción
 * o signos de interrogación () en WhatsApp Web y diferentes versiones de clientes.
 * @param {string} text
 * @returns {string}
 */
export function sanitizeWhatsAppText(text = '') {
  if (!text) return '';
  return text
    // Elimina rangos comunes de emojis Unicode
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/gu, '')
    // Reemplaza múltiples espacios resultantes
    .replace(/ +/g, ' ')
    .trim();
}

/**
 * Genera el enlace oficial a WhatsApp con texto preconfigurado limpio y 100% libre de emojis
 * @param {string} [message] - Mensaje predeterminado a codificar
 * @returns {string} - URL de wa.me lista para usar
 */
export function getWhatsAppUrl(message = '') {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!message) return baseUrl;
  const cleanMessage = sanitizeWhatsAppText(message);
  return `${baseUrl}?text=${encodeURIComponent(cleanMessage)}`;
}
