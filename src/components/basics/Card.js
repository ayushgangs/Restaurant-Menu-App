import "./card.css"

const Card = ({menDat})=> {
    return(
        <>
            <div className="restBody">               

                {menDat.map((ele)=>{
                    const {id, category, name, description, image} = ele
                    return(
                        <>
                            
                                <div className="cardBox" key={id}>
                                    <div className="num">{id}</div>
                                    <div className="category">{category}</div>
                                    <div className="cardTitle">{name}</div>
                                    <p>{description}</p>
                                    <div className="line-p">
                                        <div className="line"></div>
                                        <span>READ</span>
                                    </div>
                                    <div className="cardPhoto">
                                        <img src={image}/>
                                    </div>
                                    <div className="btn">
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            
                        </>
                    )
                })}
            </div>
            
        </>
    )
}

export default Card