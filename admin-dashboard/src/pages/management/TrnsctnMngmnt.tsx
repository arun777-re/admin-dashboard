import React,{useState} from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { OrderType, OrderItemType } from '../../types';
import { Link } from 'react-router-dom';


const img = "data:image/jpeg;base64,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"

const orderItems : OrderItemType[] = [
    {
   
name: "Puma Shoes",
photo:img,
_id:"asdsaasdhsdg",
quantity:4,
price:2000,
     
}
];

const TrnsctnMngmnt:React.FC = () => {
const [order,setOrder] = useState<OrderType>({
    name:"Arun Jamdagni",
    address:"77 Black Market",
    city:"sonipat",
    state:"Haryana",
    country:"India",
    pinCode:131001,
    status:"Processing",
    subtotal:4000,
    discount:1200,
    shippingCharges:0,
    tax:200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id:"asdnasjdhbn"

});

const {name,address,city,country,state,pinCode,subtotal,
    shippingCharges,tax,discount,total,
    status
} = order;

const updateHandler = () =>{
    setOrder((prev) => ({
        ...prev,
        status:prev.status === "Processing" ? "Shipped" : "Delievered"
    }))
}

  return (
    <div className='adminContainer'>
        <AdminSidebar/>
        <main className='product-management'>
            <section style={{
                padding:"2rem",

            }}>
                <h2>Order Items</h2>

                {
                    order?.orderItems?.map(ordr => (
                        <ItemCard price={ordr.price}
                        quantity={ordr?.quantity}
                        name={ordr?.name}
                        photo={ordr?.photo}
                        _id={ordr?._id}
                        />
                    ))
                }

            </section>
            <article className='shipping-info-card'>
                <h1>Order Info</h1>
                <h5>User Info</h5>
                <p>Name : {name}</p>
                <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}  `}</p>


                <h5>Amount Info</h5>
                <p>Subtotal: {subtotal}</p>
                <p>Shipping Charges: {shippingCharges}</p>
                <p>Tax: {tax}</p>
                <p>Discount: {discount}</p>
                <p>Total: {total}</p>


                <h5>Status Info</h5>
                <p>
                    Status: {" "}
                  <span className={status === "Delievered" ? "purple" :
                    status === "Shipped" ? "green": "red"
                  }>{status}</span>  
                </p>
                <button onClick={updateHandler}> Process Status </button>
            </article>
        </main>
    </div>
  )
}


const ItemCard =({name,photo,price,quantity,_id}: OrderItemType)=>(
<div className="transaction-product-card">
    <img src={photo} alt="" />
    <Link to={`/product/${_id}`}>
        {name}
    </Link>
    <span>${price} X ${quantity}</span>
</div>
)

export default TrnsctnMngmnt