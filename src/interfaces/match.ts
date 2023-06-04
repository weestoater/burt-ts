export interface Match {
    season: string;
    scored: number;
    conceded: number;
    date: string;
    opposition: string;
    venue: string;
    video?: string;
    league?: string;
    cards?: any[];
    goals?: any[];
}