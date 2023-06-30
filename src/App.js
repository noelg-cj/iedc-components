
import React from 'react'
/* import Greet from './components/Greet' */
import ContactPanel, {Footer} from './components/contact';
import Faculty from './components/Faculty';

function App() {
  return (
    <div className='mt-32'>
      <Faculty />
      <div className="px-6 py-8 flex justify-center">
        <ContactPanel />
      </div>
      <div className='p-6'>
        <Footer />
      </div>
    </div> 
  );
}

export default App;
