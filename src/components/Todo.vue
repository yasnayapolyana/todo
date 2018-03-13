<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addTask">
        <input type="text" placeholder='Добавить задачу..' v-model='task' v-validate="'min:5'" name='task' maxlength='50'>

        <!-- <transition name="alert-in" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
          <p class="alert" v-if="errors.has('task')">{{ errors.first('task') }}</p>
        </transition> -->
      </form>


      <ul>
        <transition-group name='list' enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
        <li v-for="(data, index) in tasks" :key='index'>{{ data.task }}
          <i class="fa fa-check-circle" @click="remove(index)"></i>
        </li>
      </transition-group>
      </ul>

      <p>Текущие задачи</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      task: '',
      tasks: []
    }
  },
  methods: {
    addTask () {
        this.tasks.push({task: this.task})
        this.task = '';
    },
    remove (id) {
      this.tasks.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
.holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
  animation: fadeInDown .2s;
}
  .alert-in-leave-active {
    animation: fadeOutUp .2s;
  }

  .list-enter-active {
  animation: fadeInRight .2s;
}
  .list-in-leave-active {
    animation: fadeOutRight .2s;
  }

  i {
    float: right;
    cursor: pointer;
  }
</style>
