<script setup lang="ts">
import { useRecord, useWebRtc } from '../../../src'

useWebRtc('counter-example-yjs-vue-hello', {
  signaling: ['wss://yjs-server.cccboy.com'],
})

const [name, setName] = useRecord('SHARED_NAME', '')
</script>

<template>
  <div>
    <input
      style="border: 1px solid black"
      :value="name" placeholder="please enter" @input="event => {
        const el = event.target as HTMLInputElement
        setName(el.value)
      }"
    >
    <p>Hello, {{ name }}</p>
  </div>
</template>
