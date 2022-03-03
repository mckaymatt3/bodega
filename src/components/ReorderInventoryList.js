import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({ 
    reorderList, 
    handleRemoveItem,
    handleDeletedItem
}) {
    console.log("Reorder List:", reorderList)

    const reorderListItems = reorderList.map(function (reorderItem) {
        return <InventoryItemCard 
            key={reorderItem.id} 
            item={reorderItem} 
            handleItem={handleRemoveItem}
            handleDeletedItem={handleDeletedItem}
            />
      })

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div >
                {reorderListItems}
            </div>
        </div>
    );
}

export default ReorderInventoryList;