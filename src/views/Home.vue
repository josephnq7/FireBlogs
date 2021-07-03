<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
  name: "Home",
  components: {BlogPost},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "weekly blog articles with all things programming including HTML, CSS, Javascript and more awesome weekly blog articles with all things programming including HTML, CSS, Javascript and more awesome weekly blog articles with all things programming including HTML, CSS, Javascript and more awesome",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title",
          blogHTML: "This is a filler blog post title! weekly blog articles with all things programming including HTML, CSS, Javascript and more awesome weekly blog articles with all things programming including HTML, CSS, Javascript and more awesome weekly blog articles with all things programming including HTML, CSS, Javascript and more awesome",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title 22",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        {blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2021"},
      ]
    };
  },
};
</script>
