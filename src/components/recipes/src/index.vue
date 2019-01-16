<template>
<div class="ly-tab">
  <ly-tabbar
    v-model="selectedId"
    v-bind="options"
		ref="data"
  >
    <ly-tab-item
      v-for="(item, index) in items"
      :key="index"
      >
      <span
        v-if="options.fixBottom && item.icon"
        slot="icon">
        <i :class="item.icon"></i>
      </span>
      <span>{{ item[labelKey] }}</span>
    </ly-tab-item>
  </ly-tabbar>
</div>
</template>

<script>
import LyTabbar from './tabbar'
import LyTabItem from './tab-item'

export default {
  name: 'recipes',
  components: {
    LyTabbar,
    LyTabItem
  },
  props: {
    list:Array,
		value: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      selectedId: this.value,
    }
  },
  computed: {
    labelKey () {
      return this.options.labelKey || 'label'
    }
  },
  watch: {
    value (value) {
      this.selectedId = value
    },
    selectedId (value) {
      this.$emit('input', value)
      this.$emit('change', this.items[value], value)
    }
  },
	mounted(){
		this.$refs.data.list=this.list;
	}
	
}
</script>

<style>

</style>
