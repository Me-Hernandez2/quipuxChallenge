import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {AntdModuleModule} from "./shared/antd-module/antd-module.module";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AntdModuleModule],
  selector: 'quipux-challenge-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-reproductor';
}
