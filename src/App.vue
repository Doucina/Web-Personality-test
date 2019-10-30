<template>
  <v-app>
    <v-card width="100%" class="blue lighten-4 text-center">
      <v-app-bar
        app
        src="http://www.maximumwall.com/wp-content/uploads/2015/07/fonds-ecran-paysage-magnifique-6.jpg"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              primary
              light
              style="color:#caccd9;"
              color="rgb(255, 0, 0, 0.16)"
              class="text-center lighten-2"
              dark
              v-on="on"
              replace
              :to="{ name: 'home' }"
            >
              QUIZZLAND
            </v-btn>
          </template>
          <span>Return to the homme page</span>
        </v-tooltip>
        <v-spacer></v-spacer>

        <v-btn
          outlined
          class="mr-3 white lighten-7 text-center"
          color="primary"
          replace
          :to="{ name: 'login' }"
          >Sign in</v-btn
        >
        <v-btn
          outlined
          class="mr-2 white lighten-7 text-center"
          color="primary"
          replace
          :to="{ name: 'register' }"
          >Sign up</v-btn
        >
      </v-app-bar>

      <v-content class="compo">
        <router-view></router-view>
        <!--<Accueil v-on:triggerTest="beginTest" v-if="begin"/>
        <Test v-if="!begin"/>-->
        <Footer v-if="!begin" />
      </v-content>
    </v-card>
    <v-content> </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */

import Accueil from "./components/Accueil";
import Test from "./components/Test";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Accueil,
    Test,
    Footer
  },
  data: () => ({
    begin:true
  }),
  methods: {
    beginTest(){
      this.begin=false;
    }
  }
  
};
</script>
