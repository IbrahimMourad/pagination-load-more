export interface Row {
    name?: string;
    email?: string;
    itemId?: string
    gender?: string
    login: { uuid: string }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
}