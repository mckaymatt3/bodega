// import any (children) components or {use+__} required here
import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({reorder, removeReorder, deleteItemAndRemove }) {
    // create a function with a const to call below and render the items - very similar to CurrentInventoryList style
    const showReorder = reorder.map(function(item){
        // EVERY MAP SHOULD HAVE A RETURNNNNN
        return <InventoryItemCard key={item.id} item={item} changeReorder={removeReorder} deleteItemAndRemove={deleteItemAndRemove}/>
    }) 
    
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {
                    showReorder
                }
            </div>
        </div>
    );
}

export default ReorderInventoryList;