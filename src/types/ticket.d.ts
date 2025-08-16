import type {User} from "./user";
import type {Pagination} from "./common";

export type TicketPriorityLevel = "high" | "medium" | "low";

export type TicketStatus = "pending" | "in_progress" | "resolved" | "closed" | "cancelled";

export interface Ticket {
  id?: number;
  title: string;
  description: string;
  priority_level: TicketPriorityLevel;
  status: TicketStatus;
  reported_by_id: number;
  reporter: User;
  assigned_to_id: number|null;
  assignee: User;
  department_name: string;
  resolved_at: string|null;
}

export type TicketList = {
  data: Ticket[];
  meta: Pagination;
};