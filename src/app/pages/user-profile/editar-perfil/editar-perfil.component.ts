import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { AuthService } from 'src/app/core/models/Auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  title = "Editar perfil";
  user: User | any;
  userLoaded = false;

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me';
    this.httpService.get<User>(url, true).subscribe(
      response => {
        this.user = response;
        this.userLoaded = true;
      },
      error => console.error('Error al obtener el usuario:', error)
    );
  }

  updateProfile(first_name: string, last_name: string, email: string) {
    const url = `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/${this.user.id}`;
    const body = {
      first_name,
      last_name,
      email
    };
    this.httpService.put<User>(url, body).subscribe(
      response => {
        console.log('Perfil actualizado:', response);

        //this.router.navigate(['/profile']);

      },
      //error => this.router.navigate(['/profile'])
    );
    this.router.navigate(['/profile']);
  }


}
