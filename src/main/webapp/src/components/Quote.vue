<template>
  <div class="row q-col-gutter-md q-pa-md" v-if="value !== null">
    <div class="col">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-card-section class="col bg-secondary text-white">
            <div class="text-h6">{{ value.name }}</div>
          </q-card-section>
          <q-card-section class="col bg-secondary text-white text-right">
            <q-btn stretch flat icon="lab la-facebook" />
            <q-btn stretch flat icon="lab la-twitter" />
            <q-btn stretch flat icon="las la-copy" />
          </q-card-section>
        </q-card-section>
        <q-separator dark />

        <q-card-section class="q-pa-lg">
          <div class="text-h4 text-weight-light text-italic" :style="'font-size:'+(value.font_size * 2)+'px !important;'">
            [{{value.font_size}}] {{ value.quotes }}
          </div>
          <!-- <div class="text-subtitle q-pt-md">Ki Hajar Dewantara</div> -->
        </q-card-section>

        <q-separator dark />

        <q-card-section class="bg-primary text-white text-weight-light">
          <span class="text-italic"
            >{{ $t("source") }}: {{ value.source }}</span
          >
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-3 col-xs-12">
      <q-card class="img-card q-mb-md q-visible-sm" v-if="value.image !== null">
        <q-img :src="value.image.url" lazy ratio="1" contain>
          <div class="absolute-bottom" style="padding:4px">
            <q-btn
              flat
              :label="$t('download_image')"
              class="bg-secondary text-white full-width"
            />
            <!-- <div class="text-h6">{{ value.image.url }}</div>
            <div class="text-subtitle2">by John Doe</div> -->
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  setup() {
    return {};
  },
};
</script>
