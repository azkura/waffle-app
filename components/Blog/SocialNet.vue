<template>
    <div class="social-content">
        <p><strong>Follow Us</strong></p> <hr>
        <ul class="social-list">
            <nuxt-link to="/" tag="li" class="social-link"><a class="fa"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></nuxt-link>
            <nuxt-link to="/" tag="li" class="social-link"><a class="fa"><font-awesome-icon :icon="['fab', 'github']"/></a></nuxt-link>
            <nuxt-link to="/" tag="li" class="social-link"><a class="fa"><font-awesome-icon :icon="['fab', 'facebook']"/></a></nuxt-link>
            <nuxt-link to="/" tag="li" class="social-link"><a class="fa"><font-awesome-icon :icon="['fas', 'coffee']"/></a></nuxt-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.social-content {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    width: 20%;
    height: 8rem;
    padding: 14px;
}
.social-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.social-link {
    list-style: none;
}
.fa {
    text-decoration: none;
    color: white;
}

</style>


