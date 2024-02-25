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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableCompetition } from './components/competition/table/table.component';
import { MembersTableComponent } from './components/members/members-table/members-table.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterLoginSwitcherComponent } from './components/register-login-switcher/register-login-switcher.component';
import { AuthInterceptorInterceptor } from './_helpers/interceptors/auth-interceptor.interceptor';
import { ForbidenComponent } from './components/forbiden/forbiden.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompetitionComponent,
    MembersComponent,
    ResultsComponent,
    LoginComponent,
    RegisterComponent,
    RegisterLoginSwitcherComponent,
    ForbidenComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    TableCompetition,
    MembersTableComponent,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
