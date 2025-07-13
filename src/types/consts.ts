export const ADD = 'add';
export const EDIT = 'edit';
export const DISPLAY = 'display';

export const MODAL_SMALL = 'modal-sm';
export const MODAL_BIG = 'modal-bg';
export const MODAL_START = 'align-items-start';
export const MODAL_CENTER = 'align-items-center';

export const ADD_FORM_NEW = 'new';
export const ADD_FORM_EXIST = 'exist';

const STATUS = {
  TODO: 'To Do',
  DOING: 'Doing',
  DONE: 'Done',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;
export const statusLabels = {
  [STATUS.TODO]: 'Pendiente',
  [STATUS.DOING]: 'Progreso',
  [STATUS.DONE]: 'Terminado',
  [STATUS.ACTIVE]: 'Activo',
  [STATUS.INACTIVE]: 'Inactivo',
};
export const statusClasses = {
  [STATUS.TODO]: 'pending',
  [STATUS.DOING]: 'progress',
  [STATUS.DONE]: 'done',
  [STATUS.ACTIVE]: 'active',
  [STATUS.INACTIVE]: 'inactive',
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
