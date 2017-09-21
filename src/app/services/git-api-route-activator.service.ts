import { GitApiService } from './git-api.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class GitApiRouteActivatorService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve) => {
      this.api.getUser(route.params['id'])
        .then(response => {
          resolve(true);
        })
        .catch(err => {
          this.router.navigate(['/404']);
          resolve(false);
        });
    });

  }

  constructor(private router: Router, private api: GitApiService) { }


}
