import '../styles/Guide.css'

export default function Guide() {
    return (
      <>
        <div className="guide-container">
          <h1>Guida alla meditazione</h1>
  
          <section>
            <h2>Perché meditare</h2>
            <p>
              La meditazione è uno strumento potente per migliorare la consapevolezza, ridurre lo stress
              e coltivare il benessere mentale. Anche pochi minuti al giorno possono fare la differenza.
            </p>
          </section>
  
          <section>
            <h2>Come iniziare</h2>
            <p>
              Trova un luogo tranquillo, siediti in una posizione comoda e imposta un timer. 
              Respira profondamente, chiudi gli occhi e porta l'attenzione al respiro.
              Se la mente si distrae, riportala gentilmente al presente.
            </p>
          </section>
  
          <section>
            <h2>Tecniche comuni</h2>
            <ul>
              <li><strong>Respiro consapevole:</strong> focalizzati sul ritmo del tuo respiro.</li>
              <li><strong>Body scan:</strong> osserva le sensazioni fisiche in ogni parte del corpo.</li>
              <li><strong>Meditazione camminata:</strong> cammina lentamente prestando attenzione ai movimenti.</li>
              <li><strong>Mantra:</strong> ripeti mentalmente una parola o frase per mantenere la concentrazione.</li>
            </ul>
          </section>
  
          <section>
            <h2>Consigli utili</h2>
            <p>
              Non serve essere perfetti: la pratica è più importante del risultato. Medita con regolarità, anche solo
              per 5 minuti. Accogli ogni esperienza senza giudicarla.
            </p>
          </section>
        </div>
      </>
    )
  }