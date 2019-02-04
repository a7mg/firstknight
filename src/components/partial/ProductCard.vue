<template>
    <div class='item col-md-3 col-sm-6'>
        <router-link class="card-link" :to="{ name: 'ProductDetails', params: { slug: product.slug, productId: product.id } }">
            <div class="card my-3 mx-0 text-center">
                <div class='img-container mx-auto'>
                    <img :src="product.image" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <p>
                        <small>{{ product.name }}</small>
                        <small>{{ product.category }}</small>
                    </p>
                    <p><small class='font-weight-bold'>AED {{ product.price }}</small></p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product'],
    data() {
        return {
            
        }
    },
}
</script>