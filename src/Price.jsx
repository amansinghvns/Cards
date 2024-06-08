export default function Price({oldPrice,newPrice}){
    let oldStyles ={
        textDecorationLine:"Line-through",
    };
    let newstyles = {
        frontWeight:"bold",

    };
    let styles ={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }
    return(
        <div style={styles}>
            <span>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span>{newPrice}</span>
             

        </div>
    );
}