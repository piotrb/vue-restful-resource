<template lang="pug">
  div(v-if="status")
    div(v-if="status.start")
      | Loading {{label}} ...
      font-awesome-icon(icon="spinner" pulse)
    div(v-if="status.ready")
      slot(name="ready")
    div(v-if="status.error")
      template(v-if="status.error.status === 422")
        model-error(:errors="status.error.body")
      template(v-else-if="status.error.status === 500")
        template(v-if="status.error.body")
          b-alert(show variant="danger") {{status.error.body.error}}
        template(v-else)
          b-alert(show variant="danger") Something went wrong: Server returned Error 500
      template(v-else)
        pre {{status}}
</template>
<script>
  export default {
    props: {
      status: {
        required: true,
      },
      label: {}
    },
    data() {
      return {};
    },
  };
</script>
