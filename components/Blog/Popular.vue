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

<style>
.popular-content {
    border: 1px solid gray;
    width: 30%;
    margin: 1rem;
    border-radius: 3px;
}
.popular-thumbnail {
    background-position: center;
    background-size: cover;
    height: 10rem;
    width: 100%;
}
</style>


