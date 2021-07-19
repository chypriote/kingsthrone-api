

export interface WeeklyRank {
    buys: { id: number, has_num: number }[];
    score: number;
    last_score: number;
    last_day_score: { id: number, score: number }[];
    buff_buys: { id: number, has_num: number }[];
    buff_times: { id: number, time_out: number }[];
    countdown: number;
}