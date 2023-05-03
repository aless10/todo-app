export type CounterType = {
  key: string;
  counter: number;
};

export type Tag = {
  label: string;
  color: string;
};
export type ITask = {
  id: string;
  title: string;
  active: boolean;
  createdAt: Date;
  text?: string;
  state: "deleted" | "completed" | "created";
  tags?: Tag[];
};

export type CsvHeaders = {
  label: string;
  key: string;
};

export type csvData = {
  headers: CsvHeaders[];
  filename: string;
  data: ITask[];
};
