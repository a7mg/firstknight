<template>
    <div class="menu-pop fixed-pop">
        <div class="menu-container pop-container">
            <span class="close-pop"></span>
            <ul>
                <li><router-link :to="{ name: 'Home' }">{{ $t("message.home") }}</router-link></li>
                <li class="dropdown">
                    <a href="#">{{ $t("message.services") }}</a>
                    <ul>
                        <li><router-link :to="{ name: 'Service', params: { slug: 'real-estate' } }">Real Estate</router-link></li>
                        <li><router-link :to="{ name: 'Service', params: { slug: 'interior-design' } }">Interior Design</router-link></li>
                        <li><router-link :to="{ name: 'Service', params: { slug: 'exhibitions' } }">Exhibitions</router-link></li>
                        <li><router-link :to="{ name: 'Service', params: { slug: 'maintenance' } }">Maintenance</router-link></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">{{ $t("message.furniture") }}</a>
                    <ul>
                        <li><router-link :to="{ name: 'ReadyMade' }">ReadyMade</router-link></li>
                        <li><router-link :to="{ name: 'CustoiimMade' }">CustoiimMade</router-link></li>
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
    },
}
</script>