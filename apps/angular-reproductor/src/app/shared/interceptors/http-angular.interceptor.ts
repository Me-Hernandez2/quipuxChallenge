import {HttpEventType, HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {catchError, tap, throwError} from "rxjs";
import {inject} from "@angular/core";
import {NzMessageService} from "ng-zorro-antd/message";
import {LoaderService} from "../loader/services/loader.service";


export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  let messageService$ = inject(NzMessageService)
  let loaderService$ = inject(LoaderService)
  const token = sessionStorage.getItem('token');

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
  loaderService$.showLoader();
    return next(authReq).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          loaderService$.hideLoader();
        }
      }),
    catchError((error) => {
      loaderService$.hideLoader();
      if ([401, 403].includes(error.status)) {
        messageService$.create('error', `No estas autorizado, intenta logearte de nuevo`);
      }
      const e = error.error.message || error.statusText;
      messageService$.create('error', `Algo ha fallado en la peticion`);
      return throwError(() => error)
    })
  )
}

