export interface IMessageProps {
  chatId: string;
  message: string;
  date?: string;
  id?: string;
}

export interface IAnswerProps {
  receiptId: number;
  body: IAnswerBodyProps;
  timestamp: number;
  idMessage: string;
  senderData: IAnswerSenderDataProps;
  messageData: IAnswerMessageDataProps;
}

export interface IAnswerBodyProps {
  typeWebhook: string;
  instanceData: IAnswerBodyInstanceDataProps;
  company: string;
  email: string;
  num?: number;
}

export interface IAnswerBodyInstanceDataProps {
  idInstance: number;
  wid: string;
  typeInstance: string;
}

export interface IAnswerSenderDataProps {
  chatId: string;
  chatName: string;
  sender: string;
  senderName: string;
  senderContactName: string;
}

export interface IAnswerMessageDataProps {
  typeMessage: string;
  textMessageData: {
    textMessage: string;
  };
}
