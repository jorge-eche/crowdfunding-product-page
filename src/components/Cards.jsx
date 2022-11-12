import { useState } from 'react'
import Card from './Card.jsx'

const Cards = () => {

    const [pledges, setPledges] = useState([
        {
         title:"Bamboo Stand",
         subtitle:"Pledge $25 or more",
         description:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
         amount:101  
        },
        {
            title:"Black Edition Stand",
            subtitle:"Pledge $75 or more",
            description:"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            amount:64  
        },
        {
            title:"Mahogany Special Edition",
            subtitle:"Pledge $200 or more",
            description:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            amount:0  
        }
    ])

  return (
    <>
        {pledges.map(pledge => (
            <Card
            pledge={pledge}
            type={pledge.amount === 0 ? 'no-stock' : ''}
            />
        ))}
    </>
  )
}

export default Cards