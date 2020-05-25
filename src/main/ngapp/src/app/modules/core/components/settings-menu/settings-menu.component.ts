import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {
  @Output() toggleTheme = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
}
