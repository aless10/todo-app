export type ITask = {
  id: string
  title: string
  active: boolean
  createdAt: Date
  text?: string
  state: 'deleted' | 'completed' | 'created'
  tags?: string[]
}
