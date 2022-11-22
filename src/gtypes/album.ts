export interface Album {
  name: string;
  title: string;
  cover: string;
  photos: string;
  description?: string | undefined;
  onHomePage?: boolean | undefined | string;
}
