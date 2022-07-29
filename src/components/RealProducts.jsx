
const RealProducts = (props) => {
    const Myclick = () => {
        props.clickMe()
    }
    return(
        <>
        <div>
            <h1 style = {{cursor : "pointer"}}>
                <i class="fa fa-home" onClick={Myclick}></i>
            </h1>
          </div>
        </>
    )
}

export default RealProducts;
