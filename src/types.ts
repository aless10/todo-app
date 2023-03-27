export type TaskProps = {
  id: number
  title: string
  active: boolean
  createdAt: Date
  text?: string
  state: 'deleted' | 'completed' | 'created'
  tags?: string[]
}
