interface User {
  uid?: string;
}

export interface IAuthContext {
  userAuth?: User;
  setUserAuth?: React.Dispatch<React.SetStateAction<Object>>;
  login?: (email: string, password: string) => void;
  register?: (email: string, password: string) => void;
  logout?: () => void;
}
