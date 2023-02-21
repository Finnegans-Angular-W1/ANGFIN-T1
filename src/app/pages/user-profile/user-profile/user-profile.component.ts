import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/models/Auth.service';
import { User } from 'src/app/core/models/user';
import { logout } from 'src/app/core/state/actions/login.actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-Profile.component.html',
  styleUrls: ['./user-Profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  usuario: User = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    roleId: 0,
    points: 0
  }
  avatar: string = 'assets/avatar.png'

  constructor(private userService: AuthService, private router: Router, private store: Store) {
  }

  ngOnInit(): void {
    this.userService.getUser$().subscribe(user => {
      if (user) {
        this.usuario = user;
      }
    });
  }

  CambiarContrasenia() {
    this.router.navigate(['/password-reset']);
  }

  EditarPerfil() {
    this.router.navigate(['/editar-perfil']);
  }

  logout() {
    this.store.dispatch(logout())
  }
}



