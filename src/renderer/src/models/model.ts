export interface Artist {
  name: string;
  albums: Album[];
  image?: string;
  favorite: boolean;
}

export interface Album {
  artist: Artist["name"];
  title: string;
  songs: Song[];
  artwork: string;
  genre?: string;
  releaseYear?: Date; 
  favorite: boolean;
}

export interface Song {
  artist: Artist["name"];
  album: Album["title"];
  name: string;
  length: number;
  favorite: boolean;
}

export interface Playlist {
  name: string;
  songs: Song[];
  artwork: string;
}