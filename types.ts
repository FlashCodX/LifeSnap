export enum NotificationTypes {
  none,
  comment,
  like,
  mention,
  follow,
  followRequest,
}

export enum HeaderStates {
  home,
  messages,
  upload,
  explore,
  notifications,
  profile,
}
  
 export interface NotificationInterface {
     id: string | number
    type: NotificationTypes;
  
  }


