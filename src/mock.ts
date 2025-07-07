import type { Installer, Service } from './types/types';

export const activeServices: Service[] = [
  {
    folio: 48291,
    installerId: {
      installerId: 1234,
      name: 'Luis Fernández Márquez',
    },
    client: 'María López Sánchez',
    status: 'To Do',
    description:
      'Instalación de sistema de alarma con conexión remota.\nIncluye configuración de aplicación móvil.',
    clientPhone: '5551234567',
    address: 'Calle Reforma 123, Col. Centro',
    additionalComments: 'Por favor instalar antes del viernes.',
    storeId: {
      name: 'Sucursal Norte',
      numStore: 3321,
    },
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
    folio: 48292,
    installerId: {
      installerId: 2345,
      name: 'Ana Gabriela Ruiz Torres',
    },
    client: 'Jorge Martínez Paredes',
    status: 'Doing',
    description: 'Instalación de cámaras de vigilancia en exteriores.',
    clientPhone: '5552345678',
    address: 'Av. Juárez 456, Col. Industrial',
    additionalComments: 'El cliente requiere capacitación breve.',
    storeId: {
      name: 'Sucursal Centro',
      numStore: 4422,
    },
    jobDetails: [
      {
        quantity: 4,
        description: 'Instalación de cámaras HD',
        installationServiceFee: 2800.0,
        commissionFee: 400.0,
        installerPayment: 2400.0,
      },
    ],
    subtotals: {
      installationServiceFee: 2800.0,
      commissionFee: 400.0,
      installerPayment: 2400.0,
    },
    iva: {
      installationServiceFee: 448.0,
      commissionFee: 64.0,
      installerPayment: 384.0,
    },
    totals: {
      installationServiceFee: 3248.0,
      commissionFee: 464.0,
      installerPayment: 2784.0,
    },
  },
  {
    folio: 48293,
    installerId: {
      installerId: 3456,
      name: 'Ricardo Pérez González',
    },
    client: 'Sofía Ramírez Duarte',
    status: 'To Do',
    description: 'Montaje de sistema de audio profesional.',
    clientPhone: '5553456789',
    address: 'Calle Hidalgo 789, Col. Vista Alegre',
    additionalComments: '',
    storeId: {
      name: 'Sucursal Sur',
      numStore: 5533,
    },
    jobDetails: [
      {
        quantity: 1,
        description: 'Instalación de consola y altavoces',
        installationServiceFee: 3200.0,
        commissionFee: 500.0,
        installerPayment: 2700.0,
      },
    ],
    subtotals: {
      installationServiceFee: 3200.0,
      commissionFee: 500.0,
      installerPayment: 2700.0,
    },
    iva: {
      installationServiceFee: 512.0,
      commissionFee: 80.0,
      installerPayment: 432.0,
    },
    totals: {
      installationServiceFee: 3712.0,
      commissionFee: 580.0,
      installerPayment: 3132.0,
    },
  },
  {
    folio: 48294,
    installerId: {
      installerId: 4567,
      name: 'Daniela Moreno Chávez',
    },
    client: 'Carlos Núñez Herrera',
    status: 'Doing',
    description: 'Instalación de red Wi-Fi empresarial.',
    clientPhone: '5554567890',
    address: 'Av. Universidad 321, Col. Del Valle',
    additionalComments: 'Requiere factura.',
    storeId: {
      name: 'Sucursal Este',
      numStore: 6644,
    },
    jobDetails: [
      {
        quantity: 3,
        description: 'Montaje de access points',
        installationServiceFee: 2200.0,
        commissionFee: 300.0,
        installerPayment: 1900.0,
      },
    ],
    subtotals: {
      installationServiceFee: 2200.0,
      commissionFee: 300.0,
      installerPayment: 1900.0,
    },
    iva: {
      installationServiceFee: 352.0,
      commissionFee: 48.0,
      installerPayment: 304.0,
    },
    totals: {
      installationServiceFee: 2552.0,
      commissionFee: 348.0,
      installerPayment: 2204.0,
    },
  },
  {
    folio: 48295,
    installerId: {
      installerId: 5678,
      name: 'Paola Vázquez Romero',
    },
    client: 'Fernando Díaz López',
    status: 'To Do',
    description: 'Instalación de paneles solares en techo.',
    clientPhone: '5555678901',
    address: 'Calle Independencia 654, Col. Moderna',
    additionalComments: 'Revisar conexión eléctrica.',
    storeId: {
      name: 'Sucursal Oeste',
      numStore: 7755,
    },
    jobDetails: [
      {
        quantity: 6,
        description: 'Montaje de paneles solares',
        installationServiceFee: 5000.0,
        commissionFee: 700.0,
        installerPayment: 4300.0,
      },
    ],
    subtotals: {
      installationServiceFee: 5000.0,
      commissionFee: 700.0,
      installerPayment: 4300.0,
    },
    iva: {
      installationServiceFee: 800.0,
      commissionFee: 112.0,
      installerPayment: 688.0,
    },
    totals: {
      installationServiceFee: 5800.0,
      commissionFee: 812.0,
      installerPayment: 4988.0,
    },
  },
];

