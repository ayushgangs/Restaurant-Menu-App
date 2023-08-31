import React from 'react'
import './navbar.css'
import Menu from './menuApi'

const Navbar = ({filtItem, setMenDat, uniCatList})=> {
    
    // console.log(uniCatList)
    return (
        
        <div className="restHead">
                <div className="nav">

                    {uniCatList.map((curEle)=>
                            {

                                return(
                                    <>
                                        <span onClick={()=>filtItem(curEle)}>{curEle}</span>
                                    </>

                                )
                            
                            }
                        )
                    }
                    
                </div>
        </div>
    )
}

export default Navbar