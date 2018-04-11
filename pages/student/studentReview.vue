<template>
  <div class="container">
    <img src="../../assets/logo.jpg"/>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 offset-md-2">
                <header-student></header-student>
            </div>
            <div class="col-xs-12 col-sm-10 col-sm-offset-2 col-md-10 offset-md-2">
                <div class="result">
                    <h3>Grammar</h3> <h3>Date: 25/03/2018 </h3> <h3>Score: 8/10 (80%)</h3>
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
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">A</td>
                        <td class="text-center">A</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">C</td>
                        <td class="text-center">C</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">D</td>
                        <td class="text-center">D</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">D</td>
                        <td class="text-center">B</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">A</td>
                        <td class="text-center">B</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">C</td>
                        <td class="text-center">C</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">A</td>
                        <td class="text-center">A</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">A</td>
                        <td class="text-center">A</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">B</td>
                        <td class="text-center">B</td>
                    </tr>
                    <tr>
                        <th scope="row">Lorem ipsum dolor sit amet, saepe diceret eam in. 
                            Vim consetetur suscipiantur an, ius no nullam impetus expetendis. 
                        </th>
                        <td class="text-center">B</td>
                        <td class="text-center">B</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <button class="btn btn-primary" @click="goToHome">Go back</button>

        </div>
    </div>
</template>
<script>
import HeaderStudent from "@/components/HeaderStudent";
export default {
  components: {
      HeaderStudent
  },
  methods: {
      goToHome() {
        this.$router.push('/student');

      }
  }
}
</script>
<style>
.result {
    display: flex;
    justify-content: space-around;
}
button {
    float: right;
}


</style>


