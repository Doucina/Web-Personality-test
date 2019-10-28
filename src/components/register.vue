<template>
 <v-parallax
    dark
    src="https://eaglesmere.org/wp-content/uploads/2019/07/hire-freelance-designers-1900x950.jpg"
  >
  <v-container >
    <v-layout row >
      <v-flex xs12 sm6 offset-sm3>
         <v-hover
          v-slot:default="{ hover }"
          :open-delay="openDelay"
          :close-delay="closeDelay"
          :disabled="disabled"
          :value="value"
        >
        <v-card
        :elevation="hover ? 12 : 2"
            class="mx-auto"
          >
          <v-card-text>
            <v-container>
              <h1> Register </h1>
              <form @submit.prevent="onSignup">
                 <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="20"
                      label="First name"
                    required></v-text-field>
                  </v-flex>
                </v-layout>
                 <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="20"
                      label="Last name"
                    required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      :rules="emailRules"
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn @click="addElement">Ajouter</v-btn>
                    <v-btn @click="addElement" type="submit">Submit</v-btn>
                    <v-btn type="submit" replace :to="{name: 'login'}">login</v-btn>
                    <v-tooltip bottom>
                   <template v-slot:activator="{ on }">
                     <v-btn primary light color="red white--text" dark v-on="on" replace :to="{name: 'home'}">Home</v-btn>
                    </template>
                    <span>Revenir sur la page d'acceuil</span>
                  </v-tooltip>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
         </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
 </v-parallax>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    password: '',
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
        password: this.password
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
