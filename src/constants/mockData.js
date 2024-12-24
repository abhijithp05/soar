import Icon from 'components/ui/Icon';
import { ReactComponent as DepositIcon } from 'assets/icons/deposit.svg';
import { ReactComponent as WithdrawalIcon } from 'assets/icons/withdrawal.svg';
import { ReactComponent as PaypalIcon } from 'assets/icons/paypal.svg';
import { ReactComponent as Person1Icon } from 'assets/icons/person-1.svg';
import { ReactComponent as Person2Icon } from 'assets/icons/person-2.svg';
import { ReactComponent as Person3Icon } from 'assets/icons/person-3.svg';

export const cardDetails = [
  {
    balance: 5756,
    cardHolderName: 'Eddy Cusume',
    validTill: '12/22',
    cardNumber: 3778343433441234,
  },
  {
    balance: 1245,
    cardHolderName: 'Maria Johnson',
    validTill: '08/25',
    cardNumber: 4532978123476598,
  },
  {
    balance: 11234,
    cardHolderName: 'James T. Kirk',
    validTill: '05/24',
    cardNumber: 4983782948123751,
  },
  {
    balance: 923,
    cardHolderName: 'Lina Sanderson',
    validTill: '11/23',
    cardNumber: 5392847161845091,
  },
  {
    balance: 1856,
    cardHolderName: 'Alexis Mendoza',
    validTill: '03/27',
    cardNumber: 6738491739574612,
  },
  {
    balance: 3472,
    cardHolderName: 'John Doe',
    validTill: '09/24',
    cardNumber: 4023519278563927,
  },
  {
    balance: 5693,
    cardHolderName: 'Sophia Williams',
    validTill: '07/26',
    cardNumber: 5894032145678390,
  },
  {
    balance: 7289,
    cardHolderName: 'Michael Harris',
    validTill: '02/25',
    cardNumber: 3764820394728196,
  },
];

export const transactions = [
  {
    id: 1,
    date: '2024-12-15',
    amount: 150.75,
    type: 'Purchase',
    description: 'Amazon Purchase - Electronics',
    merchant: 'Amazon',
    category: 'Shopping',
    status: 'Completed',
    balanceAfter: 1200.5,
  },
  {
    id: 2,
    date: '2024-12-14',
    amount: -35.99,
    type: 'Withdrawal',
    description: 'ATM Withdrawal',
    merchant: 'ATM - XYZ Bank',
    category: 'Cash Withdrawal',
    status: 'Completed',
    balanceAfter: 1351.25,
  },
  {
    id: 3,
    date: '2024-12-13',
    amount: 220.0,
    type: 'Deposit',
    description: 'Salary Deposit',
    merchant: 'XYZ Corp',
    category: 'Income',
    status: 'Completed',
    balanceAfter: 1387.24,
  },
  {
    id: 4,
    date: '2024-12-12',
    amount: -12.5,
    type: 'Purchase',
    description: 'Coffee Shop - Latte & Pastry',
    merchant: 'Coffee Corner',
    category: 'Food & Beverage',
    status: 'Completed',
    balanceAfter: 1167.24,
  },
  {
    id: 5,
    date: '2024-12-10',
    amount: -60.0,
    type: 'Subscription',
    description: 'Spotify Premium Subscription',
    merchant: 'Spotify',
    category: 'Entertainment',
    status: 'Completed',
    balanceAfter: 1179.74,
  },
  {
    id: 6,
    date: '2024-12-08',
    amount: -40.0,
    type: 'Purchase',
    description: 'Grocery Shopping - Walmart',
    merchant: 'Walmart',
    category: 'Groceries',
    status: 'Completed',
    balanceAfter: 1239.74,
  },
  {
    id: 7,
    date: '2024-12-05',
    amount: 50.0,
    type: 'Deposit',
    description: 'Transfer from Savings Account',
    merchant: 'Bank Transfer',
    category: 'Transfer',
    status: 'Completed',
    balanceAfter: 1279.74,
  },
  {
    id: 8,
    date: '2024-12-04',
    amount: -30.0,
    type: 'Purchase',
    description: 'Online Subscription - Netflix',
    merchant: 'Netflix',
    category: 'Entertainment',
    status: 'Completed',
    balanceAfter: 1229.74,
  },
  {
    id: 9,
    date: '2024-12-03',
    amount: -150.0,
    type: 'Purchase',
    description: 'Furniture Purchase - IKEA',
    merchant: 'IKEA',
    category: 'Home',
    status: 'Completed',
    balanceAfter: 1259.74,
  },
  {
    id: 10,
    date: '2024-12-02',
    amount: 500.0,
    type: 'Deposit',
    description: 'Transfer from Friend - John',
    merchant: 'Bank Transfer',
    category: 'Transfer',
    status: 'Completed',
    balanceAfter: 1419.74,
  },
];

export const transactionTypes = {
  Purchase: {
    icon: <Icon icon={PaypalIcon} />,
  },
  Withdrawal: {
    icon: <Icon icon={WithdrawalIcon} />,
  },
  Deposit: {
    icon: <Icon icon={DepositIcon} />,
  },
  Subscription: {
    icon: <Icon icon={WithdrawalIcon} />,
  },
};

export const quickTransferUsers = [
  {
    name: 'John Doe',
    accountNumber: 1234567890,
    position: 'CEO',
    bank: 'XYZ Bank',
    profileImage: <Icon icon={Person1Icon} />,
  },
  {
    name: 'Sophia Williams',
    accountNumber: 2345678901,
    position: 'Designer',
    bank: 'ABC Bank',
    profileImage: <Icon icon={Person2Icon} />,
  },
  {
    name: 'Michael Harris',
    accountNumber: 3456789012,
    position: 'Developer',
    bank: 'PQR Bank',
    profileImage: <Icon icon={Person3Icon} />,
  },
  // {
  //   name: 'Maria Johnson',
  //   accountNumber: 4567890123,
  //   bank: 'LMN Bank',
  //   profileImage: <Icon icon={Person3Icon} />,
  // },
  // {
  //   name: 'James T. Kirk',
  //   accountNumber: 5678901234,
  //   bank: 'JKL Bank',
  //   profileImage: <Icon icon={Person3Icon} />,
  // },
  // {
  //   name: 'Lina Sanderson',
  //   accountNumber: 6789012345,
  //   bank: 'RST Bank',
  //   profileImage: <Icon icon={Person3Icon} />,
  // },
  // {
  //   name: 'Alexis Mendoza',
  //   accountNumber: 7890123456,
  //   bank: 'EFG Bank',
  //   profileImage: <Icon icon={Person3Icon} />,
  // },
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
