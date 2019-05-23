<template>
  <div class="grid-container">
    <div class="thumb-nail">
      <div class="thumb"
        :style="{ backgroundImage: 'url(' + require('@/assets/brunch-cappuccino-coffee.jpg') + ')'}"
      >
      </div>
    </div>
    <div class="post-preview">PostPreview</div>
    <div class="search">search</div>
    <div class="social">focial</div>
    <div class="most-popular">MostPopular</div>
    <div class="other">some text here</div>
    
    
    
      
      
  </div>
</template>

<script>

import MostPopular from '~/components/Blog/MostPopular'
import SocialNet from '~/components/Blog/SocialNet'
import PostPreview from '~/components/Blog/PostPreview'

export default {
  components: {
    PostPreview,
    SocialNet,
    MostPopular
  },

  data () {
    return {
       posts:[
            { 
              categorie: 'waffle',
              thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/098/660/non_2x/vector-burger-truck.jpg',
              title: 'mon posts',
              content: 'here i try to learn using vue js from myself',
              id: 'first-post'
            },

            {
              categorie: 'dessert',
              title: 'my second post',
              content: 'hello glad to post my second opinion in this blog',
              thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/098/660/non_2x/vector-burger-truck.jpg',
              id: 'my second post'
            },

            {
              categorie: 'drinks',
              title: 'my second post',
              content: 'hello glad to post my second opinion in this blog',
              thumbnail: 'https://static.vecteezy.com/system/resources/previews/000/098/660/non_2x/vector-burger-truck.jpg',
              id: 'my third post'
            }
        ]
    }
  }
}
</script>

<style>
.grid-container {
  height: 100%;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(auto, auto));
  grid-auto-rows: auto;
  grid-template-areas: 
  "i i i i i i i i i i i i"
  "p p p p p p p p s s s s"
  "p p p p p p p p f f f f"
  "t t t t t t t t m m m m"
}
.thumb-nail{
 /* background-color: brown; */
  grid-area: i;
}
.post-preview {
  background-color: blue;
  grid-area: p;
}
.search {
  background-color: chartreuse;
  grid-area: s;
}
.social {
  background-color: coral;
  grid-area: f;
}
.most-popular {
  background-color: darkcyan; 
  grid-area: m;
}
.other {
  background-color: darkgreen;
  grid-area: t;
}


















.thumb {
    margin: 14px;
    width: 100%;
    height: 300px; 
    background-repeat: no-repeat;
    background-size: cover;
}
#post, .test-flex {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 35rem) {
  #post {
    flex-direction: row;
  }
}

</style>
