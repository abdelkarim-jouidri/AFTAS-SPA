import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CompetitionDTO } from '../../../Models/Competition';
import { CompetitionServiceService } from '../../../Services/competition/competition-service.service';



const ELEMENT_DATA: CompetitionDTO[] = [];



@Component({
  selector: 'table-competition',
  styleUrls: ['./table.component.css'],
  templateUrl:'./table.component.html' ,
  standalone: true,
  imports: [MatTableModule],
})
export class TableCompetition{
  displayedColumns: string[] = ['code', 'date', 'startTime', 'endTime', 'numberOfParticipants', 'location', 'amount'];
  dataSource = new MatTableDataSource<CompetitionDTO>(ELEMENT_DATA);

  constructor(private competitionService: CompetitionServiceService) {}

  ngOnInit(): void {
    this.fetchCompetitionData();
  
  }

  fetchCompetitionData(): void {
    this.competitionService.getAllCompetitions().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<CompetitionDTO>(data);
        console.log(data)
      },
      (error) => {
        alert("error")
        console.error('Error fetching competition data:', error);
      }
    );
  }
}


