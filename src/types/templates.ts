import type { Administrator, Installer, LoginData, Service, Store } from './types';

export const serviceTemplate: Service = {
  folio: '',
  installerId: {
    installerId: '',
    name: '',
  },
  client: '',
  status: 'To Do',
  description: '',
  clientPhone: '',
  address: '',
  additionalComments: '',
  storeId: {
    numStore: 0,
    name: '',
  },
  jobDetails: [
    {
      quantity: '',
      description: '',
      installationServiceFee: '',
      commissionFee: 0,
      installerPayment: 0,
    },
  ],
  subtotals: {
    installationServiceFee: 0,
    commissionFee: 0,
    installerPayment: 0,
  },
  iva: {
    installationServiceFee: 0,
    commissionFee: 0,
    installerPayment: 0,
  },
  totals: {
    installationServiceFee: 0,
    commissionFee: 0,
    installerPayment: 0,
  },
};

export const loginTemplate: LoginData = {
  username: '',
  password: '',
};

export const installerTemplate: Installer = {
  installerId: '',
  name: '',
  email: '',
  phone: '',
  company: '',
  storeId: [
    {
      name: '',
      numStore: 0,
    },
  ],
  status: 'active',
};

export const storeTemplate: Store = {
  numStore: '',
  name: '',
  phone: '',
  address: '',
  district: '',
  state: '',
  country: '',
  deleted: false,
};

export const adminTemplate: Administrator = {
  name: '',
  email: '',
  username: '',
  role: '',
  storeId: {
    numStore: 0,
    name: '',
  },
  deleted: false,
};
