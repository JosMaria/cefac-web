type LoginRequest = {
  username: string;
  password: string;
};

type TokenResponse = {
  access_token: string;
  refresh_token: string;
};

type FormType = LoginRequest;

type ErrorResponse = {
  path: string;
  reason: string;
  timestamp: Date;
};
