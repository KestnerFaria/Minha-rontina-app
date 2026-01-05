
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export function useAgenda() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "agenda"));
      setEventos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    load();
  }, []);

  async function add(ev) {
    const ref = await addDoc(collection(db, "agenda"), ev);
    setEventos([...eventos, { ...ev, id: ref.id }]);
  }

  async function toggle(id, value) {
    await updateDoc(doc(db, "agenda", id), { concluido: value });
    setEventos(eventos.map(e => e.id === id ? { ...e, concluido: value } : e));
  }

  return { eventos, add, toggle };
}
