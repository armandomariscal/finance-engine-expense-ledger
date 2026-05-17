import { Category } from "./category";
import { PaymentMethod } from "./payment";

export type TransactionType = "charge" | "payment";

export interface Transaction {
  id: string;

  operationDate: Date;
  postDate: Date;

  description: string;

  amount: number;

  type: TransactionType;

  category?: Category;

  paymentMethod?: PaymentMethod;
}
