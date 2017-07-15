export interface Metric {
  eventName: string;
  scope: string;
}

export interface AnalyticsImplementation {
  recordEvent(metric: Metric): void;
}
