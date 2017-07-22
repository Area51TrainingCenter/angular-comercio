import { Message } from '../message/message.model';

export interface Thread {
  id: string;
  name: string;
  avatarSrc: string;
  messages: Message[];
}
