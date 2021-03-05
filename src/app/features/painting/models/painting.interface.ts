export interface Painting {
  artist: string;
  createdOn?: Date | string;
  description: string;
  id?: string;
  images: { front?: string; rest?: string[] };
  lastUpdatedOn?: Date | string;
  material: string;
  medium: string;
  name: string;
  price: { unit?: string; value?: number };
  size: { height?: number; width?: number; unit?: string };
  type: string;
  updatedBy: string | null;
}
