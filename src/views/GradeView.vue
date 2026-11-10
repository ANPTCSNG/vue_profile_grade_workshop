
<template>
  <div class="grade-page">

    <!-- Navigation Bar -->
    <v-app-bar flat color="#211A17" dark class="navbar">
      <v-toolbar-title class="font-weight-black">
        ANPT.
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text small to="/">
        <v-icon left small>mdi-account</v-icon>
        Profile
      </v-btn>

      <v-btn text small color="#D3AD80" to="/grade">
        <v-icon left small>mdi-calculator</v-icon>
        Grade
      </v-btn>
    </v-app-bar>

    <v-container class="py-10">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="7" lg="5">

          <!-- Heading -->
          <div class="text-center mb-7">
            <div class ="grade-label">
                Grade
            </div>

            <h1 class="mt-4">Grade Calculator</h1>

            <p style="color: #c9b8a8">
              Enter your score to calculate your grade.
            </p>
          </div>

          <!-- Calculator Card -->
          <v-card class="grade-card pa-6" elevation="3">

            <v-card-title class="justify-center">
              Calculate Your Grade
            </v-card-title>

            <v-card-text>
              <v-form @submit.prevent="calculateGrade">

                <v-text-field
                  v-model="score"
                  label="Enter your score (0–100)"
                  placeholder="Example: 85"
                  outlined
                  clearable
                  type="text"
                  @input="clearResult"
                ></v-text-field>

                <!-- Error Alert -->
                <v-alert
                  v-if="errorMessage"
                  type="error"
                  dense
                  outlined
                >
                  {{ errorMessage }}
                </v-alert>

                <!-- Calculate Button -->
                <v-btn
                    type="submit"
                    color="#89724C"
                    dark
                    block
                    large
                    rounded
                    >
                    Calculate Grade
                </v-btn>

                <!-- Reset Button -->
                <v-btn
                  text
                  block
                  color="#EAD8C3"
                  class="mt-3"
                  @click="resetForm"
                >
                  <v-icon left>mdi-refresh</v-icon>
                  Reset
                </v-btn>

              </v-form>
            </v-card-text>

            <!-- Grade Result -->
            <v-card-text v-if="grade !== null">
              <v-divider class="mb-5"></v-divider>

              <div class="text-center">
                <p class="subtitle-1">Your Grade</p>

                <div class="grade-result">
                  {{ grade }}
                </div>

                <p class="mt-3">
                  Score: {{ score }}/100
                </p>

                <v-alert
                  type="success"
                  dense
                  class="mt-4"
                >
                  Grade calculated successfully!
                </v-alert>
              </div>
            </v-card-text>

          </v-card>

          <!-- Grading Criteria -->
          <v-card class="grade-card mt-5 pa-4" outlined>
            <v-card-title>Grading Criteria</v-card-title>

            <v-simple-table>
              <thead>
                <tr>
                  <th>Score Range</th>
                  <th>Grade</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="item in gradingCriteria"
                  :key="item.grade"
                >
                  <td>{{ item.range }}</td>
                  <td>
                    <strong>{{ item.grade }}</strong>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'GradeView',

  data() {
    return {
      score: '',
      grade: null,
      errorMessage: '',

      gradingCriteria: [
        { range: '80 - 100', grade: 'A' },
        { range: '70 - 79', grade: 'B' },
        { range: '60 - 69', grade: 'C' },
        { range: '50 - 59', grade: 'D' },
        { range: '0 - 49', grade: 'F' }
      ]
    }
  },

  methods: {
    calculateGrade() {
      this.grade = null
      this.errorMessage = ''

      const input = String(this.score ?? '').trim()

      // Check if input is an integer
      if (!/^\d+$/.test(input)) {
        this.errorMessage =
          'Please enter a valid whole number.'
        return
      }

      const number = Number(input)

      // Check score range
      if (
        !Number.isSafeInteger(number) ||
        number < 0 ||
        number > 100
      ) {
        this.errorMessage =
          'Score must be between 0 and 100.'
        return
      }

      // Calculate grade
      if (number >= 80) {
        this.grade = 'A'
      } else if (number >= 70) {
        this.grade = 'B'
      } else if (number >= 60) {
        this.grade = 'C'
      } else if (number >= 50) {
        this.grade = 'D'
      } else {
        this.grade = 'F'
      }
    },

    clearResult() {
      this.grade = null
      this.errorMessage = ''
    },

    resetForm() {
      this.score = ''
      this.grade = null
      this.errorMessage = ''
    }
  }
}
</script>



<style scoped>
/* MAIN BACKGROUND */
.grade-page {
  background-color: #211a17;
  min-height: 100vh;
  color: #ead8c3;
}

/* NAVIGATION */
.navbar {
  border-bottom: 1px solid #433329;
}

/* CALCULATOR CARD */
.grade-card {
  background-color: #352920 !important;
  border: 1px solid #574437;
  border-radius: 18px;
  color: #ead8c3 !important;
}

/* CARD TEXT */
.grade-card .v-card__title {
  color: #f1deca;
  font-weight: 600;
}

.grade-card .v-card__text {
  color: #d0b9a2;
}

/* GRADE LABEL */
.grade-label {
  display: inline-block;
  padding: 12px 26px;
  background-color: #3a2c25;
  color: #d3ad80;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 4px;
}

/* MAIN HEADING */
h1 {
  font-family: Georgia, serif;
  font-size: 36px;
  font-weight: normal;
  color: #f1deca;
}

/* GRADE RESULT */
.grade-result {
  font-family: Georgia, serif;
  font-size: 72px;
  font-weight: bold;
  color: #d3ad80;
  line-height: 1.2;
}

/* INPUT FIELD */
.grade-card ::v-deep .v-input input {
  color: #f1deca !important;
}

.grade-card ::v-deep .v-label {
  color: #c9b8a8 !important;
}

.grade-card ::v-deep
.v-text-field--outlined fieldset {
  border-color: #89724c !important;
}

/* TABLE */
.grade-card ::v-deep .v-data-table {
  background-color: transparent !important;
  color: #ead8c3 !important;
}

.grade-card ::v-deep th,
.grade-card ::v-deep td {
  color: #ead8c3 !important;
  border-color: #574437 !important;
}

/* RESPONSIVE */
@media (max-width: 600px) {
  h1 {
    font-size: 28px;
  }

  .grade-result {
    font-size: 56px;
  }
}
</style>
