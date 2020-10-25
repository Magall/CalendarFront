<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-2">
        <h2>Cadastro de Datas</h2>
        <form  @submit.prevent="createDate">
          <div class="form-group">
            <label for="title">Título</label>
            <input
              v-model="title"
              type="text"
              class="form-control"
              id="title"
              aria-describedby="title"
              placeholder="Título da data crítica"
            />
          </div>
          <div class="form-group">
            <label for="desc">Descrição</label>
            <textarea
              v-model="desc"
              rows="4"
              cols="50"
              type="text"
              class="form-control"
              id="desc"
              aria-describedby="desc"
              placeholder="Descrição da data crítica"
            />
          </div>
          <label for="departmentsSelect">Selecione o departemento</label>
          <select
            name="department"
            id="departmentsSelct"
            v-model="department"
            required
            class="custom-select custom-select-md mb-3"
          >
            <option value="" selected disabled hidden>Selecione</option>
            <option
              :value="dep.name"
              v-for="dep in departments"
              :key="dep.name"
            >
              {{ dep.name }}
            </option>
          </select>
          <div class="row">
            <div class="col">
              <label for="begin">Início</label>
              <input
                v-model="begin"
                type="date"
                name="begin"
                id="begin"
                class="form-control"
              />
            </div>
            <div class="col">
              <label for="end">Fim</label>
              <input
                v-model="end"
                type="date"
                name="end"
                id="end"
                class="form-control"
              />
            </div>
          </div>

          <button type="submit" class="btn btn-primary mt-4">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      departments: null,
      department: "",
      title: "",
      desc: "",
      begin: "",
      end: "",
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
    createDate: function(){
        axios.post("https://jd7eze14b5.execute-api.us-east-2.amazonaws.com/Prod/api/CriticalDate",{
           Id:0,
            Begin:this.begin,
            End:this.end,
            Title:this.title,
            Description:this.desc,
            Name:this.department
        })
        .then(function (response) {
          console.log(response);
          alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    }
  },
};
</script>