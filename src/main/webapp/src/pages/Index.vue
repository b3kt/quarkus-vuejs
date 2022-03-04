<template>
  <q-page class="x-default-maxwidth q-mx-auto">
    <div v-for="quote in getFilteredFeeds" :key="quote.id" class="q-my-lg">
      <Quote :value="quote"/>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import Quote from "components/Quote"

export default defineComponent({
  name: "PageIndex",
  components: { Quote },
  mounted() {
    this.$store.dispatch("model/fetchQuotes");
    // this.$store.dispatch("model/fetchStoriesByCriteria", "newStories");
    // this.$store.dispatch("model/fetchStoriesByCriteria", "saleStories");
  },
  methods: {},
  computed: {
    isAuthenticated() {
      return this.$keycloak !== undefined && this.$keycloak !== null
        ? this.$keycloak.authenticated
        : false;
    },
    getFilteredFeeds(){
      const qry = this.getSearchQuery;
      return this.getFeeds.filter(item => {
        if(qry !== null){
          return item.quotes.toLowerCase().includes(qry.toLowerCase()) || 
            item.name.toLowerCase().includes(qry.toLowerCase()) ||
            item.source.toLowerCase().includes(qry.toLowerCase());
        }else{
          return true;
        }
      });
    },
    ...mapGetters({
      getFeeds: "model/getQuotes",
      getSearchQuery: "model/getSearchQuery",
    }),
  },
});
</script>
