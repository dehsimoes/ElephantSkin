/* CREATE DATABASE elephant;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS visitor (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
);

CREATE TABLE IF NOT EXISTS events (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  FOREIGN KEY (visitor_id) REFERENCES events(visitorId)
  url VARCHAR NOT NULL ,
  timestamp TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS sessionEvent (
  id VARCHAR NOT NULL UNIQUE,
  duration TIMESTAMP NOT NULL,
  pages VARCHAR,
  startTime TIMESTAMP NOT NULL,
  FOREIGN KEY (visitor_id) REFERENCES events(visitorId)
); */