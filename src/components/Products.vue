<template>
    <div class="products">
        <section class="home-main">
            <div class='container'>
                <h1 class="main-headline">
                    <span>{{ title }}</span>
                </h1>
            </div>
        </section>

        <section class="home-section filter py-0">
            <div class='container'>
                <div class='filter-btns'>

                    <div class='filter-btn' v-if="catChild != null && catChild.length">
                        <a href="javascript:void(0)" class="open-pop btn btn-black mx-3" data-target="filter-pop">
                            + filter
                        </a>
                    </div>

                    <!-- <div class='price-drop'>
                        <ul class='mb-0'>
                            <li class="dropdown">
                                <a class="custom-select" href="javascript:void(0)">sort by</a>
                                <ul class='drop-list'>
                                    <li><a href='javascript:void(0)'>lOWEST PRICE</a></li>
                                    <li><a href='javascript:void(0)'>HIGHEST PRICE</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div> -->

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

        <div class="filter-pop fixed-pop" v-if="catChild != null && catChild.length">
            <div class="menu-container pop-container">
                <span class="close-pop black m-auto"></span>
                <ul>

                    <li :class="(cat.child.length)?'dropdown':''" v-for="(cat, index) in catChild" :key="index">
                        <a href="#">{{cat.name}}</a>
                        <ul class='sub-menu' v-if="cat.child.length">
                            <li v-for="(child, index) in cat.child" :key="index" class="custom-control custom-checkbox">
                                <input type="checkbox" v-model="filterArr[index]"  class="custom-control-input" :id="'check'+child.slug">
                                <label class="custom-control-label" :for="'check'+child.slug">{{child.name}}</label>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class='text-center'>
                    <a href="#" class="btn btn-white mx-3 my-2">CLEAR</a>
                    <a href="#" @click="filter" class="btn btn-black mx-3 my-2">apply</a>
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
            title: '',
            products: {},
            catChild: null,
            filterArr: []
        }
    },
    metaInfo () {
      return {
        titleTemplate: this.title+' | %s'
      }
    },
    created() {
        this.getDataByParams()
        this.getChild()
    },
    mounted() {
        // this.getDataByParams()
    },
    beforeRouteUpdate (to, from, next) {
        this.getDataByParams()
        next()
    },
    methods: {
        getDataByParams() {
            let dataArr = {language_symbol: this.$i18n.locale}
            if(this.$route.params.title) {
                this.title = this.$route.params.title
                dataArr.title = this.$route.params.title
            }
            if(this.$route.params.catId)
                dataArr.category_id = this.$route.params.catId

            this.getData(dataArr)
        },
        getData(dataArr) {
            this.$axios({
                method: "POST",
                data: dataArr,
                url: this.$root.apiUrl+"get-products"
            }).then(response => {
                if(response.data.data.length) {
                    this.products = response.data.data;

                    if(!this.$route.params.title)
                        this.title = this.$route.params.slug
                }
            }
            // , error => {
            //     this.$router.push({ name: 'Error' })
            // }
            );
        },
        getChild() {
            this.$axios({
                method: "POST",
                data: {language_symbol: this.$i18n.locale, category_id: this.$route.params.catId},
                url: this.$root.apiUrl+"get-categories-tree"
            }).then(response => {
                if(response.data.data.length)
                    this.catChild = response.data.data[0].child
            })
            console.log(this.catChild);
            
        },
        filter() {

        }
    },
    components: {
        ProductCard
    }
}
</script>