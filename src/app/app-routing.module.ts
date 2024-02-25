import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { MembersComponent } from './components/members/members.component';
import { ResultsComponent } from './components/results/results.component';
import { TableCompetition } from './components/competition/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './_helpers/guards/auth/auth.guard';
const routes: Routes = [
  {path:'competition', component: CompetitionComponent, canActivate:[AuthGuard]},
  {path:'members', component: MembersComponent, canActivate:[AuthGuard]},
  {path:'results/:id', component: ResultsComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
