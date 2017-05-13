create database test;

CREATE TABLE `t_users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(32) NOT NULL,
  `userpwd` varchar(64) NOT NULL,
  `user_role` int(11) NOT NULL DEFAULT '1',
  `user_phone` varchar(16) DEFAULT NULL,
  `useremail` varchar(32) DEFAULT NULL,
  `registertime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

