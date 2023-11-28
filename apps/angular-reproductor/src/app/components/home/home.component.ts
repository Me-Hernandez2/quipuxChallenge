import {Component, inject} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {AntdModuleModule} from "../../shared/antd-module/antd-module.module";
import {PlaylistComponent} from "../playlist/playlist.component";
import {RouterModule} from "@angular/router";
import {CreatorPlaylistComponent} from "../creatorPlaylist/creator-playlist.component";
import {DetailsPlaylistComponent} from "../detailsPlaylist/detailsPlaylist.component";
import {CreatorPlaylistService} from "../creatorPlaylist/services/creator-playlist.service";
import {ResponseCreatePlaylist} from "../creatorPlaylist/interfaces/createPlaylist.interface";

@Component({
  selector: 'quipux-challenge-home',
  standalone: true,
  imports: [
    CommonModule,
    AntdModuleModule,
    PlaylistComponent,
    RouterModule,
    NgIf,
    CreatorPlaylistComponent,
    DetailsPlaylistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  createPlaylist = false;
  playlistSelected = '';
  detailsList: ResponseCreatePlaylist = {}
  creatorService$ = inject(CreatorPlaylistService)

  constructor() {
  }

  getDetails(event: string) {
    this.createPlaylist = false;
    this.playlistSelected = event
    this.creatorService$.getDetailsPlaylist(this.playlistSelected).subscribe(
      (response: ResponseCreatePlaylist) => {
        if(response.id){
          this.detailsList = response
        }
    })
  }
}
