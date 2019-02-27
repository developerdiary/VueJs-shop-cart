<template>
    <div class="container relativeP">
        <div class="shopping-cart">
            <div class="shopping-cart-header">            
                <div class="shopping-cart-total">
                    <span class="lighter-text">Total: </span>
                    <span class="main-color-text">{{20000 | currency}}</span>
                </div>
            </div> <!--end shopping-cart-header -->

            <ul class="shopping-cart-items">
                <li class="clearfix" v-for="(product, index) in getProductsInCart" :key="index">
                    <span class="item-remove" @click="remove(index)"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <img :src="product.image" alt="item1" />
                    <div class="item-details">                        
                        <span class="item-name">{{product.name}}</span>
                        <span class="item-price">{{ product.price | currency }}</span>
                        <span class="item-quantity">Quantity: 01</span>      
                    </div>              
                </li>
            </ul>
            <a href="#" class="btn btn-dark btn-xs">Checkout</a>
        </div> <!--end shopping-cart -->
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {        
        ...mapGetters([
            'getProductsInCart'        
        ])
        
    },
    methods:{
        ...mapActions([
            'removeProduct'        
        ]),
        
        remove(index) {
            this.removeProduct(index);
        },
    }
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
    padding-left: 0px;
}

.shopping-cart .shopping-cart-header .shopping-cart-total {
    float: right;
}
.shopping-cart .shopping-cart-items li {
    position: relative;
    margin-bottom: 18px;
}
.shopping-cart .shopping-cart-items img {
    float: left;
    margin-right: 12px;
    width: 50px;
}

.shopping-cart .shopping-cart-items .item-details{
    display: inline-block;
}
.shopping-cart .shopping-cart-items .item-details .item-name {
    display: block;
    padding-top: 10px;
    font-size: 14px;
    text-align: left;
}
.shopping-cart .shopping-cart-items .item-details .item-price {
    display: block;
    color: #6394F8;
    margin-right: 8px;
    text-align: left;
}
.shopping-cart .shopping-cart-items .item-details .item-quantity {
    display: block;
    color: #ABB0BE;
    text-align: left;
}

.shopping-cart .shopping-cart-items .item-remove {
    position: absolute;
    right: 0;
    top: 10px;
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
