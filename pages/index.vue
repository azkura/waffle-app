<template>
  <section class="container">
    <div class="thumb"   :style="{backgroundImage: 'url(' + require('@/assets/brunch-cappuccino-coffee.jpg') + ')'}"></div>
    <div>
      <div class="post">
        <PostPreview 
          v-for="post in posts"
          :key="post.id"
          :thumbnail="post.thumbnail"
          :title="post.title"
          :content="post.content"
          :id="post.id"
        />
      </div>
    </div>
    <div class="test-flex">
      <test />
      <test />
    </div>
  </section>
</template>

<script>

import PostPreview from '~/components/Blog/PostPreview'
import test from '~/components/test'

export default {
  components: {
    PostPreview,
    test
  },

  data () {
    return {
       posts:[
            {  
              thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/098/660/non_2x/vector-burger-truck.jpg',
              title: 'mon posts',
              content: 'here i try to learn using vue js from myself',
              id: 'first-post'
            },

            {
              title: 'my second post',
              content: 'hello glad to post my second opinion in this blog',
              thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/098/660/non_2x/vector-burger-truck.jpg',
              id: 'my second post'
            }
        ]
    }
  }
}
</script>

<style>

.thumb {
    margin: 14px;
    width: 100%;
    height: 300px; 
    background-repeat: no-repeat;
    background-size: cover;
}

.post, .test-flex {
  display: flex;
  flex-direction: row;
  
}

</style>
