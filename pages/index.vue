<template>
  <v-layout
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <section id="point">
          勝利点: <b>{{ point }}</b> 点
        </section>

        <section id="estate">
          屋敷: <b>{{ $store.state.counter.estate }}</b> 枚<br>
          <v-btn
            color="error"
            large
            nuxt
            @click="decrementCounter('estate')">-</v-btn>
          <v-btn
            color="info"
            large
            nuxt
            @click="incrementCounter('estate')">+</v-btn>
        </section>

        <section id="duchy">
          公領: <b>{{ $store.state.counter.duchy }}</b> 枚<br>
          <v-btn
            color="error"
            large
            nuxt
            @click="decrementCounter('duchy')">-</v-btn>
          <v-btn
            color="info"
            large
            nuxt
            @click="incrementCounter('duchy')">+</v-btn>
        </section>

        <section id="province">
          属州: <b>{{ $store.state.counter.province }}</b> 枚<br>
          <v-btn
            color="error"
            large
            nuxt
            @click="decrementCounter('province')">-</v-btn>
          <v-btn
            color="info"
            large
            nuxt
            @click="incrementCounter('province')">+</v-btn>
        </section>

        <section id="gardens">
          庭園: <b>{{ $store.state.counter.gardens }}</b> 枚<br>
          <v-btn
            color="error"
            large
            nuxt
            @click="decrementCounter('gardens')">-</v-btn>
          <v-btn
            color="info"
            large
            nuxt
            @click="incrementCounter('gardens')">+</v-btn>
        </section>

        <section id="curse">
          呪い: <b>{{ $store.state.counter.curse }}</b> 枚<br>
          <v-btn
            color="info"
            large
            nuxt
            @click="decrementCounter('curse')">-</v-btn>
          <v-btn
            color="error"
            large
            nuxt
            @click="incrementCounter('curse')">+</v-btn>
        </section>

        <section id="deck">
          <v-select
            :items="numRange"
            v-model="deck"
            label="デッキの枚数"
          />
        </section>

        <section id="clear">
          <v-btn
            color="warning"
            large
            nuxt
            @click="initCounter">C</v-btn>
        </section>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      numRange: Array.from(Array(101).keys()),
      deck: 10
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
    point() {
      const counter = this.$store.state.counter
      return (
        counter.estate +
        counter.duchy * 3 +
        counter.province * 6 +
        counter.gardens * parseInt(this.deck / 10) -
        counter.curse
      )
    }
  },
  methods: {
    initCounter() {
      this.$store.dispatch('initCounter')
    },
    incrementCounter(type) {
      this.$store.dispatch('incrementCounter', type)
    },
    decrementCounter(type) {
      this.$store.dispatch('decrementCounter', type)
    }
  }
}
</script>

<style scoped lang="stylus">
  section
    margin-bottom 30px
    font-size 20px
</style>
