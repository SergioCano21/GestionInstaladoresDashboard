import ContentHeader from '@/components/ui/ContentHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useModal } from '@/hooks/useModal';
import {
  ADD,
  DISPLAY,
  DISPLAY_BLOCK,
  EDIT,
  QUERY_KEYS,
  ROLE,
  SCHEDULE_OPTIONS,
} from '@/types/consts';
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
import FilterSection from '@/components/ui/filter/FilterSection';
import FilterInput from '@/components/ui/filter/FilterInput';
import { useFilter } from '@/hooks/useFilter';

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
    openModal(extendedProps.type === SCHEDULE_OPTIONS.SERVICE ? DISPLAY : DISPLAY_BLOCK);
  };

  const { filteredData, handleFilterChange } = useFilter(schedules ?? [], {
    folio: { getValue: (s) => s.service.folio },
    client: { getValue: (s) => s.service.client },
    installer: { getValue: (s) => s.installer.name },
  });

  const calendarEvents = useMemo(() => {
    if (!filteredData) return [];

    return filteredData.map((schedule) => {
      return {
        title:
          schedule.type === SCHEDULE_OPTIONS.SERVICE
            ? `Folio: ${schedule.service.folio}`
            : `Bloqueado: ${schedule.installer.name}`,
        start: dayjs.utc(schedule.startTime).tz(userTZ).toDate(),
        end: dayjs.utc(schedule.endTime).tz(userTZ).toDate(),
        color: schedule.type === SCHEDULE_OPTIONS.SERVICE ? '#dd611aff' : '#6f6f6fff',
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
  }, [filteredData]);

  return (
    <>
      <ContentHeader
        title="Calendario"
        button={role === ROLE.LOCAL ? 'Agregar Cita' : undefined}
        openModal={role === ROLE.LOCAL ? () => openModal(ADD) : undefined}
      />
      <FilterSection>
        <FilterInput
          type="search"
          placeholder="Folio"
          onChange={(e) => handleFilterChange('folio', e.target.value)}
        />
        <FilterInput
          type="search"
          placeholder="Nombre Cliente"
          onChange={(e) => handleFilterChange('client', e.target.value)}
        />
        <FilterInput
          type="search"
          placeholder="Nombre Instalador"
          onChange={(e) => handleFilterChange('installer', e.target.value)}
        />
      </FilterSection>

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
