import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { HelloWorldComponent } from './hello-world.component';

import { ApiService } from 'src/app/services/api/api.service';

describe('HelloWorldComponent', () => {
  const testTitle = '¿Dónde está Jorge?';

  let getTitleSpy: jasmine.Spy;
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(() => {
    const apiService = jasmine.createSpyObj('ApiService', ['getTitle']);
    getTitleSpy = apiService.getTitle.and.returnValue(of({ title: testTitle }));

    TestBed.configureTestingModule({
      declarations: [ HelloWorldComponent ],
      providers:    [
        { provide: ApiService, useValue: apiService }
      ]
    });

    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set title based on service`, () => {
    expect(getTitleSpy.calls.any()).toBe(true, 'getTitle called');
    expect(component.title).toEqual(testTitle);
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBe(testTitle);
  });
});
