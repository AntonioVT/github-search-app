import { GithubUser } from './../../classes/github-user';
import { GitApiService } from './../../services/git-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList: GithubUser[] = new Array();

  constructor(private gitApi: GitApiService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    var vm = this;
    var u = this.gitApi.getUsers();

    u.then(response => {
      var data = response.json();

      for (var i = 0; i < 15; i++) {
        var d = data[i];
        var gu = new GithubUser();
        gu.setUserInfo(d.login, d.avatar_url, d.site_admin);
        vm.userList.push(gu);
      }

      vm.userList.sort(function (a, b) {
        return b.isAdmin && a.isAdmin ? 0 : b.isAdmin ? 1 : -1;
      })

    }).catch(error => {
      // Show error message
    })
  }

}
