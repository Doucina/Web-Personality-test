<template>
  <v-app>
    <v-card width="100%" class="blue lighten-4 text-center">
      <v-app-bar 
        app
        src="https://s1.1zoom.me/b5050/193/Winter_Lake_Forests_Snow_466263_1366x768.jpg"
      >
        <v-btn color="rgb(255, 0, 0, 0.16)" class="text-center lighten-2">
          <v-card-title class="section__title justify-center">
            <v-toolbar-title class="headline text-uppercase">
              <v-btn-span primary light style="color:#caccd9;" color="rgb(255, 0, 0, 0.16)" class="text-center lighten-2" 
             dark v-on="on" replace :to="{name: 'home'}">
                QUIZZLAND
              </v-btn-span>
            </v-toolbar-title>
          </v-card-title>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn outlined class="mr-3 white lighten-7 text-center" color="primary">Sign in</v-btn>
        <v-btn outlined class="mr-2 white lighten-7 text-center" color="primary" replace :to="{name: 'register'}">Sign up</v-btn>
      </v-app-bar>

      <v-content>
        <HelloWorld />
        <Footer />
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    //
  })
};
</script>
