type TokenResponse = {
  access_token: string;
  refresh_token: string;
};

type RegisterPayload = {
  name: string;
  lastname: string;
  phone: number;
  alias: string;
  username: string;
  email: string;
};
