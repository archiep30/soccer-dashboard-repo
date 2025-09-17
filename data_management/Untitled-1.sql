-- Active: 1757634405710@@127.0.0.1@3306@soccerdb
CREATE TABLE teams(
    team_id INT PRIMARY KEY,
    team_name VARCHAR(100),
    nickname VARCHAR(4),
    colors VARCHAR(100),
    logo VARCHAR(100),
    coach VARCHAR(100),
    founded INT,
    standing INT,
    played INT,
    won INT,
    draw INT,
    loss INT,
    points INT,
    goal_diff INT,
    matchday INT
)

DROP TABLE players;
DROP TABLE games;
TRUNCATE TABLE teams;
CREATE TABLE players(
    player_id INT PRIMARY KEY,
    player_name VARCHAR(100),
    nationality VARCHAR(50),
    flagImg VARCHAR(100),
    pos VARCHAR(20),
    dob DATE,
    team_id INT,
    match_datetime DATETIME,
    FOREIGN KEY (team_id) REFERENCES teams(team_id)
)



CREATE TABLE games(
    matchday INT,
    match_id INT PRIMARY KEY,
    home_team VARCHAR(50),
    away_team VARCHAR(50),
    match_date TIMESTAMP,
    home_score INT,
    away_score INT,
    home_score_firsthalf INT,
    away_score_firsthalf INT,
    match_status VARCHAR(20),
    referee VARCHAR(60),
    home_team_id INT,
    away_team_id INT,
    winner VARCHAR(20),
    FOREIGN KEY (home_team_id) REFERENCES teams(team_id),
    FOREIGN KEY (away_team_id) REFERENCES teams(team_id)
)

CREATE TABLE topScorers(
    player_id INT,
    goals INT,
    assists INT,
    penalties INT,
    games INT,

    FOREIGN KEY (player_id) REFERENCES players(player_id)
)