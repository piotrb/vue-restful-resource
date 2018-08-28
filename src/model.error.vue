<template lang="pug">
  b-alert(show variant="danger")
    template(v-for="(fieldErrors, fieldName) in errors")
      template(v-for="fieldError in fieldErrors")
        div(v-if="fieldName === 'base'") {{fieldError}}
        div(v-else) {{fieldName}} {{fieldError}}
</template>
<script>
export default {
  props: {
    errors: {
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
