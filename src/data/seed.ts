import type { EntityData } from '@/types';

export const seed: EntityData = {
  admins: [
    { id: 'a1', name: 'Maya Srinivasan', email: 'maya@sri-shloka.demo', role: 'Super Admin', status: 'Active', invitation: 'Accepted', createdAt: 'Jan 12, 2024' },
    { id: 'a2', name: 'Ravi Patel', email: 'ravi@sri-shloka.demo', role: 'Inventory Manager', status: 'Active', invitation: 'Accepted', createdAt: 'Feb 08, 2024' },
    { id: 'a3', name: 'Anita Rao', email: 'anita@sri-shloka.demo', role: 'Support Admin', status: 'Pending Invitation', invitation: 'Sent · Mar 18', createdAt: 'Mar 18, 2024' },
    { id: 'a4', name: 'Dev Shah', email: 'dev@sri-shloka.demo', role: 'Order Manager', status: 'Inactive', invitation: 'Accepted', createdAt: 'Nov 02, 2023' },
  ],
  roles: [
    { id: 'r1', name: 'Super Admin', description: 'Full access to all storefront operations.', admins: 1, permissions: ['Users', 'Categories', 'Products', 'Orders', 'Payments'], status: 'Active', createdAt: 'Jan 12, 2024' },
    { id: 'r2', name: 'Inventory Manager', description: 'Catalog, stock and arrival planning.', admins: 2, permissions: ['Categories', 'Products'], status: 'Active', createdAt: 'Jan 12, 2024' },
    { id: 'r3', name: 'Order Manager', description: 'Order fulfillment and payment review.', admins: 1, permissions: ['Orders', 'Payments'], status: 'Active', createdAt: 'Jan 12, 2024' },
    { id: 'r4', name: 'Support Admin', description: 'Customer and wholesale relationships.', admins: 1, permissions: ['Users', 'Orders'], status: 'Active', createdAt: 'Jan 12, 2024' },
  ],
  categories: [
    { id: 'c1', name: 'Fresh Garlands', description: 'Hand-strung jasmine and seasonal blooms.', productCount: 14, status: 'Active', createdAt: 'Feb 03, 2024', art: 'garland' },
    { id: 'c2', name: 'Pooja Flowers', description: 'Fresh offerings for daily worship.', productCount: 9, status: 'Active', createdAt: 'Feb 03, 2024', art: 'flowers' },
    { id: 'c3', name: 'Leaves & Greens', description: 'Banana, betel and sacred leaves.', productCount: 8, status: 'Active', createdAt: 'Feb 11, 2024', art: 'leaf' },
    { id: 'c4', name: 'Pooja Essentials', description: 'Brass, incense and ritual essentials.', productCount: 21, status: 'Active', createdAt: 'Feb 11, 2024', art: 'essentials' },
    { id: 'c5', name: 'Traditional Goods', description: 'Thoughtful pieces for home and temple.', productCount: 12, status: 'Inactive', createdAt: 'Mar 01, 2024', art: 'goods' },
  ],
  products: [
    { id: 'p1', name: 'Mysore Jasmine Garland', sku: 'GAR-JAS-014', category: 'Fresh Garlands', price: '$18.50', stock: 24, status: 'Active', availability: 'Fresh arrival', createdAt: 'Mar 18, 2024', art: 'garland', description: 'A fragrant 3-foot strand, hand-strung in the traditional South Indian style. Arrives chilled.' },
    { id: 'p2', name: 'Marigold Toran', sku: 'GAR-MAR-008', category: 'Fresh Garlands', price: '$24.00', stock: 8, status: 'Active', availability: 'Low stock', createdAt: 'Mar 15, 2024', art: 'flowers', description: 'Golden marigold blooms woven into a festive doorway garland.' },
    { id: 'p3', name: 'Fresh Betel Leaves', sku: 'LEA-BET-032', category: 'Leaves & Greens', price: '$12.00', stock: 42, status: 'Active', availability: 'Fresh arrival', createdAt: 'Mar 17, 2024', art: 'leaf', description: 'Tender, carefully packed betel leaves for pooja and hospitality.' },
    { id: 'p4', name: 'Temple Banana Leaves', sku: 'LEA-BAN-005', category: 'Leaves & Greens', price: '$16.00', stock: 5, status: 'Active', availability: 'Low stock', createdAt: 'Mar 12, 2024', art: 'leaf', description: 'Fresh-cut banana leaves, selected for their size and clean finish.' },
    { id: 'p5', name: 'Brass Diya Set', sku: 'POO-BRS-011', category: 'Pooja Essentials', price: '$32.00', stock: 56, status: 'Active', availability: 'In stock', createdAt: 'Mar 09, 2024', art: 'essentials', description: 'A pair of hand-finished brass lamps for daily worship.' },
    { id: 'p6', name: 'Rose Petal Offering', sku: 'FLO-ROS-024', category: 'Pooja Flowers', price: '$9.50', stock: 0, status: 'Draft', availability: 'Out of stock', createdAt: 'Mar 08, 2024', art: 'flowers', description: 'Fragrant rose petals prepared fresh for offerings.' },
  ],
  orders: [
    { id: 'SS-240318-01', customer: 'Lakshmi Temple', email: 'office@lakshmitemple.demo', date: 'Today, 9:42 AM', items: 'Jasmine garland × 4', total: '$126.00', paymentStatus: 'Paid', status: 'Processing', hub: 'Edison, NJ', carrier: 'ColdChain Express', tracking: 'CCX-783 441 920' },
    { id: 'SS-240317-08', customer: 'Meera Krishnan', email: 'meera.k@samplemail.demo', date: 'Yesterday, 4:18 PM', items: 'Betel leaves × 2 · Brass diya set × 1', total: '$58.00', paymentStatus: 'Paid', status: 'Shipped', hub: 'Houston, TX', carrier: 'Regional Fresh', tracking: 'RF-118 642 703' },
    { id: 'SS-240317-05', customer: 'Sankara Sweets & Gifts', email: 'buy@sankarasample.demo', date: 'Yesterday, 1:06 PM', items: 'Marigold toran × 3', total: '$84.00', paymentStatus: 'Pending', status: 'Pending', hub: 'Bellevue, WA', carrier: '—', tracking: '—' },
    { id: 'SS-240316-12', customer: 'Priya Nair', email: 'priya.n@samplemail.demo', date: 'Mar 16, 11:23 AM', items: 'Pooja flower assortment × 1', total: '$42.50', paymentStatus: 'Paid', status: 'Delivered', hub: 'Edison, NJ', carrier: 'ColdChain Express', tracking: 'CCX-783 106 885' },
    { id: 'SS-240315-02', customer: 'Sri Venkateswara Temple', email: 'orders@svtemple.demo', date: 'Mar 15, 8:17 AM', items: 'Fresh jasmine × 8 · banana leaves × 4', total: '$248.00', paymentStatus: 'Paid', status: 'Confirmed', hub: 'Houston, TX', carrier: 'ColdChain Express', tracking: '—' },
  ],
  support: [
    {
      id: 'ENQ-1042', customer: 'Anjali Menon', email: 'anjali.m@samplemail.demo', subject: 'Garland arrived warm', type: 'Freshness concern', priority: 'High', assignee: 'Maya Srinivasan', date: 'Today, 10:14 AM', status: 'Open',
      messages: [
        ['Anjali Menon', 'The jasmine garland arrived warmer than expected and some buds have opened.', 'Today, 10:14 AM'],
        ['Maya Srinivasan', 'I’m sorry to hear that. I’m checking the route temperature now and will make this right.', 'Today, 10:31 AM'],
      ],
    },
    {
      id: 'ENQ-1039', customer: 'Kiran Patel', email: 'kiran@samplemail.demo', subject: 'Question about weekly delivery', type: 'Delivery', priority: 'Normal', assignee: 'Anita Rao', date: 'Yesterday, 3:25 PM', status: 'In Progress',
      messages: [['Kiran Patel', 'Can you deliver fresh jasmine to our temple every Friday?', 'Yesterday, 3:25 PM']],
    },
    {
      id: 'ENQ-1031', customer: 'Saraswati Pooja Store', email: 'hello@saraswatisample.demo', subject: 'Order quantity adjustment', type: 'Order change', priority: 'Normal', assignee: 'Maya Srinivasan', date: 'Mar 16, 12:40 PM', status: 'Resolved',
      messages: [['Customer', 'Could we add two more garlands to our order?', 'Mar 16, 12:40 PM']],
    },
  ],
  wholesale: [
    { id: 'WH-208', company: 'Lotus Temple Supply', contact: 'Arun Iyer', email: 'arun@lotustemple.demo', phone: '(732) 555-0148', interest: 'Jasmine garlands', quantity: '120 strands / week', date: 'Today, 8:52 AM', status: 'New', notes: 'Looking for a consistent weekly import. Needs Friday delivery to Edison, NJ.' },
    { id: 'WH-205', company: 'Saffron & Sage Market', contact: 'Nisha Desai', email: 'nisha@saffronsage.demo', phone: '(713) 555-0182', interest: 'Marigold + pooja flowers', quantity: '240 bundles / month', date: 'Yesterday, 2:16 PM', status: 'Reviewing', notes: 'Two neighborhood locations; interested in seasonal rates.' },
    { id: 'WH-201', company: 'Shree Venkatesh Temple', contact: 'Prakash Rao', email: 'office@shreevenkatesh.demo', phone: '(425) 555-0169', interest: 'Fresh garlands, betel leaves', quantity: 'Weekly temple order', date: 'Mar 15, 11:05 AM', status: 'Quotation Sent', notes: 'Requesting weekly Friday delivery to Bellevue, WA.' },
  ],
};
