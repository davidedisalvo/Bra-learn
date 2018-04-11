<template>
   <div class="container">
    <img src="@/assets/logo.jpg" />
        <hr>
        
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-s-2 col-md-10 offset-md-2">
                <header-student></header-student>
            </div>
            <br/>
            <br/>
            <br/>
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-3 offset-md-2">
                <div class=title><h2>Philosophy 3</h2></div>
                <h3>Question {{x + 1}} of 10</h3>
            </div> 
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2 question">
                <p>{{questions[x].question}}</p>
            </div>
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2 answers">
                <div class="answer" :key="index" v-for="(check, index) in questions[x].answer">
                        <input type="checkbox" v-model="results[index]" value=""/>
                        <p><span>{{index + 1}})</span> {{ check }}
                        </p>
                </div>
                
                <button v-if="x < 9" class="btn btn-primary" @click="goNext">Next</button>
                <!--<router-link tag="button" to="test-results">Go to</router-link>-->
                <button @click="goNext" v-if="x >= 9" class="btn btn-secondary submit">Submit</button>

                  <test-completed 
                  :seen="seen" 
                  v-show="seen"></test-completed>
            </div>
        </div>
    </div>
</template>
<script>
  import HeaderStudent from "@/components/HeaderStudent";
  import TestCompleted from "@/components/TestCompleted.vue";
  export default {
    data() {
      return {
        questions: this.$store.state.questions,
        results: this.$store.state.results,
        x: 0,
         seen: false
      };
    },
    components: {
      HeaderStudent,
      TestCompleted
    },
    methods: {
      goNext() {
        if(this.x < 9) {
          this.questionNumber++;
          this.x++;
          var i;
        for( i=0; i < this.results.length; i++ ) {
           if(this.results[i] == true) {
          console.log(i);
          this.$store.state.arr.push(i+1);
      } 
      }
          this.results= [];
          
        }else {
          for( i=0; i < this.results.length; i++ ) {
           if(this.results[i] == true) {
          this.$store.state.arr.push(i+1);
          this.seen = true;
           /*this.$router.push('test-results'); implement it. Right now you go directly to testResult. */

        }
      }
    }
  }
  }
  }
</script>
<style>
  .question {
    border: 1px solid black;
    border-radius: 3px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .answer {
    display: flex;
    margin-top: 15px;
    align-items: baseline;
  }
  .answer input {
    margin-right: 10px;
  }
  .title {
    width: auto;
    background-color: grey;
    padding: 0 5px;
    border-radius: 3px;
  }
  .submit {
    float: right;
  }
  h3 {
      font-size: 20px;
  }
</style>


