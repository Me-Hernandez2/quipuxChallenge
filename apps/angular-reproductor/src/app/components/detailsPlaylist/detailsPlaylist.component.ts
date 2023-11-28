import {Component, Input} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {ResponseCreatePlaylist} from "../creatorPlaylist/interfaces/createPlaylist.interface";
import {AntdModuleModule} from "../../shared/antd-module/antd-module.module";
import {UpperpipePipe} from "../../shared/pipes/upperpipe.pipe";

@Component({
  selector: 'quipux-challenge-details-playlist',
  standalone: true,
  imports: [CommonModule, AntdModuleModule, NgIf, UpperpipePipe],
  templateUrl: './detailsPlaylist.component.html',
  styleUrl: './detailsPlaylist.component.scss',
})
export class DetailsPlaylistComponent {
  @Input({required:true}) details: ResponseCreatePlaylist = { };
}
