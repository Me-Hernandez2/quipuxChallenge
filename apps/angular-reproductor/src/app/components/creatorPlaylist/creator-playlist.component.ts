import {Component, inject} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {AntdModuleModule} from "../../shared/antd-module/antd-module.module";
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {Cancion, RequestPlaylist, ResponseCreatePlaylist} from "./interfaces/createPlaylist.interface";
import {CreatorPlaylistService} from "./services/creator-playlist.service";
import {respondToClient} from "nx/src/daemon/server/shutdown-utils";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'quipux-challenge-creator-playlist',
  standalone: true,
  imports: [CommonModule, AntdModuleModule, NgIf],
  templateUrl: './creator-playlist.component.html',
  styleUrl: './creator-playlist.component.scss',
})
export class CreatorPlaylistComponent {
  fb = inject(NonNullableFormBuilder);
  creatorService$ = inject(CreatorPlaylistService)
  messageService$ = inject(NzMessageService)
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
  stepCurrent = {step: 0}
  requestPlaylist: RequestPlaylist = {}

  validateFormCreate: FormGroup<{
    nombre: FormControl<string>;
    descripcion: FormControl<string>;
  }> = this.fb.group({
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  });

  validateFormCreateSongs: FormGroup<{
    titulo: FormControl<string>;
    artista: FormControl<string>;
    album: FormControl<string>;
    anno: FormControl<string>;
    genero: FormControl<string>;
  }> = this.fb.group({
    titulo: ['', [Validators.required]],
    artista: ['', [Validators.required]],
    album: ['', [Validators.required]],
    anno: ['', [Validators.required]],
    genero: ['', [Validators.required]],
  });

  constructor() {
  }

  submitForm() {
    if (this.validateFormCreate.valid) {
      this.stepCurrent = {step: 1}
      this.requestPlaylist = {
        nombre : this.validateFormCreate.get('nombre')!.value,
        descripcion : this.validateFormCreate.get('descripcion')!.value,
        canciones : []
      }

    } else {
      Object.values(this.validateFormCreate.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  submitForm2(): void {
    if (this.validateFormCreateSongs.valid) {
      const cancion: Cancion = {
        titulo: this.validateFormCreateSongs.get('titulo')!.value,
        artista: this.validateFormCreateSongs.get('artista')!.value,
        album: this.validateFormCreateSongs.get('album')!.value,
        anno: this.validateFormCreateSongs.get('anno')!.value,
        genero: this.validateFormCreateSongs.get('genero')!.value
      }
      this.requestPlaylist.canciones?.push(cancion)
    } else {
      Object.values(this.validateFormCreateSongs.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  savePlaylist(){
    if(!!this.requestPlaylist.canciones && this.requestPlaylist.canciones?.length > 0){
      this.creatorService$.savePlaylist(this.requestPlaylist).subscribe((response:ResponseCreatePlaylist) => {
        if(!!response.id){
          this.stepCurrent = {step: 2}
          this.messageService$.create('success', `Playlist creada exitosamente`);
        }
      })
    }else{
      this.messageService$.create('warning', `Debes agregar al menos una cancion`);
    }
  }
}
