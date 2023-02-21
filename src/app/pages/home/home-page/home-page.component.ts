import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppState } from 'src/app/core/state/app.state';
import { selectUser } from 'src/app/core/state/selector/Auth.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user!:Observable<User|null>
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.user = this.store.select(selectUser)
  }

}
