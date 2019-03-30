import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HelloWorld } from '../../models/hello-world';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }

  getTitle(): Observable<HelloWorld> {
    return of({
      title: '¿Dónde está Jorge?'
    });
  }
}
