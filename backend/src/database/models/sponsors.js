// `id` int(11) NOT NULL,
// `name` varchar(255) NOT NULL,
// `tradingName` varchar(255) DEFAULT NULL,
// `cashforceTax` varchar(255) DEFAULT NULL,
// `responsibleName` varchar(255) DEFAULT NULL,
// `responsibleEmail` varchar(255) DEFAULT NULL,
// `responsiblePosition` varchar(255) DEFAULT NULL,
// `responsiblePhone` varchar(255) DEFAULT NULL,
// `responsibleMobile` varchar(255) DEFAULT NULL,
// `website` varchar(255) DEFAULT NULL,
// `postalCode` varchar(255) DEFAULT NULL,
// `address` varchar(255) DEFAULT NULL,
// `number` varchar(255) DEFAULT NULL,
// `complement` varchar(255) DEFAULT NULL,
// `neighborhood` varchar(255) DEFAULT NULL,
// `city` varchar(255) DEFAULT NULL,
// `state` varchar(255) DEFAULT NULL,
// `bank` varchar(255) DEFAULT NULL,
// `bankAgency` varchar(255) DEFAULT NULL,
// `account` varchar(255) DEFAULT NULL,
// `phoneNumber` varchar(255) DEFAULT NULL,
// `situation` varchar(255) DEFAULT NULL,
// `situationDate` varchar(255) DEFAULT NULL,
// `createdAt` datetime NOT NULL,
// `updatedAt` datetime NOT NULL,
// `cnpjId` int(11) DEFAULT NULL,
// `email` varchar(255) DEFAULT NULL

// ADD PRIMARY KEY (`id`),
// ADD KEY `cnpjId` (`cnpjId`);

// ADD CONSTRAINT `sponsors_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
// COMMIT;