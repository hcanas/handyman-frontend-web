<script lang="ts" setup>
import AuthLayout from "../../Layouts/AuthLayout.vue";
import {ref} from "vue";
import type {UserLogin} from "../../types/user";
import TextInput from "../../components/forms/TextInput.vue";
import axios from "axios";
import BtnPrimary from "../../components/buttons/BtnPrimary.vue";
import CardContainer from "../../components/cards/CardContainer.vue";
import CardHeader from "../../components/cards/CardHeader.vue";
import CardTitle from "../../components/cards/CardTitle.vue";
import CardBody from "../../components/cards/CardBody.vue";
import ErrorMessage from "../../components/messages/ErrorMessage.vue";
import FormLink from "../../components/forms/FormLink.vue";
import AppLogo from "../../components/AppLogo.vue";
import router from "../../routes/router.ts";
import {useAuthStore} from "../../stores/auth-store.ts";

const form = ref<UserLogin>({
  email: "",
  password: "",
});

const authError = ref<string>();

const loginBtnDisabled = ref<boolean>(false);

function submitForm() {
  loginBtnDisabled.value = true;

  const headers = {"X-Client-Platform": "web"};

  axios.post("/login", form.value, {headers})
    .then(response => {
      useAuthStore().user = response.data.user;
      router.push({name: "dashboard"});
    })
    .catch(error => {
      if (error.response?.status === 422) {
        authError.value = error.response.data.errors.auth;
      } else if (error.response?.status === 401) {
        authError.value = error.response.data.message;
      }
    })
    .finally(() => {
      loginBtnDisabled.value = false;
    });
}
</script>

<template>
  <AuthLayout>
    <CardContainer class="w-xl p-12">
      <CardHeader class="flex-col items-center gap-y-3">
        <AppLogo class="w-10"/>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardBody>
        <form @submit.prevent="submitForm()">
          <div class="flex flex-col gap-y-3 mt-3">
            <ErrorMessage class="text-center" :message="authError"/>
            <TextInput v-model="form.email" placeholder="Email Address" required type="email"/>
            <TextInput v-model="form.password" placeholder="Password" required type="password"/>

            <BtnPrimary :disabled="loginBtnDisabled" class="mt-3" type="submit">
              Login
            </BtnPrimary>

            <div class="flex items-center justify-between mt-6">
              <FormLink :to="{ name: 'register' }">Create Account</FormLink>
              <FormLink :to="{ name: 'reset-password' }">Account Recovery</FormLink>
            </div>
          </div>
        </form>
      </CardBody>
    </CardContainer>
  </AuthLayout>
</template>

<style scoped>

</style>