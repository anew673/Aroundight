<template>
  <el-table :data="tdata">
    <el-table-column
      v-for="c in columns"
      :key="c.key"
      :prop="c.property"
      :label="c.label"
      draggable="true"
      @dragstart="dragstart($event, c.key)"
      @dragend="dragend"
    ></el-table-column>
  </el-table>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  data() {
    return {
      columns: [{ label: '理财产品', property: 'prodName' }, { label: '理财产品代码', property: 'prodCode' }],
      tdata: [{ prodName: "产品1", prodCode: "C00001" }, { prodName: "产品1", prodCode: "C00001" }, { prodName: "产品1", prodCode: "C00001" }, { prodName: "产品1", prodCode: "C00001" }]
    }
  },
  components: { draggable },
  methods: {
    dragstart(event, data) {
      console.log('drag')
      console.log(data)
      event.dataTransfer.setData('item', data)
    },
    dragend(event) {
      event.dataTransfer.clearData()
    }
  }
}
</script>