CREATE DATABASE nha CHARACTER SET utf8 COLLATE utf8_general_ci;
USE nha;

CREATE TABLE cursisten (
id int(11) NOT NULL AUTO_INCREMENT,
name varchar(50),
city varchar(50),
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;
INSERT INTO cursisten (id, name, city) VALUES
(1, 'Anke D', 'Eindhoven'),
(2, 'Luna S', 'Tilburg'),
(3, 'Johan P', 'Groningen'),
(4, 'Rita K', 'Rotterdam');