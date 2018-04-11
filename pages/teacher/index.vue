<template>
   <div class="container">
    <img src="~/assets/logo.jpg"/>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 offset-md-2">
              <header-teacher></header-teacher>
        <h2 class="text-center">Welcome Gabriel Fernandes</h2>
      </div>
      
      <br />
      <br />
      <br />
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-3 offset-md-2 user-date">
        <div class="picture"><img src="~/assets/user.png"></div>
        <h3>Gabriel Fernandes</h3>
        <button @click="goToLogin" class="btn btn-primary ">Logout</button>
      </div>
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-5 offset-md-2 table">
         <h3 class="text-center">Updates</h3>
          <ul class="list-group ">
            <li class="list-group-item">
                <h4>Student One completed his test</h4>
                <p>Total score: 80%</p>
            </li>
            <li class="list-group-item">
                <h4>Student Two completed his test</h4>
                <p>Total score: 90%</p>
            </li>
            <li class="list-group-item">
                <h4>Student Three completed his test</h4>
                <p>Total score: 30%</p>
            </li>
          </ul>
        </div>
        </div>
      <div class="row">
         <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-5 offset-md-7 topic">
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
  import HeaderTeacher from "~/components/HeaderTeacher";
  export default {
    components: {
      HeaderTeacher,
    },
    methods: {
      goToLogin() {
        this.$router.push("/");
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
  .table li, h4, p{
    padding-bottom: 0;
  
  }
  .user-date button {
    margin-top: 50px;
    width: 70%;

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
    padding: 10px;
    border-radius: 4px;
    margin-top: 0;
  }
  p {
    padding-left: 25px;
  }
</style>


