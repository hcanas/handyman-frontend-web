import {defineStore} from "pinia";
import {ref} from "vue";
import type {User} from "../types/user";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User>({
    name: '',
    email: '',
    role: null,
  });

  function isLoggedIn(): boolean {
    return user.value.email.length > 0;
  }

  function logout(): void {
    user.value.name = '';
    user.value.email = '';
    user.value.role = null;
  }

  return {
    user,
    isLoggedIn,
    logout,
  };
}, {
  persist: true,
});