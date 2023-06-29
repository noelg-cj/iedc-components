
import React from 'react'
/* import Greet from './components/Greet' */
import ContactInfo, {SocMedia} from './components/contact';

function App() {
  return (
    <div className='mt-32'>
      <div className="px-11">
        <div className="bg-[#5658DD] px-8 py-16 flex justify-around max-w-2xl m-auto font-[Inter]">
          <ContactInfo name="Rizvan MS" desig="CEO" email="ceoiedc@cet.ac.in" />
          <ContactInfo name="Treasa Mariya" desig="PRO" email="proiedc@cet.ac.in" />
        </div>
      </div>
      <div className='my-24 w-fit mx-auto'>
        <SocMedia />
        <p className='text-[#9CA9B3] text-[10px]'>Made by IEDC CET. All Rights Reserved.</p>
      </div>
    </div> 
  );
}

export default App;
