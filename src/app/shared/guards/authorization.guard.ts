import { CanActivateFn, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { SharedService } from '../shared.service';
import { AccountService } from 'src/app/account/account.service';
import { map } from 'rxjs';
import { inject } from '@angular/core';
import { User } from '../models/account/user';

export const authorizationGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
  ) => {
    const router: Router = inject(Router);
    const accountService: AccountService = inject(AccountService);
    const sharedService: SharedService = inject(SharedService);
    
    return accountService.user$.pipe(
      map((user: User | null) =>{
        if(user){
          return true;
        } else{
          sharedService.showNotification(false, 'Доступ ограничен', 'У вас нет прав для просмотра этой страницы!');
          router.navigate(['account/login'], {queryParams: {returnUrl: state.url}});
          return false;
        }
      })
    );
  }
