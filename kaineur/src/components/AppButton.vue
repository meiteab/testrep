<template>
  <button type="button" class="button" :class="typeClasses" @click="emitClik()">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
  name: 'AppButton',
  computed: {
    typeClasses() {
      switch (this.type) {
        case 'danger':
          return 'bg-red';
        default:
          return 'bg-teal';
      }
    },
  },
  methods: {
    emitClik() {
      this.$emit('cliked');
    },
  },
};
</script>

<style lang="css" scoped>
.button {
  @apply inline-flex px-4 py-2 text-white font-bold rounded items-center;
}
</style>