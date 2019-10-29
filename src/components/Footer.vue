<template>
  <v-footer color="purple darken-4" padless>
    <v-row justify="center" no-gutters>
      <v-dialog justify="center" width="100" height="130">
       <template v-slot:activator="{ on }">
          <v-btn color="rgb(255, 0, 0, 0.16)" v-on="on">
            Contact Us </v-btn>
        </template>
        
          <li><a style="color:#caccd9;" href="https://fr.linkedin.com/in/nesrine-outemzabet-02813b163">👩‍💻 Nesrine</a></li>
          <li><a style="color:#caccd9;" href="https://www.linkedin.com/in/th%C3%A9odore-blanc-talon-5a0540194/">👨‍💻 Théodore</a></li>
          <li><a style="color:#caccd9;" href="https://www.linkedin.com/in/lenny-daho-7a5277161/">👨‍💻 Lenny</a></li>
      
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