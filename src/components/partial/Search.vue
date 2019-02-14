<template>
    <div class="search-pop fixed-pop">
        <div class="search-container pop-container">
            <span class="close-pop black m-auto"></span>
            <form class="search-form" @submit.prevent="search">
                <input type="text" v-model="seatchTitle" v-bind:placeholder='$t("message.search")'>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            seatchTitle: ''
        }
    },
    methods: {
        search() {
            if(this.seatchTitle != "") {
                this.$router.push({ name: 'Search', params: { title: this.seatchTitle } })
            }
        }
    },
}
</script>