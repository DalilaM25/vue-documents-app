export interface Document {
  id: number;
  name: string;
  description: string;
  image?: string;
}

export type DocumentListResponse = Document[];

