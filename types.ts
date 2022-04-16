export enum NotificationTypes {
    comment,
    like,
    mention,
    follow,
    acceptfollow,
  }
  
 export interface NotificationInterface {
     id: string | number
    type: NotificationTypes;
  
  }



  export class Notification {
      


  }