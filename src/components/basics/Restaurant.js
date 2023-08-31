import {useState} from 'react'
import Navbar from "./Navbar"
import './restaurant.css'
import Card from "./Card"
import Menu from "./menuApi"


const Restaurant = ()=> {
    const uniqueCategoryList = 
    [... new Set(Menu.map(curEle=>
                {
                    return curEle.category
                }
            )
        ), "all"
    ]

    // console.log(uniqueCategoryList)

    const [menuData, setMenuData] = useState(Menu)
  
    const filterItem = (category)=>
    {
        if(category === "all"){
            setMenuData(Menu)
            return;
        }
        
        const updatedApiList = Menu.filter((curElm)=>{
            return curElm.category === category
        })
        setMenuData(updatedApiList)
      
    }


    return(
        <div className="rest">
            
            <Navbar filtItem= {filterItem} setMenDat={setMenuData} uniCatList= {uniqueCategoryList}/>
            <Card menDat={menuData}/>
        </div>
    )
}

export default Restaurant