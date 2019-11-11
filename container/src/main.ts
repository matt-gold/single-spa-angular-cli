import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as singleSpa from 'single-spa';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

singleSpa.start();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
