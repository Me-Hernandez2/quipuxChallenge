import {Component, EventEmitter, inject, Output} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {AntdModuleModule} from "../../shared/antd-module/antd-module.module";
import {PlaylistService} from "./services/playlist.service";
import {Lista, ResponseGetPlaylist} from "./interfaces/playlist.interfaces";
import {NzModalService} from "ng-zorro-antd/modal";
import {NzMessageService} from "ng-zorro-antd/message";




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
  messageService$ = inject(NzMessageService)
  modalService$ = inject(NzModalService)
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

  showDeleteConfirm(nameList:string): void {
    this.modalService$.confirm({
      nzTitle: 'Seguro que deseas eliminar esta playlist?',
      nzContent: '<b style="color: red;">No podrá deshacerce</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteList(nameList),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  deleteList(nameList:string){
    this.playlistService$.deletePlaylist(nameList).subscribe( response => {
      this.messageService$.create('success', `Playlist eliminada exitosamente`);
    })
  }
}
