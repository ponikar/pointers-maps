/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GOOGLE_API_MAP_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
