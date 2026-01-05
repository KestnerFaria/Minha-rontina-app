
import { useEffect, useState } from "react";
import AgendaSemanal from "./components/AgendaSemanal";
import { initNotifications } from "./notification";

export default function App() {
  const [dark, setDark] = useState(true);
  const [meta, setMeta] = useState(localStorage.getItem("meta") || "");

  useEffect(() => {
    initNotifications();
  }, []);

  useEffect(() => {
    localStorage.setItem("meta", meta);
  }, [meta]);

  return (
    <div className={dark ? "dark" : "light"}>
      <header>
        <h1>📅 Minha Rotina</h1>
        <button onClick={() => setDark(!dark)}>🌙 / ☀️</button>
      </header>

      <section>
        <h2>🎯 Meta da Semana</h2>
        <input value={meta} onChange={e => setMeta(e.target.value)} />
      </section>

      <AgendaSemanal />
    </div>
  );
}
