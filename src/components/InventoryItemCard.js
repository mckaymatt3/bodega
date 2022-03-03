import React from 'react'

function InventoryItemCard({item, changeReorder,deleteItemAndRemove}) {
    // create a Function to pull out the item id
    function onClicky () {
        // console.log to ensure itemis pulled
        // console.log(item)        
        changeReorder(item)
    }

    function onClickyTwo(event){
        event.stopPropagation();
        // console.log to ensure itemis pulled
        // console.log(item)
        deleteItemAndRemove(item);
    }
    
    return(
        <div className="card" onClick={() => onClicky(item)}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={(event) => onClickyTwo(event)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;