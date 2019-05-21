<template>
    <article class="post-preview">
        <div 
            class="post-preview-thumbnail"
            :style="{ backgroundImage: 'url('+ thumbnail +')' }"></div>
        <div class="post-preview-title">
            <h5>{{ title }}</h5>
        </div>
        <div class="post-preview-content">
            <p>{{ content }}</p>
        </div>
        <div class="read">
            <nuxt-link :to="id" class="read-more" ><a>read-more</a></nuxt-link>
        </div>
    </article>
</template>

<script>
export default {
    props : {
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }
}

</script>

<style scoped>

.post-preview {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    margin: 1rem;
    /*width: 40%; 
    height: 30rem; */
    text-align: center;
}

.post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 15rem;

}

.read {
    width: 50%;
    height: 2rem;
    text-align: center;
    background-color: darkgoldenrod;
    padding: 2px;
    border: 1px solid black;   
    margin: 30px;
}

 a {
    text-decoration: none;
    color: white;
    
}

</style>
