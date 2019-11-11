import { Injectable } from '@angular/core';
import { Parcel, mountRootParcel,  } from 'single-spa';
import { Observable, from } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingleSpaService {
  private loadedParcels: {
    [appName: string]: Parcel
  } = {};

  constructor() { }

  mount(appName: string, domElement: HTMLElement): Observable<void> {
    return from(window.System.import(appName))
      .pipe(
        tap(app => {
          this.loadedParcels[appName] = mountRootParcel(app, { domElement });
        }),
        mapTo(null)
      );
  }

  unmount(appName: string): Observable<void> {
    return from(this.loadedParcels[appName].unmount()).pipe(
      tap(() => delete this.loadedParcels[appName]),
      mapTo(null)
    );
  }
}
