export enum SourceType {
  APP = 'APP',
  DISCORD = 'DISCORD',
  EMAIL = 'EMAIL',
  TEXT = 'TEXT',
  USER = 'USER',
}

export enum IntervalType {
  H = 'HOUR',
  D = 'DAY',
  W = 'WEEK',
  M = 'MONTH',
  Y = 'YEAR'
}

export enum RatingType {
  'NUMBER',
  'FEELING',
  'PERCENT'
}

export enum MessageStatus {
  'ACKNOWLEDGED',
  'CREATED',
  'ERROR',
  'OPENED',
  'QUEUED',
  'SENT',
}