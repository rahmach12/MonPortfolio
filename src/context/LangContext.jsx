/* ─── Context ────────────────────────────────────────────────── */
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('rc-lang') || 'en'; } catch { return 'en'; }
  });

  useEffect(() => {
    try { localStorage.setItem('rc-lang', lang); } catch { /* noop */ }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLang(l => l === 'en' ? 'fr' : 'en');
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}

/** Shorthand: translate a { en, fr } object */
export function t(obj, lang) {
  return obj?.[lang] ?? obj?.en ?? '';
}
