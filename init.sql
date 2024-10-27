CREATE DATABASE schoolops_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres
GRANT ALL ON TABLES TO schoolops_user;


-- Table: public.cadastro_aluno

-- DROP TABLE IF EXISTS public.cadastro_aluno;

CREATE TABLE IF NOT EXISTS public.cadastro_aluno
(
    cod_cliente integer NOT NULL,
    nome_aluno character varying(20) COLLATE pg_catalog."default" NOT NULL,
    idade integer NOT NULL,
    nota integer,
    frequencia integer,
    CONSTRAINT cadastro_aluno_pkey PRIMARY KEY (cod_cliente),
    CONSTRAINT cadastro_aluno_frequencia_check CHECK (frequencia >= 0 AND frequencia <= 100)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cadastro_aluno
    OWNER to postgres;

GRANT ALL ON TABLE public.cadastro_aluno TO postgres;

GRANT ALL ON TABLE public.cadastro_aluno TO schoolops_user;