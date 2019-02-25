<template>
    <div class="container relativeP">
        <div class="shopping-cart">
            <div class="shopping-cart-header">            
                <div class="shopping-cart-total">
                    <span class="lighter-text">Total:</span>
                    <span class="main-color-text">$2,229.97</span>
                </div>
            </div> <!--end shopping-cart-header -->

            <ul class="shopping-cart-items">
            <li class="clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                <span class="item-name">Sony DSC-RX100M III</span>
                <span class="item-price">$849.99</span>
                <span class="item-quantity">Quantity: 01</span>
            </li>

            <li class="clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
                <span class="item-name">KS Automatic Mechanic...</span>
                <span class="item-price">$1,249.99</span>
                <span class="item-quantity">Quantity: 01</span>
            </li>

            <li class="clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
                <span class="item-name">Kindle, 6" Glare-Free To...</span>
                <span class="item-price">$129.99</span>
                <span class="item-quantity">Quantity: 01</span>
            </li>
            </ul>

            <a href="#" class="btn btn-dark btn-xs">Checkout</a>
        </div> <!--end shopping-cart -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

ol, ul {
    list-style: none;
}

.relativeP{
    position: relative;
}
.shopping-cart {
    margin: 20px 0;
    right: 0;
    background: white;
    width: 320px;
    position: absolute;
    border-radius: 3px;
    padding: 20px;
    z-index: 2;
    background: #dcdcdc;    
}
.shopping-cart .shopping-cart-header {
    border-bottom: 1px solid #E8E8E8;
    padding-bottom: 25px;
}
.shopping-cart .shopping-cart-items {
    padding-top: 20px;
}

.shopping-cart .shopping-cart-header .shopping-cart-total {
    float: right;
}
.shopping-cart .shopping-cart-items li {
    margin-bottom: 18px;
}
.shopping-cart .shopping-cart-items img {
    float: left;
    margin-right: 12px;
}
.shopping-cart .shopping-cart-items .item-name {
    display: block;
    padding-top: 10px;
    font-size: 16px;
}
.shopping-cart .shopping-cart-items .item-price {
    color: #6394F8;
    margin-right: 8px;
}
.shopping-cart .shopping-cart-items .item-quantity {
    color: #ABB0BE;
}
.clearfix:after {
    content: "";
    display: table;
    clear: both;
}
.shopping-cart:after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #dcdcdc;
    border-width: 8px;
    margin-left: -8px;    
}

</style>
