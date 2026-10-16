export type Section =
  | 'admins'
  | 'roles'
  | 'categories'
  | 'products'
  | 'orders'
  | 'support'
  | 'wholesale';

/** Loosely-typed row used by generic list / form components. */
export type Row = Record<string, any>;

interface Base {
  id: string;
  createdAt?: string;
  [key: string]: any;
}

export interface Admin extends Base {
  name: string;
  email: string;
  role: string;
  status: string;
  invitation: string;
}
export interface Role extends Base {
  name: string;
  description: string;
  admins: number;
  permissions: string[];
  status: string;
}
export interface Category extends Base {
  name: string;
  description: string;
  productCount: number;
  status: string;
  art: string;
}
export interface Product extends Base {
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  status: string;
  availability: string;
  art: string;
  description: string;
}
export interface Order extends Base {
  customer: string;
  email: string;
  date: string;
  items: string;
  total: string;
  paymentStatus: string;
  status: string;
  hub: string;
  carrier: string;
  tracking: string;
}
/** [author, body, time] */
export type TicketMessage = [string, string, string];
export interface SupportTicket extends Base {
  customer: string;
  email: string;
  subject: string;
  type: string;
  priority: string;
  assignee: string;
  date: string;
  status: string;
  messages: TicketMessage[];
}
export interface WholesaleEnquiry extends Base {
  company: string;
  contact: string;
  email: string;
  phone: string;
  interest: string;
  quantity: string;
  date: string;
  status: string;
  notes: string;
}

export interface EntityMap {
  admins: Admin;
  roles: Role;
  categories: Category;
  products: Product;
  orders: Order;
  support: SupportTicket;
  wholesale: WholesaleEnquiry;
}
export type EntityData = { [S in Section]: EntityMap[S][] };

export interface Column<T> {
  header: string;
  className?: string;
  cell: (row: T) => React.ReactNode;
}
