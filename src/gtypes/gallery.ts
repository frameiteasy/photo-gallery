import { Photo } from "./photo";

export interface Gallery {
  name: string;
  desc: string;
  cover: Photo;
}

//TODO How to apply zod to this?
