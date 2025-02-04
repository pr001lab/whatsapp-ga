export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Successed = 'successed',
  Failed = 'failed',
}

export enum APIRoute {
  SignIn = '/auth/local',
  SignUp = '/auth/local/register',
  getProfileUser = 'users/me',
  Clients = '/clients',
}

export enum AppRoute {
  Main = '/',
  SignUp = '/sign-up',
  SignIn = '/sign-in',
  Client = '/client',
  ClientId = '/client/:id',
  AddClient = '/add-client/',
}

export enum LabelsMenu {
  EncryptionProtection = 'Encryption protection',
  Chats = 'Chats',
  Status = 'Status',
  Communities = 'Communities',
  Settings = 'Settings',
  Profile = 'Profile',
  Attach = 'Attach',
  Microphone = 'Microphone',
  AddNewChat = 'Add New Chat',
  ChatMenu = 'Chat Menu',
  Search = 'Search',
  Archive = 'Archive',
  UploadApp = 'Upload App',
  SignUp = 'SignUp',
  SignIn = 'SignIp',
  LogOut = 'LogOut',
}

export enum FilterEnum {
  All = 'All',
  Unread = 'Unread',
  Favorite = 'Favorite',
  Groups = 'Groups',
}
