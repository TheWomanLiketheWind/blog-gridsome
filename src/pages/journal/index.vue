<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>
    <g-link v-for="edge in $page.journal.edges"
            :key="edge.node.id"
            :to="`/journal/${edge.node.id}`"
            class="journal-post">
      <div class="container journal">
        <h2 class="journal-title">{{edge.node.Title}}</h2>
        <p class="journal-excerpt">{{edge.node.Describe}}</p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query{
  journal: allStrapiBlogNews{
    edges{
      node{
        id
        Title
        Describe
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>
</style>