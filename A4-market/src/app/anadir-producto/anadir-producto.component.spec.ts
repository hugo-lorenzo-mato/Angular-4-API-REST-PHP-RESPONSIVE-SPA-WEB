import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirProductoComponent } from './anadir-producto.component';

describe('AnadirProductoComponent', () => {
  let component: AnadirProductoComponent;
  let fixture: ComponentFixture<AnadirProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
