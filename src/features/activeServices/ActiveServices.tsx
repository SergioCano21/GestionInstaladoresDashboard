const ActiveServices = () => {
  return (
    <>
      <section>
        <div>
          <div>Administrar Servicios Activos</div>
          <button>Asignar Servicio</button>
        </div>
        <div>
          <input type="text" placeholder="Folio" />
          <input type="text" placeholder="Nombre Instalador" />
          <input type="text" placeholder="Nombre Cliente" />
        </div>
        <div>
          <table>
            <tr>
              <th>Folio</th>
              <th>Instalador</th>
              <th>Cliente</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default ActiveServices;
