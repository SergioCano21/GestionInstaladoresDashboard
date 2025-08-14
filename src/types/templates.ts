import type { Administrator, Installer, LoginForm, Schedule, Service, Store } from './types';

export const serviceTemplate: Service = {
  _id: '',
  folio: '',
  client: '',
  status: 'To Do',
  description: '',
  clientPhone: '',
  address: '',
  additionalComments: '',
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
  installer: {
    _id: '',
    installerId: '',
    name: '',
  },
  store: {
    numStore: 0,
    name: '',
  },
  schedule: {
    startTime: '',
    endTime: '',
  },
};

export const loginTemplate: LoginForm = {
  username: '',
  password: '',
};

export const installerTemplate: Installer = {
  _id: '',
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
  _id: '',
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
  _id: '',
  name: '',
  email: '',
  username: '',
  role: '',
  storeId: null,
  deleted: false,
};

export const scheduleTemplate: Schedule = {
  _id: '',
  type: 'Service',
  date: '',
  startTime: '',
  endTime: '',
  installer: {
    _id: '',
    name: '',
  },
  service: {
    _id: '',
    folio: '',
    status: 'To Do',
    client: '',
  },
  store: {
    _id: '',
    name: '',
    numStore: '',
  },
  serviceId: '',
};
