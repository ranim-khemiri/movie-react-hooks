function Filtre({ titre, setTitre, note, setNote }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un film"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  )
}

export default Filtre