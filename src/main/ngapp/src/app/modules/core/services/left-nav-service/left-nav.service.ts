import {Injectable, OnInit} from '@angular/core';
import {RouterLink} from '../../models/router-link';
import {HomeComponent} from '../../components/home/home.component';
import {Routes} from '@angular/router';
import {NodeJsComponent} from '../../../software-development-subjects/runtimes/components/node-js/node-js.component';
import {OwaspComponent} from '../../../ethical-hacking/components/owasp/owasp.component';
import {InjectionComponent} from '../../../ethical-hacking/components/injection/injection.component';
import {BrokenAuthComponent} from '../../../ethical-hacking/components/broken-auth/broken-auth.component';
// tslint:disable-next-line:max-line-length
import {SensitiveDataExposureComponent} from '../../../ethical-hacking/components/sensitive-data-exposure/sensitive-data-exposure.component';
import {PythonComponent} from '../../../software-development-subjects/languages/components/python/python.component';

@Injectable({
  providedIn: 'root'
})
export class LeftNavService implements OnInit {
  static routerRoutes: Routes = [
    {path: 'Home', component: HomeComponent},
    // Software Development Subjects------------------------------------------------------------------------------------
    {path: 'NodeJs', component: NodeJsComponent},
    {path: 'Python', component: PythonComponent},
    // Projects---------------------------------------------------------------------------------------------------------
    // Courses----------------------------------------------------------------------------------------------------------
    // Drones-----------------------------------------------------------------------------------------------------------
    // Ethical Hacking--------------------------------------------------------------------------------------------------
    {path: 'OWASP', component: OwaspComponent},
    {path: 'Injection', component: InjectionComponent},
    {path: 'BrokenAuth', component: BrokenAuthComponent},
    {path: 'SensitiveDataExposure', component: SensitiveDataExposureComponent},
    // -----------------------------------------------------------------------------------------------------------------
    {path: '**', redirectTo: 'Home'}
  ];

  constructor() {
  }

  getleftNavSubjects() {
    return subjectNavRoutes;
  }

  getleftNavProjects() {
    return projectNavRoutes;
  }

  getleftNavCourses() {
    return courseNavRoutes;
  }

  getDrones() {
    return dronesNavRoutes;
  }

  getEthicalHacking() {
    return ethicalHackingNavRoutes;
  }

  ngOnInit(): void {
  }
}

const subjectNavRoutes: RouterLink[] = [
  {
    id: 0,
    name: 'NodeJs',
    url: 'NodeJs',
    iconUrl: 'src/main/ngapp/src/assets/img/nodeIcon.png',
    component: HomeComponent
  },
  {
    id: 0,
    name: 'Python',
    url: 'Python',
    iconUrl: 'src/main/ngapp/src/assets/img/nodeIcon.png',
    component: PythonComponent
  }
];

const projectNavRoutes: RouterLink[] = [
];

const courseNavRoutes: RouterLink[] = [
];

const dronesNavRoutes: RouterLink[] = [
];

const ethicalHackingNavRoutes: RouterLink[] = [
  {
    id: 1,
    name: 'OWASP',
    url: 'OWASP',
    iconUrl: '',
    component: OwaspComponent
  },
  {
    id: 2,
    name: 'Injection',
    url: 'Injection',
    iconUrl: '',
    component: InjectionComponent
  },
  {
    id: 3,
    name: 'BrokenAuth',
    url: 'BrokenAuth',
    iconUrl: '',
    component: BrokenAuthComponent
  }
  ,
  {
    id: 4,
    name: 'Sensitive Data Exposure',
    url: 'SensitiveDataExposure',
    iconUrl: '',
    component: SensitiveDataExposureComponent
  }
];

