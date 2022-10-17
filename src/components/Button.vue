<template>
  <button
    v-bind="$attrs"
    :style="containerStyle"
    @mouseover="toggle = !toggle"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  annoy: boolean,
  range?: string
}>()

const toggle = ref(false)

const containerStyle = computed(() => {
  if (!props.annoy) {
    return undefined
  }
  
  const range = props.range || '20vh'

  return {
    transform: `translateX(${!toggle.value ? range : '0'})`,
    transition: 'transform 190ms ease-in-out'
  }
})
</script>
