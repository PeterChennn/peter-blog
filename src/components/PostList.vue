<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import {} from '@vue/runtime-core';
import SinglePost from '../components/SinglePost.vue';

export default {
  components: { SinglePost },
  props: ['posts'],
  setup() {},
};
</script>

<style></style>
