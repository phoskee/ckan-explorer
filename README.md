# CKAN Explorer

> [!IMPORTANT]
> 🚧 **Progetto in Sviluppo Attivo** 🚧
> 
> Questo progetto è attualmente in fase di sviluppo attivo e potrebbe subire modifiche significative.
> Alcune funzionalità potrebbero essere incomplete o soggette a cambiamenti.
> La documentazione verrà aggiornata regolarmente per riflettere lo stato attuale del progetto.

CKAN Explorer è un'applicazione web moderna costruita con Next.js che permette di esplorare e interagire con qualsiasi istanza CKAN (Comprehensive Knowledge Archive Network). CKAN è una potente piattaforma open source per la gestione e la distribuzione di dati.

## 🌟 Caratteristiche Principali

### Esplorazione Dati
- **Pacchetti**: Visualizza e cerca tra tutti i dataset disponibili
- **Organizzazioni**: Esplora le organizzazioni che pubblicano i dati
- **Gruppi**: Naviga tra i gruppi tematici
- **Tag**: Cerca per parole chiave e categorie
- **Risorse**: Accedi direttamente alle risorse dei dataset

### Funzionalità Tecniche
- Interfaccia moderna e reattiva
- Tema chiaro/scuro
- Layout responsive
- Navigazione intuitiva
- Visualizzazione dettagliata dei metadati
- API wrapper completo per CKAN

## 🚀 Iniziare

### Prerequisiti
- Node.js (versione 18 o superiore)
- npm/yarn/pnpm

### Installazione

1. Clona il repository:
```bash
git clone https://github.com/phoskee/ckan-explorer.git
cd ckan-explorer
```

2. Installa le dipendenze:
```bash
npm install
```

3. Configura le variabili d'ambiente:
Crea un file `.env.local` con:
```bash
NEXT_PUBLIC_CKAN_API_BASE_URL=https://tuo-ckan-instance/api/3
```

4. Avvia il server di sviluppo:
```bash
npm run dev
```

## 🔍 Funzionalità Dettagliate

### API Wrapper
L'applicazione include un wrapper completo per le API CKAN che gestisce:

- **Package API**
  - Ricerca dataset
  - Visualizzazione dettagli
  - Lista risorse

- **Organization API**
  - Lista organizzazioni
  - Dettagli organizzazione
  - Conteggio follower

- **Group API**
  - Lista gruppi
  - Dettagli gruppo
  - Dataset associati

- **Tag API**
  - Ricerca tag
  - Lista tag
  - Dataset per tag

- **Resource API**
  - Ricerca risorse
  - Visualizzazione dettagli
  - Preview dati

### Visualizzazione Dati
- Dashboard con statistiche generali
- Visualizzazione gerarchica dei dati
- Filtri avanzati
- Preview dei contenuti
- Metadati dettagliati

## 🛠 Tecnologie Utilizzate

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **HTTP Client**: Axios
- **State Management**: React Hooks
- **Theme**: Sistema di tema dinamico/shadcn

## 📚 Struttura del Progetto

```
src/
├── app/              # Route handlers e componenti pagina
├── components/       # Componenti riutilizzabili
├── lib/             # Utilities e configurazioni
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
└── api/             # API wrapper e funzioni
```

## 🤝 Contribuire

Sono aperto a contributi! Per favore:

1. Fai fork del repository
2. Crea un branch per la tua feature
3. Committi i tuoi cambiamenti
4. Pusha al branch
5. Apri una Pull Request


## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT.
