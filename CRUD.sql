USE spotify;

INSERT INTO cancion (`autor`, `titulo`)
VALUES 
('Pirulo', 'Al don pirulero'),
('Pirulo2', 'A los purilines'); 

UPDATE cancion
SET `autor` = 'Pirulon'
WHERE `id` = 20;

DELETE FROM cancion
WHERE `id` IN (19,20);

INSERT INTO usuario (`username`)
VALUES ('diegoferesin');

INSERT INTO cancion (`autor`, `titulo`)
VALUES ('Diego 1', 'titulo de la canción 1'),
('Diego 2', 'titulo de la canción 2');


INSERT INTO lista (`nombre`, `propietario_id`)
VALUES ('Mi primer lista', 5);

DELETE FROM cancion_lista
WHERE `lista_id` in (5, 4);

DELETE FROM lista
WHERE `propietario_id` = 4;

DELETE FROM usuario 
WHERE `id` = 4; 

UPDATE cancion
SET `autor` = 'Backstreet Boy'
WHERE `id` in (17,18);

SELECT * FROM cancion;


