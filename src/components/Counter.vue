<template>
  <div>
    {{count}}
    <button @click="plus">+</button>
    <button @click="subtract">-</button>
  </div>    
  {{ template }}
</template>

<script>
import setup from '../composition/counter'
export default {
  name: 'Counter',
  props: {
    defaultValue: Number,
  },
  templates: {},
  setup (props) {
    const {
      count,
      plus,
      subtract,
      template,
    } = setup(props)

    return {
      template,
      count,
      plus,
      subtract
    }
  }
}
</script>