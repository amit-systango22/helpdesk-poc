import FreshdeskWidget from './components/freshdesk';
import CreateTicketForm from './components/freshdesk/customCreateTicket';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Custom Desk Sytem</h2>
      <FreshdeskWidget />
      <CreateTicketForm />
    </div>
  );
}

export default App;
