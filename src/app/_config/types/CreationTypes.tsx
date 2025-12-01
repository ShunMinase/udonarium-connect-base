import { Categories } from "./CategoryTypes"

export interface CreationsArticle {
  id: number
  title: string
  display_priority: string
  publish_date: string
  thumbnail_url: string
  categories: Categories[]
  client_name: string
  date: string
  rel_url1: string
}