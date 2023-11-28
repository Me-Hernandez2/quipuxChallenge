export interface ResponseGetPlaylist {
  listas: Lista[];
}

export interface Lista {
  id?:          number;
  nombreLista: string;
  descripcion: string;
  songs:       Song[];
  location:    string;
}

export interface Song {
  id:      number;
  titulo:  string;
  artista: string;
  album:   string;
  anno:    string;
  genero:  string;
}

export interface RequestCreatePlaylist {
  nombre: string,
  descripcion: string,
  canciones: Song[]
}
