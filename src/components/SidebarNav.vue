<script setup lang="ts">
import {useAuthStore} from "../stores/auth-store.ts";
import AppLogo from "./AppLogo.vue";
import NavLink from "./NavLink.vue";
import {Building, Gauge, Github, LogOut, Settings, Tickets, Users} from "lucide-vue-next";
import ExternalNavLink from "./ExternalNavLink.vue";
import {useRoute} from "vue-router";

const auth = useAuthStore();

const route = useRoute();
</script>

<template>
  <div class="flex-shrink-0 w-72 flex flex-col gap-y-12 p-12 bg-neutral-950">
    <RouterLink :to="{ name: 'dashboard'}">
      <div class="flex items-center gap-x-3">
        <AppLogo class="w-10"/>
        <span class="text-neutral-100 text-2xl italic font-medium tracking-wide">Handyman</span>
      </div>
    </RouterLink>

    <div class="flex flex-col gap-y-3">
      <NavLink :to="{name: 'dashboard'}" :active="route.name === 'dashboard'">
        <div class="flex items-center gap-x-3">
          <Gauge class="w-5"/>
          <span class="text-sm">Dashboard</span>
        </div>
      </NavLink>

      <NavLink :to="{name: 'tickets'}" :active="route.name === 'tickets'">
        <div class="flex items-center gap-x-3">
          <Tickets class="w-5"/>
          <span class="text-sm">Tickets</span>
        </div>
      </NavLink>

      <NavLink :to="{name: 'users'}" :active="route.name === 'users'">
        <div class="flex items-center gap-x-3">
          <Users class="w-5"/>
          <span class="text-sm">Users</span>
        </div>
      </NavLink>

      <NavLink :to="{name: 'departments'}" :active="route.name === 'departments'">
        <div class="flex items-center gap-x-3">
          <Building class="w-5"/>
          <span class="text-sm">Departments</span>
        </div>
      </NavLink>

      <hr class="text-neutral-800 my-6"/>

      <ExternalNavLink to="https://github.com/hcanas/handyman-api">
        <div class="flex items-center gap-x-3">
          <Github class="w-5"/>
          <span class="text-sm">/api</span>
        </div>
      </ExternalNavLink>

      <ExternalNavLink to="https://github.com/hcanas/handyman-frontend-web">
        <div class="flex items-center gap-x-3">
          <Github class="w-5"/>
          <span class="text-sm">/frontend_web</span>
        </div>
      </ExternalNavLink>

      <RouterLink :to="{ name: 'settings'}" class="text-neutral-400 hover:text-purple-500 transition duration-300 ease-in-out">
        <div class="flex items-center gap-x-3">
          <Settings class="w-5"/>
          <span class="text-sm">Account Settings</span>
        </div>
      </RouterLink>
    </div>

    <div class="flex-grow flex flex-col justify-end gap-y-6">
      <div class="flex items-center gap-x-3">
        <p class="flex-shrink-0 text-neutral-100 text-2xl text-center uppercase bg-neutral-900 w-10 h-10 rounded">{{ auth.user.name.charAt(0) }}</p>

        <div class="flex flex-col min-w-0">
          <p class="text-neutral-100 text-sm truncate">{{ auth.user.name }}</p>
          <p class="text-neutral-400 text-sm truncate italic">{{ auth.user.email }}</p>
        </div>
      </div>

      <button
        class="text-red-300 hover:text-red-400 focus:text-red-400 cursor-pointer transition duration-300 ease-in-out">
        <div class="flex items-center gap-x-3">
          <LogOut class="w-5"/>
          <span>Logout</span>
        </div>
      </button>
    </div>
  </div>
</template>