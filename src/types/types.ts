export interface LoginForm {
  username: string;
  password: string;
}

export interface Service {
  _id: string;
  folio: number | '';
  installerId: {
    _id: string;
    installerId: number | '';
    name: string;
  };
  client: string;
  status: ServiceStatus;
  description: string;
  clientPhone: string;
  address: string;
  additionalComments: string;
  storeId: {
    numStore: number;
    name: string;
  };
  jobDetails: {
    quantity: number | '';
    description: string;
    installationServiceFee: number | '';
    commissionFee: number;
    installerPayment: number;
  }[];
  subtotals: {
    installationServiceFee: number;
    commissionFee: number;
    installerPayment: number;
  };
  iva: {
    installationServiceFee: number;
    commissionFee: number;
    installerPayment: number;
  };
  totals: {
    installationServiceFee: number;
    commissionFee: number;
    installerPayment: number;
  };
}

export interface Installer {
  _id: string;
  installerId: number | '';
  name: string;
  email: string;
  phone: string;
  company: string;
  storeId: {
    name: string;
    numStore: number;
  }[];
  status: InstallerStatus;
}

export type ModalType = string | null;

export type ServiceStatus = 'To Do' | 'Doing' | 'Done' | 'Canceled';

export type InstallerStatus = 'active' | 'inactive';

export interface Store {
  _id: string;
  numStore: number | '';
  name: string;
  phone: string;
  address: string;
  district: string;
  state: string;
  country: string;
  deleted: boolean;
}

export interface Administrator {
  _id: string;
  name: string;
  email: string;
  username: string;
  role: 'local' | 'district' | 'national' | '';
  storeId: {
    _id: string;
    name: string;
    numStore: number;
  } | null;
  district?: string;
  country?: string;
  deleted: boolean;
}

export interface Schedule {
  _id: string;
  type: 'Service' | 'Block';
  date: string;
  startTime: string;
  endTime: string;
  installer: {
    _id: string;
    name: string;
  };
  service: {
    _id: string;
    folio: number | '';
    status: 'To Do' | 'Doing' | 'Done' | 'Canceled';
    client: string;
  };
  store: {
    _id: string;
    name: string;
    numStore: number | '';
  };
}
