import { getAssistants } from "@/lib/mongo/assistant";



const Assistants = async ({params}:{params:{slug:string}}) => {
  const assistants = await getAssistants(params.slug);
  if (!assistants.result) return (<div>No hay asistentes</div>);
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl text-center my-8">Asistentes que requiren alojamiento</h1>
      <ul className="flex flex-wrap px-16">{assistants.result.map((asst:any) => (
        <li className="flex flex-col border-2 rounded-md p-4" key={asst.name}>
          <span>Nombre: {asst.name}</span>
          <span>Lugar de origen: {asst.comeFrom}</span>
          <span>Total de visitantes: {asst.totalOfPeople}</span>
          <span>Email: {asst.mail}</span>
          <span>Teléfono: {asst.phone}</span>
          <span>Mensaje: {asst.message}</span>
        </li>
      ))}</ul>
    </div>
  );
};

export default Assistants