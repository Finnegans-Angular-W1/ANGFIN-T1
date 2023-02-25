import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogGenericService {
  private checkDataSource = new BehaviorSubject(false);
  checkData = this.checkDataSource.asObservable();
  constructor() { }

  changeDataSource(checkData:boolean):void{
    this.checkDataSource.next(checkData)
  }
}
