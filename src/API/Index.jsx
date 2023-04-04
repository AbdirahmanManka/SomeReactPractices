import React from "react";


export const getOrders=()=>{

    return fetch('https://dummyjson.com/carts/1')
    .then(res => res.json())
    .catch(err => console.log(err))
}