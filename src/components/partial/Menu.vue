<template>
    <div class="menu-pop fixed-pop">
        <div class="menu-container pop-container">
            <span class="close-pop"></span>
            <ul>
                <li><router-link :to="{ name: 'Home' }">{{ $t("message.home") }}</router-link></li>
                <li class="dropdown" v-if="this.$root.services.length">
                    <a href="#">{{ $t("message.services") }}</a>
                    <ul>
                        <li v-for="service in this.$root.services" :key="service.slug">
                            <router-link :to="{ name: 'Service', params: { slug: service.slug } }">{{ service.name }}</router-link>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">{{ $t("message.furniture") }}</a>
                    <ul>
                        <li><router-link :to="{ name: 'ReadyMade' }">{{ $t("message.ReadyMade") }}</router-link></li>
                        <li><router-link :to="{ name: 'CustomMade', params: { slug: 'custommade' } }">{{ $t("message.CustoiimMade") }}</router-link></li>
                    </ul>
                </li>
                <li><router-link :to="{ name: 'About' }">{{ $t("message.about") }}</router-link></li>
                <li><router-link :to="{ name: 'Contact' }">{{ $t("message.contactUs") }}</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
        }
    }
}
</script>