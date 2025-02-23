type ISODateString = `${number}-${number}-${number}T${string}`;

export interface Sale {
  id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: ISODateString;
}
