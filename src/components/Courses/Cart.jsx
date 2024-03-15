import { totalCredits } from "../../App";

const Cart = ({carts}) => {
  const credits = carts.reduce((p,c) => p + c.credit,0);
  
  return (
    <div className="bg-white p-4 mt-10">
       <div>
        <h2 className="text-2xl font-bold">Credit Hour Remaining {totalCredits-credits}</h2>
       </div>
       <div className="divider"></div>
       <div className="">
        <h3 className="font-bold text-xl">Course Name</h3>
        <ul className="list-decimal">
        {
          carts.map(cart => <li className="ml-4" key={cart.id}>{cart.name}</li>)
         }
        </ul>
         
        </div>
       <div className="divider"></div>
       <div className="font-bold">Total Credit Hour:{credits}
       </div>
       <div className="divider"></div>
       <div className="font-bold">Total Price: 
       {
        
          carts.reduce((p,c) => p + c.price,0)
        
       }
       </div>
    </div>
  );
};

export default Cart;