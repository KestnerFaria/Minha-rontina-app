
export default function EventoModal({ onSave, onClose }) {
  function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    onSave({ ...data, concluido: false });
    onClose();
  }

  return (
    <div className="modal">
      <form onSubmit={submit}>
        <h3>Novo Evento</h3>

        <select name="dia">
          <option>Seg</option><option>Ter</option><option>Qua</option>
          <option>Qui</option><option>Sex</option><option>Sáb</option><option>Dom</option>
        </select>

        <input name="titulo" required />
        <input type="time" name="horaInicio" required />
        <input type="time" name="horaFim" required />

        <select name="tipo">
          <option value="study">Estudo</option>
          <option value="work">Trabalho</option>
          <option value="gym">Academia</option>
          <option value="volei">Vôlei</option>
        </select>

        <button>Salvar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
}
