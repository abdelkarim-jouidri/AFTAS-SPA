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
})
export class TableCompetition{
  datasource : any;

  constructor(private competitionService: CompetitionServiceService) {}

  ngOnInit(): void {
    this.fetchCompetitionData();
  
  }

  fetchCompetitionData(): void {
    this.competitionService.getAllCompetitions().subscribe(
      (data) => {
        this.datasource = data.data.content;
        console.log(data)
      },
      (error) => {
        alert("error")
        console.error('Error fetching competition data:', error);
      }
    );
  }
}


