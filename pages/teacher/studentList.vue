<template>
     <div class="container">
    <img src="../../assets/logo.jpg"/>
                <hr>
      <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2">
              <header-teacher></header-teacher>
            </div>
            <br />
            <br />
            <br />
                    
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-2">
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><p>{{ students[0].id }}</p></th>
                            <td>{{ students[0].name }}</td>
                            <td>{{ students[0].surname }}</td>
                            <td>{{ students[0].email }}</td>
                            <td><button @click="goToGrade" class="btn btn-secondary">Check</button></td>

                        </tr>
                        <tr>
                            <th scope="row"><p>{{ students[1].id }}</p></th>
                            <td>{{ students[1].name }}</td>
                            <td>{{ students[1].surname }}</td>
                            <td>{{ students[1].email }}</td>
                            <td><button class="btn btn-secondary">Check</button></td>
                        </tr>
                        <tr>
                            <th scope="row"><p>{{ students[2].id }}</p></th>
                            <td>{{ students[2].name }}</td>
                            <td>{{ students[2].surname }}</td>
                            <td>{{ students[2].email }}</td>
                            <td><button class="btn btn-secondary">Check</button></td>
                        </tr>
                        <tr>
                            <th scope="row"><p>{{ students[3].id }}</p></th>
                            <td>{{ students[3].name }}</td>
                            <td>{{ students[3].surname }}</td>
                            <td>{{ students[3].email }}</td>
                            <td><button class="btn btn-secondary">Check</button></td>
                        </tr>
                        <tr>
                            <th scope="row"><p>{{ students[4].id }}</p></th>
                            <td>{{ students[4].name }}</td>
                            <td>{{ students[4].surname }}</td>
                            <td>{{ students[4].email }}</td>
                            <td><button class="btn btn-secondary">Check</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderTeacher from "~/components/HeaderTeacher";
   export default {
  data: function() {
      return {
        students: this.$store.state.students
      }
  },
      components: {
        HeaderTeacher
    },
   methods: {
          goToGrade () {
            this.$router.push('/teacher/studentGrade');
          },

         
      }
}
</script>

