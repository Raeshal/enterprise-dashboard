import { ActivatedRouteSnapshot, CanActivate,GuardResult,MaybeAsync,Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class authGuard implements CanActivate
{

  constructor(private router:Router)
  {

  }
  
  canActivate():boolean
  {
    const isLoggedIn = localStorage.getItem('token');
    if(!isLoggedIn)
    {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}