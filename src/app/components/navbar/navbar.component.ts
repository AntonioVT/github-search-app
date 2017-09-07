import { GitApiService } from './../../services/git-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usernameToSearch: string = '';

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  searchUsername() {
    if(this.usernameToSearch){
      this.router.navigate(['/user', this.usernameToSearch]);
    }
  }

}
