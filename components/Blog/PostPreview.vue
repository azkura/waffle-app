<template>
    <article class="post-preview">
        <div class="main-post-preview">
            <div class="type-thema">{{ thema }}</div>
            <div class="post-date">{{ postDate }}</div>
            <div class="post-preview-title">
                <h5>{{ title }}</h5>
            </div>
            <div 
                class="post-preview-thumbnail"
                :style="{ backgroundImage: 'url('+ thumbnail +')' }"></div>
            <div class="post-preview-content">
                <p>{{ content }}</p>
                <div class="read">
                    <nuxt-link :to="id" class="read-more"><a>Read-More...</a></nuxt-link>
                </div>
            </div>
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
.post-preview {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 5px;
    padding: 18px;
    background: ghostwhite;
}
.main-post-preview {
    background: white;
}
.type-thema {
    border-bottom: 2px solid gray;
    text-transform: uppercase;
}
.post-date {
    display: block;
    background: lightblue;
    color: white;
    width: 40%;
    text-align: center; 
    margin-top: 8px;
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
.post-preview-content p {
    color: darkgray;
}
a {
    text-decoration: none;
    color: black;  
}
h5, a {
    font-weight: bold;
}
/*@media (min-width: 35rem) {
    .post-preview {
        width: 25rem;
    }
}*/

</style>
