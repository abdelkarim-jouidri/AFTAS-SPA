import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableCompetition } from './table.component';

describe('TableComponent', () => {
  let component: TableCompetition;
  let fixture: ComponentFixture<TableCompetition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCompetition]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCompetition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
