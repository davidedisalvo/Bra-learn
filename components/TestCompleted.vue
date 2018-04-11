<template>
<div class="test-completed">
    <h2>Congratulation!</h2>
  <h3>You have finished test Philosophy 3</h3>
  <h4>Do you want to see your marks?</h4>
  <div class="button-group">
      <button @click="goToMarks" class="btn btn-primary">YES</button>
        <button @click ="goToHome" class="btn btn-primary">NO</button>
    </div>

</div>
</template>
<script>
    export default {
        props: ['seen'],
        methods: {
            goToMarks() {
                this.$router.push('testResults')
            },
            goToHome() {
            this.$router.push('/student')

            }
        }
    }
</script>
<style scoped>
.test-completed {
    width: 400px;
    height: 250px;
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translateX(-50%);
    transform: translateY(-100%);
    z-index: 100000;
    display: flex;
    flex-direction: column;
    justify-content: center;
        align-items: center;
}
h3 {
    font-size: 17px;
}
.button-group {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    height: 15%;
}
</style>

