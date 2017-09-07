import { GitApiService } from './../../services/git-api.service';
import { GithubUser } from './../../classes/github-user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: GithubUser = new GithubUser();
  currentUsername: string;

  constructor(private gitApi: GitApiService, private route: ActivatedRoute) {
    let vm = this;
    this.route.params.subscribe(params => {
      vm.currentUsername = params['id'];
      vm.loadUser();
      vm.loadOrganizations();
    });
  }

  ngOnInit() {
  }

  loadUser() {
    var vm = this;
    var u = this.gitApi.getUser(this.currentUsername);

    u.then(response => {
      var d = response.json();

      vm.currentUser.setUserInfo(d.login, d.avatar_url, d.site_admin);
      vm.currentUser.setUserDetails(d.name, d.followers, d.following, d.public_repos, d.location, d.bio);
    }).catch(error => {

    });
  }

  loadOrganizations() {
    var vm = this;
    var u = this.gitApi.getUserOrganizations(this.currentUsername);

    u.then(response => {
      var data = response.json();
      var orgs = [];

      for (var i = 0; i < data.length; i++) {
        var d = data[i];
        orgs.push(d.login);
      }

      vm.currentUser.setOrganizations(orgs);
    }).catch(error => {

    });
  }

}
