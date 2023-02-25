import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/core/models/user';
import { HttpService } from '../../core/services/http.service';
const multiavatar = require('@multiavatar/multiavatar');

interface UserAvatar {
  avatar: any,
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  roleId: number,
  points: number,
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  title: string = 'Contactos';
  users!: UserAvatar[];

  constructor(private hs: HttpService,
    private sanitized: DomSanitizer) { }

  ngOnInit(): void {
    this.hs.get<any>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/?page=153').subscribe(data => {
      //this.users = data.data
      this.users = data.data.map((user: User) => {
        return {
          ...user, avatar: this.sanitized.bypassSecurityTrustHtml(multiavatar(user.email, true))
        }
      })

    });
  }

}

//this.svg = this.sanitized.bypassSecurityTrustHtml(multiavatar(user.email, true));