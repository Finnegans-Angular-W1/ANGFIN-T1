import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  userLogged!: boolean;

  @ViewChild('sidebar') sidebar!: MatSidenav;

  // links de navegación
  sidebarLinks = [
    {
      title: 'Home',
      path: 'home',
    },
    {
      title: 'Ingresos',
      path: 'ingresos',
    },
    {
      title: 'Egresos',
      path: 'egresos',
    },
    {
      title: 'Enviar dinero',
      path: 'enviar-dinero',
    },
    {
      title: 'Plazos fijos',
      path: 'plazos-fijos',
    },
    {
      title: 'Contactos',
      path: 'contactos',
    },
    {
      title: 'Perfil',
      path: 'perfil',
    },
    {
      title: 'Billeteras',
      path: 'billeteras',
    },
  ];

  constructor(
    private store: Store,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    // chequea si el usuario esta logueado
    if (sessionStorage.getItem('accessToken') === null) {
      this.userLogged = false;
    } else {
      this.userLogged = true;
    }
  }

  // cierre de sesión
  logout(): void {
    this.store.dispatch({ type: '[Auth] Logout' });
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.sidebar.toggle();
    this.store.dispatch({ type: '[Auth] Logout' });
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.authService
      .logoutGoogle()
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch(error => console.log(error));
    this.sidebar.toggle();
  }
}
