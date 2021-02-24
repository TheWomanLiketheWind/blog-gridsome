<template>
  <Layout>
    <div class="container Home content">
      <div class="hero">
        <h1 class="hero-title">{{($page.themes.edges)[0].node.Title}}</h1>
        <h2 class="hero-subtitle">{{($page.themes.edges)[0].node.Describe}}</h2>
      </div>
      <div class="projects Home">
        <div class="project"
             v-for="edges in $page.articles.edges"
             :key="edges.node.id">
          <g-link :to="`/projects/${edges.node.id}`"
                  class="project-link">
            <img alt="Banana"
                 :src="apiUrl+edges.node.Cover.url"
                 width="2560"
                 class="thumbnail g-image g-image--lazy g-image--loaded">
            <h3 class="project-title">{{edges.node.Title}}</h3>
            <div class="categories">
              <span class="category"
                    v-for="items in edges.node.categories"
                    :key="items.id">{{items.Name}}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div class="Home">
      <div class="latest-journals-heading container"><span class="label">Latest and greatest</span></div>
      <div class="latest-journals">
        <div class="container">
          <g-link v-for="edges in $page.blogNews.edges"
                  :key="edges.node.id"
                  :to="`/journal/${edges.node.id}`"
                  class="journal">
            <h3 class="journal-title">{{edges.node.Title}}</h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  articles: allStrapiArticles{
    edges{
      node{
        id
        Title
        Cover{
          url
        }
        categories{
          Name
        }
      }
    }
  }
  blogNews: allStrapiBlogNews{
    edges{
      node{
        id
        Title
      }
    }
  }
  themes: allStrapiThemes{
    edges{
      node{
        Title
        Describe
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    apiUrl: () => {
      return process.env.GRIDSOME_API_URL
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
