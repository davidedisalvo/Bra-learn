<template>
  <div class="container">
            <img src="../assets/logo.jpg"/>

    <form @submit.prevent class="container">
      
      <div class="row">

        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <hr>
          <h1>Welcome to BraLearn</h1>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model='userData.email'>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model='userData.password'>
          </div>
                
        </div>
      </div>
            <!--<div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender">Female 
                    </label>
                </div>
            </div>-->
      <div class="row">
        <div class="col-xs-3 col-sm-2 offset-sm-3 col-md-1 offset-md-3 btn-group">
          <button
            class="btn btn-primary"
            @click='goToIndexStudent'>Student
          </button>
        </div>
          <button
            class="btn btn-primary"
            @click='goToIndexTeacher'>Teacher
          </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userData: {
          email: "",
          password: "",
          age: 27
        }
      };
    },
    methods: {
      goToIndexTeacher() {
        this.$router.push("/teacher");
      },
      goToIndexStudent() {
        this.$router.push("/student");
      }
    }
  };
</script>

<style>
  .btn-group {
    display: flex;
    margin-right: 5%;
  }
</style>