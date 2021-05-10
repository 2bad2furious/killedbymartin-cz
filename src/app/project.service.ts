import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IProject} from "./project";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly projects: IProject[] = [
    {
      title: 'Twitternt',
      imgUrl: '/assets/twitternt.svg',
      excerpt: 'Obětován pro dobro ostatních projektů',
      date: new Date(2021, 3, 30)
    }
  ];

  getAll(): Observable<IProject[]> {
    return of(this.projects)
      .pipe(delay(1));
  }
}
