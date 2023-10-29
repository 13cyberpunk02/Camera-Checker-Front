import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public accountService: AccountService, private router: Router){}

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/account/login')
  }
}
