import { Moment } from "moment-timezone";

export interface Token {
  accessToken: string;
}

export interface DateRange {
  startDate: Moment | null;
  endDate: Moment | null;
}

export interface LfParams {
  method?: LfMethod;
  user?: string;
  period?: string;
  limit?: number;
  page?: number;
  from?: number;
  to?: number;
}

export enum LfMethod {
  topTracks = "user.getTopTracks",
  weeklyTrackChart = "user.getWeeklyTrackChart",
}

export enum LfPeriod {
  overall = "overall",
  week = "7day",
  month = "1month",
  quarter = "3month",
  half = "6month",
  year = "12month",
}
