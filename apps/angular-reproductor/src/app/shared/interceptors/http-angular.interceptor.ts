import {HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {NzMessageService} from "ng-zorro-antd/message";


export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  let messageService$ = inject(NzMessageService)

  const token = sessionStorage.getItem('token');

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    return next(authReq).pipe(
    catchError((error) => {
      if ([401, 403].includes(error.status)) {
        messageService$.create('error', `Algo ha fallado en la peticion`);
      }
      const e = error.error.message || error.statusText;
      return throwError(() => error)
    })
  )
}

