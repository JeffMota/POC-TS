import { genders, movies, plataforms } from "@prisma/client"

export type Movie = {
  id: number
  name: string
  plataformId: number
  genders: number[]
  watched: boolean
  note?: number
  resume?: string
}

export type insertMovie = Omit<Movie, "id">

export type updateMovie = Partial<Movie>

export type insertGender = Omit<genders, "id">

export type insertPlataform = Omit<plataforms, "id">