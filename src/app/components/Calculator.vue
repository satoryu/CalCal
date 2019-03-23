<template>
  <div>
    <v-content>
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <v-layout column align-center justify-center fill-height>
              <v-text-field
                prepend-icon="mdi-weight-kilogram"
                hint="Your weight in kilogram"
                label="Weight"
                suffix="kg"
                v-model="weight"
              />
              <v-text-field
                prepend-icon="mdi-ruler"
                hint="Your height in cm"
                label="Height"
                suffix="cm"
                v-model="height"
              />
              <v-text-field
                prepend-icon="mdi-face"
                hint="Your age"
                label="Age"
                suffix="  "
                v-model="age"
              />
              <v-text-field
                prepend-icon="mdi-fire"
                suffix="kcal"
                readonly
                label="Calories"
                v-model="calories"
                color="red darken-1"
                messages="Calories(kcal) you can consume per day."
              />
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
  computed: {
    calories: function() {
      return 10.0 * this.weight + 6.25 * this.height - 5.0 * this.age;
    }
  }
}
</script>
