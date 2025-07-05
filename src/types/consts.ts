export const ADD_ACTIVE_SERVICE = 'add';
export const EDIT_ACTIVE_SERVICE = 'edit';
export const DISPLAY_ACTIVE_SERVICE = 'display';

export const DISPLAY_COMPLETED_SERVICE = 'display';

export const ADD_INSTALLER = 'add';
export const EDIT_INSTALLER = 'edit';
export const DISPLAY_INSTALLER = 'display';

export const MODAL_SMALL = 'modal-sm';
export const MODAL_BIG = 'modal-bg';
export const MODAL_START = 'align-items-start';
export const MODAL_CENTER = 'align-items-center';

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
