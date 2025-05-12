type LoginRequest = {
  username: string;
  password: string;
};

type FormType = LoginRequest;

type TokenResponse = {
  access_token: string;
  refresh_token: string;
};