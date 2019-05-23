<template>
  <div class="grid-container">
    <div class="thumb-nail">
      <div class="thumb"
        :style="{ backgroundImage: 'url(' + require('@/assets/brunch-cappuccino-coffee.jpg') + ')'}"
      >
      </div>
    </div>
    <div class="post-preview">
      <div id="post">
          <PostPreview 
            v-for="post in posts"
            :key="post.id"
            :thema="post.categorie"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :content="post.content"
            :id="post.id"
          />
      </div>
    </div>
    <div class="search">
      <div class="social"> 
        <SocialNet />
      </div>
    </div>
    <div class="social">
      <div class="social"> 
        <SocialNet />
      </div>
    </div>
    <div class="most-popular">
      <div class="most">
        <MostPopular />
      </div>
    </div>
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
              thumbnail: 'https://cdn.citynomads.com/wp-content/uploads/2017/07/10230422/alati-cover.png',
              title: 'mon posts',
              content: 'here i try to learn using vue js from myself',
              id: 'first-post'
            },

            {
              categorie: 'dessert',
              title: 'my second post',
              content: 'hello glad to post my second opinion in this blog',
              thumbnail: 'https://media.timeout.com/images/103817472/image.jpg',
              id: 'my second post'
            },

            {
              categorie: 'drinks',
              title: 'my second post',
              content: 'hello glad to post my second opinion in this blog',
              thumbnail: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/12_superfoods_for_new_moms_ref_guide/650x350_12_superfoods_for_new_moms_ref_guide.jpg',
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
  "p p p p p p p p p p s s"
  "p p p p p p p p p p f f"
  "p p p p p p p p p p m m"
}
.thumb-nail{
 /* background-color: brown; */
  grid-area: i;
}
.post-preview {
  /*background-color: blue; */
  grid-area: p;
}
.search {
 /* background-color: chartreuse; */
  grid-area: s;
}
.social {
 /* background-color: coral; */
  grid-area: f;
}
.most-popular {
  /*background-color: darkcyan; */
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
