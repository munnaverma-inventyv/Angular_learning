import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidComponent } from './chid.component';

describe('ChidComponent', () => {
  let component: ChidComponent;
  let fixture: ComponentFixture<ChidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
