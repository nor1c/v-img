<template>
  <div>
    <input type="number" v-model="n" id="">
    <img v-img src="https://unsplash.it/200/300?image=2">
    <img class="v-img" v-img:v="{ thumbnails: false }" src="https://unsplash.it/200/300?image=324">

    <img class="v-img" v-img:vv :src="`https://unsplash.it/200/300?image=500`">
    <img class="v-img" v-img:vv :src="`https://unsplash.it/200/300?image=400`">

    <span class="v-img" v-img="{ src: 'https://unsplash.it/200/300?image=550', group: 'satu' }">
      <img :src="`https://unsplash.it/200/300?image=550`">
    </span>
    <span class="v-img" v-img="{ src: 'https://unsplash.it/200/300?image=450', group: 'satu' }">
      <img :src="`https://unsplash.it/200/300?image=450`">
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
    };
  },
  created() {
    setInterval(() => {
      this.n += 1;
    }, 20000);
  },
};
</script>

<style>
img {
  width: 200px;
  /* height: 100px; */
}
</style>

