<template>
  <div class="main">
    <div class="main__image">
      <img src="../../src/assets/books.png" alt="books" />
    </div>
    <form @submit.prevent="submit" class="main__form">
      <div class="form-group row">а тут форма</div>
    </form>
  </div>
</template>

<script>
import {instance} from '../services/mock';
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    instance.get('/api/form').then((res) => {
      this.data = res.data.default;
      console.log(res.data.default);
    });
  },
  methods: {
    submit() {
      this.form.post('/foo');
    },
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.main__image {
  display: flex;
  flex: 1 1 50%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.main__form {
  flex: 1 1 50%;
}
</style>
