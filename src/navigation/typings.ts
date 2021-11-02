export interface IAuthContext {
  userAuth?: any;
  setUserAuth?: React.Dispatch<React.SetStateAction<any>>;
  login?: (email: string, password: string) => void;
  register?: (email: string, password: string) => void;
  logout?: () => void;
}
