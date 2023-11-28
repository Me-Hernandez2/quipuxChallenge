export interface RequestPlaylist {
  nombre?:      string;
  descripcion?: string;
  canciones?:   Cancion[];
}

export interface ResponseCreatePlaylist {
  id?:          number;
  nombreLista?: string;
  descripcion?: string;
  songs?:       Cancion[];
  location?:    string;
}


export interface Cancion {
  id?:       number;
  titulo:  string;
  artista: string;
  album:   string;
  anno:    string;
  genero:  string;
}
