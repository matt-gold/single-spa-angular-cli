import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SingleSpaService} from '../../../services/single-spa.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  @ViewChild('app1Angular', { static: true })
  appContainerRef: ElementRef;
  constructor(private singleSpaService: SingleSpaService) { }

  ngOnInit(): void {
    this.mount().subscribe();
  }
  mount(): Observable<unknown> {
    return this.singleSpaService.mount('child1', this.appContainerRef.nativeElement);
  }

}
