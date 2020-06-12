import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class MicroFrontendRouteReuseStrategy extends RouteReuseStrategy {
  shouldDetach(): boolean {
    return false;
  }

  store(): void { }

  shouldAttach(): boolean {
    return false;
  }

  retrieve(): DetachedRouteHandle {
    return null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    /// If a child app routes inside of itself, this app will interpret that as a route change.
    ///
    /// By default, this will result in the current component being destroyed and replaced with a new instance
    /// of the same spa-host component.
    ///
    /// This route reuse strategy looks at the routeData.app to determine if the new route should be
    /// treated as the exact same route as the previous, ensuring we don't remount a child app when said child app
    /// routes inside of itself.

    return future.routeConfig === curr.routeConfig || (future.data.app && (future.data.app === curr.data.app));
  }
}
