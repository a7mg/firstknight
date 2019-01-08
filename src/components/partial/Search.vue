<template>
    <div class="search-pop fixed-pop">
        <div class="search-container pop-container">
            <span class="close-pop black m-auto"></span>
            <div class="search-form">
                <input type="text" v-bind:placeholder='$t("message.search")'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            
        }
    },
}
</script>