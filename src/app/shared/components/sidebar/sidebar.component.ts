import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
  }

  // cierre de sesión
  logout(): void {
    this.store.dispatch({ type: '[Auth] Logout' });
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
