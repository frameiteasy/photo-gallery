import { useCallback, useState } from 'react';
import { Album } from '../../gtypes/album';

const albumsServer: string | undefined = process.env.REACT_APP_SERVER;

export const useAlbumCollection = () => {
  console.log('useAlbumCollection');

  const [albums, setAlbums] = useState<Album[]>([]);

  const getAlbums = useCallback(async () => {
    try {
      const response = await fetch(`${albumsServer}/albums`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setAlbums(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    getAlbums,
    albums,
  };
};
