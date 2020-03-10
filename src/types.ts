export interface ITimeMeasurement {
  ticks: number;
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

export interface ITimeQuantity {
  total: ITimeMeasurement;
  getTotalMilliseconds(): number;
}

export enum TimeUnit {
  Ticks,
  Milliseconds,
  Seconds,
  Minutes,
  Hours,
  Days,
}
