import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Courses/Cart'
import Courses from './components/Courses/Courses';

export const totalCredits = 15;

function App() {
  const [carts, setCarts] = useState([]);
 
 const handleSelect = (course) =>{
  const alreadyExist = carts.find((cart) => cart.id == course.id );
  
  const credits = carts.reduce((p,c) => p + c.credit,0);
  if(credits + course.credit> totalCredits){
  return  alert('cannot have more than 15 credit');
  }
    
  if(!alreadyExist){
    const newCarts = [...carts, course];
    setCarts(newCarts);
  }
 }

  return (
    <div className='p-7 bg-base-200'>
     <h2 className='text-3xl font-bold text-center'>Course Registration</h2>
     <div className='grid grid-cols-12 gap-5'>
      <div className='col-span-9'>
        <Courses
         handleSelect={handleSelect}
         ></Courses>
      </div>
      <div className='col-span-3'>
         <Cart carts = {carts}></Cart>
      </div>
     
     
     </div>
     
    </div>
  )
}

export default App
