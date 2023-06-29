
import React from 'react'
/* import Greet from './components/Greet' */
import ContactPanel, {Footer} from './components/contact';

function App() {
  return (
    <div className='mt-32'>
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
