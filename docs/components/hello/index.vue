<script setup lang="ts">
import { computed } from 'vue'
import { useMap, useWebRtc } from '../../../src'

useWebRtc('counter-example-yjs-vue-hello', {
  signaling: ['wss://yjs-server.cccboy.com'],
})

const { get, set } = useMap<{ count: number }>('state')

const record = computed(() => get.value('count'))

function incre() {
  set('count', {
    count: (record.value?.count || 0) + 1,
  })
}
</script>

<template>
  <div>
    {{ record?.count }}

    <button @click="incre">
      +1
    </button>
  </div>
</template>
