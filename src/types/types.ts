export interface AddServiceForm {
  folio: number | '';
  client: string;
  clientPhone: number | '';
  address: string;
  jobDetails: {
    quantity: number | '';
    description: string;
    installationServiceFee: number | '';
  }[];
  additionalComments: string;
  installerId: number | '';
}

export interface Service {
  folio: number;
  installerId: string;
  client: string;
  status: string;
  description: string;
  clientPhone: string;
  address: string;
  additionalComments: string;
  storeId: string;
  jobDetails: {
    quantity: number;
    description: string;
    installationServiceFee: number;
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
