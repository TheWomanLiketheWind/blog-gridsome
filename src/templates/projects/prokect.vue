<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">{{$page.articleItem.Title}}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span class="category"
                      v-for="edges in $page.articleItem.categories">{{edges.Name}}</span>
              </div>
            </div>
            <div class="year-container"><span class="label">Year</span>
              <div>{{$page.articleItem.created_at}}</div>
            </div>
          </div>
        </div>
        <div class="content"
             v-html="mdToHtml($page.articleItem.Content)"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID){
  articleItem: strapiArticles(id: $id){
    id
    Title
    Content
    Cover{
      url
    }
    categories{
      Name
    }
    created_at
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const mds = new MarkdownIt();

export default {
  apiUrl: () => {
    return process.env.GRIDSOME_API_URL
  },
  methods: {
    mdToHtml(md) {
      return mds.render(md)
    }
  }
}
</script>

<style>
</style>