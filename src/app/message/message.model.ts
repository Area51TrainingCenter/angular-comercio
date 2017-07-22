import { User } from '../user/user.model';
// Importar el Thread

export interface Message {
  id?: string;
  sentAt: Date;
  isRead?: boolean;
  thread?: boolean; // TODO: Set thread type
  author: User;
  text: string;
}
