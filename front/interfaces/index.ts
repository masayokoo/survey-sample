// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Question = {
  id: number
  type: string
  options?: object[]
  label: string
  field: string
  placeholder?: string
  displayConditions?: DisplayCondition[]
}

type DisplayCondition = {
  field: string
  values?: string[]
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
