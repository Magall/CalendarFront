<template>
  <div>
    <form @submit.prevent="send">
      <div class="form-group">
        <h3>Departamento a ser inserido</h3>
        <input
          type="text"
          class="form-control"
          aria-describedby="Departamento"
          placeholder="Departamento"
          v-model="department"
        />
      </div>
      <button type="submit" class="btn btn-primary">Inserir</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      department: "",
    };
  },
  methods: {
    send: function (event) {
      axios
        .post("https://jd7eze14b5.execute-api.us-east-2.amazonaws.com/Prod/api/Department", {
          name: this.department,
        })
        .then(function (response) {
          console.log(response);
          alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    },
  },
};
</script>