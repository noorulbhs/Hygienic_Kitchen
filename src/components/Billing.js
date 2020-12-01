import React,{ useState} from "react";
import Input from "./Input";
import Button from "./Button";
import classes from "./Billing.module.css"
import MenuItem from "./MenuItem/Menuitem";
import PrintProvider, { Print } from 'react-easy-print';


var fixedPrice=0;
var date=null;
var time=null;


function Billing(){
  const [name,setName]=useState("");
  const [userInput,setInputState]=useState("");
  const [price,setPrice]=useState(0);
  const [quantity,setQuantity]=useState(0);
  const [show,setShow]=useState(false);
  const [itemsName,setItemsName]=useState([]);
  const [itemsPrice,setItemsPrice]=useState([]);
  const [itemsQty,setItemsQty]=useState([]);
  const [grandTotal,setGrandTotal]=useState(0);

    const nameChangeHandler=(event)=>{
      setName(event.target.value);
      date=new Date();
      var Day=date.getDate();
      var Month=date.getMonth()+1;
      var Year=date.getFullYear();
      var Hour=date.getHours();
      var Minutes=date.getMinutes()+1;
      var Seconds=date.getSeconds();
      date=Day+"/"+Month+"/"+Year;
      time=Hour+":"+Minutes+":"+Seconds;
    }

    const findMenuItem=(event)=>{
        const items=event.target.value;
        if(items.length>0){
            setInputState(items);
            setShow(true);
        }
        else{
            setInputState("");
            setShow(false);
        }
    }

    const findItem=(selectedItem)=>{
      setInputState(selectedItem.item);
      fixedPrice=selectedItem.price;
      setPrice(fixedPrice);
      setQuantity(1);
      setShow(false);
  }

    const selectQuantity=(event)=>{
      setQuantity(event.target.value);
      const newPrice=fixedPrice*event.target.value;
      setPrice(newPrice);
    }

    const addingItem=(props)=>{
      const arrItem=[...itemsName,userInput];
      setItemsName(arrItem);
      const arrPrice=[...itemsPrice,price];
      setItemsPrice(arrPrice);
      const arrQty=[...itemsQty,quantity];
      var total=0;
      for(let i=0;i<arrPrice.length;i++){
        total+=arrPrice[i];
      }
      setGrandTotal(total);
      setItemsQty(arrQty);
      setInputState("");
      setQuantity(0);
      setPrice(0);
    }

    const resetHandler=(event)=>{
      event.preventDefault();
      setName("");
      setInputState("");
      setPrice(0);
      setQuantity(0);
      setShow(false);
      setItemsName([]);
      setItemsPrice([]);
      setItemsQty([]);
      setGrandTotal(0);
      date=null;
      time=null;
    }
    
    const submitHandler=(event)=>{
      event.preventDefault();

    }

  return(
    <PrintProvider>
        <div>
          <div>
            <h1>Billing</h1>
            <Input type="text" placeholder="Name" Change={nameChangeHandler} value={name} />
          </div>
          <div>
            <Input type="text" placeholder="Enter item..." Change={findMenuItem} value={userInput} />
            <Input type="text" placeholder="Price" value={price} />
            <Input type="number" placeholder="Quantity" value={quantity} Change={selectQuantity} />
            <Button value="ADD" Clicked={addingItem} />
            {show && <MenuItem input={userInput} clicked={(selectedItem)=>findItem(selectedItem)}/> }
          </div>
          <Print name="foo">
              <form>
                <div className={classes.Form}>
                  <h3>HYGIENIC KITCHEN</h3>
                  <h3>Shop no.7, Navyog CHS, Subhash Road,</h3>
                  <h3>Opp,Makkah Masjid,</h3>
                  <h3>Jogeswari (East), Mumabai-400060</h3>
                  <div>
                    <hr/>
                    <div>
                      <p className={classes.left} >Name: {name}</p>
                      <p className={classes.right} >Bill No. 1</p>
                    </div>
                    <hr/>
                    <div>
                      <p className={classes.left} >Date: {date}</p>
                      <p className={classes.right} >Time:{time}</p>
                    </div>
                    <hr/>
                    <div className={classes.stylingItem}>
                      <div>
                        <p>Item Name</p>
                          {itemsName.map(item=><p>{item}</p>)}
                      </div>
                      <div>
                        <p>Qty</p>
                            {itemsQty.map(qty=><p>{qty}</p>)}
                      </div>
                      <div>
                        <p>Price</p>
                        {itemsPrice.map(price=><p>{price}</p>)}
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p className={classes.Total} >Grand Total:{grandTotal}</p>  
                    </div>        
                  </div>
                  <hr />
                  <div>
                    <h3>Thanks For Ordering!!</h3>
                    <h3>Again For Ordering.</h3>
                    <h3>WhatsApp & Call:</h3>
                    <h3>9920323406</h3>
                  </div>
                </div>
              </form>
          </Print>
          <Button value="Reset" Clicked={resetHandler} />
          <Button value="Print" Clicked={submitHandler} />
        </div>
    </PrintProvider>
  )
}

export default Billing;
