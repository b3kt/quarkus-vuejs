<template>
  <q-layout view="lHh Lpr lfr" class="bg-accent">
    <q-header elevated class="row">
      <q-toolbar class="col-sm-6">
        <div class="q-mx-lg q-px-lg">ALINEA</div>
        <q-separator dark vertical />
        <q-btn stretch flat icon="lab la-instagram" />
        <q-separator dark vertical />
        <q-btn stretch flat icon="lab la-facebook" />
        <q-separator dark vertical />
        <q-btn stretch flat icon="lab la-twitter" />
        <q-separator dark vertical />
      </q-toolbar>
      <q-toolbar class="col-sm-6 col-xs-12">
        <q-space />
        <q-input
          dark
          dense
          standout
          v-model="searchParam"
          class="q-mx-md full-width"
          :placeholder="$t('type_here')"
          @change="onSearch(searchParam)"
        >
          <template v-slot:append>
            <q-icon v-if="searchParam === ''" name="las la-search" />
            <q-icon
              v-else
              name="las la-times"
              class="cursor-pointer"
              @click="onReset()"
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="row">
      <q-toolbar class="col-sm-2 col-xs-12 justify-start">
        <span class="text-weight-light">&copy; 2022 </span>
        <q-toolbar-title>
          <span class="text-weight-bold">@alineastory.id</span>
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="col-sm-8 col-xs-12">
        <div class="text-weight-light">
          Alinea is a future digital library for read and write that contains a
          collection of inspirational books and stories from world-renowned
          authors and publishers.
        </div>
      </q-toolbar>
      <q-toolbar class="col-sm-2 col-xs-12 justify-end">
        <q-btn stretch flat icon="lab la-instagram" />
        <q-separator dark vertical />
        <q-btn stretch flat icon="lab la-facebook" />
        <q-separator dark vertical />
        <q-btn stretch flat icon="lab la-twitter" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
import { defineComponent, defineAsyncComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    // EssentialLink: defineAsyncComponent(() =>
    //   import("components/EssentialLink")
    // ),
  },
  mounted() {
    // this.$store.dispatch('model/fetchProfile');
    // console.log()
  },
  data() {
    return {
      searchParam: "",
      menus: [
        {
          name: "stories",
          url: "/stories",
          tooltip: this.$t("explore_stories"),
        },
        { name: "books", url: "/books", tooltip: this.$t("explore_books") },
        { name: "search", url: "/search", tooltip: this.$t("search_anything") },
      ],
    };
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    onSearch(query) {
      this.$store.commit('model/setSearchQuery', query);
    },
    onReset() {
      this.searchParam = null;
      this.$store.commit('model/setSearchQuery', null);
    },
  },
  computed: {
    ...mapGetters({
      getFeeds: "model/getQuotes",
    }),
  },
});
</script>
