import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { start as singleSpaStart } from 'single-spa';
import { getSingleSpaExtraProviders } from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

singleSpaStart();

const appId = 'container-app';


platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule)
  .then(module => {
    NgZone.isInAngularZone = () => {
      // @ts-ignore
      return window.Zone.current._properties[appId] === true;
    };

    const rootZone = module.injector.get(NgZone);

    // tslint:disable-next-line:no-string-literal
    rootZone['_inner']._properties[appId] = true;
  })
  .catch(err => console.error(err));
