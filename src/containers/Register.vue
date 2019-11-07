<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>SMU Register</v-toolbar-title>
                <v-spacer />
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="login"
                    prepend-icon="email"
                    type="text"
                    v-model="data.email"
                  />

                  <v-text-field
                    label="Username"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="data.username"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="data.password"
                    @keydown="checkEnter"
                  />
                </v-form>
              </v-card-text>
              <v-card-text>
                <p class="text-justify">
                    Have an account already? Login <router-link to="/login">here</router-link>
                </p>
                </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="register">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'register',
    props: {
      source: String,
    },
    data(){
        return{
            data: {
                email: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        checkEnter(val){
            if(val.key == 'Enter' && this.data.user != '' &&  this.data.password != ''){
                this.login();
            }
        },
        register(){
            console.log("register", this.data.user, this.data.password);
        }
    }
  }
</script>