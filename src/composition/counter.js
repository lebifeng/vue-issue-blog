import { ref, onMounted, watch, h } from 'vue'
export default function setup (props) {
  const { defaultValue } = props
  const count = ref(defaultValue)

  const plus = () => count.value++
  const subtract = () => count.value--
  
  onMounted(() => {
    console.log(document.getElementById('dddd'))
  }) 

  watch(count, (v, prev) => {
    console.log(v, prev)
  })

  const template = h('div', {}, 'my' + count.value)

  return {
    count,
    plus,
    subtract,
    template
  }

}