<template>
    <article class="post-preview">
        <div class="type-thema">{{ thema }}</div>
        <div class="post-date">{{ postDate }}</div>
        <div class="post-preview-title">
            <h5><strong>{{ title }}</strong></h5>
        </div>
        <div 
            class="post-preview-thumbnail"
            :style="{ backgroundImage: 'url('+ thumbnail +')' }"></div>
        <div class="post-preview-content">
            <p>{{ content }}</p>
             <span class="read">
                <nuxt-link :to="id" class="read-more" ><a><strong>Read-More...</strong></a></nuxt-link>
            </span>
        </div>
    </article>
</template>

<script>
export default {
    props : {
        thema: {
            type: String,
            required: true
        },
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
    },
    data () {
        return {
            postDate: 'vend 12 Avr'
        }
    }
}

</script>

<style scoped>
.type-thema {
    border-bottom: 2px solid gray;
    text-transform: uppercase;
}
.post-date {
    display: block;
    background: red;
    color: white;
    width: 40%;
    text-align: center; 
    margin-top: 8px;
}
.post-preview {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    margin: 1rem;
    padding: 18px;
   /* width: 40%; */
    /*height: 30rem; */
    /*text-align: center; */
}
.post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 15rem;
}
.post-preview-title,
.post-preview-content {
    padding: 1rem;
}
a {
    text-decoration: none;
    color: black;  
}
@media (min-width: 35rem) {
    .post-preview {
        width: 25rem;
    }
}

</style>
