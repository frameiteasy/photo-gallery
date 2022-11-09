export interface Album {
  name: string;
  title: string;
  photos: string;
  description?: string | undefined;
  onHomePage?: boolean | undefined | string;
}
