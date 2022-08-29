-- -----------------------------------------------------
-- Schema ong_mente_sa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ong_mente_sa` DEFAULT CHARACTER SET utf8 ;
USE `ong_mente_sa` ;

-- -----------------------------------------------------
-- Table `ong_mente_sa`.`professional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ong_mente_sa`.`professional` (
  `uuid` VARCHAR(32) NOT NULL,
  `nome` VARCHAR(200) NOT NULL,
  `crp` VARCHAR(45) NOT NULL,
  `contato` VARCHAR(20) NOT NULL,
  `abordagem` VARCHAR(200) NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE INDEX `uuid_UNIQUE` (`uuid` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ong_mente_sa`.`patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ong_mente_sa`.`patient` (
  `uuid` VARCHAR(32) NOT NULL,
  `nome` VARCHAR(200) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `email` VARCHAR(48) NOT NULL,
  `genero` VARCHAR(24) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE INDEX `uuid_UNIQUE` (`uuid` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = '		';


-- -----------------------------------------------------
-- Table `ong_mente_sa`.`session`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ong_mente_sa`.`session` (
  `uuid` VARCHAR(32) NOT NULL,
  `professional_uuid` VARCHAR(32) NOT NULL,
  `patient_uuid` VARCHAR(32) NOT NULL,
  `data_agendamento` DATE NOT NULL,
  `status` VARCHAR(32) NOT NULL,
  `tama_abordado` VARCHAR(200) NULL,
  `tipo_agendamento` VARCHAR(45) NOT NULL,
  `duracao` VARCHAR(45) NOT NULL,
  `tipo_sessao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`uuid`, `professional_uuid`, `patient_uuid`),
  INDEX `fk_professional_has_patient_patient1_idx` (`patient_uuid` ASC) VISIBLE,
  INDEX `fk_professional_has_patient_professional_idx` (`professional_uuid` ASC) VISIBLE,
  UNIQUE INDEX `uuid_UNIQUE` (`uuid` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_patient_professional`
    FOREIGN KEY (`professional_uuid`)
    REFERENCES `ong_mente_sa`.`professional` (`uuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_professional_has_patient_patient1`
    FOREIGN KEY (`patient_uuid`)
    REFERENCES `ong_mente_sa`.`patient` (`uuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ong_mente_sa`.`session_patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ong_mente_sa`.`session_patient` (
  `uuid` VARCHAR(32) NOT NULL,
  `session_uuid` VARCHAR(32) NOT NULL,
  `patient_uuid` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`uuid`, `session_uuid`, `patient_uuid`),
  INDEX `fk_session_has_patient_patient1_idx` (`patient_uuid` ASC) VISIBLE,
  INDEX `fk_session_has_patient_session1_idx` (`session_uuid` ASC) VISIBLE,
  CONSTRAINT `fk_session_has_patient_session1`
    FOREIGN KEY (`session_uuid`)
    REFERENCES `ong_mente_sa`.`session` (`uuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_session_has_patient_patient1`
    FOREIGN KEY (`patient_uuid`)
    REFERENCES `ong_mente_sa`.`patient` (`uuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;