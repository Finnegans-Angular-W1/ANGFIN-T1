import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Agregar cambio en la solicitud antes del envío//
    const modifieldRequest = request.clone({
        //Aca se pueden meter headers
    });
    return next.handle(modifieldRequest);
    }




}
