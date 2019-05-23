<template>
    <div class="popular-content">
        <div
        class="popular-thumbnail"
        :style="{ backgroundImage: 'url('+ ThumbImg +')'}"></div>
        <div class="Most-popular-content">
            <p>{{ excerpt }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ThumbImg: {
            type: String,
            required: true
        },
        excerpt: {
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
.popular-content {
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 100%;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px; 
    margin: 5px;
}
.popular-thumbnail {
    background-position: center;
    background-size: cover;
    height: 5rem;
    width: 100%;
}
.Most-popular-content {
    margin: 0.6rem;
}
.Most-popular-content p {
    font-weight: bold;
}
</style>


