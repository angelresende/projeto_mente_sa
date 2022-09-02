
-- -----------------------------------------------------
-- Schema ong_mente_sa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ong_mente_sa` DEFAULT CHARACTER SET utf8 ;
USE `ong_mente_sa` ;

-- -----------------------------------------------------
-- Table `ong_mente_sa`.`professional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ong_mente_sa`.`professional` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `crp` VARCHAR(45) NOT NULL,
  `contato` VARCHAR(20) NOT NULL,
  `abordagem` VARCHAR(200) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ong_mente_sa`.`patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ong_mente_sa`.`patient` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `nome` VARCHAR(200) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `email` VARCHAR(48) NOT NULL,
  `genero` VARCHAR(24) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = '		';


-- -----------------------------------------------------
-- Table `ong_mente_sa`.`session`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ong_mente_sa`.`session` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `professional_id` INT NOT NULL,
  `patient_id` INT NOT NULL,
  `data_agendamento` DATE NOT NULL,
  `status` VARCHAR(32) NOT NULL,
  `tama_abordado` VARCHAR(200) NULL,
  `tipo_agendamento` VARCHAR(45) NOT NULL,
  `duracao` VARCHAR(45) NOT NULL,
  `tipo_sessao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `professional_id`, `patient_id`),
  INDEX `fk_professional_has_patient_patient1_idx` (`patient_id` ASC) VISIBLE,
  INDEX `fk_professional_has_patient_professional_idx` (`professional_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_patient_professional`
    FOREIGN KEY (`professional_id`)
    REFERENCES `ong_mente_sa`.`professional` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_professional_has_patient_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `ong_mente_sa`.`patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ong_mente_sa`.`session_patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ong_mente_sa`.`session_patient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `session_id`  INT NOT NULL,
  `patient_id`  INT NOT NULL,
  PRIMARY KEY (`id`, `session_id`, `patient_id`),
  INDEX `fk_session_has_patient_patient1_idx` (`patient_id` ASC) VISIBLE,
  INDEX `fk_session_has_patient_session1_idx` (`session_id` ASC) VISIBLE,
  CONSTRAINT `fk_session_has_patient_session1`
    FOREIGN KEY (`session_id`)
    REFERENCES `ong_mente_sa`.`session` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_session_has_patient_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `ong_mente_sa`.`patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Table `ong_mente_sa`.`professional` - script inclusão
-- -----------------------------------------------------
INSERT INTO professional (nome, crp, contato, abordagem) 
VALUES ('Kalel Araujo', '14785/99', 16988989891, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac'),
		('Andressa Rodrigues', '98765/99', 22987541236, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac'),
		('Alaide Lopes', '98852/98', 54999965522, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac'),
        ('Amanda Gonçalves', '98852/97', 34999965522, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac'),
        ('Felipe Braga', '98852/96', 21999965522, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac'),
        ('Lucélia Nascimento', '98852/95', 33999965522, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac'),
        ('Elisangela Barbosa', '98852/94', 16999965522, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac'),
        ('Waldemar Araujo', '98852/93', 17999965522, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac'),
        ('Marta Affonso', '98852/92', 18999965522, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dui maximus, sagittis diam ac');
        