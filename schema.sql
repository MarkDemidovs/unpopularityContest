( sudo -i -u postgres -> psql)

CREATE DATABASE unpopularity;

\c unpopularity;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    ratio INTEGER NOT NULL DEFAULT 0
);