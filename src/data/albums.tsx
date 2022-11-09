import albums from "./albums.json";

export const getAlbums = () => {
  return albums;
};

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
    name: "empty",
    title: "empty",
    description: "empty album",
    photos: "",
  };
};

/*
  get album with onHomePage=true
  if there are no albums - leave empty
  if there are albums, but non of them with onHomePage=true, get a random one
*/
export const getHomePageAlbum = () => {
  console.log(albums.length);
  if (albums.length > 0) {
    let homeAlbum = searchHomeAlbum();
    if (homeAlbum != undefined) {
      return homeAlbum;
    } else {
      return randomAlbum();
    }
  }
  return emptyAlbum();
};
