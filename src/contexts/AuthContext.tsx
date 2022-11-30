import {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { auth, db } from "../services/firebase";
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  setDoc,
  DocumentData,
  getDoc,
  DocumentSnapshot,
} from "firebase/firestore";

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);
export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  logOff: () => Promise<void>;
  addUserSignUp: (user: string, email: string) => void;
}

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOff() {
    return signOut(auth);
  }

  function addUserSignUp(user: string, email: string) {
    setDoc(doc(db, "/users", email), {
      user: user,
      email: email,
    });
  }

  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubsrcibe;
  }, []);

  const values = {
    signUp,
    user,
    signIn,
    logOff,
    auth,
    addUserSignUp,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
