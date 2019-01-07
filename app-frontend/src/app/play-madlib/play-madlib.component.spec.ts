import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMadlibComponent } from './play-madlib.component';

describe('PlayMadlibComponent', () => {
  let component: PlayMadlibComponent;
  let fixture: ComponentFixture<PlayMadlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayMadlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMadlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
