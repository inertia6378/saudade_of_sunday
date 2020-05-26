import {Injectable, OnInit} from '@angular/core';
import {RouterLink} from '../../models/router-link';
import {HomeComponent} from '../../components/home/home.component';
import {Route, Router, Routes} from '@angular/router';
import {NodeJsComponent} from '../../../software-development-subjects/runtimes/components/node-js/node-js.component';

@Injectable({
  providedIn: 'root'
})
export class LeftNavService implements OnInit {
  static routerRoutes: Routes = [
    {path: 'Home', component: HomeComponent},
    // Software Development Subjects------------------------------------------------------------------------------------
    {path: 'NodeJs', component: NodeJsComponent},
    // Projects---------------------------------------------------------------------------------------------------------
    // Courses----------------------------------------------------------------------------------------------------------
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
    iconUrl: '',
    component: HomeComponent
  },
  {
    id: 0,
    name: 'Extra Extra Long Button',
    url: 'NodeJs',
    iconUrl: '',
    component: HomeComponent
  }
];

const projectNavRoutes: RouterLink[] = [
];

const courseNavRoutes: RouterLink[] = [
];

const dronesNavRoutes: RouterLink[] = [
];

const ethicalHackingNavRoutes: RouterLink[] = [
];

