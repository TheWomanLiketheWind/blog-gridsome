<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{$page.journalItems.Title}}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">{{$page.journalItems.Author}}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{$page.journalItems.created_at}}</div>
            </div>
            <div class="journal-time"><span class="label">Time</span><span>1 min read</span></div>
          </div>
        </div>
        <div class="journal-content"
             v-html="mdToHtml($page.journalItems.Content)"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID){
	journalItems: strapiBlogNews(id: $id){
    id
    Title
    Author
    created_at
    Content
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const mds = new MarkdownIt();

export default {
  methods: {
    mdToHtml(md) {
      return mds.render(md)
    }
  }
}
</script>

<style>
</style>