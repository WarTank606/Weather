import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private AuthService: AuthService, private router: Router)
    {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean
    {

 if (this.AuthService.ConfirmCitySelected() == false)
       {
        this.router.navigate(['/Home/City_Weather'])
       }
       return this.AuthService.ConfirmCitySelected()
    }
}