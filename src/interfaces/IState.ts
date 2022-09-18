import type { INotification } from "./INotifications";
import type IProject from "./IProject";

export default interface IState {
  projects: IProject[];
  notifications: INotification[];
}
