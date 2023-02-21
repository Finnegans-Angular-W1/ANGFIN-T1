export interface Transaction {
  amount: number;
  concept: string;
  date: string;
  type: TransactionType;
  accountId: number;
  userId: number;
  to_account_id: number;
  id:number;
}

export type TransactionType = 'topup' | 'payment';

