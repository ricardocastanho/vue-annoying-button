<template>
  <button
    v-bind="$attrs"
    :style="buttonStyle"
    @mouseover="setToggle"
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

const setToggle = (): void => {
  toggle.value = !toggle.value
}

const buttonStyle = computed(() => {
  if (!props.annoy) {
    return undefined
  }
  
  const range = props.range || '100%'

  return {
    transform: `translateX(${!toggle.value ? range : '0'})`,
    transition: 'transform 190ms ease-in-out'
  }
})
</script>
