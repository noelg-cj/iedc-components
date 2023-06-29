
import React from 'react'
/* import Greet from './components/Greet' */
import ContactInfo, {SocMedia} from './components/contact';

function App() {
  return (
    <div className='mt-32'>
      <div className="px-6 py-8 flex justify-center">
        <div className="bg-[#5658DD] px-4 py-12 flex flex-col gap-5 w-full justify-around font-[Inter] text-center min-[450px]:flex-row sm:text-left sm:px-12 sm:py-16">
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
