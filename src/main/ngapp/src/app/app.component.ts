import {Component, Output, EventEmitter, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngapp';

  fullMenu: boolean;

  private mediaMatcher: MediaQueryList = matchMedia('(max-width: 700px');

  constructor(zone: NgZone) {
    this.mediaMatcher.addEventListener('change',
      () => this.isScreenSmall()
    );
  }

  ngOnInit() {
    this.fullMenu = false;
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
