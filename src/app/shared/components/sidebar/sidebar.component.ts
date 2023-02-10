import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
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
    private router: Router
  ) {}

  ngOnInit(): void {
    // chequea si el usuario esta logueado
    if ((localStorage.getItem('token')) === null) {
      this.userLogged = false;
    } else {
      this.userLogged = true;
    }
  }

  // cierre de sesión
  logout(): void {
    this.store.dispatch({ type: '[Auth] Logout' });
    localStorage.clear();
    this.router.navigate(['/login']);
    this.sidebar.toggle();
  }

}
