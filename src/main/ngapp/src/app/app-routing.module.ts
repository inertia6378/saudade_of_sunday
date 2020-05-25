import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {LeftNavService} from './modules/core/services/left-nav-service/left-nav.service';

const routes: Routes = LeftNavService.routerRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private leftNavService: LeftNavService) {}
}
