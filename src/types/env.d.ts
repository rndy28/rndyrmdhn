declare global {
    namespace NodeJS {
        interface ProcessEnv {
            UNSPLASH_ACCESS_KEY: string;
            UNSPLASH_COLLECTIONS_ID: number;
        }
    }
}

export {}