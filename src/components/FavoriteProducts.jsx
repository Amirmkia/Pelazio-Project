
const FavoriteProducts = (props) => {
    const Myclick = () => {
        props.clickMe()
    }
    return(
        <>
            <h1 style = {{cursor : "pointer"}}>
                <i class="fa fa-shopping-cart"  onClick={Myclick}></i>
            </h1>
        </>
    )
}

export default FavoriteProducts;
