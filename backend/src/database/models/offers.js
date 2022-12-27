// `id` int(11) NOT NULL,
// `tax` varchar(255) NOT NULL,
// `tariff` varchar(255) NOT NULL,
// `adValorem` varchar(255) NOT NULL,
// `float` varchar(255) NOT NULL,
// `iof` varchar(255) NOT NULL,
// `expiresIn` datetime NOT NULL,
// `paymentStatusSponsor` tinyint(1) DEFAULT 0,
// `paymentStatusProvider` tinyint(1) DEFAULT 0,
// `createdAt` datetime NOT NULL,
// `updatedAt` datetime NOT NULL,
// `orderId` int(11) DEFAULT NULL,
// `sponsorId` int(11) DEFAULT NULL

// ADD PRIMARY KEY (`id`),
// ADD KEY `orderId` (`orderId`),
// ADD KEY `sponsorId` (`sponsorId`);

// ADD CONSTRAINT `offers_ibfk_61` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
// ADD CONSTRAINT `offers_ibfk_62` FOREIGN KEY (`sponsorId`) REFERENCES `sponsors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;