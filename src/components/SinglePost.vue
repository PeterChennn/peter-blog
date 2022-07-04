<template>
  <div class="post">
    <h3>{{ post.title }}</h3>

    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
    <br />

    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <p>繼續閱讀</p>
    </router-link>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 20) + '...';
    });

    return { snippet };
  },
};
</script>

<style lang="scss">
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed black;
  h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: #444;
      position: absolute;
      z-index: -1;
      padding-right: 40px;
      left: -30px;
      transform: rotateZ(-1deg);
    }
  }
  a {
    p {
      display: inline-block;
    }
  }
}
</style>
