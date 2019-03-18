<template>
  <v-app>
    <v-toolbar app scroll-off-screen>
      <v-toolbar-title>CalCal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon @click.stop="dialog = true">
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title class="headline">About This</v-card-title>
        <v-card-text>
          <div>
            This application made in Vue.js is to calculate caolories according to your weight, height and age on Harris-Benedict equation, one of BMR(Basal Metabolic Rate) estimation formulas.

            <h4>Reference</h4>
            <ul>
              <a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate">Basal Metabolic Rate - Wikipedia</a>
            </ul>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">I got it!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      weight: 63.0,
      height: 168.0,
      age: 37,
      dialog: false
    };
  },
  computed: {
    calories: function() {
      return 10.0 * this.weight + 6.25 * this.height - 5.0 * this.age;
    }
  }
};
</script>
