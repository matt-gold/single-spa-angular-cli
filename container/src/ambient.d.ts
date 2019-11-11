import { ParcelConfig } from 'single-spa';

declare global {
  interface Window {
    System: {
      import: (app: string) => Promise<ParcelConfig>;
    };
  }
}
