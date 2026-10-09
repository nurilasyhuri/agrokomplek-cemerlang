import { BUSINESS_INFO } from '../data/businessInfo';

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS_INFO.contact.whatsappRaw}`;

export function generateGeneralInquiryUrl(sourcePage: string = 'homepage'): string {
  const text = `Halo Agrokomplek Cemerlang, saya ingin berkonsultasi tentang kebutuhan pertanian / greenhouse (Ref: ${sourcePage}).`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export function generateProductInquiryUrl(productName: string, category?: string, brand?: string): string {
  let text = `Halo Agrokomplek Cemerlang, saya tertarik dengan produk:\n• Nama: ${productName}`;
  if (category) text += `\n• Kategori: ${category}`;
  if (brand) text += `\n• Merek: ${brand}`;
  text += `\n\nApakah stok tersedia dan bagaimana detail harga serta pengirimannya? Terima kasih.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export interface GreenhouseQuoteParams {
  type: string;
  location: string;
  length: number;
  width: number;
  crops?: string;
  targetTimeline?: string;
  lifespan?: string;
}

export function generateGreenhouseQuoteUrl(params: GreenhouseQuoteParams): string {
  const area = params.length * params.width;
  let text = `Halo Agrokomplek Cemerlang, saya ingin mengajukan estimasi pembuatan greenhouse:\n` +
    `• Model: ${params.type}\n` +
    `• Ukuran Lahan: ${params.length}m x ${params.width}m (${area} m²)\n`;
  if (params.lifespan) {
    text += `• Estimasi Daya Tahan: ${params.lifespan}\n`;
  }
  text += `• Lokasi Proyek: ${params.location}\n` +
    `• Rencana Tanaman/Komoditas: ${params.crops || '-'}\n` +
    `• Target Pengerjaan: ${params.targetTimeline || 'Fleksibel'}\n\n` +
    `Mohon info rincian perkiraan biaya dan tahapan survei selanjutnya. Terima kasih.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}
