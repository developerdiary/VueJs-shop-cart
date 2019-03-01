<template>    
    <div class="container p-top-20">
        <div class="row">    
            <div class="col-xs-18 col-sm-6 col-md-3"  v-for="(product, index) in getAllProducts" :key="index">
                <div class="thumbnail">
                    <img :src="product.image" alt="">
                    <div class="caption">
                        <h4>{{ product.name}}</h4>
                        <p>{{ product.details | truncate(50, '...')}}</p>
                        <p><a href="javascript:void(0);" @click="addProductToCart(product)" class="btn btn-primary btn-xs" role="addtocart">Add To Cart</a></p>
                    </div>
                </div>
            </div>
            
        </div><!-- End row -->        
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {

    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'getAllProducts',
            'getProductsInCart'
        ])
    },

    methods: {        
        ...mapActions([
            'addCartItem',
            'updateCartItem'          
        ]),        
        addProductToCart: function(product) {   
            var found = false;
            
            if(this.getProductsInCart.length > 0){                
                for(let i=0; i< this.getProductsInCart.length; i++){
                    if(this.getProductsInCart[i].sku == product.sku){                        
                        let quantity = this.getProductsInCart[i].quantity + 1;
                        let playload = [];
                        playload.quantity = quantity;
                        playload.index = i;
                        this.updateCartItem(playload)
                        found = true;
                        break;
                    }
                }
                
            }
            
            if(!found) {
                product.quantity = 1;
                this.addCartItem(product);
            }
        }
    }
}
</script>

<style scoped>

.thumbnail {
    position: relative;
    padding: 0px;
    margin-bottom: 20px;
}

.thumbnail img {
    width: 100%;
}
.p-top-20{
    padding-top:20px;
}
.caption{
    margin-top:20px;
}
h4{
    font-size: 10px;
}
</style>
