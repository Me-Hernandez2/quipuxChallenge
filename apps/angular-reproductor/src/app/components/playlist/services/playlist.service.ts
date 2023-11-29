import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../../shared/environments/environments";
import {map} from "rxjs";
import {ResponseLogin} from "../../login/interfaces/login.interfaces";
import {ResponseGetPlaylist, Song} from "../interfaces/playlist.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor( private http: HttpClient) {}

  getAllPlaylist(){
    return this.http.get(environments.api_base+'lists')
      .pipe(
        map((response: any) => {
          const responseLogin: ResponseGetPlaylist = {
           listas: response.listas
          };
          return responseLogin;
        })
      );
  }

  deletePlaylist(nameList: string){
    return this.http.delete(environments.api_base + 'lists/'+nameList)
  }
}
