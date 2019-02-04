<template>
    <div class="products">
        <section class="home-main">
            <div class='container'>
                <h1 class="main-headline">
                    <span>{{ category.name }}</span>
                </h1>
            </div>
        </section>

        <section class="home-section filter py-0">
            <div class='container'>
                <div class='filter-btns'>

                    <div class='filter-btn'>
                        <a href="javascript:void(0)" class="open-pop btn btn-black mx-3" data-target="filter-pop">
                            + filter
                        </a>
                    </div>

                    <div class='price-drop'>
                        <ul class='mb-0'>
                            <li class="dropdown">
                                <a class="custom-select" href="javascript:void(0)">sort by</a>
                                <ul class='drop-list'>
                                    <li><a href='javascript:void(0)'>lOWEST PRICE</a></li>
                                    <li><a href='javascript:void(0)'>HIGHEST PRICE</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <section class="home-section">
            <div class="container">
                <div class="card-deck">
                    <ProductCard v-for="product in products" :key="product.id" v-bind:product="product" />
                </div>
            </div>
        </section>
        
        <!-- popup -->

        <div class="filter-pop fixed-pop">
            <div class="menu-container pop-container">
                <span class="close-pop black m-auto"></span>
                <ul>

                    <li class="dropdown">
                        <a href="#">EXECUTIVE CHAIRS</a>
                        <ul class='sub-menu'>

                            <li class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="check1">
                                <label class="custom-control-label" for="check1">
                                    Executive Chairs
                                </label>
                            </li>
                            <li class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="check2">
                                    <label class="custom-control-label" for="check2">
                                        Ergonomic Chairs
                                    </label>
                            </li>

                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#">LEISURE/DINNING CHAIRS</a>
                        <ul class='sub-menu'>
                            <li class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="check3">
                                <label class="custom-control-label" for="check3">
                                    Mesh Chairs
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li><a href='?v=home'>VISITOR CHAIRS</a></li>
                </ul>

                <div class='text-center'>
                    <a href="#" class="btn btn-white mx-3 my-2">CLEAR</a>
                    <a href="#" class="btn btn-black mx-3 my-2">apply</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from './partial/ProductCard';
export default {
    name: 'Products',
    data () {
        return {
            category: {name: ''},
            products: {}
        }
    },
    metaInfo () {
      return {
        titleTemplate: this.category.name+' | %s'
      }
    },
    created() {
        this.getData(this.$route.params.catId);
    },
    beforeRouteUpdate (to, from, next) {
        this.getData(to.params.catId);
        next();
    },
    methods: {
        getData(id) {
            this.$axios({
                method: "POST",
                data: {
                    language_symbol: this.$i18n.locale,
                    category_id: id
                },
                url: this.$root.apiUrl+"get-products"
            }).then(response => {
                if(response.data.data.length) {
                    let products = this.products = response.data.data;
                    this.category.name = products[0].category
                }
            }, error => {
                this.$router.push({ name: 'Error' })
            });
        }
    },
    components: {
        ProductCard
    }
}
</script>