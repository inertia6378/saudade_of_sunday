import {Injectable, OnInit} from '@angular/core';
import {RouterLink} from '../../models/router-link';
import {HomeComponent} from '../../components/home/home.component';
import {Route, Router, Routes} from '@angular/router';
import {NodeJsComponent} from '../../../subjects/runtimes/components/node-js/node-js.component';

@Injectable({
  providedIn: 'root'
})
export class LeftNavService implements OnInit {
  static routerRoutes: Routes = [
    {path: 'Home', component: HomeComponent},
    // Subjects---------------------------------------------------------------------------------------------------------
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
  }
];

const projectNavRoutes: RouterLink[] = [
];

const courseNavRoutes: RouterLink[] = [
];
