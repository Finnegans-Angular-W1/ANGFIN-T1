import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { setLoadingSpinner } from '../state/actions/spinner.actions';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  countRequest: number = 0;

  constructor(private auth: AuthService, private store: Store<AppState>) {
    // 
  }

  private finalize = () => {
    this.countRequest--;
    if (!this.countRequest) {
      // Termina de cargar
      this.store.dispatch(setLoadingSpinner({status:false}))
    }
  };

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();

    if(!this.countRequest){
      // empieza a cargar
      this.store.dispatch(setLoadingSpinner({ status: true }));
    }
    this.countRequest++;

    if (token) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(modifiedRequest).pipe(finalize(this.finalize));
    } else {
      return next.handle(request).pipe(finalize(this.finalize));
    }
  }
}
