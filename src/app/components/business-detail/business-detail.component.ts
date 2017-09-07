import { GithubUser } from './../../classes/github-user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {

  @Input() user: GithubUser;

  constructor() { }

  ngOnInit() {
  }

  kFormatter(num: number) {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
  }

  redirectTo(path: string) {
    return 'https://github.com/' + this.user.username + path;
  }

}
