-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: notas_bd
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `nota`
--

DROP TABLE IF EXISTS `nota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nota` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(30) DEFAULT NULL,
  `texto` varchar(256) DEFAULT NULL,
  `hora` varchar(30) DEFAULT NULL,
  `fecha` varchar(30) DEFAULT NULL,
  `likes` int DEFAULT NULL,
  `color` varchar(30) DEFAULT NULL,
  `usuario_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nota`
--

LOCK TABLES `nota` WRITE;
/*!40000 ALTER TABLE `nota` DISABLE KEYS */;
INSERT INTO `nota` VALUES (2,'Título de la nota','Texto de la nota','12:34','2023-04-04',0,'danger','1'),(3,'Nota informativa','Esta es una nota para informar','01:34','2021-05-04',0,'primary','10'),(4,'Nota 45','recordatorio para salir','15:34','2023-05-04',0,'primary','10'),(5,'Cumple fernan','hoy es el cumple de mi amigo fernan, vamos hacer una fiestaaaaaa!!!!','15:34','2023-05-04',0,'success','3'),(6,'Cumple fernan','hoy es el cumple de mi amigo fernan, vamos hacer una fiestaaaaaa!!!!','15:34','2023-05-04',0,'success','3'),(7,'Cumple fernan','hoy es el cumple de mi amigo fernan, vamos hacer una fiestaaaaaa!!!!','15:34','2023-05-04',0,'success','3'),(8,'nueva nota','asdasdasd','23:34:55','Tue Apr 04 2023',0,'warning','5'),(9,'nueva nota agua','nuevo texto editado rojo del usuario agua , e','23:40:36','Tue Apr 04 2023',0,'danger','12'),(10,'nueva nota carusel','nueva nota carousel azul','00:35','2023-04-05',0,'primary','12'),(12,'nueva notas','asdasdasdasdasd','00:51','2023-04-05',0,'info','13');
/*!40000 ALTER TABLE `nota` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-05  1:33:31
