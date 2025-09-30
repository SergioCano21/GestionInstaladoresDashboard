import ContentHeader from '@/components/ui/ContentHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useModal } from '@/hooks/useModal';
import { ADD, DISPLAY, DISPLAY_BLOCK, EDIT, QUERY_KEYS, ROLE } from '@/types/consts';
import AddCalendar from './AddCalendar';
import EditCalendar from './EditCalentar';
import { useMemo, useState } from 'react';
import type { Schedule } from '@/types/types';
import { scheduleTemplate } from '@/types/templates';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getCalendar } from '@/api/calendar';
import DisplayCalendar from './DisplayCalendar';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import CalendarLoader from '@/loader/CalendarLoader';
import DisplayBlock from './DisplayBlock';

dayjs.extend(utc);
dayjs.extend(timezone);

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
  const userTZ = dayjs.tz.guess();

  const handleEventClick = (arg: any) => {
    const { start, end, extendedProps } = arg.event;

    setSchedule({
      _id: extendedProps._id,
      date: dayjs.utc(start).tz(userTZ).format('YYYY-MM-DD'),
      startTime: dayjs.utc(start).tz(userTZ).format('HH:mm'),
      endTime: dayjs.utc(end).tz(userTZ).format('HH:mm'),
      type: extendedProps.type,
      installer: extendedProps.installer,
      service: extendedProps.service,
      store: extendedProps.store,
      serviceId: extendedProps.serviceId,
    });
    openModal(extendedProps.type === 'Service' ? DISPLAY : DISPLAY_BLOCK);
  };

  const calendarEvents = useMemo(() => {
    if (!schedules) return [];

    return schedules.map((schedule) => {
      return {
        title:
          schedule.type === 'Service'
            ? `Folio: ${schedule.service.folio}`
            : `Bloqueado: ${schedule.installer.name}`,
        start: dayjs.utc(schedule.startTime).tz(userTZ).toDate(),
        end: dayjs.utc(schedule.endTime).tz(userTZ).toDate(),
        color: schedule.type === 'Service' ? '#dd611aff' : '#6f6f6fff',
        extendedProps: {
          _id: schedule._id,
          type: schedule.type,
          installer: schedule.installer,
          service: schedule.service,
          store: schedule.store,
          serviceId: schedule.serviceId,
        },
        display: 'block',
      };
    });
  }, [schedules]);

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

      {isLoading ? (
        <CalendarLoader />
      ) : (
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
          editable={false}
          selectable={true}
          timeZone="local"
          views={{
            dayGridMonth: {
              displayEventTime: false,
            },
          }}
          locale={'es'}
          titleFormat={{ month: 'long', year: 'numeric' }}
          fixedWeekCount={false}
          eventClick={handleEventClick}
          events={calendarEvents}
          eventClassNames="cursor-pointer"
        />
      )}

      {modal === ADD && <AddCalendar closeModal={closeModal} />}
      {modal === EDIT && (
        <EditCalendar closeModal={closeModal} data={schedule} goBack={() => openModal(DISPLAY)} />
      )}
      {modal === DISPLAY && (
        <DisplayCalendar closeModal={closeModal} data={schedule} openModal={openModal} />
      )}
      {modal === DISPLAY_BLOCK && <DisplayBlock closeModal={closeModal} data={schedule} />}
    </>
  );
};

export default Calendar;
