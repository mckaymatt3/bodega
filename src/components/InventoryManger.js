import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [inventory, setInventory] = useState([])
    const [reorderList, setReorderList] = useState([])

    useEffect(()=> {
        fetch("http://localhost:8001/inventory")
        .then(response => response.json())
        .then(inventoryData => setInventory(inventoryData))
    }, [])
    
    
    function handleAddedItem (newItem) {
        const postSingleItem = reorderList.find(function(singleItem) {
            return singleItem.id === newItem.id
        })
        if (!postSingleItem) {
            return setReorderList([...reorderList, newItem])
        }
    }

    function handleRemoveItem (item) {
        // return console.log(item)
        const removeItem = reorderList.filter(function(singleItem){
            return singleItem.id !== item.id
        })
        if (removeItem) {
            return setReorderList(removeItem)
        }
    }

    function handleDeletedItem (item) {
        fetch(`http://localhost:8001/inventory/${item.id}`, {
            method: "DELETE"
        })
        .then(response=>response.json())
        .then(() => {
            handleRemoveItem(item);
            setInventory(inventory.filter(function (showInventory) {
                return showInventory.id !== item.id
            })
            )
        })
    }
    
    return(
        <div className="container">
            <CurrentInventoryList 
                inventory={inventory}
                reorderList={reorderList} 
                handleAddedItem={handleAddedItem}
                handleDeletedItem={handleDeletedItem}
            />
            <ReorderInventoryList 
                reorderList={reorderList} 
                handleRemoveItem={handleRemoveItem}
                handleDeletedItem={handleDeletedItem}/>
        </div>
    );
}

export default InventoryManager;