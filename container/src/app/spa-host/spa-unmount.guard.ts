import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpaHostComponent } from './spa-host.component';

@Injectable({ providedIn: 'root' })
export class SpaUnmountGuard implements CanDeactivate<SpaHostComponent> {
  canDeactivate(
    component: SpaHostComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const currentApp = component.appName;
    const nextApp = this.extractAppDataFromRouteTree(nextState.root);

    if (currentApp === nextApp) {
      return true;
    }

    return component.unmount().pipe(map(_ => true));
  }

  private extractAppDataFromRouteTree(routeFragment: ActivatedRouteSnapshot): string {
    if (routeFragment.data && routeFragment.data.app) {
      return routeFragment.data.app;
    }

    if (!routeFragment.children.length) {
      return null;
    }

    return routeFragment.children.map(r => this.extractAppDataFromRouteTree(r)).find(r => r !== null);
  }
}
