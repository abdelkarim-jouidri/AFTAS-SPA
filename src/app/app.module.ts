import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { MembersComponent } from './components/members/members.component';
import { ResultsComponent } from './components/results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { TableCompetition } from './components/competition/table/table.component';
import { MembersTableComponent } from './components/members/members-table/members-table.component';
import { ResultTableComponent } from './components/results/result-table/result-table.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompetitionComponent,
    MembersComponent,
    ResultsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    TableCompetition,
    MembersTableComponent,
    ResultTableComponent,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
