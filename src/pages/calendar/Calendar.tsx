import ContentHeader from '@/components/ui/ContentHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useModal } from '@/hooks/useModal';
import { ADD, EDIT } from '@/types/consts';
import AddCalendar from './AddCalendar';
import EditCalendar from './EditCalentar';
import { schedules } from '@/mock';
import { useState } from 'react';
import type { Schedule } from '@/types/types';
import { scheduleTemplate } from '@/types/templates';

const Calendar = () => {
  const { modal, openModal, closeModal } = useModal();

  const [schedule, setSchedule] = useState<Schedule>(scheduleTemplate);

  const getLocalTime = (date: Date | null) =>
    date
      ? date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false })
      : '';

  const getLocalDate = (date: Date | null) => (date ? date.toLocaleDateString('en-CA') : '');

  const handleEventClick = (arg: any) => {
    console.log(arg.event.start);
    const { start, end, extendedProps } = arg.event;

    setSchedule({
      startTime: getLocalTime(start),
      endTime: getLocalTime(end),
      installerId: extendedProps.installerId,
      serviceId: extendedProps.serviceId,
      date: getLocalDate(start),
      type: extendedProps.type,
    });
    openModal(EDIT);
  };

  return (
    <>
      <ContentHeader title="Calendario" button="Agregar Cita" openModal={() => openModal(ADD)} />
      <div className={`flex mb-20 gap-5`}>
        <input type="text" placeholder="Folio" className={`filter-input`} />
        <input type="text" placeholder="Nombre Cliente" className={`filter-input`} />
        <input type="text" placeholder="Nombre Instalador" className={`filter-input`} />
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'title',
          right: 'dayGridMonth timeGridWeek  prev next',
        }}
        buttonText={{
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        timeZone="local"
        locale={'es'}
        titleFormat={{ month: 'long', year: 'numeric' }}
        fixedWeekCount={false}
        eventClick={handleEventClick}
        events={schedules.map((schedule) => ({
          title: `${schedule.serviceId} - Instalador: ${schedule.installerId}`,
          start: new Date(`${schedule.date} ${schedule.startTime}`),
          end: new Date(`${schedule.date} ${schedule.endTime}`),
          color: schedule.type === 'Service' ? '#4CAF50' : '#F44336',
          extendedProps: {
            type: schedule.type,
            installerId: schedule.installerId,
            serviceId: schedule.serviceId,
          },
          display: 'block',
        }))}
      />

      {modal == ADD && <AddCalendar closeModal={closeModal} />}
      {modal == EDIT && <EditCalendar closeModal={closeModal} data={schedule} />}
    </>
  );
};

export default Calendar;
