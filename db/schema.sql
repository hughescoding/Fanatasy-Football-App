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

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `user_password` text NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fantasy_team` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE teams
(
	id int NOT NULL AUTO_INCREMENT,
    username text NOT NULL,
    fantasy_team varchar(255),
    players text NOT NULL,
	PRIMARY KEY (id)
);