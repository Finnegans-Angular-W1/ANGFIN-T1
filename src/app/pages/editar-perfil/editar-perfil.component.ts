import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { AuthService } from 'src/app/core/models/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  user: any;

  constructor(private httpService: HttpService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    const token = this.authService.getToken();
    const url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/api/users/me';
    this.httpService.get(url, true, { 'Authorization': `Bearer ${token}` }).subscribe(
      response => {
        this.user = response;
      },
      error => console.error('Error al obtener el usuario:', error)
    );

  }

  updateProfile(username: string, name: string, avatar: string) {
    const token = this.authService.getToken();
    const url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/api/users/me';
    const body = {
      username,
      name,
      avatar
    };
    this.httpService.put(url, body, true).subscribe(
      response => {
        console.log('Perfil actualizado:', response);
        // Redirige al usuario a la página de perfil actualizado
        this.router.navigate(['/user-profile']);
      },
      error => console.error('Error al actualizar el perfil:', error)
    );





}
