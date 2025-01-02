import DashboardIcon from 'assets/icons/dashboard.webp';
import SelectedDashboardIcon from 'assets/icons/selected-dashboard.webp';
import TransactionIcon from 'assets/icons/transaction.webp';
import AccountIcon from 'assets/icons/accounts.webp';
import InvestmentIcon from 'assets/icons/investment.webp';
import CreditCardIcon from 'assets/icons/credit-card.webp';
import LoanIcon from 'assets/icons/loans.webp';
import ServiceIcon from 'assets/icons/services.webp';
import PriviledgeIcon from 'assets/icons/priviledge.webp';
import SettingIcon from 'assets/icons/settings.webp';
import SelectedSettingIcon from 'assets/icons/selected-setting.webp';

export const sideBarConstants = {
  dashboard: {
    path: '/dashboard',
    label: 'Dashboard',
    title: 'Overview',
    disabled: false,
    icon: DashboardIcon,
    selectedIcon: SelectedDashboardIcon,
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
    selectedIcon: SelectedSettingIcon,
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
