
import { useState } from "react";
import { useAgenda } from "../hooks/useAgenda";
import EventoModal from "./EventoModal";
import "./agenda.css";

const dias = ["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];

export default function AgendaSemanal() {
  const { eventos, add, toggle } = useAgenda();
  const [open, setOpen] = useState(false);

  return (
    <section className="agenda">
      <h2>🗓️ Agenda Semanal</h2>
      <button onClick={() => setOpen(true)}>➕ Novo Evento</button>

      <div className="grid">
        {dias.map(d => (
          <div className="day-card" key={d}>
            <h3>{d}</h3>
            {eventos.filter(e => e.dia === d).map(e => (
              <div className={`event ${e.tipo}`} key={e.id}>
                <span>{e.horaInicio}</span>
                <p>{e.titulo}</p>
                <input
                  type="checkbox"
                  checked={e.concluido}
                  onChange={() => toggle(e.id, !e.concluido)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {open && <EventoModal onSave={add} onClose={() => setOpen(false)} />}
    </section>
  );
}
