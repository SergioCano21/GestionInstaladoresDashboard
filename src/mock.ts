const data = [
  {
    folio: 48291,
    installerId: 'Luis Fernández Márquez',
    client: 'María López Sánchez',
    status: 'To Do',
    description:
      'Instalación de sistema de alarma con conexión remota.\nIncluye configuración de aplicación móvil.',
    clientPhone: '5551234567',
    address: 'Calle Reforma 123, Col. Centro',
    additionalComments: 'Por favor instalar antes del viernes.',
    storeId: 'Sucursal Norte',
    jobDetails: [
      {
        quantity: 2,
        description: 'Instalación de sensores de movimiento',
        installationServiceFee: 1500.0,
        commissionFee: 200.0,
        installerPayment: 1300.0,
      },
    ],
    subtotals: {
      installationServiceFee: 1500.0,
      commissionFee: 200.0,
      installerPayment: 1300.0,
    },
    iva: {
      installationServiceFee: 240.0,
      commissionFee: 32.0,
      installerPayment: 208.0,
    },
    totals: {
      installationServiceFee: 1740.0,
      commissionFee: 232.0,
      installerPayment: 1508.0,
    },
  },
  {
    folio: 23784,
    installerId: 'Ana Ruiz Torres',
    client: 'Carlos Martínez Pérez',
    status: 'Doing',
    description:
      'Mantenimiento preventivo de cámaras de seguridad.\nRevisión de cableado y grabadora.',
    clientPhone: '5567890123',
    address: 'Av. Insurgentes 456, Col. Roma',
    additionalComments: '',
    storeId: 'Sucursal Centro',
    jobDetails: [
      {
        quantity: 1,
        description: 'Revisión general del sistema',
        installationServiceFee: 800.0,
        commissionFee: 120.0,
        installerPayment: 680.0,
      },
    ],
    subtotals: {
      installationServiceFee: 800.0,
      commissionFee: 120.0,
      installerPayment: 680.0,
    },
    iva: {
      installationServiceFee: 128.0,
      commissionFee: 19.2,
      installerPayment: 108.8,
    },
    totals: {
      installationServiceFee: 928.0,
      commissionFee: 139.2,
      installerPayment: 788.8,
    },
  },
  {
    folio: 91530,
    installerId: 'Jorge Herrera Díaz',
    client: 'Elena Gómez Ramírez',
    status: 'To Do',
    description: 'Cambio de panel de control.\nActualización de firmware.',
    clientPhone: '5543219876',
    address: 'Calle Juárez 789, Col. Del Valle',
    additionalComments: 'Cliente requiere factura.',
    storeId: 'Sucursal Sur',
    jobDetails: [
      {
        quantity: 1,
        description: 'Sustitución del panel central',
        installationServiceFee: 2500.0,
        commissionFee: 350.0,
        installerPayment: 2150.0,
      },
    ],
    subtotals: {
      installationServiceFee: 2500.0,
      commissionFee: 350.0,
      installerPayment: 2150.0,
    },
    iva: {
      installationServiceFee: 400.0,
      commissionFee: 56.0,
      installerPayment: 344.0,
    },
    totals: {
      installationServiceFee: 2900.0,
      commissionFee: 406.0,
      installerPayment: 2494.0,
    },
  },
  {
    folio: 56320,
    installerId: 'Daniela Castro Morales',
    client: 'Roberto Torres Hernández',
    status: 'Doing',
    description:
      'Instalación de circuito cerrado de televisión.\nConfiguración de grabación continua.',
    clientPhone: '5576543210',
    address: 'Blvd. Aeropuerto 234, Col. Moderna',
    additionalComments: '',
    storeId: 'Sucursal Poniente',
    jobDetails: [
      {
        quantity: 4,
        description: 'Montaje y conexión de cámaras',
        installationServiceFee: 3200.0,
        commissionFee: 480.0,
        installerPayment: 2720.0,
      },
    ],
    subtotals: {
      installationServiceFee: 3200.0,
      commissionFee: 480.0,
      installerPayment: 2720.0,
    },
    iva: {
      installationServiceFee: 512.0,
      commissionFee: 76.8,
      installerPayment: 435.2,
    },
    totals: {
      installationServiceFee: 3712.0,
      commissionFee: 556.8,
      installerPayment: 3155.2,
    },
  },
  {
    folio: 78942,
    installerId: 'Pablo Sánchez García',
    client: 'Lucía Morales Castillo',
    status: 'To Do',
    description: 'Sustitución de batería de respaldo.\nPruebas de funcionamiento.',
    clientPhone: '5532124567',
    address: 'Av. Revolución 321, Col. Escandón',
    additionalComments: 'Llamar antes de acudir.',
    storeId: 'Sucursal Oriente',
    jobDetails: [
      {
        quantity: 1,
        description: 'Cambio de batería UPS',
        installationServiceFee: 950.0,
        commissionFee: 140.0,
        installerPayment: 810.0,
      },
    ],
    subtotals: {
      installationServiceFee: 950.0,
      commissionFee: 140.0,
      installerPayment: 810.0,
    },
    iva: {
      installationServiceFee: 152.0,
      commissionFee: 22.4,
      installerPayment: 129.6,
    },
    totals: {
      installationServiceFee: 1102.0,
      commissionFee: 162.4,
      installerPayment: 939.6,
    },
  },
];

export default data;
