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
  { label: 'Your Name', field: 'name', type: 'text' },
  { label: 'User Name', field: 'usernName', type: 'text' },
  { label: 'Email', field: 'email', type: 'email' },
  { label: 'Password', field: 'password', type: 'password' },
  { label: 'Date of Birth', field: 'dob', type: 'date' },
  { label: 'Present Address', field: 'presentAddress', type: 'text' },
  { label: 'Permanent Address', field: 'permanentAddress', type: 'text' },
  { label: 'City', field: 'city', type: 'text' },
  { label: 'Postal Code', field: 'postal', type: 'text' },
  { label: 'Country', field: 'country', type: 'text' },
];
