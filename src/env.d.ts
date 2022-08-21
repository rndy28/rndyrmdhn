/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly UNSPLASH_COLLECTIONS_ID: number;
  readonly UNSPLASH_ACCESS_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "astro-seo";
