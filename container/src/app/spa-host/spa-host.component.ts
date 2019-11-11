import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleSpaService } from '../../services/single-spa.service';

@Component({
  selector: 'app-spa-host',
  template: '<div #appContainer></div>'
})
export class SpaHostComponent implements OnInit, OnDestroy {

  constructor(private service: SingleSpaService, private route: ActivatedRoute) { }

  @ViewChild('appContainer', { static: true }) private appContainerRef: ElementRef;
  private appName: string;

  ngOnInit() {
    this.appName = this.route.snapshot.data.app;
    this.service.mount(this.appName, this.appContainerRef.nativeElement).subscribe();
  }

  async ngOnDestroy() {
    await this.service.unmount(this.appName).toPromise();
  }
}
