import { Component } from '@angular/core';
import { ResultDTO } from '../../../Models/Result';
import { ResultServiceService } from '../../../Services/result/result-service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

const ELEMENT_DATA : ResultDTO[] = []

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css'],
  imports: [MatTableModule],
  standalone : true
})


export class ResultTableComponent {
  displayedColumns: string[] = ['competition', 'member', 'rank', 'score'];
  dataSource = new MatTableDataSource<ResultDTO>(ELEMENT_DATA);
  competitionCode : string
  constructor(private resultService: ResultServiceService, private route: ActivatedRoute){
    this.competitionCode = '';
  }

  ngOnInit(): void {
    this.fetchResultsData();
    this.route.params.subscribe(params=> this.competitionCode = params['id'])
  
  }

  fetchResultsData(): void {
    this.resultService.getAllResults(this.competitionCode).subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<ResultDTO>(data.data);
      },
      (error) => {
        alert("error")
        console.error('Error fetching competition data:', error);
      }
    );
  }
}
