// call in useState and useEffect and any other components to use below
import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    // set state for original inventory to pull in
    const [inventory, setInventory] = useState([])
    const [reorder, setReorder] = useState([])
    
    // bring in fetch with useEffect - REMEMBER THE ANONYMOUS ARROW FUNCTION IN THE FIRST LINE
    useEffect(() =>
        // next two lines are standard
        fetch("http://localhost:8001/inventory")
        .then(response => response.json())
        .then(inventoryData => {
            // console log to check data is working
            console.log("Inventory Data:", inventoryData)
            // push data pulled in into state so you can manipulate and re-render 
            setInventory(inventoryData)
        })
    ,[])

    // create a function to render and re-render the state above as it is changed
    function addReorder (reorderItem) {
        // console.log to check to see if renderItem and reorderItem is working withthe onClick target
        // console.log("reorderItem: ", reorderItem)
        // console.log("reorder: ", reorder)
        // create a const to check if true or not below to determine if element is already in state
        const findOne = reorder.find(function(itemInReorder){
            return itemInReorder.id === reorderItem.id
        })
        // if reorderItem to add is not already in state - as determined from the find above - then add into state 
        if (!findOne) {
            return setReorder([...reorder, reorderItem])
        }   
    }

    // create a function to remove the reorderItem from the state to re-render and update the reorder area
    function removeReorder (reorderItem) {
        // check to see removeReorder is working within the same onClick target
        // console.log(reorderItem)
        // create a const to filter out the item that was clicked
        const filterReorder = reorder.filter(function(itemInReorder){
            return itemInReorder.id !== reorderItem.id
        })
        // for the items where filterReorder is true - as determined above - add back in the new filtered data to your state to re-render
        if (filterReorder) {
            return setReorder(filterReorder)
        }
    } 

    // create a function to delete the item from database (i.e. fetch-DELETE) to re-render the inventory state and update the reorder state to re-render
    // not 100% on this - but believe you have to pass this function to both so that it works in either component
    function deleteItemAndRemove (deleteItem) {
        // not necessary - just like to declare the const to put into the fetch url
        const itemId = deleteItem.id
        // write out the fetch body - remember the comma after the close of the parentheses and brackets to open up
        fetch(`http://localhost:8001/inventory/${itemId}`, {
            method:"DELETE"
        })
        // typical then response
        .then(response => response.json())
        // another .then with an anonymous function to pass your updated state through
        .then(() => {
            removeReorder(deleteItem);
            setInventory(inventory.filter(function (currentInventoryItem){
                return currentInventoryItem.id !== deleteItem.id
            }))
        })
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} addReorder={addReorder} deleteItemAndRemove={deleteItemAndRemove} />
            <ReorderInventoryList reorder={reorder} removeReorder={removeReorder} deleteItemAndRemove={deleteItemAndRemove} />
        </div>
    );
}

export default InventoryManager;