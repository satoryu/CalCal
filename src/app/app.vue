<template>
  <v-app>
    <v-container fluid>
      <h1>Calories Calculator</h1>

      <v-layout column>
        <v-flex xs12>
          <v-layout row align-center justify-center fill-height>
            <input type="text" v-model="weight">
            <input type="text" v-model="height">
            <input type="text" v-model="age">
          </v-layout>
        </v-flex>

        <v-flex xs12>
          {{ calculate() }} kcal
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
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
