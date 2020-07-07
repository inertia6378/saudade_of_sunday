import {Component, NgZone, OnInit} from '@angular/core';
import {LeftNavService} from '../../services/left-nav-service/left-nav.service';
import {RouterLink} from '../../models/router-link';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  subjects: RouterLink[];
  projects: RouterLink[];
  courses: RouterLink[];
  drones: RouterLink[];
  ethicalHacking: RouterLink[];

  displayedColumns: string[] = ['name'];

  subjectsDataSource = new MatTableDataSource(this.leftNavService.getleftNavSubjects());
  projectsDataSource = new MatTableDataSource(this.leftNavService.getleftNavProjects());
  coursesDataSource = new MatTableDataSource(this.leftNavService.getleftNavCourses());
  dronesDataSource = new MatTableDataSource(this.leftNavService.getDrones());
  ethicalHackingDataSource = new MatTableDataSource(this.leftNavService.getEthicalHacking());

  applySubjectsFilter(filterValue: string) {
    this.subjectsDataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
  }

  constructor(private leftNavService: LeftNavService) {
    this.subjects = this.leftNavService.getleftNavSubjects();
    this.projects = this.leftNavService.getleftNavProjects();
    this.courses = this.leftNavService.getleftNavCourses();
    this.drones = this.leftNavService.getDrones();
    this.ethicalHacking = this.leftNavService.getEthicalHacking();
  }

}
