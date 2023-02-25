import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/models/Auth.service';
import { User } from 'src/app/core/models/user';
import { logout } from 'src/app/core/state/actions/login.actions';
const multiavatar = require('@multiavatar/multiavatar');



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-Profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  usuario: User = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    roleId: 0,
    points: 0,
  };
  svg!:any 
  avatar: string = 'assets/avatar.png';


  constructor(
    private userService: AuthService,
    private router: Router,
    private store: Store,
    private sanitized: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.userService.getUser$().subscribe(user => {
      if (user) {
        this.usuario = user;
        this.svg = this.sanitized.bypassSecurityTrustHtml(multiavatar(user.email, true));
      }
    });    
    
  }
  
  
  CambiarContrasenia() {
    this.router.navigate(['/profile/reset-password']);
  }

  EditarPerfil() {

    this.router.navigate(['/profile/edit']);

  }

  logout() {
    this.store.dispatch(logout());
  }
}
