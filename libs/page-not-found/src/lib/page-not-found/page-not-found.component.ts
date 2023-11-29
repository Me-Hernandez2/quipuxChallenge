import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AntdModuleModule} from "../../../../../apps/angular-reproductor/src/app/shared/antd-module/antd-module.module";
import {Router} from "@angular/router";

@Component({
  selector: 'quipux-challenge-page-not-found',
  standalone: true,
  imports: [CommonModule, AntdModuleModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  router = inject(Router);

  goHome(){
    this.router.navigate(['/login']);
  }
}
