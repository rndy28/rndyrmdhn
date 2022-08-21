import type { Photo } from "types/photo";

const getPhoto = async (): Promise<Photo | null> => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?collections=${
        import.meta.env.UNSPLASH_COLLECTIONS_ID
      }`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );
    const collections: Promise<Photo> = await res.json();

    return collections;
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export default getPhoto;
