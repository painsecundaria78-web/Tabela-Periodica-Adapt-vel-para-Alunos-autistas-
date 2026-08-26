export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (e: any) => void;
}

export function speakText(text: string, options: SpeakOptions = {}): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Síntese de voz não suportada neste navegador.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  if (!text || text.trim() === '') return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = options.rate ?? 0.9;
  utterance.pitch = options.pitch ?? 1.0;

  // Try to find a Portuguese voice if available
  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(v => v.lang.startsWith('pt-BR') || v.lang.startsWith('pt'));
  if (ptVoice) {
    utterance.voice = ptVoice;
  }

  if (options.onStart) {
    utterance.onstart = options.onStart;
  }
  if (options.onEnd) {
    utterance.onend = options.onEnd;
  }
  if (options.onError) {
    utterance.onerror = options.onError;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
