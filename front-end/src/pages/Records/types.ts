export type RecordsResponse = {
    content: RecordItem[];
    totalPages: Number;
}

export type RecordItem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: Platform;
    genreName: string;
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTTION';