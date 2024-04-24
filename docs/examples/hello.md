---
outline: deep
---

# base example

<script setup>
import DocumentProvider from '../components/document-provider/index.vue'
import Hello from '../components/hello/index.vue'

</script>

<ClientOnly>
  <DocumentProvider>
    <Hello />
  </DocumentProvider>
</ClientOnly>
