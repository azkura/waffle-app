<template>
    <div class="social-content">
        <div class="main-social-content">
            <p>Follow Us</p> <hr>
            <ul class="social-list">
                <nuxt-link to="/" tag="li" class="social-link"><a class="fa"><font-awesome-icon :icon="['fab', 'facebook-f']"/></a></nuxt-link>
                <nuxt-link to="/" tag="li" class="social-link"><a class="fa"><font-awesome-icon :icon="['fab', 'instagram']"/></a></nuxt-link>
                <nuxt-link to="/" tag="li" class="social-link"><a class="fa"><font-awesome-icon :icon="['fab', 'twitter']"/></a></nuxt-link>
                <nuxt-link to="/" tag="li" class="social-link"><a class="fa"><font-awesome-icon :icon="['fab', 'pinterest-p']"/></a></nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.social-content {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 100%;
    height: 8rem;
    padding: 14px;
    background: ghostwhite;
}
.main-social-content {
    background: white;
}
.main-social-content p {
    font-weight: bold;
}
.social-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.social-link {
    list-style: none;
}
.fa {
    padding: 20px;
    font-size: 20px;
    width: 30px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    color: black;
}
</style>


