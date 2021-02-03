// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Question = {
  id: number
  type: string
  options?: Object[]
  label: string
  field: string
  displayConditions?: String[]
}

export type Page = {
  pageNum: number
  questionIds: number[]
}

export type Survey = {
  id: string
  published: boolean
  started_at: string
  ended_at: string
  questions: Question[]
  pages: Page[]
}
