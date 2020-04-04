import { Category } from './category';
export class Bill {
  id: number;
  description:string;
  value:number;
  category:Category
  dateBill:Date;
}
