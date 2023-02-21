import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  users!: User[];

  constructor(private hs: HttpService) { }

  ngOnInit(): void {
    this.hs.get<any>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/?page=153').subscribe(data =>{
      this.users = data.data
      console.log(data)
    });    
  }

}
