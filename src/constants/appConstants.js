import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as TransactionIcon } from 'assets/icons/transaction.svg';
import { ReactComponent as AccountIcon } from 'assets/icons/accounts.svg';
import { ReactComponent as InvestmentIcon } from 'assets/icons/investment.svg';
import { ReactComponent as CreditCardIcon } from 'assets/icons/credit-card.svg';
import { ReactComponent as LoanIcon } from 'assets/icons/loans.svg';
import { ReactComponent as ServiceIcon } from 'assets/icons/services.svg';
import { ReactComponent as PriviledgeIcon } from 'assets/icons/priviledge.svg';
import { ReactComponent as SettingIcon } from 'assets/icons/settings.svg';

export const sideBarConstants = {
  dashboard: {
    path: '/dashboard',
    label: 'Dashboard',
    title: 'Overview',
    disabled: false,
    icon: DashboardIcon,
  },
  transactions: {
    label: 'Transactions',
    title: 'Transactions',
    disabled: true,
    icon: TransactionIcon,
  },
  accounts: {
    label: 'Accounts',
    title: 'Accounts',
    disabled: true,
    icon: AccountIcon,
  },
  investments: {
    label: 'Investments',
    title: 'Investments',
    disabled: true,
    icon: InvestmentIcon,
  },
  creditCards: {
    label: 'Credit Cards',
    title: 'Credit Cards',
    disabled: true,
    icon: CreditCardIcon,
  },

  loans: {
    label: 'Loans',
    title: 'Loans',
    disabled: true,
    icon: LoanIcon,
  },
  services: {
    label: 'Services',
    title: 'Services',
    disabled: true,
    icon: ServiceIcon,
  },
  privileges: {
    label: 'My Privileges',
    title: 'My Privileges',
    disabled: true,
    icon: PriviledgeIcon,
  },
  settings: {
    path: '/settings',
    label: 'Setting',
    title: 'Setting',
    disabled: false,
    icon: SettingIcon,
  },
};

export const tabs = [
  { name: 'Edit Profile', disabled: false },
  { name: 'Preferences', disabled: true },
  { name: 'Security', disabled: true },
];

export const settingsFields = [
  { label: 'Your Name', field: 'name', type: 'text', required: true },
  { label: 'User Name', field: 'usernName', type: 'text', required: true },
  { label: 'Email', field: 'email', type: 'email', required: true },
  { label: 'Password', field: 'password', type: 'password', required: true },
  { label: 'Date of Birth', field: 'dob', type: 'date', required: true },
  {
    label: 'Present Address',
    field: 'presentAddress',
    type: 'text',
    required: false,
  },
  {
    label: 'Permanent Address',
    field: 'permanentAddress',
    type: 'text',
    required: true,
  },
  { label: 'City', field: 'city', type: 'text', required: false },
  { label: 'Postal Code', field: 'postal', type: 'text', required: true },
  { label: 'Country', field: 'country', type: 'text', required: true },
];
