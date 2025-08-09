import type {Department} from "./department";

export type UserRole = 'admin' | 'staff' | 'technician' | null;

export interface User {
  id?: number;
  name: string;
  email: string;
  role?: UserRole,
  department_id?: number;
  department?: Department;
  banned_at?: string,
  ban_reason?: string,
}

export type UserLogin = Pick<User, 'email'> & { password: string };

export type UserRegistration = Pick<User, 'name' | 'email'> & {
  password: string,
  password_confirmation: string,
};

export type UserRegistrationErrors = Partial<UserRegistration>;

export type UserPasswordReset = Pick<User, 'email'> &  {
  password: string,
  password_confirmation: string,
  otp: string,
};

export type UserPasswordResetErrors = Partial<UserPasswordReset>;