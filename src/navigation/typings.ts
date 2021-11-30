import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface IAuthContext {
  userAuth?: FirebaseAuthTypes.User;
  setUserAuth?: React.Dispatch<React.SetStateAction<any>>;
  login?: (email: string, password: string) => void;
  register: (email: string, password: string, username: string) => void;
  logout?: () => void;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<any>>;
}
