<template>
    <div class="most-popular">
        <div class="most-popular-main">
            <p>Most Popular</p> <hr>
            <Popular
                v-for="pop in pops"
                :key="pop.id"
                :ThumbImg="pop.thumbnailUrl"
                :excerpt="pop.greatTitle"
                :id="pop.id"
            /> 
        </div>
    </div>
</template>

<script>

import Popular from '~/components/Blog/Popular'

export default {
    components: {
        Popular
    },
    data () {
        return {
             pops: [
                { 
                    thumbnailUrl: 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201309-xl-filipino-grilled-chicken.jpg?itok=e9G7Zq9x',
                    greatTitle: 'the most popular title that i havent seen before',
                    id: 'the most one'
                },

                { 
                    thumbnailUrl: 'https://www.seriouseats.com/recipes/images/2017/01/20161219-stuffed-shells-vicky-wasik-16-1500x1125.jpg',
                    greatTitle: 'the most popular title that i havent seen before',
                    id: 'the most Two'
                }
            ]
        }
    }
}
</script>

<style scoped>
.most-popular {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 40%;
    padding: 10px;
    margin: 3rem;
    background: ghostwhite;
}
.most-popular-main {
    background: white;
}
.most-popular-main p {
    font-weight: bold;
}

</style>


