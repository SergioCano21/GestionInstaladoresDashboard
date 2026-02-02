export const ADD = 'add';
export const EDIT = 'edit';
export const DISPLAY = 'display';
export const DISPLAY_BLOCK = 'display_block';

export const MODAL_SMALL = 'modal-sm';
export const MODAL_BIG = 'modal-bg';
export const MODAL_START = 'align-items-start';
export const MODAL_CENTER = 'align-items-center';

export const ADD_FORM_NEW = 'new';
export const ADD_FORM_EXIST = 'exist';

export const DELETED = 'Deleted';
export const ACTIVE = 'Active';

export const STATUS = {
  TODO: 'To Do',
  DOING: 'Doing',
  DONE: 'Done',
  CANCELED: 'Canceled',
  ACTIVE: 'Active',
  DELETED: 'Deleted',
} as const;
export const statusLabels = {
  [STATUS.TODO]: 'Pendiente',
  [STATUS.DOING]: 'Progreso',
  [STATUS.DONE]: 'Terminado',
  [STATUS.CANCELED]: 'Cancelado',
  [STATUS.ACTIVE]: 'Activo',
  [STATUS.DELETED]: 'Eliminado',
};
export const statusClasses = {
  [STATUS.TODO]: 'pending',
  [STATUS.DOING]: 'progress',
  [STATUS.DONE]: 'done',
  [STATUS.CANCELED]: 'deleted',
  [STATUS.ACTIVE]: 'active',
  [STATUS.DELETED]: 'deleted',
};

export const ROLE = {
  LOCAL: 'local',
  DISTRICT: 'district',
  NATIONAL: 'national',
} as const;
export const roleLabels = {
  [ROLE.LOCAL]: 'Local',
  [ROLE.DISTRICT]: 'Distrital',
  [ROLE.NATIONAL]: 'Nacional',
} as const;

export const roleOptions = [
  {
    label: roleLabels[ROLE.LOCAL],
    value: ROLE.LOCAL,
  },
  {
    label: roleLabels[ROLE.DISTRICT],
    value: ROLE.DISTRICT,
  },
  {
    label: roleLabels[ROLE.NATIONAL],
    value: ROLE.NATIONAL,
  },
];

export const QUERY_KEYS = {
  STORES: 'stores',
  ADMINS: 'administrators',
  INSTALLERS: 'installers',
  SERVICES: 'services',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  CALENDAR: 'calendar',
  ALL: 'all',
  RECEIPT: 'receipt',
};

export const countryOptions = ['México'];

export const districtOptions = ['Norte', 'Centro-Norte', 'Centro-Sur', 'Sur', 'Oeste', 'Este'];

export const availableHours = [
  { label: '08:00', value: '08:00' },
  { label: '08:30', value: '08:30' },
  { label: '09:00', value: '09:00' },
  { label: '09:30', value: '09:30' },
  { label: '10:00', value: '10:00' },
  { label: '10:30', value: '10:30' },
  { label: '11:00', value: '11:00' },
  { label: '11:30', value: '11:30' },
  { label: '12:00', value: '12:00' },
  { label: '12:30', value: '12:30' },
  { label: '13:00', value: '13:00' },
  { label: '13:30', value: '13:30' },
  { label: '14:00', value: '14:00' },
  { label: '14:30', value: '14:30' },
  { label: '15:00', value: '15:00' },
  { label: '15:30', value: '15:30' },
  { label: '16:00', value: '16:00' },
  { label: '16:30', value: '16:30' },
  { label: '17:00', value: '17:00' },
  { label: '17:30', value: '17:30' },
  { label: '18:00', value: '18:00' },
];

export const statesMex = [
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chiapas',
  'Chihuahua',
  'Ciudad de México',
  'Coahuila',
  'Colima',
  'Durango',
  'Estado de México',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas',
];
