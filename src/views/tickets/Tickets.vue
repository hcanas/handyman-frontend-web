<script setup lang="ts">
import AppLayout from "../../Layouts/AppLayout.vue";
import PageHeader from "../../components/PageHeader.vue";
import {ref, watch} from "vue";
import type {TicketList} from "../../types/ticket";
import axios from "axios";
import DataTable from "../../components/tables/DataTable.vue";
import TableCol from "../../components/tables/TableCol.vue";
import TicketPriorityLevelTag from "./TicketPriorityLevelTag.vue";
import TicketStatusTag from "./TicketStatusTag.vue";
import TicketOverviewLink from "./TicketOverviewLink.vue";
import TicketSortFilter from "./TicketSortFilter.vue";
import BtnPrimary from "../../components/buttons/BtnPrimary.vue";
import {Plus} from "lucide-vue-next";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();

const router = useRouter();

const tickets = ref<TicketList>();

function fetchTickets() {
  const queryString = new URLSearchParams(route.query as Record<string, string>).toString();

  axios.get(`/tickets?${queryString}`)
    .then(response => {
      tickets.value = response.data;
    });
}

watch(() => route.query, fetchTickets, {immediate: true});
</script>

<template>
  <AppLayout>
    <PageHeader title="Tickets">
      <template #actions>
        <BtnPrimary @click="router.push({ name: 'new-ticket' })">
          <div class="flex items-center gap-x-1">
            <Plus class="w-6"/>
            <span>New Ticket</span>
          </div>
        </BtnPrimary>
      </template>
    </PageHeader>

    <DataTable :data="tickets?.data" :meta="tickets?.meta" class="mt-12">
      <template #customFilters>
        <TicketSortFilter/>
      </template>

      <template #header>
        <TableCol index="id" title="ID" align="center" :custom="true"/>
        <TableCol index="title" title="Title" :custom="true"/>
        <TableCol index="priority_level" title="Priority" :custom="true"/>
        <TableCol index="status" title="Status" :custom="true"/>
      </template>

      <template #idCell="{ rowData }">
        <TicketOverviewLink :to="{ name: 'ticket-overview', params: { id: rowData.id } }">
          {{ rowData.id }}
        </TicketOverviewLink>
      </template>

      <template #titleCell="{ rowData }">
        <TicketOverviewLink :to="{ name: 'ticket-overview', params: { id: rowData.id } }">
          {{ rowData.title }}
        </TicketOverviewLink>
      </template>

      <template #priorityLevelCell="{ rowData }">
        <TicketPriorityLevelTag :level="rowData.priority_level"/>
      </template>

      <template #statusCell="{ rowData }">
        <TicketStatusTag :status="rowData.status"/>
      </template>
    </DataTable>
  </AppLayout>
</template>