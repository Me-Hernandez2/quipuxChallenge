import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../../shared/environments/environments";
import {RequestPlaylist, ResponseCreatePlaylist} from "../interfaces/createPlaylist.interface";
import {map} from "rxjs";
import {ResponseLogin} from "../../login/interfaces/login.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CreatorPlaylistService {
http = inject(HttpClient)

  constructor() { }

  savePlaylist(request: RequestPlaylist){
  return this.http.post(environments.api_base+'lists', request)
    .pipe(
      map((response: any) => {
        const responseLogin: ResponseCreatePlaylist = response as ResponseCreatePlaylist;
        return responseLogin;
      })
    );
  }

  getDetailsPlaylist(listName: string){
  return this.http.get(environments.api_base+'lists/'+listName)
    .pipe(
      map((response: any) => {
        const responseLogin: ResponseCreatePlaylist = response as ResponseCreatePlaylist;
        return responseLogin;
      })
    );
  }
}
