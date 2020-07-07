import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwaspComponent } from './components/owasp/owasp.component';
import { InjectionComponent } from './components/injection/injection.component';
import { BrokenAuthComponent } from './components/broken-auth/broken-auth.component';
import { SensitiveDataExposureComponent } from './components/sensitive-data-exposure/sensitive-data-exposure.component';

@NgModule({
  declarations: [OwaspComponent, InjectionComponent, BrokenAuthComponent, SensitiveDataExposureComponent],
  imports: [
    CommonModule
  ]
})
export class EthicalHackingModule { }
