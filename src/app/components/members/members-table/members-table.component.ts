import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MemberDTO } from '../../../Models/Member';
import { MemberServiceService } from '../../../Services/member/member-service.service';

const ELEMENT_DATA: MemberDTO[] = [];


@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.css'],
  standalone: true,
  imports: [MatTableModule]

})


export class MembersTableComponent {
  displayedColumns: string[] = ['num', 'firstname', 'lastname', 'joiningDate', 'nationality', 'identityDocumentType', 'identityNumber'];
  dataSource = new MatTableDataSource<MemberDTO>(ELEMENT_DATA);

  constructor(private memberService: MemberServiceService){}

  ngOnInit(): void {
    this.fetchMembersData();
  
  }

  fetchMembersData(): void {
    this.memberService.getAllMembers().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<MemberDTO>(data.data);
      },
      (error) => {
        alert("error")
        console.error('Error fetching competition data:', error);
      }
    );
  }
}
