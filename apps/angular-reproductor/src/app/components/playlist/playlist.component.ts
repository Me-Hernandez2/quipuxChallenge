import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {AntdModuleModule} from "../../shared/antd-module/antd-module.module";
import {PlaylistService} from "./services/playlist.service";
import {Lista, ResponseGetPlaylist} from "./interfaces/playlist.interfaces";




@Component({
  selector: 'quipux-challenge-playlist',
  standalone: true,
  imports: [CommonModule, AntdModuleModule, NgFor],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
})
export class PlaylistComponent {
  playlistLs: Lista[] = [];
  @Output() seeDetails = new EventEmitter<string>();
  constructor(private playlistService$: PlaylistService) {}

  ngOnInit() {
    this.getAllPlaylist();
  }

  getAllPlaylist(){
    this.playlistService$.getAllPlaylist().subscribe( (response: ResponseGetPlaylist) => {
      this.playlistLs = [...response.listas]
    })
  }

  details(listName: string){
    this.seeDetails.emit(listName)
  }
}
