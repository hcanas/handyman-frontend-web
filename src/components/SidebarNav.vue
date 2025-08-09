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
    <div class="flex items-center gap-x-3">
      <AppLogo class="w-10"/>
      <span class="text-neutral-100 text-2xl italic font-medium tracking-wide">Handyman</span>
    </div>

    <div class="flex flex-col">
      <p class="text-neutral-100">{{ auth.user.name }}</p>
      <p class="text-neutral-400 italic">{{ auth.user.email }}</p>
      <RouterLink :to="{ name: 'settings'}" class="group">
        <div class="flex items-center gap-x-1">
          <Settings class="w-3 text-blue-400"/>
          <span class="text-sm text-blue-400 group-hover:underline italic">Account Settings</span>
        </div>
      </RouterLink>
    </div>

    <div class="flex flex-col gap-y-3">
      <NavLink :to="{name: 'dashboard'}" :active="route.name === 'dashboard'">
        <div class="flex items-center gap-x-3">
          <Gauge class="w-5"/>
          <span>Dashboard</span>
        </div>
      </NavLink>

      <NavLink :to="{name: 'tickets'}" :active="route.name === 'tickets'">
        <div class="flex items-center gap-x-3">
          <Tickets class="w-5"/>
          <span>Tickets</span>
        </div>
      </NavLink>

      <NavLink :to="{name: 'users'}" :active="route.name === 'users'">
        <div class="flex items-center gap-x-3">
          <Users class="w-5"/>
          <span>Users</span>
        </div>
      </NavLink>

      <NavLink :to="{name: 'departments'}" :active="route.name === 'departments'">
        <div class="flex items-center gap-x-3">
          <Building class="w-5"/>
          <span>Departments</span>
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
    </div>

    <button
      class="text-red-300 hover:text-red-400 focus:text-red-400 cursor-pointer transition duration-300 ease-in-out">
      <div class="flex items-center gap-x-3">
        <LogOut class="w-5"/>
        <span>Logout</span>
      </div>
    </button>
  </div>
</template>