import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeterinarioComponent } from './add-veterinario.component';

describe('AddVeterinarioComponent', () => {
  let component: AddVeterinarioComponent;
  let fixture: ComponentFixture<AddVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
