<template>
  <v-parallax
    dark
    src="https://eaglesmere.org/wp-content/uploads/2019/07/hire-freelance-designers-1900x950.jpg"
  >
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-hover
            v-slot:default="{ hover }"
            :open-delay="openDelay"
            :close-delay="closeDelay"
            :disabled="disabled"
            :value="value"
          >
            <v-card :elevation="hover ? 12 : 2" class="mx-auto">
              <v-card-text>
                <v-container>
                  <h1>Login</h1>
                  <v-form
                    v-model="valid"
                    class="login"
                    @submit.prevent="onSignup"
                  >
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="email"
                          label="Mail"
                          id="email"
                          :rules="emailRules"
                          v-model="email"
                          type="email"
                          prepend-icon="mdi-account-circle"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="password"
                          label="Password"
                          id="password"
                          v-model="password"
                          :rules="[passwordRules.required, passwordRules.min]"
                          type="password"
                          prepend-icon="mdi-lock"
                          append-icon="mdi-eye-off"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn @click="addElement" :disabled="!valid"
                          >Add List</v-btn
                        >
                        <v-btn @click="login" :disabled="!valid"
                          >Valid and connection</v-btn
                        >
                      </v-flex>
                      <v-card class="mx-auto" max-width="400" tile>
                        <v-list-item
                          v-for="(item, index) in todos"
                          v-bind:key="item.id"
                        >
                          <v-list-item-content>
                            <v-list-item-title>
                              {{ item.firstname }}
                            </v-list-item-title>
                            <v-list-item-title>
                              {{ item.password }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                              {{ item.email }}
                              <v-btn @click="rmElement(index)">Remove</v-btn>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                    </v-layout>
                  </v-form>
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
/* eslint-disable */
import axios from 'axios'
export default {
  data: () => ({
    valid: false,
    password: '',
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match')
    },
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
      axios.post('/api/login', {
        login: self.login,
        password: self.password
      }).then(function (response) {
        console.log('ok')
        console.log(this.login)
      }).catch(function (error) {
        console.log(error)
      })
      const response = await axios.post('/api/login', {
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
