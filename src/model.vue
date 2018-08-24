<template lang="pug">
  div
    resource-status(:status="status", :label="label")
    resource-status(:status="formStatus", :label="label")
</template>
<script>
  import ResourceStatus from './resource.status'
  import Resource from './resource';

  export default {
    components: {
      ResourceStatus,
    },
    props: {
      label: {},
      name: {
        required: true,
      },
      path: {
        required: true,
      },
      filter: {
        default() {
          return {};
        },
      }
    },
    created() {
      this._resource = new Resource(this.name, this.path);
    },
    async mounted() {
      let data = await this._resource.query(this.filter, {statusTo: [this, 'status'], throwErrors: false});
      this.$emit("update", data);
    },
    data() {
      return {
        status: {},
        formStatus: {},
        _resource: null,
      };
    },
    methods: {
      create(data) {
        return this._resource.create(data, {statusTo: [this, 'formStatus'], throwErrors: false});
      },
      update(id, data) {
        return this._resource.update(id, data, {statusTo: [this, 'formStatus'], throwErrors: false});
      },
      delete(id) {
        return this._resource.delete(id, {statusTo: [this, 'formStatus'], throwErrors: false});
      }
    },
    watch: {
      status() {
        this.$emit("status", this.status);
      }
    }
  }
</script>
