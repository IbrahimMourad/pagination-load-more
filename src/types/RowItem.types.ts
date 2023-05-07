export interface Row {
    name?: {
        first?: string
        last?: string
    };
    email?: string;
    login: { uuid: string }
    picture: {
        thumbnail: string
    }
}