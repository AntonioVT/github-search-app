import { RouterModule } from '@angular/router';
import { GithubUser } from './../../classes/github-user';
import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  @Input() user: GithubUser;

  constructor() { }

  ngOnInit() {
  }

  redirectTo(path: string) {
    return 'https://github.com/' + this.user.username + path;
  }

}
