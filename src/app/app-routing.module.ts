import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { MembersComponent } from './components/members/members.component';
import { ResultsComponent } from './components/results/results.component';
import { TableCompetition } from './components/competition/table/table.component';
const routes: Routes = [
  {path:'competition', component: CompetitionComponent},
  {path:'members', component: MembersComponent},
  {path:'results/:id', component: ResultsComponent},
  {path:'table', component: TableCompetition},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
