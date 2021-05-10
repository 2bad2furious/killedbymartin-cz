import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {IProject} from "../project";
import {ProjectService} from "../project.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly projects: Observable<IProject[]>;

  constructor(
    private readonly service: ProjectService
  ) {
    this.projects = service.getAll();
  }
}
