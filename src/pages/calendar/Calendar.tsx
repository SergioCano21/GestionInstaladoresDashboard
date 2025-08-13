import ContentHeader from '@/components/ui/ContentHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useModal } from '@/hooks/useModal';
import { ADD, DISPLAY, EDIT, QUERY_KEYS, ROLE } from '@/types/consts';
import AddCalendar from './AddCalendar';
import EditCalendar from './EditCalentar';
import { useMemo, useState } from 'react';
import type { Schedule } from '@/types/types';
import { scheduleTemplate } from '@/types/templates';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getCalendar } from '@/api/calendar';
import DisplayCalendar from './DisplayCalendar';

const Calendar = () => {
  const { modal, openModal, closeModal } = useModal();
  const [schedule, setSchedule] = useState<Schedule>(scheduleTemplate);
  const role = useSelector((state: any) => state.auth.role);
  const { data: schedules, isLoading } = useQuery<Schedule[]>({
    queryKey: [QUERY_KEYS.CALENDAR],
    queryFn: getCalendar,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const getLocalTime = (date: Date | null) =>
    date
      ? date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false })
      : '';

  const getLocalDate = (date: Date | null) => (date ? date.toLocaleDateString('en-CA') : '');

  const handleEventClick = (arg: any) => {
    const { start, end, extendedProps } = arg.event;

    setSchedule({
      _id: extendedProps._id,
      date: getLocalDate(start),
      type: extendedProps.type,
      startTime: getLocalTime(start),
      endTime: getLocalTime(end),
      installer: extendedProps.installer,
      service: extendedProps.service,
      store: extendedProps.store,
    });
    openModal(DISPLAY);
  };

  const calendarEvents = useMemo(() => {
    if (!schedules) return [];

    return schedules.map((schedule) => {
      return {
        title: `Folio: ${schedule.service.folio}`,
        start: new Date(schedule.startTime),
        end: new Date(schedule.endTime),
        color: schedule.type === 'Service' ? '#dd611aff' : '#6f6f6fff',
        extendedProps: {
          _id: schedule._id,
          type: schedule.type,
          installer: schedule.installer,
          service: schedule.service,
          store: schedule.store,
        },
        display: 'block',
      };
    });
  }, [schedules]);

  if (isLoading) return null;

  return (
    <>
      <ContentHeader
        title="Calendario"
        button={role === ROLE.LOCAL ? 'Agregar Cita' : undefined}
        openModal={role === ROLE.LOCAL ? () => openModal(ADD) : undefined}
      />
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
        events={calendarEvents}
      />

      {modal === ADD && <AddCalendar closeModal={closeModal} />}
      {modal === EDIT && <EditCalendar closeModal={closeModal} data={schedule} />}
      {modal === DISPLAY && (
        <DisplayCalendar closeModal={closeModal} data={schedule} openModal={openModal} />
      )}
    </>
  );
};

export default Calendar;
