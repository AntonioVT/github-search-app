import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitApiService {

  mainUrl: string = 'https://api.github.com/';

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.mainUrl + 'users').toPromise();
  }

  getUser(username: string) {
    return this.http.get(this.mainUrl + 'users/' + username).toPromise();
  }

  getUserOrganizations(username: string){
    return this.http.get(this.mainUrl + 'users/' + username + '/orgs').toPromise();
  }

}
