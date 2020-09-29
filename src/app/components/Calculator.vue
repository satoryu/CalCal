<template>
  <v-main>
    <v-container fluid>
      <div class="d-flex flex-column">
        <div class="d-flex flex-column align-center justify-center">
          <v-text-field
            prepend-icon="fas fa-weight"
            hint="Your weight in kilogram"
            label="Weight"
            suffix="kg"
            v-model="weight"
          />
          <v-text-field
            prepend-icon="fas fa-ruler"
            hint="Your height in cm"
            label="Height"
            suffix="cm"
            v-model="height"
          />
          <v-text-field
            prepend-icon="far fa-smile"
            hint="Your age"
            label="Age"
            suffix="  "
            v-model="age"
          />
          <v-text-field
            prepend-icon="fas fa-burn"
            suffix="kcal"
            readonly
            label="Calories"
            v-model="calories"
            color="red darken-1"
            messages="Calories(kcal) you can consume per day."
          />
        </div>
      </div>
    </v-container>
  </v-main>
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
  computed: {
    calories: function() {
      return 10.0 * this.weight + 6.25 * this.height - 5.0 * this.age;
    }
  }
}
</script>
