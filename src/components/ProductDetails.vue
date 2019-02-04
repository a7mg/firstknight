<template>
    <div class="products-details">

        <section class="home-section product-description">
            <div class='container'>
                <a href="javascript:void(0)" @click="back">
                    <span class='icon back'></span>
                    <small class='text-uppercase'>{{ $t("message.back") }}</small>
                </a>

                <div class='row mt-5'>

                    <div class='col-md-6 mb-3'>
                        <ul class="product-gallery">
                            <li v-for="(image, index) in product.images" :key="index"><img class='p-md-1 img-fluid' :src="image" :data-large-src="image"></li>
                        </ul>
                    </div>

                    <div class='col-md-5 offset-md-1'>
                        <h4 class="text-uppercase">{{ product.name }}</h4>
                        
                        <div v-if="productCart.selectedColor" class='color-radio mb-3'>
                            <hr>
                            <div class='mb-2 text-capitalize'>
                                <span class='text-muted'>{{ $t("message.color") }}:</span>
                                <span class=''>{{ productCart.selectedColor.name }}</span>
                            </div>

                            <div v-for="(color, index) in product.colors" :key="index" class="custom-control custom-radio custom-control-inline">
                                <input type="radio" 
                                    :id="'radio-'+color.name" 
                                    :value='color' 
                                    v-model="productCart.selectedColor" 
                                    :checked='color.id === productCart.selectedColor.id'
                                    @change="editPrice"
                                    class="custom-control-input">
                                <label v-bind:style="{ 'background-color': color.color }"
                                    class="custom-control-label" 
                                    :for="'radio-'+color.name"></label>
                            </div>
                        </div>
                        
                        <div v-if="product.description">
                            <hr>
                            <p class='chair-details'>
                                {{product.description}}
                                <!-- <span>High Back with Headrest </span> -->
                            </p>
                        </div>

                        <div v-for="(option, index) in product.options" :key="index" class='size-radio mb-3'>
                            <span class='text-muted text-capitalize'>{{ option.name }}:</span>

                            <div v-for="(optVal, i) in option.values" :key="i" class="custom-control custom-radio custom-control-inline">
                                <input type="radio" 
                                    :name="'option-'+index" 
                                    :id="'radio-option-'+index+'-'+i" 
                                    :value='{name: option.name, values: optVal}' 
                                    v-model="productCart.selectedOptions[index]" 
                                    :checked='productCart.selectedOptions[index].values.value == optVal.value'
                                    @change="editPrice"
                                    class="custom-control-input">
                                <label class="custom-control-label" :for="'radio-option-'+index+'-'+i">{{ optVal.value }}</label>
                            </div>
                        </div>

                        <div class='quantity'>
                            <span class='text-muted text-uppercase'>{{$t("message.quantity")}}:</span>
                            <select v-model="productCart.quantity" @change="editPrice" class="custom-select mr-sm-2">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="2">4</option>
                                <option value="3">5</option>
                                <option value="2">6</option>
                                <option value="3">7</option>
                                <option value="2">8</option>
                                <option value="3">9</option>
                                <option value="2">10</option>
                            </select>
                            <!-- <div class="form-group">
                                <input type="text" class="form-control" placeholder="1">
                            </div> -->
                        </div>
                        <hr>
                        <h4 class='mb-0'>{{$t("message.AED")}} {{ productCart.price }}</h4>
                        <small class='text-muted text-uppercase'>{{$t("message.taxExcluded")}}</small>
                        <p class='my-3'>
                            <!-- <span class="icon delivery"></span>
                            <span class="text-muted">2-4 Days</span> -->
                        </p>
                        <a href="#" class="btn btn-black w-100">{{ $t("message.addToCart") }}</a>
                        
                    </div>
                </div>

            </div>
        </section>

        <section class="home-section">
            <div class="container">
                <h4 class='text-center mb-3 text-uppercase'>{{$t("message.relatedProducts")}}</h4>
                <div class="card-deck">
                    <ProductCard v-for="rProduct in relatedProducts" :key="rProduct.id" v-bind:product="rProduct" />
                </div>
            </div>
        </section>

    </div>

</template>

<script>
import ProductCard from './partial/ProductCard';
import '../assets/pgwslider/pgwslider.min.css';
import '../assets/pgwslider/pgwslider.min.js';
export default {
    name: 'ProductDetails',
    data () {
        return {
            product: {name: ''},
            relatedProducts: {},
            productCart: {productId: null, selectedColor: null, selectedOptions: [], quantity: 1, price: 0}
        }
    },
    metaInfo () {
      return {
        titleTemplate: this.product.name+' | %s'
      }
    },
    created() {
        this.getData(this.$route.params.productId);
    },
    computed: {
        
    },
    beforeRouteUpdate (to, from, next) {
        this.getData(to.params.productId);
        next();
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        initSlider() {
            if(!$('.pgwSlider').length) {
                $('.product-gallery').pgwSlider({
                    listPosition: "left",
                    autoSlide: false,
                    displayControls: true,
                });
            }
        },
        getData(id) {
            this.$axios({
                method: "POST",
                data: {
                    language_symbol: this.$i18n.locale,
                    product_id: id
                },
                url: this.$root.apiUrl+"get-product"
            }).then(response => {
                if(response.data.data.product) {
                    this.product = response.data.data.product
                    this.relatedProducts = response.data.data.related_products

                    this.$nextTick(function () {
                        this.initSlider();
                    }.bind(this));
                    
                    // set default cart item options (id, colors, options)
                    this.productCart.productId = this.product.id;
                    this.productCart.price = this.product.price;
                    
                    if(this.product.colors.length)
                        this.productCart.selectedColor = this.product.colors[0]
                    
                    if(this.product.options.length) {
                        this.product.options.forEach(option => {
                            this.productCart.selectedOptions.push({
                                    name: option.name,
                                    values: option.values[0]
                                })
                        });
                    }
                    this.editPrice()
                }
                else
                    this.$router.push({ name: 'Error' })
            }, error => {
                console.error(error);
                this.$router.push({ name: 'Error' })
            });
        },
        editPrice() {
            let price = this.product.price;
            
            price = price * this.productCart.quantity; // main price * quantity
            
            this.productCart.selectedOptions.forEach(option => { // main price + option value price
                price += parseInt((option.values.price)?option.values.price:0);
            });
            
            this.productCart.price = price;
        }
    },
    components: {
        ProductCard
    }
}
</script>