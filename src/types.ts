export interface ITimeMeasurement {
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
  Milliseconds,
  Seconds,
  Minutes,
  Hours,
  Days,
}
