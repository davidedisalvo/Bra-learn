<template>
   <div class="container">
    <img src="~/assets/logo.jpg">
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2">
        <h2 class="text-center">Welcome Student One</h2>
        <header-student></header-student>
      </div>

      <br />
      <br />
      <br />
      <div class="user-date col-xs-12 col-sm-8 offset-sm-2 col-md-3 offset-md-2">
        <div class="picture"><img src="~/assets/user.png"></div>
        <h3>Student One</h3>
        <p>Student id: 001</p>
        <p>Email: student.one@uni.com</p>
        <p>Student since: 17/03/2017</p>
        <button @click="goToLogin" class="btn btn-primary">Logout</button>
      </div>
      <div class="button-group col-xs-12 col-sm-8 offset-sm-2 col-md-3 offset-md-2">
        <button class="btn btn-secondary" @click="goToTest">Take test</button>
        <button class="btn btn-secondary" @click="goToGrade">Check Grade</button>
      </div>
       <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-3 offset-md-7 topic">
         <h3 class="text-center">Latest test topic</h3>
          <ul class="list-group">
            <li class="list-group-item">Grammar</li>
            <li class="list-group-item">Philosophy</li>
            <li class="list-group-item">Literature</li>
          </ul>
        </div>
    </div>
  </div>
        
</template>
<script>
import HeaderStudent from '@/components/HeaderStudent'
  export default {
    components: {
      HeaderStudent
    },
    methods: {
      goToLogin() {
        this.$router.push("/");
      },
      goToTest() {
        this.$router.push("/student/generalQuestion");
      },
      goToGrade() {
        this.$router.push("student/studentGrade");
      }
    }
  };
</script>

<style>
  .user-date {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .user-date button {
    margin-top: 50px;
    width: 50%;
  }
  .picture img {
    width: 200px;
  }
  .button-group {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
  }
  .topic {
    border: 1px solid black;
    padding: 10px;
    border-radius: 4px;
    margin-top: -200px;
  }
</style>


