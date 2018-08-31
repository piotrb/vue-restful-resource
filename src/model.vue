<template lang="pug">
  div
    rr-resource-status(:status="status", :label="label")
    rr-resource-status(:status="formStatus", :label="label")
</template>
<script>
import Resource from './resource'

export default {
  props: {
    label: {},
    name: {
      required: true,
    },
    path: {
      required: true,
    },
    id: {
      required: true,
    },
  },
  created() {
    this._resource = new Resource(this.name, this.path)
  },
  async mounted() {
    await this.refresh()
  },
  data() {
    return {
      status: {},
      formStatus: {},
      _resource: null,
    }
  },
  methods: {
    async refresh() {
      let data = await this._resource.get(this.id, { statusTo: [this, 'status'], throwErrors: false })
      this.$emit('update', data)
    },
    async update(data) {
      let record = await this._resource.update(this.id, data, { statusTo: [this, 'formStatus'], throwErrors: false })
      this.$emit('update', record)
    },
    delete() {
      return this._resource.delete(this.id, { statusTo: [this, 'formStatus'], throwErrors: false })
    },
    member_get(id, action) {
      return this._resource.member_action(this.id, action, { statusTo: [this, 'formStatus'], throwErrors: false })
    },
  },
  watch: {
    status() {
      this.$emit('status', this.status)
    },
  },
}
</script>