export const completedServices: Service[] = [
  {
    folio: 48296,
    installerId: {
      installerId: 6789,
      name: 'Miguel Ángel Torres León',
    },
    client: 'Laura Gutiérrez Campos',
    status: 'Done',
    description: 'Instalación de cerradura electrónica.',
    clientPhone: '5556789012',
    address: 'Calle Morelos 987, Col. Jardines',
    additionalComments: '',
    storeId: {
      name: 'Sucursal Norte',
      numStore: 3321,
    },
    jobDetails: [
      {
        quantity: 1,
        description: 'Montaje de cerradura digital',
        installationServiceFee: 1200.0,
        commissionFee: 150.0,
        installerPayment: 1050.0,
      },
    ],
    subtotals: {
      installationServiceFee: 1200.0,
      commissionFee: 150.0,
      installerPayment: 1050.0,
    },
    iva: {
      installationServiceFee: 192.0,
      commissionFee: 24.0,
      installerPayment: 168.0,
    },
    totals: {
      installationServiceFee: 1392.0,
      commissionFee: 174.0,
      installerPayment: 1218.0,
    },
  },
  {
    folio: 48297,
    installerId: {
      installerId: 7890,
      name: 'Andrea Salazar Muñoz',
    },
    client: 'Víctor Hernández Ruiz',
    status: 'Done',
    description: 'Instalación de antena de televisión satelital.',
    clientPhone: '5557890123',
    address: 'Av. Insurgentes 432, Col. Roma',
    additionalComments: 'Instalar antes de las 3 PM.',
    storeId: {
      name: 'Sucursal Centro',
      numStore: 4422,
    },
    jobDetails: [
      {
        quantity: 2,
        description: 'Montaje de antenas satelitales',
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
    folio: 48298,
    installerId: {
      installerId: 8901,
      name: 'Roberto Jiménez Vargas',
    },
    client: 'Gabriela Cruz Morales',
    status: 'Done',
    description: 'Instalación de sistema de intercomunicación.',
    clientPhone: '5558901234',
    address: 'Calle Zaragoza 876, Col. San Ángel',
    additionalComments: '',
    storeId: {
      name: 'Sucursal Sur',
      numStore: 5533,
    },
    jobDetails: [
      {
        quantity: 1,
        description: 'Montaje de sistema de intercom',
        installationServiceFee: 1800.0,
        commissionFee: 250.0,
        installerPayment: 1550.0,
      },
    ],
    subtotals: {
      installationServiceFee: 1800.0,
      commissionFee: 250.0,
      installerPayment: 1550.0,
    },
    iva: {
      installationServiceFee: 288.0,
      commissionFee: 40.0,
      installerPayment: 248.0,
    },
    totals: {
      installationServiceFee: 2088.0,
      commissionFee: 290.0,
      installerPayment: 1798.0,
    },
  },
  {
    folio: 48299,
    installerId: {
      installerId: 9012,
      name: 'Alejandro Cabrera Ríos',
    },
    client: 'Isabel Ortega Salinas',
    status: 'Done',
    description: 'Revisión y mantenimiento de sistema eléctrico.',
    clientPhone: '5559012345',
    address: 'Av. Chapultepec 654, Col. Condesa',
    additionalComments: 'Traer herramientas especiales.',
    storeId: {
      name: 'Sucursal Este',
      numStore: 6644,
    },
    jobDetails: [
      {
        quantity: 1,
        description: 'Mantenimiento eléctrico',
        installationServiceFee: 1600.0,
        commissionFee: 220.0,
        installerPayment: 1380.0,
      },
    ],
    subtotals: {
      installationServiceFee: 1600.0,
      commissionFee: 220.0,
      installerPayment: 1380.0,
    },
    iva: {
      installationServiceFee: 256.0,
      commissionFee: 35.2,
      installerPayment: 220.8,
    },
    totals: {
      installationServiceFee: 1856.0,
      commissionFee: 255.2,
      installerPayment: 1600.8,
    },
  },
  {
    folio: 48300,
    installerId: {
      installerId: 1122,
      name: 'Claudia Navarro Peña',
    },
    client: 'Óscar Mendoza Fuentes',
    status: 'Done',
    description: 'Instalación de control de acceso biométrico.',
    clientPhone: '5550123456',
    address: 'Calle Álvaro Obregón 321, Col. Del Carmen',
    additionalComments: '',
    storeId: {
      name: 'Sucursal Oeste',
      numStore: 7755,
    },
    jobDetails: [
      {
        quantity: 1,
        description: 'Montaje de sistema biométrico',
        installationServiceFee: 3000.0,
        commissionFee: 500.0,
        installerPayment: 2500.0,
      },
    ],
    subtotals: {
      installationServiceFee: 3000.0,
      commissionFee: 500.0,
      installerPayment: 2500.0,
    },
    iva: {
      installationServiceFee: 480.0,
      commissionFee: 80.0,
      installerPayment: 400.0,
    },
    totals: {
      installationServiceFee: 3480.0,
      commissionFee: 580.0,
      installerPayment: 2900.0,
    },
  },
];

export const installers: Installer[] = [
  {
    installerId: 1023,
    name: 'Carlos Alberto Mendoza López',
    email: 'carlos.mendoza@example.com',
    phone: '+52 555-1234',
    company: 'Instalaciones MX',
    storeId: [
      { name: 'Sucursal Norte', numStore: 1001 },
      { name: 'Sucursal Centro', numStore: 1002 },
      { name: 'Sucursal Sur', numStore: 1003 },
    ],
    status: 'active',
  },
  {
    installerId: 2045,
    name: 'Ana Ramírez Pérez',
    email: 'ana.ramirez@example.com',
    phone: '+52 555-5678',
    company: 'Servicios Integrales',
    storeId: [{ name: 'Sucursal Centro', numStore: 1002 }],
    status: 'inactive',
  },
  {
    installerId: 3087,
    name: 'Luis Enrique Torres Hernández',
    email: 'luis.torres@example.com',
    phone: '+52 555-9012',
    company: 'Montajes del Norte',
    storeId: [{ name: 'Sucursal Sur', numStore: 1003 }],
    status: 'active',
  },
  {
    installerId: 4120,
    name: 'María Fernanda Rodríguez Castillo',
    email: 'maria.rodriguez@example.com',
    phone: '+52 555-3456',
    company: 'Proyectos Sur',
    storeId: [{ name: 'Sucursal Oriente', numStore: 1004 }],
    status: 'inactive',
  },
  {
    installerId: 5278,
    name: 'Jorge Pérez Gómez',
    email: 'jorge.perez@example.com',
    phone: '+52 555-7890',
    company: 'Soluciones Express',
    storeId: [{ name: 'Sucursal Poniente', numStore: 1005 }],
    status: 'active',
  },
  {
    installerId: 6392,
    name: 'Verónica Castillo Ruiz',
    email: 'veronica.castillo@example.com',
    phone: '+52 555-2345',
    company: 'Instalaciones MX',
    storeId: [{ name: 'Sucursal Norte', numStore: 1001 }],
    status: 'inactive',
  },
  {
    installerId: 7451,
    name: 'Eduardo Ramírez López',
    email: 'eduardo.ramirez@example.com',
    phone: '+52 555-6789',
    company: 'Servicios Integrales',
    storeId: [{ name: 'Sucursal Centro', numStore: 1002 }],
    status: 'active',
  },
  {
    installerId: 8530,
    name: 'Laura Patricia Gómez Fernández',
    email: 'laura.gomez@example.com',
    phone: '+52 555-0123',
    company: 'Montajes del Norte',
    storeId: [{ name: 'Sucursal Sur', numStore: 1003 }],
    status: 'inactive',
  },
  {
    installerId: 9642,
    name: 'Ricardo Díaz Ortega',
    email: 'ricardo.diaz@example.com',
    phone: '+52 555-4567',
    company: 'Proyectos Sur',
    storeId: [{ name: 'Sucursal Oriente', numStore: 1004 }],
    status: 'active',
  },
  {
    installerId: 1057,
    name: 'Patricia Sánchez Morales',
    email: 'patricia.sanchez@example.com',
    phone: '+52 555-8901',
    company: 'Cys de Yucatán S.A. de C.V.',
    storeId: [{ name: 'Sucursal Poniente', numStore: 1005 }],
    status: 'inactive',
  },
];

export const options = [
  {
    installerId: 1234,
    name: 'Carlos Alberto Mendoza López',
  },
  {
    installerId: 2045,
    name: 'Ana Ramírez Pérez',
  },
  {
    installerId: 3087,
    name: 'Luis Enrique Torres Hernández',
  },
  {
    installerId: 4120,
    name: 'María Fernanda Rodríguez Castillo',
  },
  {
    installerId: 5278,
    name: 'Jorge Pérez Gómez',
  },
  {
    installerId: 6392,
    name: 'Verónica Castillo Ruiz',
  },
  {
    installerId: 7451,
    name: 'Eduardo Ramírez López',
  },
  {
    installerId: 8530,
    name: 'Laura Patricia Gómez Fernández',
  },
  {
    installerId: 9642,
    name: 'Ricardo Díaz Ortega',
  },
  {
    installerId: 1057,
    name: 'Patricia Sánchez Morales',
  },
];
