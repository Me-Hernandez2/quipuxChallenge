import { Injectable } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd/notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private notification: NzNotificationService) { }

  launchToast(type:string, title: string, description:string){
    this.notification.create(
      type,
      title,
      description
    )

  }
}
