export interface Login {
  username: string;
  password: string;
}

export interface Service {
  folio: number | '';
  installerId: {
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

export type ServiceStatus = 'To Do' | 'Doing' | 'Done';

export type InstallerStatus = 'active' | 'inactive';
