<template>
   <div class="container">
    <img src="../../assets/logo.jpg"/>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2">
                <header-teacher></header-teacher>
            </div>
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2">
                <h2>Grammar 1</h2>
                <h3>Question {{questionNumber}} of 10</h3>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Insert your question here</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="question"></textarea>
                </div>
                <h3>Choose the correct option</h3>
                <div class="form-group">
                    <div class="answers">
                        <input type="checkbox" name="A" value="A"/>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Insert your answer" v-model="answer.a"></textarea>
                    </div>

                </div>
                <div class="form-group">
                     <div class="answers">
                        <input type="checkbox" name="B" value="B"/>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Insert your answer" v-model="answer.b"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="answers">
                        <input type="checkbox" name="C" value="C"/>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Insert your answer" v-model="answer.c"></textarea>
                    </div>
                </div>
                <button class="btn btn-primary" @click="clear">Create Anoter</button> <!---You need to implement this button clear fileds-->
            </div>
        </div>
    </div>
</template>
<script>
  import HeaderTeacher from "~/components/HeaderTeacher";
export default {
    data() {
        return {
        question: '',
        answer: {
            a: '',
            b:'',
            c: ''
        },
        questionNumber: 1

        }
    },
  components: {
      HeaderTeacher
  },
  methods: {
      clear() {
          if (confirm('Your question has been created. Do you want to create another one?'))
          {
            this.question = '';
            this.answer = '';
            this.questionNumber = 2;
          }else {
 
          }

      }
  }
}

</script>
<style>
.answers {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.answers input {
    margin-right: 10px;
}
</style>


