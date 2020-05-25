import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NodeJsComponent} from './components/node-js/node-js.component';

@NgModule({
  declarations: [NodeJsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NodeJsComponent
  ]
})
export class RuntimesModule { }
