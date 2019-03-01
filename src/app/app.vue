<template>
  <div>
    <h1>Calories Calculator</h1>

    <form @submit.prevent="calculate">
      <input type="text" v-model="weight">
      <input type="text" v-model="height">
      <input type="text" v-model="age">

      <button type="submit">Calculate</button>
    </form>

    <div>
      {{ calculate() }} kcal
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: 63.0,
      height: 168.0,
      age: 37
    };
  },
  methods: {
    calculate() {
      return (10.0 * this.weight + 6.25 * this.height - 5.0 * this.age)
    }
  }
};
</script>