import { Dispatch, SetStateAction, useCallback } from 'react';
import { Album } from '../gtypes/album';
const albumsServer: string | undefined = process.env.REACT_APP_SERVER;

type UseDataLoaderReturnType = {
  getAlbums: () => void;
};

export const useDataLoader = (
  setAlbums: Dispatch<SetStateAction<Album[]>>
): UseDataLoaderReturnType => {
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
  };
};
