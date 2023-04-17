--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: GendersOnMovies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."GendersOnMovies" (
    "movieId" integer NOT NULL,
    "genderId" integer NOT NULL
);


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Name: genders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genders (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: genders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genders_id_seq OWNED BY public.genders.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    name text NOT NULL,
    watched boolean DEFAULT false NOT NULL,
    note numeric,
    resume text,
    "plataformId" integer NOT NULL
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: plataforms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.plataforms (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: plataforms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.plataforms_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: plataforms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.plataforms_id_seq OWNED BY public.plataforms.id;


--
-- Name: genders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genders ALTER COLUMN id SET DEFAULT nextval('public.genders_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: plataforms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforms ALTER COLUMN id SET DEFAULT nextval('public.plataforms_id_seq'::regclass);


--
-- Data for Name: GendersOnMovies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."GendersOnMovies" VALUES (1, 4);
INSERT INTO public."GendersOnMovies" VALUES (2, 4);
INSERT INTO public."GendersOnMovies" VALUES (3, 3);
INSERT INTO public."GendersOnMovies" VALUES (3, 4);
INSERT INTO public."GendersOnMovies" VALUES (4, 4);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations VALUES ('f3629fef-712f-4235-a746-8bd48dd56eab', '0e27ce8b4daf8331e7639dce3cb62e76737149fb87df68696c54a28d800504b9', '2023-04-15 10:29:47.953158-03', '20230414173014_create_movies_table', NULL, NULL, '2023-04-15 10:29:47.938873-03', 1);
INSERT INTO public._prisma_migrations VALUES ('5f01e39e-e2df-4b67-a545-8828c429cc67', 'c20ccc6ee732b1a503cade6e110c0663b32115bbaae5137fad310a47e65f25df', '2023-04-15 10:29:47.973213-03', '20230414174323_genders_table', NULL, NULL, '2023-04-15 10:29:47.955152-03', 1);
INSERT INTO public._prisma_migrations VALUES ('5b18d367-b197-41a0-9414-f11633f99bfe', '5fca214694f5a19198a3e2efc9bf89a41986b3f793dc26b326d8197f6c4dbcfa', '2023-04-15 10:29:47.985272-03', '20230415132317_cretate_plataform_table', NULL, NULL, '2023-04-15 10:29:47.974246-03', 1);
INSERT INTO public._prisma_migrations VALUES ('7a65e23d-68ce-477d-9f94-9b4c4d2c8edf', '1501ac4f0a0ca8cafed3ecd92f9d263376af093792048c3b34a07903aa041f5d', '2023-04-15 10:29:47.991221-03', '20230415132654_correction_plataform_id', NULL, NULL, '2023-04-15 10:29:47.986265-03', 1);


--
-- Data for Name: genders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genders VALUES (1, 'ação');
INSERT INTO public.genders VALUES (2, 'aventura');
INSERT INTO public.genders VALUES (3, 'comédia');
INSERT INTO public.genders VALUES (4, 'romance');


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (1, 'A culpa é das estrelas', false, NULL, NULL, 2);
INSERT INTO public.movies VALUES (2, 'Orgulho e preconceito', false, NULL, NULL, 1);
INSERT INTO public.movies VALUES (3, 'A proposta', false, NULL, NULL, 2);
INSERT INTO public.movies VALUES (4, 'Jane Eyre', false, NULL, NULL, 3);


--
-- Data for Name: plataforms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.plataforms VALUES (1, 'Netflix');
INSERT INTO public.plataforms VALUES (2, 'Prime Video');
INSERT INTO public.plataforms VALUES (3, 'HBOMAX');


--
-- Name: genders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genders_id_seq', 4, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 4, true);


--
-- Name: plataforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.plataforms_id_seq', 3, true);


--
-- Name: GendersOnMovies GendersOnMovies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."GendersOnMovies"
    ADD CONSTRAINT "GendersOnMovies_pkey" PRIMARY KEY ("movieId", "genderId");


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: genders genders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: plataforms plataforms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforms
    ADD CONSTRAINT plataforms_pkey PRIMARY KEY (id);


--
-- Name: GendersOnMovies GendersOnMovies_genderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."GendersOnMovies"
    ADD CONSTRAINT "GendersOnMovies_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES public.genders(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: GendersOnMovies GendersOnMovies_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."GendersOnMovies"
    ADD CONSTRAINT "GendersOnMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: movies movies_plataformId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_plataformId_fkey" FOREIGN KEY ("plataformId") REFERENCES public.plataforms(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

