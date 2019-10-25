<template>
  <v-container>
    <v-layout text-center wrap row justify-center align-center>
      <v-img height="100%" width="150%" :src="require('../assets/no.jpg')">
        <v-layout row justify-center align-center>
          <v-container grid-list-xl pt-5 style="max-height: 10em;">
            <v-layout row justify-center align-center>
              <v-card color="rgb(255, 0, 0, 0.16)" class="text-center lighten-5">
                <v-card-title class="section__title justify-center">
                  
                    <v-flex mb-4>
                      <h1 style="color:#caccd9;" class="display-2 font-weight-bold mb-3">Welcome to Quizzland</h1>
                      <p style="color:#caccd9;" class="subheading font-weight-light">
                        Want to have fun with a multitude of tests concocted by our team ?
                        <br />Let's join us !
                      </p>
                    </v-flex>
                </v-card-title>
              </v-card>
            </v-layout>
          </v-container>
        </v-layout>

        <div>
          <v-card :elevation="card" class="mx-auto" :width="width">
            <v-img
              v-if="media"
              class="black--text"
              height="200px"
              width="400"
              :src="require('../assets/tra.png')"
            >
            </v-img>

            <v-card-text>Quelle est la saison qui correspond le mieux à votre personnalité profonde ?</v-card-text>
            <v-card-actions v-if="actions">
              
              <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
              </v-card-title>

              <v-btn outlined color="primary" @click="redirect">Faire le test</v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div>
          <div id="surveyElement"></div>
          <div id="surveyResult"></div>
        </div>
        <p class="text-center" style="color:#4A148,">
          <br />For always more fun →
          <a
            href="https://www.openask.com/fr/tests/"
            style="color:#4A148;"
            target="_blank"
          >Click here 😊</a>
        </p>
        
      </v-img>
    </v-layout>
  </v-container>
</template>

<script>
//import Quizz from "./Quizz";
export default {
  data: () => ({
    media: true,
    actions: true,
    width: 344,
    height: undefined,
//    showQuizz: false
  }),
//  components: { Quizz },
  methods: {
//    redirect() {
//      this.$router.push("/quizz");
    }
  //}
};
</script>
    



