<template>
  <v-card class="mx-auto" max-width="400" v-on:click="getAnswers">
    <v-img class="white--text align-end image" height="200px" :src="imgUrl">
      <v-card-title>{{ titre }}</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
/*eslint-disable*/
export default {
  props: {
    id: Number,

    imgUrl: String,
    titre: String
  },
  methods: {
    getAnswers: function() {
      this.$emit("getAnswerFromObject", this.id);
    }
  }
};
</script>