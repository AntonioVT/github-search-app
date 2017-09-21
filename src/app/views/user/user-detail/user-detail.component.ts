import { GitApiService } from './../../../services/git-api.service';
import { GithubUser } from './../../../classes/github-user';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/forkJoin'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  currentUser: Observable<GithubUser>;
  currentUsername: string;

  constructor(private gitApi: GitApiService, private route: ActivatedRoute) {
    const vm = this;
    this.route.params.subscribe(params => {

      vm.currentUsername = params['id'];
      /*
      vm.loadUser();
      vm.loadOrganizations();*/
      vm.currentUser = Observable.forkJoin([
        this.gitApi.getUserObservable(vm.currentUsername),
        this.gitApi.getUserOrganizationsObservable(vm.currentUsername)
      ]).map(res1 => {
        let d = res1[0];
        let o = res1[1];
        let gu = new GithubUser();
        gu.setUserInfo(d.username, d.avatarUrl, d.isAdmin);
        gu.setUserDetails(d.name, d.followers, d.following, d.publicRepos, d.location, d.bio);
        gu.setOrganizations(o.organizations);
        return gu;
      });
      /*
      vm.currentUser = this.gitApi.getUserObservable(vm.currentUsername);
      vm.currentUser.merge(this.gitApi.getUserOrganizationsObservable(vm.currentUsername))
        .subscribe(response => {
          console.log(response);

        })*/
    });
  }

  ngOnInit() {
  }
  /*
  loadUser() {
    const vm = this;
    const u = this.gitApi.getUser(this.currentUsername);

    u.then(response => {
      const d = response.json();

      vm.currentUser.setUserInfo(d.login, d.avatar_url, d.site_admin);
      vm.currentUser.setUserDetails(d.name, d.followers, d.following, d.public_repos, d.location, d.bio);
    }).catch(error => {

    });
  }

  loadOrganizations() {
    const vm = this;
    const u = this.gitApi.getUserOrganizations(this.currentUsername);

    u.then(response => {
      const data = response.json();
      const orgs = [];

      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        orgs.push(d.login);
      }

      vm.currentUser.setOrganizations(orgs);
    }).catch(error => {

    });
  }*/

}
