import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../_helpers/guards/auth/auth.guard';
import { AuthService } from '../../Services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  constructor(private authService: AuthService, private router:Router){

  }

  isAuthorized !: boolean;
  isManager !: boolean;

  ngOnInit(): void {
      this.isAuthorized = this.authService.isAuthenticated;
      this.isManager = this.authService.roles.includes("MANAGER");
      console.log(this.authService.isAuthenticated)
  }

  handleLogout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}
