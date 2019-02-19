CREATE DATABASE `Chat`;

USE `Chat`;

CREATE TABLE `Mensajes` (
  `id` int(11) AUTO_INCREMENT,
  `mensaje` varchar(280) NOT NULL,
  `user_name` varchar(40) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `mensajes`
    (`id`, `mensaje`, `user_name`, `fecha`)
VALUES
    (1, 'Bienvenides', 'Admin', NOW());

SELECT * FROM mensajes;
INSERT INTO mensajes
(`mensaje`, `user_name`, `fecha`)
VALUES 
('Bienvenido Diego', 'Diego', NOW());
INSERT INTO mensajes
(`mensaje`, `user_name`, `fecha`)
VALUES 
('Bienvenido Diego2', 'Diego2', NOW());

UPDATE mensajes
SET `mensaje` = 'body.mensaje'
WHERE `id` = 'body.id';