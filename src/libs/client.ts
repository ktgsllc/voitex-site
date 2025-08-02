// src/libs/client.ts
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'voitex', // ← https://voitex.microcms.io の「voitex」だけを指定！
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!, // ← 安全のため.env.localに定義
});
