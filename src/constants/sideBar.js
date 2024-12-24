import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as TransactionIcon } from 'assets/icons/transaction.svg';
import { ReactComponent as AccountIcon } from 'assets/icons/accounts.svg';
import { ReactComponent as InvestmentIcon } from 'assets/icons/investment.svg';
import { ReactComponent as CreditCardIcon } from 'assets/icons/credit-card.svg';
import { ReactComponent as LoanIcon } from 'assets/icons/loans.svg';
import { ReactComponent as ServiceIcon } from 'assets/icons/services.svg';
import { ReactComponent as PriviledgeIcon } from 'assets/icons/priviledge.svg';
import { ReactComponent as SettingIcon } from 'assets/icons/settings.svg';
import Icon from 'components/ui/Icon';

export const sideBarConstants = {
  dashboard: {
    path: '/dashboard',
    label: 'Dashboard',
    icon: <Icon icon={DashboardIcon} className="w-6 h-6" />,
  },
  transactions: {
    label: 'Transactions',
    icon: <Icon icon={TransactionIcon} className="w-6 h-6" />,
  },
  accounts: {
    label: 'Accounts',
    icon: <Icon icon={AccountIcon} className="w-6 h-6" />,
  },
  investments: {
    label: 'Investments',
    icon: <Icon icon={InvestmentIcon} className="w-6 h-6" />,
  },
  creditCards: {
    label: 'Credit Cards',
    icon: <Icon icon={CreditCardIcon} className="w-6 h-6" />,
  },
  loans: { label: 'Loans', icon: <Icon icon={LoanIcon} className="w-6 h-6" /> },
  services: {
    label: 'Services',
    icon: <Icon icon={ServiceIcon} className="w-6 h-6" />,
  },
  privileges: {
    label: 'My Privileges',
    icon: <Icon icon={PriviledgeIcon} className="w-6 h-6" />,
  },
  setting: {
    path: '/settings',
    label: 'Setting',
    icon: <Icon icon={SettingIcon} className="w-6 h-6" />,
  },
};
