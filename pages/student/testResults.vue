<template>
 <div class="container">
    <img src="@/assets/logo.jpg" />
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2">
                <header-student></header-student>
            </div>
            <div class="col-xs-12 col-sm-10 offset-sm-2 col-md-10 offset-md-2">
                <div class="result">
                    <h3>Philosophy 3</h3> <h3>Date: 25/03/2018 </h3> <h3>Total score: 8/10 (80%)</h3>
                </div>
                <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col" class="text-center">Question</th>
                        <th scope="col">Marked</th>
                        <th scope="col">Right</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{{questions[0].question}} 
                        </th>
                        <td class="text-center">{{arr[0]}}</td>
                        <td class="text-center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[1].question}} 
                        </th>
                        <td class="text-center">{{arr[1]}}</td>
                        <td class="text-center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[2].question}}  
                        </th>
                        <td class="text-center">{{arr[2]}}</td>
                        <td class="text-center">1</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[3].question}} 
                        </th>
                        <td class="text-center">{{arr[3]}}</td>
                        <td class="text-center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[4].question}} 
                        </th>
                        <td class="text-center">{{arr[4]}}</td>
                        <td class="text-center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[5].question}} 
                        </th>
                        <td class="text-center">{{arr[5]}}</td>
                        <td class="text-center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[6].question}} 
                        </th>
                        <td class="text-center">{{arr[6]}}</td>
                        <td class="text-center">1</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[7].question}} 
                        </th>
                        <td class="text-center">{{arr[7]}}</td>
                        <td class="text-center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[8].question}} 
                        </th>
                        <td class="text-center">{{arr[8]}}</td>
                        <td class="text-center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">{{questions[9].question}} 
                        </th>
                        <td class="text-center">{{arr[9]}}</td>
                        <td class="text-center">4</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <button class="btn btn-primary" @click="goToHome">Go back</button>

        </div>
    </div>

</template>
<script>
import HeaderStudent from '@/components/HeaderStudent.vue';
export default {
  data() {
      return {
        questions: this.$store.state.questions,
          results: this.$store.state.results,
          arr: this.$store.state.arr,
          totalAnswers: []
      }
  },
  components: {
    HeaderStudent
  },
  methods: {
    goToHome() {
      this.$router.push('/student');
    },
  }
}

</script>
<style>
.result {
  display: flex;
  justify-content: space-around;

}
</style>

