import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({
    inventory, 
    reorderList, 
    postSingleItem, 
    handleAddedItem, 
    handleDeletedItem
}) {
    
    
    const mapInventory = inventory.map( function (item){
        // console.log("Item: ", item)
        return <InventoryItemCard 
            key={item.id} 
            item={item}  
            reorderList={reorderList} 
            postSingleItem={postSingleItem} 
            handleItem={handleAddedItem}
            handleDeletedItem={handleDeletedItem}
            />
    })

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {mapInventory}
            </div>
        </div>
    );
}

export default CurrentInventoryList;