<template>
  <div class="Cards">
    <Card
      v-for="card in cards"
      :key="card.id"
      :name="card.name"
      :title="card.title"
      :desc="card.description"
      :begin="card.begin"
      :end="card.end"
      :id="card.id"
      @deleteElement="deleteElementHandler"
      
    />
  </div>
</template>
<script>
import Card from "@/components/Card/Card";
import axios from "axios";
export default {
  components: { Card },
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    this.getCardDetails();
  },
  methods: {
    getCardDetails: function () {
      axios
        .get("https://jd7eze14b5.execute-api.us-east-2.amazonaws.com/Prod/api/CriticalDate")
        .then((response) => (this.cards = response.data));
    },
    deleteElementHandler:function(cardId){
     axios
      .delete("https://jd7eze14b5.execute-api.us-east-2.amazonaws.com/Prod/api/CriticalDate/"+cardId,{ crossdomain: true })
      .then((response)=>(this.getCardDetails()))
      .catch((error)=>(this.getCardDetails())
      )}
  },
};
</script>
<style>
@import "./Dashboard.scss";
</style>