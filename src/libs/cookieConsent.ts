// クッキー同意の管理ユーティリティ

export interface CookieConsentData {
  status: 'accepted' | 'declined' | null;
  date: string | null;
  version: string;
}

const CONSENT_KEY = 'voitex_cookie_consent';
const CONSENT_DATE_KEY = 'voitex_cookie_consent_date';
const CONSENT_VERSION = '1.0';

/**
 * クッキー同意の状態を取得
 */
export function getCookieConsent(): CookieConsentData {
  if (typeof window === 'undefined') {
    return {
      status: null,
      date: null,
      version: CONSENT_VERSION,
    };
  }

  const status = localStorage.getItem(CONSENT_KEY) as
    | 'accepted'
    | 'declined'
    | null;
  const date = localStorage.getItem(CONSENT_DATE_KEY);

  return {
    status,
    date,
    version: CONSENT_VERSION,
  };
}

/**
 * クッキー同意を保存
 */
export function setCookieConsent(status: 'accepted' | 'declined'): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem(CONSENT_KEY, status);
  localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());

  // Google Analyticsの設定を更新
  updateGoogleAnalyticsConsent(status);
}

/**
 * クッキー同意をリセット
 */
export function resetCookieConsent(): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(CONSENT_KEY);
  localStorage.removeItem(CONSENT_DATE_KEY);

  // Google Analyticsを無効化
  updateGoogleAnalyticsConsent('declined');
}

/**
 * クッキー同意が必要かどうかを判定
 */
export function needsCookieConsent(): boolean {
  const consent = getCookieConsent();
  return consent.status === null;
}

/**
 * Google Analyticsの同意設定を更新
 */
function updateGoogleAnalyticsConsent(status: 'accepted' | 'declined'): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  const analyticsStorage = status === 'accepted' ? 'granted' : 'denied';

  window.gtag('consent', 'update', {
    analytics_storage: analyticsStorage,
  });
}

/**
 * 同意の有効期限をチェック（1年）
 */
export function isConsentExpired(): boolean {
  const consent = getCookieConsent();
  if (!consent.date) return true;

  const consentDate = new Date(consent.date);
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return consentDate < oneYearAgo;
}

/**
 * 同意の更新が必要かどうかを判定
 */
export function needsConsentUpdate(): boolean {
  return needsCookieConsent() || isConsentExpired();
}

// TypeScript用の型定義
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
