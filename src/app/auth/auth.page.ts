import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authservicec: AuthService, private rourter: Router) {

  }

  ngOnInit() {
  }

  onLogin(){
    this.authservicec.login();
    this.rourter.navigateByUrl('/places/tabs/discover');
  }
}
