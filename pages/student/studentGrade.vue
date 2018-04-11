<template>
<div class="container">
    <img src="../../assets/logo.jpg" />
    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2">
            <header-student></header-student>
        </div>
    </div>    
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-2 offset-md-2">
                <div class="picture"><img src="@/assets/user.png" /></div>
            </div>
        
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-3 student">
                <p>Name: {{ students[1].name }}</p>
                <p>Surname: {{ students[1].surname }}</p>
                <p>Email: {{ students[1].email }}</p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-10 col-sm-offset-2 col-md-10 offset-md-2">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Test date</th>
                        <th scope="col">Topic</th>
                        <th scope="col">Score</th>
                        <th scope="col">Review</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">25/03/2018</th>
                        <td>Grammar</td>
                        <td>80%</td>
                        <td><button class="btn btn-secondary" @click="goToStudentReview">Review</button></td>
                    </tr>
                    <tr>
                        <th scope="row">14/03/2018</th>
                        <td>Philosophy</td>
                        <td>90%</td>
                        <td><button class="btn btn-secondary">Review</button></td>

                    </tr>
                    <tr>
                        <th scope="row">30/03/2018</th>
                        <td>Literature</td>
                        <td>60%</td>
                        <td><button class="btn btn-secondary">Review</button></td>

                    </tr>
                </tbody>
            </table>
            <button class="btn btn-primary">Email Teacher</button>
        </div>
    </div>
</template>
<script>
import HeaderStudent from "@/components/HeaderStudent";


export default {
    data() {
        return {
            students: this.$store.state.students
        }
    },

  components: {
    HeaderStudent
  },
  methods: {
      goToStudentReview() {
        this.$router.push('studentReview');
      }
  },

};
</script>
<style>
.student {
margin-top: 5%;

}
.picture {
    display: inline-block;
}
.picture img {
  width: 200px;
}
</style>


