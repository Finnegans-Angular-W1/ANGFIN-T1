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
    
    const url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me';
    this.httpService.get(url, true,).subscribe(
      response => {
        this.user = response;
      },
      error => console.error('Error al obtener el usuario:', error)
    );

  }

  updateProfile(first_name: string, last_name: string, email: string) {
   
    const url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/${this.user.id}';
    const body = {
      first_name,
      last_name,
      email
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
}
