CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   id_usernames INT NOT NULL,
--   id_rooms INT NOT NULL,
--   messageText VARCHAR(255)
-- );

-- /* Create other tables and define schemas for them here! */

-- CREATE TABLE usernames (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE rooms (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   room VARCHAR(255) NOT NULL
-- );

-- -- ---
-- -- Foreign Keys
-- -- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (id_usernames) REFERENCES usernames (id);
-- ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES rooms (id);

-- INSERT INTO `messages` (`id`,`id_usernames`,`id_rooms`,`messageText`) VALUES
-- (0,0,0,'sup guys');
-- INSERT INTO `usernames` (`id`,`username`) VALUES
-- (0,'david');
-- INSERT INTO `rooms` (`id`,`room`) VALUES
-- (0,'lobby');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INTEGER NOT NULL AUTO_INCREMENT COMMENT 'the user id',
  `name` VARCHAR(255) NOT NULL COMMENT 'the users full name',
  `email` VARCHAR(255) NOT NULL COMMENT 'the users email',
  `password` VARCHAR(255) NOT NULL COMMENT 'the users password',
  `addressOne` VARCHAR(255) NOT NULL COMMENT 'first line of address',
  `addressTwo` VARCHAR(255) NOT NULL COMMENT 'second line of address',
  `city` VARCHAR(255) NOT NULL COMMENT 'city',
  `state` VARCHAR(255) NOT NULL,
  `zip` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `id_billing` INTEGER NOT NULL,

  PRIMARY KEY (`id`)
) COMMENT 'contains all users who check out';

-- ---
-- Table 'usernames'
-- holds each username submitted to the application
-- ---

DROP TABLE IF EXISTS `billing`;

CREATE TABLE `billing` (
  `id` INTEGER NOT NULL AUTO_INCREMENT COMMENT 'the user id',
  `cc` VARCHAR(255) NOT NULL,
  `exp` VARCHAR(255) NOT NULL,
  `cvv` VARCHAR(255) NOT NULL,
  `bzip` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'holds each users billing info';

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `user` ADD FOREIGN KEY (id_billing) REFERENCES `billing` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `usernames` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `usernames` (`id`,`username`) VALUES
-- (0,'David');
-- INSERT INTO `rooms` (`id`,`room`) VALUES
-- (0,'lobby');
-- INSERT INTO `messages` (`id`,`id_usernames`,`id_rooms`,`messageText`) VALUES
-- (0,1,1,'howdy yall');
-- INSERT INTO `usernames` (`id`,`username`) VALUES
-- (1,'Kai');
-- INSERT INTO `rooms` (`id`,`room`) VALUES
-- (1,'lobby');
-- INSERT INTO `messages` (`id`,`id_usernames`,`id_rooms`,`messageText`) VALUES
-- (1,1,1,'sup man');

-- query for finding usernames rooms, and messages:
-- select u.username, r.room, m.messageText from messages m inner join usernames u on u.id = m.id_usernames inner join rooms r on r.id = m.id_rooms;