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
          <v-radio-group v-model="gender" prepend-icon="fas fa-venus-mars" row>
            <v-radio label="Male" value="male"></v-radio>
            <v-radio label="Female" value="female"></v-radio>
          </v-radio-group>

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
      age: 37,
      gender: "male",
    };
  },
  computed: {
    calories: function () {
      return (0.0481 * this.weight + 0.0234 * this.height - 0.0138 * this.age - this.base) * 1000 / 4.186;
    },
    base: function () {
      if (this.gender == 'male') {
        return 0.4235;
      }
      return 0.9708;
    }
  },
};
</script>
