import {
  SetStateAction,
  createContext,
  useState,
  Dispatch,
  ReactNode,
} from 'react';
import { Album } from '../../gtypes/album';

export type AlbumsContextType = {
  albums: Album[];
  setAlbums: Dispatch<SetStateAction<Album[]>>;
};

const defalutContext = {
  albums: [],
  setAlbums: (albums: Album[]) => {},
} as AlbumsContextType;

export const AlbumsContext = createContext(defalutContext);

type AlbumsProviderProps = {
  children: ReactNode;
};

export const AlbumsProvider = ({ children }: AlbumsProviderProps) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  return (
    <AlbumsContext.Provider value={{ albums, setAlbums }}>
      {children}
    </AlbumsContext.Provider>
  );
};
