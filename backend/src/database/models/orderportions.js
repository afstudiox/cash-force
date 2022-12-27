// `id` int(11) NOT NULL,
// `nDup` varchar(255) NOT NULL,
// `dVenc` varchar(255) NOT NULL,
// `vDup` varchar(255) NOT NULL,
// `availableToMarket` tinyint(1) DEFAULT 1,
// `createdAt` datetime NOT NULL,
// `updatedAt` datetime NOT NULL,
// `orderId` int(11) DEFAULT NULL

// ADD PRIMARY KEY (`id`),
// ADD KEY `orderId` (`orderId`);

// ADD CONSTRAINT `orderPortions_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;