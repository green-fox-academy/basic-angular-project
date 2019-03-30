import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HelloWorld } from '../../models/hello-world';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getTitle(): Observable<HelloWorld> {
    return of({
      title: '¡Hola Jorge!'
    });
  }
}
