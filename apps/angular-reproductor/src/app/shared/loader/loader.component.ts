import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderService} from "./services/loader.service";

@Component({
  selector: 'quipux-challenge-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  loaderService$ = inject(LoaderService)
  isLoading: boolean = false;
  constructor() {
  }

  ngOnInit() {
    this.loaderService$.getLoadingStatus().subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }
}
