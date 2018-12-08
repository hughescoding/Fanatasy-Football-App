CREATE DATABASE nflplayers_db;
USE nflplayers_db;

CREATE TABLE players
(
	id int NOT NULL AUTO_INCREMENT,
    rank int,
	name varchar(255) NOT NULL,
    nfl_team varchar(255) NOT NULL,
    position_rank int,
    bye_week int,
    points_avg, int,
	drafted BOOLEAN DEFAULT false,
    fantasy_team varchar(255),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
