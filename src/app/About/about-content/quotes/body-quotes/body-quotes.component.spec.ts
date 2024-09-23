import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyQuotesComponent } from './body-quotes.component';

describe('BodyQuotesComponent', () => {
  let component: BodyQuotesComponent;
  let fixture: ComponentFixture<BodyQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyQuotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
