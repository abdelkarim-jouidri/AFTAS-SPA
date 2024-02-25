import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultServiceService } from '../../Services/result/result-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit{

  constructor(private route:ActivatedRoute, private resultsService:ResultServiceService){}

  id: any;
  results : any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.resultsService.getAllResults(this.id).subscribe(
      data=>this.results=data.data
    )

  }

}
