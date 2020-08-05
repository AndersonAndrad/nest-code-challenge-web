export interface IMessage {
  id: number;
  content: string;
  userId: number;
  user: {
    id: number;
    email: string;
  };
}
