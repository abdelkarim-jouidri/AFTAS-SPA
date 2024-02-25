import { Component, OnInit } from '@angular/core';
import { CompetitionServiceService } from '../../Services/competition/competition-service.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent implements OnInit{

  datasource : any;

  constructor(private competitionService: CompetitionServiceService){}

  ngOnInit(): void {
      this.competitionService.getAllCompetitions().subscribe(
        data=>{this.datasource = data.data.content
        console.log(data.data.content)}
      )
  }

}
