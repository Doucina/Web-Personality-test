<template>
  <v-footer color="purple darken-4" padless>
    <v-row justify="center" no-gutters>
      <v-dialog justify="center" width="165" height="130">
       <template v-slot:activator="{ on }">
          <v-btn color="rgb(255, 0, 0, 0.16)" v-on="on">Contact Us on LinkedIn</v-btn>
        </template>
        
          <p>Outemzabet Nesrine</p>
          <p>Blanc-Talon Théodore</p>
          <p>Daho Lenny</p>
      
      </v-dialog>

      <v-col class="purple darken-3 py-4 text-center white--text" cols="12">
        <strong medium>🍀 See you soon 🍀</strong>
        <p>Quizzland Team !</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Team", "Contact Us"]
  })
};
</script>