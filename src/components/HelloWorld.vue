<template>
    <v-container>
      <v-form @submit.prevent="onSignup">
      <v-row>
        <table>
          <tr>
           <v-text-field
             v-model="firstname"
             :rules="nameRules"
             :counter="20"
             label="First name"
             required
           ></v-text-field>
          </tr>

          <tr>
           <v-text-field
             v-model="lastname"
             :rules="nameRules"
             :counter="20"
             label="Last name"
             required
           ></v-text-field>
           </tr>

           <tr>
            <v-text-field
             v-model="email"
             :rules="emailRules"
             :counter="20"
             label="E-mail"
             required
             ></v-text-field>
           </tr>
           <tr>
            <v-text-field
             name="password"
             :counter="20"
             :rules="nameRules"
             label="Password"
             id="password"
             v-model="password"
             type="password"
             required></v-text-field>
          </tr>
          <tr>
           <v-text-field
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              :counter="20"
              :rules="[comparePasswords]"></v-text-field>
           </tr>
          </table>
      </v-row>
      <v-btn @click="addElement">Ajouter</v-btn>
      <v-btn @click="login" type="submit">Submit</v-btn>
      <v-btn type="submit">Sign up</v-btn>
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn primary light color="red white--text" dark v-on="on" replace :to="{name: 'login'}">Back</v-btn>
      </template>
      <span>Revenir sur la page d'acceuil</span>
    </v-tooltip>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    confirmPassword: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    todos: [],
    url: 'http://localhost:4000' // 'http://localhost:4000'
  }),
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    async login () {
      console.log('zss')
      // connecter l'utilisateur
      var self = this
      axios.post('http://localhost:4000/api/login', {
        login: self.name,
        password: self.description
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
      const response = await axios.post(this.url + '/api/login', {
        login: this.firstname,
        password: this.email
      })
      console.log(response)
      console.log('response is:', response)
    },
    logout () {
    },
    addElement () {
      this.todos.push({
        id: this.todos.length,
        name: this.firstname,
        email: this.email
      })
      console.log('ajouté !')
    },
    onSignup () {
      this.$store.dispatch('signUserUp', { email: this.email, password: this.password, firstname: this.firstname, lastname: this.lastname })
    }
  }
}
</script>
