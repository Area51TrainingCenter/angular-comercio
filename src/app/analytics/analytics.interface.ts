export interface Metric {
  eventname: string;
  scope: string;
}

export interface AnalyticsImplementation {
  recordEvent(metric: Metric): void;
}
