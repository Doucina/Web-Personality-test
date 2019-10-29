<template>
  <v-app>
    <v-card width="100%" class="blue lighten-4 text-center">
      <v-app-bar
        app
        src="https://s1.1zoom.me/b5050/193/Winter_Lake_Forests_Snow_466263_1366x768.jpg"
      >
                <v-card-title class="section__title justify-center">
            <v-toolbar-title class="headline text-uppercase">
              <v-btn primary light style="color:#caccd9;" color="rgb(255, 0, 0, 0.16)" class="text-center lighten-2"
             dark v-on="on" replace :to="{name: 'home'}">QUIZZLAND</v-btn>
            </v-toolbar-title>
          </v-card-title>

        <v-spacer></v-spacer>
        <v-btn outlined class="mr-3 white lighten-7 text-center" color="primary" replace :to="{name: 'login'}">Sign in</v-btn>
        <v-btn outlined class="mr-2 white lighten-7 text-center" color="primary" replace :to="{name: 'register'}">Sign up</v-btn>
        <v-btn outlined class="mr-2 white lighten-7 text-center" color="primary" replace :to="{name: 'test'}">test</v-btn>

      </v-app-bar>

      <v-content>
        <HelloWorld />
        <Footer />
      </v-content>
    </v-card>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
