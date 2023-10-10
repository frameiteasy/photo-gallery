import albums from './albums.json';
import { Photo } from '../gtypes/photo';
import { Album } from '../gtypes/album';
// TODO path doesn't work here
// const path = require('path');

const albumsFolder: string | undefined = process.env.REACT_APP_ALBUM_FOLDER;
const albumsServer: string | undefined = process.env.REACT_APP_SERVER;

const searchHomeAlbum = () => {
  let foundAlbum = albums.find((album) => album.onHomePage);
  return foundAlbum;
};

const randomAlbum = () => {
  let randAlbum = Math.floor(Math.random() * (albums.length - 1));
  return albums[randAlbum];
};

const emptyAlbum = () => {
  return {
    name: 'empty',
    title: 'empty',
    cover: 'empty',
    description: 'empty album',
    photos: '',
  };
};

export const getAlbums2 = async () => {
  let resp: Album[] = [];
  try {
    const response: Album[] = await fetch(`${albumsServer}/albums`).then(
      (response) => response.json()
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbums = () => {
  return albums;
};

/*
  get album with onHomePage=true
  if there are no albums - leave empty
  if there are albums, but non of them with onHomePage=true, get a random one
*/
export const getHomePageAlbum = () => {
  if (albums.length > 0) {
    let homeAlbum = searchHomeAlbum();
    if (homeAlbum !== undefined) {
      return homeAlbum;
    } else {
      return randomAlbum();
    }
  }
  return emptyAlbum();
};

export const getAlbumPhotos = (album: string | undefined): Photo[] => {
  //TODO path.join()
  const photos = require(albumsFolder + '/' + album + '/album.json').photos;
  return photos;
};
