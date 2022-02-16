import { RuxProgress, RuxButton } from '@astrouxds/react';
import Header from './components/Header';
import Alerts from './components/Alerts';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="dashboard">
      <Header />
      <div className="alert-contact-container">
        <Alerts />
        <Contacts />
      </div>
    </div>
  );
}

export default App;

/* Todo Check list
1. place the soon to be dashboard in the center of the page
2. figure out how you want to layout each data from the data.json while using README from rocket comm

*/