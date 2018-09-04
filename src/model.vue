<template lang="pug">
  div
    rr-resource-status(:status="status", :label="label")
    rr-resource-status(:status="formStatus", :label="label")
</template>
<script>
export default {
  props: {
    label: {},
    name: {
      required: true,
    },
    id: {
      required: true,
    },
    action: {
      default: null,
    },
    filter: {
      default() {
        return {}
      },
    },
  },
  created() {
    this._resource = this.$resource(this.name)
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
      let data
      if (this.action) {
        data = await this._resource.member_get(this.id, this.action, {
          statusTo: [this, 'status'],
          throwErrors: false,
          queryParams: this.filter,
        })
      } else {
        data = await this._resource.get(this.id, {
          statusTo: [this, 'status'],
          throwErrors: false,
          queryParams: this.filter,
        })
      }
      this.$emit('update', data)
    },
    async update(data) {
      if (this.action) {
        throw new Error('update not supported for custom actions')
      }
      let record = await this._resource.update(this.id, data, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter,
      })
      this.$emit('update', record)
    },
    delete() {
      if (this.action) {
        throw new Error('delete not supported for custom actions')
      }
      return this._resource.delete(this.id, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter,
      })
    },
  },
  watch: {
    status() {
      this.$emit('status', this.status)
    },
  },
}
</script>
