import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { LoadingStatus } from '../constant.ts';
import { IMessageProps } from '../types/message.ts';
import { loadState } from '../utils/utils.tsx';

interface IInitialState {
  items: IMessageProps[];
  loadingStatus: LoadingStatus;
  loadingError: string | null;
}

const initialState: IInitialState = {
  items: [],
  loadingStatus: LoadingStatus.Idle,
  loadingError: null,
};

export const postMessage = createAsyncThunk<
  IMessageProps | undefined,
  { message: string }
>('message/postMessage', async ({ message }) => {
  const localStorage = loadState<{
    apiUrl: string;
    idInstance: string;
    apiTokenInstance: string;
    phone: string;
  }>('green-api');
  const body: IMessageProps = {
    chatId: `${localStorage?.phone}@c.us`,
    message: message,
  };

  try {
    await axios.post(
      `${localStorage?.apiUrl}/waInstance${localStorage?.idInstance}/sendMessage/${localStorage?.apiTokenInstance}`,
      body,
    );

    body.date = JSON.stringify(new Date());
    body.id = crypto.randomUUID();

    return body;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data.message);
    }
  }
});

export const getMessage = createAsyncThunk<IMessageProps | undefined>(
  'message/getMessage',
  async () => {
    const localStorage = loadState<{
      apiUrl: string;
      idInstance: string;
      apiTokenInstance: string;
      phone: string;
    }>('green-api');
    try {
      const { data } = await axios.get(
        `${localStorage?.apiUrl}/waInstance${localStorage?.idInstance}/receiveNotification/${localStorage?.apiTokenInstance}`,
      );

      data.chatId = data.body.senderData.chatId;
      data.message = data.body.messageData.textMessageData.textMessage;
      data.date = JSON.stringify(new Date(data.body.timestamp * 1000));
      data.id = data.body.idMessage;
      data.author = 'guest';

      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.response?.data.message);
      }
    }
  },
);

// export const deleteClient = createAsyncThunk<
//   IMessageProps,
//   { documentId: string },
//   {
//     state: RootState;
//   }
// >('client/deleteClient', async ({ documentId }, thunkAPI) => {
//   const jwt = thunkAPI.getState().user.jwt;
//
//   try {
//     const { data } = await axios.delete(
//       `${API}${APIRoute.Clients}/${documentId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       },
//     );
//
//     return data.data;
//   } catch (err) {
//     if (err instanceof AxiosError) {
//       throw new Error(err.response?.data.message);
//     }
//   }
// });

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postMessage.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.items.push(action.payload);
        state.loadingStatus = LoadingStatus.Successed;
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.loadingStatus = LoadingStatus.Failed;
        state.loadingError = action.payload ? action.payload.toString() : null;
      });
    builder
      .addCase(getMessage.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.items.push(action.payload);
        state.loadingStatus = LoadingStatus.Successed;
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.loadingStatus = LoadingStatus.Failed;
        state.loadingError = action.payload ? action.payload.toString() : null;
      });
    // builder
    //   .addCase(deleteClient.pending, (state) => {
    //     state.loadingStatus = LoadingStatus.Loading;
    //   })
    //   .addCase(deleteClient.fulfilled, (state, action) => {
    //     state.items = state.items.filter(
    //       (item) => item.documentId !== action.meta.arg.documentId,
    //     );
    //     state.loadingStatus = LoadingStatus.Successed;
    //   })
    //   .addCase(deleteClient.rejected, (state, action) => {
    //     state.loadingStatus = LoadingStatus.Failed;
    //     state.loadingError = action.payload ? action.payload.toString() : null;
    //   });
  },
});

export default messageSlice.reducer;
export const clientActions = messageSlice.actions;
