import { Observable } from 'rxjs/Observable';
import { GithubUser } from './../classes/github-user';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin'

@Injectable()
export class GitApiService {

  // tslint:disable-next-line:no-inferrable-types
  mainUrl: string = 'https://api.github.com/';

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.mainUrl + 'users').toPromise();
  }

  getUser(username: string) {
    return this.http.get(this.mainUrl + 'users/' + username).toPromise();
  }

  getUsersObservable(): Observable<GithubUser[]> {
    return this.http.get(this.mainUrl + 'users')
      .map(res => {
        return res.json().map(d => {
          const gu = new GithubUser();
          gu.setUserInfo(d.login, d.avatar_url, d.site_admin);
          return gu;
        });
      });
  }

  getUserObservable(username: string): Observable<GithubUser> {
    console.log("getUserObservable");
    return this.http.get(this.mainUrl + 'users/' + username)
      .map(res => {
        let gu = new GithubUser();
        let d = res.json();
        gu.setUserInfo(d.login, d.avatar_url, d.site_admin);
        gu.setUserDetails(d.name, d.followers, d.following, d.public_repos, d.location, d.bio);
        return gu;
      })
  }

  getUserOrganizations(username: string) {
    return this.http.get(this.mainUrl + 'users/' + username + '/orgs').toPromise();
  }

  getUserOrganizationsObservable(username: string): Observable<GithubUser> {
    return this.http.get(this.mainUrl + 'users/' + username + '/orgs')
      .map(res => {
        let gu = new GithubUser();

        const data = res.json();
        const orgs = [];
  
        for (let i = 0; i < data.length; i++) {
          const d = data[i];
          orgs.push(d.login);
        }

        gu.setOrganizations(orgs);

        return gu;
      });
  }

}
