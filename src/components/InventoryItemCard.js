import React from 'react'

function InventoryItemCard({
    item, 
    handleItem,
    handleDeletedItem
}) {

    function onClicky () {
        handleItem(item)
        // handleRemoveItem(item)
        // handleDeletedItem(item)
        // console.log("ReorderList: ", reorderList)
        // console.log("item clicked", item)
    }

    function onDelete (event) {
        event.stopPropagation();
        handleDeletedItem(item)
    }

    return(
        <div className="card" onClick={() => onClicky(item)}>
            <img src={item.image} alt="Bodega Item" ></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={(event) => onDelete(event)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;