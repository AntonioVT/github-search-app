import { GithubUser } from './../../classes/github-user';
import { GitApiService } from './../../services/git-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList: Observable<GithubUser[]>;

  constructor(private gitApi: GitApiService) { }

  ngOnInit() {
    this.userList = this.gitApi.getUsersObservable();
    this.userList = this.userList.map( (data) => {
      data.sort(function (a, b) {
        return b.isAdmin && a.isAdmin ? 0 : b.isAdmin ? 1 : -1;
      })
      return data;
    });
  }

}
