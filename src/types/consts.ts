export const ADD = 'add';
export const EDIT = 'edit';
export const DISPLAY = 'display';

export const MODAL_SMALL = 'modal-sm';
export const MODAL_BIG = 'modal-bg';
export const MODAL_START = 'align-items-start';
export const MODAL_CENTER = 'align-items-center';

export const ADD_FORM_NEW = 'new';
export const ADD_FORM_EXIST = 'exist';

export const DELETED = 'Deleted';
export const ACTIVE = 'Active';

const STATUS = {
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
};
export const roleLabels = {
  [ROLE.LOCAL]: 'Local',
  [ROLE.DISTRICT]: 'Distrital',
  [ROLE.NATIONAL]: 'Nacional',
};

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
