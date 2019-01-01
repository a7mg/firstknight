<template>
    <div class="container">
        <h1 class="text-center mb-5">{{ user.name }}</h1>
        <table class="table">
            <tr><td>name</td><td>{{ user.name }}</td></tr>
            <tr><td>image</td><td><img v-bind:src="user.image" width="50" alt=""></td></tr>
            <tr><td>phone</td><td>{{ user.phone }}</td></tr>
            <tr><td>email</td><td>{{ user.email }}</td></tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Error',
        data () {
            return {
                user: {}
            }
        },
        created() {
            this.user = this.$store.state.user
        },
        metaInfo: {
            titleTemplate: 'Profile | %s'
        }
    }
</script>