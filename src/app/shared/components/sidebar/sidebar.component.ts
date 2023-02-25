import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSidenav } from '@angular/material/sidenav';
import { logout } from 'src/app/core/state/actions/login.actions';
import { selectIsAuthenticated } from 'src/app/core/state/selector/Auth.selector';
import { AppState } from 'src/app/core/state/app.state';
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
  sidebarLinks:{title:string, path:string}[] = [
    {
      title: 'Home',
      path: 'home',
    },
    {
      title: 'Perfil',
      path: 'profile',
    },
    {
      title: 'Movimientos',
      path: 'transactions',
    },
    {
      title:"Agregar Dinero",
      path:'money/deposit'
    },
    {
      title: 'Enviar dinero',
      path: 'money/send',
    },
    {
      title: 'Inversiones',
      path: 'investments',
    },
    {
      title: 'Divisas',
      path: 'exchange',
    },
    {
      title: 'Contactos',
      path: 'contacts',
    },
  ];

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // chequea si el usuario esta logueado
    this.store.select(selectIsAuthenticated).subscribe(res => {
      this.userLogged = res;
    });
  }

  // cierre de sesión
  logout(): void {
    this.store.dispatch(logout());
    this.sidebar.toggle();

    this.authService.logoutGoogle().catch((error: any) => console.log(error));
  }
}
