CREATE DATABASE gridiron_db;
USE gridiron_db;

CREATE TABLE pprPlayers
(
	id int NOT NULL AUTO_INCREMENT,
    rank int,
	player_name varchar(255) NOT NULL,
    nfl_team varchar(255) NOT NULL,
    position_rank varchar (6),
    player_position varchar(4) NOT NULL,
    bye_week int,
    points_avg DECIMAL(4 , 1 ),
	drafted BOOLEAN DEFAULT false,
    fantasy_team varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE standardPlayers
(
	id int NOT NULL AUTO_INCREMENT,
    rank int,
	player_name varchar(255) NOT NULL,
    nfl_team varchar(255) NOT NULL,
    position_rank varchar(6),
    player_position varchar(4) NOT NULL,
    bye_week int,
    points_avg DECIMAL(4 , 1 ),
	drafted BOOLEAN DEFAULT false,
    fantasy_team varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
    username text NOT NULL,
    user_password text NOT NULL,
    email varchar(255) NOT NULL,
    fantasy_team varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE teams
(
	id int NOT NULL AUTO_INCREMENT,
    username text NOT NULL,
    fantasy_team varchar(255),
    players text NOT NULL,
	PRIMARY KEY (id)
);