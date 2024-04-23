<script setup lang="ts">
import { computed } from 'vue'
import { useAwareness, useMap, useWebRtc } from '../../../src'

const provider = useWebRtc('counter-example-yjs-vue-cursor', {
  signaling: ['wss://yjs-server.cccboy.com'],
})

const { states, localID, setLocalState } = useAwareness<{ x: number, y: number }>(
  computed(() => provider.value?.awareness),
)

const users = computed(() => {
  return Array.from(states.value.entries())
    .filter(([id]) => id !== localID.value).map(([id, state]) => ({
      ...state,
      clientID: id,
    }))
})

const { get, set } = useMap<{ count: number }>('state')

const record = computed(() => get.value('count'))

window.addEventListener('pointermove', (e) => {
  setLocalState({
    x: e.clientX,
    y: e.clientY,
  })
})

function incre() {
  set('count', {
    count: (record.value?.count || 0) + 1,
  })
}
</script>

<template>
  <div>
    Self ClientID: {{ localID }}
    <br>
    {{ JSON.stringify(users) }}
    <svg
      :style="{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0,
        zIndex: 100,
        pointerEvents: 'none',
      }"
    >
      <circle v-for="item in users" :key="item.clientID" :cx="item.x" :cy="item.y" :r="5" />
    </svg>
    {{ record?.count }}

    <button @click="incre">
      +1
    </button>
  </div>
</template>
