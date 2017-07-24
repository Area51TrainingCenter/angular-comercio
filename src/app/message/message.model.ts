import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';

export interface Message {
  id?: string;
  sentAt: Date;
  isRead?: boolean;
  thread?: Thread;
  author: User;
  text: string;
}
