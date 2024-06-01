interface Payload {
  data?: any;
  token?: string;
  id?: string | number;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;

export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload?: Payload;
}

export interface Reducers {
  auth: AuthState;
  user: UserState;
}

export interface AuthState {
  loading: boolean;
  isLogin: boolean;
  error: string;
  token: string;
}
export interface UserState {
  profile: {
    loading: boolean;
    error: string;
    data: any;
  };
  list: {
    loading: boolean;
    error: string;
    data: any;
  };
  detail: {
    loading: boolean;
    error: string;
    data: any;
  };
  actions?: {
    loading: boolean;
    error: string;
  };
}
