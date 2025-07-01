const app ={
    url: String(import.meta.env.VITE_URL),
    product: String(import.meta.env.VITE_PRODUCT),
    db: String(import.meta.env.VITE_DB),
    bucket: String(import.meta.env.VITE_BUCKET),
    collection: String(import.meta.env.VITE_COLLECTION),
    LikeColection: String(import.meta.env.VITE_LIKE_COLLECTION),
    KEY: String(import.meta.env.VITE_KEY),

}

export default app