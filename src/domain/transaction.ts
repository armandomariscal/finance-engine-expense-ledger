export type TransactionType = "charge" | "payment";

export interface Transaction {
    id: number;

    operationDate: Date;
    postDate: Date;

    description: string;
    amount: number;

    type: TransactionType;
}