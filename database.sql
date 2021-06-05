-- Use queries below to create the "images" table for your react_gallery database
-- and populate it with initial image data

CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	likes INT DEFAULT 0,
	title VARCHAR(50)
);

INSERT INTO images (path, description, title)
VALUES 
('images/acro.jpg', 'AcroYoga: A practice combining a blend of elements from yoga and partner acrobatics', 'Acro Yoga'),
('images/kauai.jpg', 'The Napali Coast is a cliffside treasure trove of natural wonder along the north side of Kauai, Hawaii', 'Napali Coast: Kauai, HI'),
('images/mia.jpg', 'This is Mia, a spunky three-year-old miniature dachshund affectionately nicknamed "Piglet"', 'Mia'),
('images/peaches.jpg', 'Meet Peaches, a loving and protective six-year-old miniature dachshund', 'Peaches'),
('images/plitvice.jpg', 'Plitvice Lakes National Park: A park in Croatia that feels more like a fairy tail than reality', 'Plitvice Lakes National Park'),
('images/sacre-coeur.jpg', 'In the Montmartre district, on the northern side of Paris, lies the Sacré-Cœur Basilica', 'Sacré-Cœur Basilica'),
('images/wedding.jpg', 'A picture of my wife Vanessa and me, grinning wildly on our wedding day', 'Wedding')
;