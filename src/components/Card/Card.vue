<template>
  <div class="col-md-3 card-container">
    <div class="card">
      <div class="card-header bg-primary" style="color: white">
        <div class="custom-header">
          <span>{{name}}</span>
          <button @click="sendClick">X</button>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ desc }}
        </p>
        <div class="dates-container">
          <div class="date">
            <span>Início: </span>
            <span>{{ moment(begin).format("DD/MM/YYYY") }}</span>
          </div>
          <div class="date">
            <span>Fim: </span>
            <span>{{ moment(end).format("DD/MM/YYYY") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["title", "desc", "begin", "end","name","id"],
  methods:{
    sendClick:function(){
      this.$emit("deleteElement",this.id)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./Card.scss";
</style>