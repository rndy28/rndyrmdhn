import { Photo } from 'types/photo';

const getPhoto = async (): Promise<Photo> => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?collections=${process.env.UNSPLASH_COLLECTIONS_ID}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
  const collections: Promise<Photo> = await res.json();

  return collections;
};

export default getPhoto;
