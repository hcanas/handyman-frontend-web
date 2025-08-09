<script setup lang="ts">
import AuthLayout from "../../Layouts/AuthLayout.vue";
import CardContainer from "../../components/cards/CardContainer.vue";
import CardHeader from "../../components/cards/CardHeader.vue";
import CardTitle from "../../components/cards/CardTitle.vue";
import AppLogo from "../../components/AppLogo.vue";
import CardBody from "../../components/cards/CardBody.vue";
import TextInput from "../../components/forms/TextInput.vue";
import BtnPrimary from "../../components/buttons/BtnPrimary.vue";
import FormLink from "../../components/forms/FormLink.vue";
import FormGroup from "../../components/forms/FormGroup.vue";
import InputError from "../../components/forms/InputError.vue";
import type {UserRegistration, UserRegistrationErrors} from "../../types/user";
import {ref} from "vue";
import axios from "axios";
import SuccessMessage from "../../components/messages/SuccessMessage.vue";

const form = ref<UserRegistration>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const formErrors = ref<UserRegistrationErrors>();

const successMessage = ref<string>();

const registerBtnDisabled = ref<boolean>(false);

function submitForm() {
  registerBtnDisabled.value = true;

  axios.post("/register", form.value)
    .then(response => {
      successMessage.value = response.data.message;
    })
    .catch(error => {
      if (error.response?.status === 422) {
        formErrors.value = error.response.data.errors;
      }
    })
    .finally(() => {
      registerBtnDisabled.value = false;
    });
}
</script>

<template>
  <AuthLayout>
    <CardContainer class="w-xl p-12">
      <CardHeader class="flex-col items-center gap-y-3">
        <AppLogo class="w-10"/>
        <CardTitle>Account Registration</CardTitle>
      </CardHeader>
      <CardBody>
        <form @submit.prevent="submitForm()">
          <div class="flex flex-col gap-y-3 mt-3">
            <SuccessMessage class="text-center" :message="successMessage"/>

            <FormGroup>
              <TextInput v-model="form.name" placeholder="Name" required/>
              <InputError :message="formErrors?.name"/>
            </FormGroup>

            <FormGroup>
              <TextInput v-model="form.email" placeholder="Email Address" required type="email"/>
              <InputError :message="formErrors?.email"/>
            </FormGroup>

            <FormGroup>
              <TextInput v-model="form.password" placeholder="Password" required type="password"/>
              <InputError :message="formErrors?.password"/>
            </FormGroup>

            <FormGroup>
              <TextInput v-model="form.password_confirmation" placeholder="Confirm Password" required type="password"/>
              <InputError :message="formErrors?.password_confirmation"/>
            </FormGroup>

            <BtnPrimary :disabled="registerBtnDisabled" type="submit" class="mt-3 cursor-pointer">Register</BtnPrimary>

            <div class="flex items-center gap-x-1 mt-6">
              <p class="text-neutral-500">Already have an account?</p>
              <FormLink :to="{ name: 'login' }">Log In</FormLink>
            </div>
          </div>
        </form>
      </CardBody>
    </CardContainer>
  </AuthLayout>
</template>