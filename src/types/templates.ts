import type { AddServiceForm, Service } from './types';

export const serviceTemplate: Service = {
  folio: 0,
  installerId: '',
  client: '',
  status: '',
  description: '',
  clientPhone: '',
  address: '',
  additionalComments: '',
  storeId: '',
  jobDetails: [
    {
      quantity: 0,
      description: '',
      installationServiceFee: 0,
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

export const addFormTemplate: AddServiceForm = {
  folio: '',
  client: '',
  clientPhone: '',
  address: '',
  jobDetails: [{ quantity: '', installationServiceFee: '', description: '' }],
  additionalComments: '',
  installerId: '',
};
