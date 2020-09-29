<template>
  <div>
    <v-app-bar app scroll-off-screen>
      <v-toolbar-title>CalCal</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn icon @click.stop="dialog = true">
          <v-icon>far fa-question-circle</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title class="headline">About This</v-card-title>
        <v-card-text>
          <div>
            This application made in Vue.js is to calculate caolories according to your weight, height and age on Harris-Benedict equation, one of BMR(Basal Metabolic Rate) estimation formulas.
            <h4>Reference</h4>
            <ul>
              <a
                href="https://en.wikipedia.org/wiki/Basal_metabolic_rate"
              >Basal Metabolic Rate - Wikipedia</a>
            </ul>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">
            <v-icon>far fa-thumbs-up</v-icon>I got it!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
