/* eslint-disable vue/no-duplicate-attributes */
<template>
  <v-parallax
    dark
    src="https://eaglesmere.org/wp-content/uploads/2019/07/hire-freelance-designers-1900x950.jpg"
  >
    <v-container my-5>
      <v-layout row>
        <v-flex xs12 sm6 md6 ma-1 offset-sm3>
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2">
              <v-card-text>
                <v-container>
                  <h1>Register</h1>
                  <v-form
                    v-model="valid"
                    class="login"
                    @submit.prevent="onSignup"
                  >
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          v-model="firstname"
                          :rules="nameRules"
                          :counter="20"
                          label="First name"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          v-model="lastname"
                          :rules="nameRules"
                          :counter="20"
                          label="Last name"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          v-model="email"
                          name="email"
                          label="Mail"
                          id="email"
                          :rules="emailRules"
                          type="email"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[passwordRules.required, passwordRules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="password"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn @click="addElement" :disabled="!valid"
                          >Add List</v-btn
                        >
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-btn @click="register">Register</v-btn>
                          </template>
                          <span>Revenir sur la page d'acceuil</span>
                        </v-tooltip>
                        <v-btn type="submit" replace :to="{ name: 'login' }"
                          >login</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-spacer></v-spacer>
        <div>
          <v-card class="mx-auto" max-width="400" tile>
            <v-list-item v-for="(item, index) in todos" v-bind:key="item.id">
              <v-list-item-content>
                <v-list-item-title>
                  <span> email : </span> {{ item.email }}
                </v-list-item-title>
                <v-list-item-title>
                  <span> password : </span> {{ item.password }}
                </v-list-item-title>
                <v-btn icon ripple color="red" @click="rmElement(index)">
                  <v-icon class="white--text">close</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  data: () => ({
    valid: false,
    show1: false,
    show2: false,
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length >= 2 || 'Min 2 characters'
    ],
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match')
    },
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    todos: [],
  }),
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
    user () {
      return this.$store.getters.user
    },
    nonNullItems: function () {
      return this.todos.filter(function (item) {
        return item !== null
      })
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
    async register () {
      // connecter l'utilisateur
      var self = this
      axios.post('/api/login', {
        login: self.name,
        password: self.description
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
      const response = await axios.post('/api/register', {
        login: this.firstname,
        password: this.password
      })
      console.log(response)
      console.log('response is:', response)
    },
    addElement () {
      this.todos.push({
        id: this.todos.length,
        email: this.email,
        password: this.password
      })
      console.log('ajouté !')
    },
    rmElement (index) {
      console.log('index', index)
      this.todos.splice(index, 1)
    },
    onSignup () {
      this.$store.dispatch('signUserUp', { email: this.email, password: this.password, firstname: this.firstname, lastname: this.lastname })
    }
  }
}
</script>
