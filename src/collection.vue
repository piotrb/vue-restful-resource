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
    filter: {
      default() {
        return {}
      },
    },
  },
  created() {
    try {
      this._resource = this.$resource(this.name)
    } catch (e) {
      this.status = {
        error: {
          status: 'error',
          error: e.message,
        },
      }
    }
  },
  async mounted() {
    this.$setDottedProps()
    this.data = await this._resource.query(this.filter, { statusTo: [this, 'status'], throwErrors: false })
    this.sync_data()
  },
  data() {
    return {
      data: [],
      status: {},
      formStatus: {},
      _resource: null,
    }
  },
  methods: {
    sync_data() {
      this.$emit('update:data', this.data)
    },
    get(id) {
      return this._resource.get(id, { statusTo: [this, 'formStatus'], throwErrors: false, queryParams: this.filter })
    },
    async create(data) {
      let result = await this._resource.create(data, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter,
      })
      if (this.formStatus.ready) {
        let index = this.data.findIndex((item) => item.id === result.id)
        if (index >= 0) {
          this.$set(this.data, index, result)
        } else {
          this.data.push(result)
        }
        this.sync_data()
      }
      return result
    },
    async update(id, data) {
      let result = await this._resource.update(id, data, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter,
      })
      if (this.formStatus.ready) {
        let index = this.data.findIndex((item) => item.id === id)
        this.$set(this.data, index, result)
      }
      return result
    },
    async delete(id) {
      let result = await this._resource.delete(id, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter,
      })
      if (result === null || !result.error) {
        let index = this.data.findIndex((item) => item.id === id)
        this.$delete(this.data, index)
      }
      this.sync_data()
      return result
    },
  },
  watch: {
    status() {
      this.$emit('update:status', this.status)
    },
  },
}
</script>
