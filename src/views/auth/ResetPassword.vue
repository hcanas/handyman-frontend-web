<script setup lang="ts">
import {ref} from "vue";
import AuthLayout from "../../Layouts/AuthLayout.vue";
import CardContainer from "../../components/cards/CardContainer.vue";
import CardHeader from "../../components/cards/CardHeader.vue";
import CardTitle from "../../components/cards/CardTitle.vue";
import CardSubtitle from "../../components/cards/CardSubtitle.vue";
import AppLogo from "../../components/AppLogo.vue";
import CardBody from "../../components/cards/CardBody.vue";
import FormGroup from "../../components/forms/FormGroup.vue";
import TextInput from "../../components/forms/TextInput.vue";
import InputError from "../../components/forms/InputError.vue";
import BtnPrimary from "../../components/buttons/BtnPrimary.vue";
import SuccessMessage from "../../components/messages/SuccessMessage.vue";
import type {UserPasswordReset, UserPasswordResetErrors} from "../../types/user";
import axios from "axios";
import FormLink from "../../components/forms/FormLink.vue";

const timeLimit: number = 60; // in seconds
const timeLeft = ref<number>(0);

const otpBtnDisabled = ref<boolean>(false);
const setPasswordBtnDisabled = ref<boolean>(false);

const form = ref<UserPasswordReset>({
  email: "",
  password: "",
  password_confirmation: "",
  otp: "",
});

const formErrors = ref<UserPasswordResetErrors>();

const successMessage = ref<string>();

function requestOtp() {
  handleOtpBtnTimer();

  axios.post("/request-otp", {email: form.value.email})
    .catch(error => {
      if (error.response?.status === 422) {
        formErrors.value = error.response.data.errors;
      }
    });
}

function handleOtpBtnTimer() {
  otpBtnDisabled.value = true;
  timeLeft.value = timeLimit;

  const handler: number = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      otpBtnDisabled.value = false;
      clearInterval(handler);
    }
  }, 1000);
}

function submitForm() {
  setPasswordBtnDisabled.value = true;

  axios.patch("/reset-password", form.value)
    .then(response => {
      successMessage.value = response.data.message;
    })
    .catch(error => {
      if (error.response?.status === 422) {
        formErrors.value = error.response.data.errors;
      }
    })
    .finally(() => {
      setPasswordBtnDisabled.value = false;
    });
}
</script>

<template>
  <AuthLayout>
    <CardContainer class="w-xl p-12">
      <CardHeader class="flex-col items-center gap-y-1">
        <AppLogo class="w-10"/>
        <CardTitle>Account Recovery</CardTitle>
        <CardSubtitle>Set a new password</CardSubtitle>
      </CardHeader>
      <CardBody>
        <form @submit.prevent="submitForm()">
          <div class="flex flex-col gap-y-3 mt-3">
            <SuccessMessage class="text-center" :message="successMessage"/>

            <FormGroup>
              <TextInput v-model="form.email" placeholder="Email Address" required type="email"/>
              <InputError :message="formErrors?.email"/>
            </FormGroup>

            <FormGroup>
              <TextInput v-model="form.password" placeholder="New Password" required type="password"/>
              <InputError :message="formErrors?.password"/>
            </FormGroup>

            <FormGroup>
              <TextInput v-model="form.password_confirmation" placeholder="Confirm Password" required type="password"/>
              <InputError :message="formErrors?.password_confirmation"/>
            </FormGroup>

            <FormGroup>
              <div class="flex items-end gap-x-3">
                <TextInput v-model="form.otp" class="flex-grow" placeholder="OTP" required type="number"/>
                <button type="button"
                        @click.prevent="requestOtp()"
                        :disabled="otpBtnDisabled"
                        :class="otpBtnDisabled ? 'bg-neutral-700 cursor-not-allowed' : 'bg-sky-700 cursor-pointer'"
                        class="flex-shrink-0 p-3 rounded-lg text-sm text-neutral-200 hover:bg-sky-600 focus:bg-sky-600 transition duration-150 ease-in-out">
                  {{ otpBtnDisabled ? `Retry in ${timeLeft}s` : `Request OTP` }}
                </button>
              </div>
              <InputError :message="formErrors?.otp"/>
            </FormGroup>

            <BtnPrimary :disabled="setPasswordBtnDisabled" class="mt-3" type="submit">Set Password</BtnPrimary>
          </div>

          <div class="mt-12">
            <FormLink :to="{ name: 'login' }">Log In</FormLink>
          </div>
        </form>
      </CardBody>
    </CardContainer>
  </AuthLayout>
</template>