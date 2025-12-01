export interface Errors {
  errorItems: string[]
  name: string
  email: string
  subject: string
  detail: string
  agreement: string
}

export interface Values {
  name: string
  email: string
  subject: string
  detail: string
  agreement: boolean
}