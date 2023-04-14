import { movies } from "@prisma/client"

export type Movie = {
  id: number
  name: string
  plataform: string
  gender: string
  watched: boolean
  note?: number
  resume?: string
}

export type insertMovie = Omit<movies, "id">

export type updateMovie = Partial<Movie>