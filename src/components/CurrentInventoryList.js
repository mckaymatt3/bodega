// import any components you need to below
import React from 'react'
import InventoryItemCard from './InventoryItemCard';

// pull in props
function CurrentInventoryList({inventory, addReorder, deleteItemAndRemove}) {
    // create a function in a const that will render/map the items so you can call and display below    
    const showInventory = inventory.map(function(item){
        // console.log to ensure item is being pulled in 
        // console.log("Item: ", item)
        // RETURN the props to pass down to the div below within the Inventory Manager component
        return <InventoryItemCard key={item.id} item={item} changeReorder={addReorder} deleteItemAndRemove={deleteItemAndRemove} />
    })


    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {
                    // call the const built above into the div
                    showInventory
                }
            </div>
        </div>
    );
}

export default CurrentInventoryList;