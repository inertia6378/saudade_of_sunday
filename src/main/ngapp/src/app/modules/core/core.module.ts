import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftNavComponent} from './components/left-nav/left-nav.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SettingsMenuComponent} from './components/settings-menu/settings-menu.component';
import {MaterialModule} from '../material/material.module';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {DevOpsModule} from '../software-development-subjects/dev-ops/dev-ops.module';
import {FrameworksModule} from '../software-development-subjects/frameworks/frameworks.module';
import {LanguagesModule} from '../software-development-subjects/languages/languages.module';
import {RuntimesModule} from '../software-development-subjects/runtimes/runtimes.module';
import {ProjectsModule} from '../projects/projects.module';
import {DronesModule} from '../drones/drones.module';
import {EthicalHackingModule} from '../ethical-hacking/ethical-hacking.module';

@NgModule({
  declarations: [
    LeftNavComponent,
    HeaderComponent,
    FooterComponent,
    SettingsMenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    DevOpsModule,
    FrameworksModule,
    LanguagesModule,
    RuntimesModule,
    ProjectsModule,
    DronesModule,
    EthicalHackingModule
  ],
  exports: [
    LeftNavComponent,
    HeaderComponent,
    FooterComponent,
    SettingsMenuComponent
  ]
})
export class CoreModule {
}
