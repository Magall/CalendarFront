<template>
  <div>
    <form @submit.prevent="deleteDepartment">
      <div class="form-group">
        <h3 >Departamento a ser excluído</h3>
        <select
          name="department"
          id
          v-model="department"
          required
          class="custom-select custom-select-md mb-3"
        >
          <option value="" selected disabled hidden>Selecione</option>
          <option :value="dep.name" v-for="dep in departments" :key="dep.name">
            {{ dep.name }}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Excluir</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      departments: null,
      department: "",
    };
  },
  mounted() {
    this.getDepartments();
  },
  methods: {
    getDepartments: function () {
      axios
        .get("https://jd7eze14b5.execute-api.us-east-2.amazonaws.com/Prod/api/Department/")
        .then((response) => (this.departments = response.data));
    },
    deleteDepartment: function () {
      axios
        .delete("https://jd7eze14b5.execute-api.us-east-2.amazonaws.com/Prod/api/Department/" + this.department)
        .then((response) => {
          this.getDepartments();
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>