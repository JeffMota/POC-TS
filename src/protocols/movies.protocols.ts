import { movies } from "@prisma/client"

export type Movie = {
  id: number
  name: string
  plataform: string
  genders: number[]
  watched: boolean
  note?: number
  resume?: string
}

export type insertMovie = Omit<Movie, "id">

export type updateMovie = Partial<Movie>