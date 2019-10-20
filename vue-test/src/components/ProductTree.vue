<template>
  <el-row>
    <el-col :span="12">
      <el-tree
        ref="tree"
        :data="products"
        show-checkbox
        :props="defaultProps"
        @check="selChanged"
      ></el-tree>
    </el-col>
    <el-col :span="12">
      <el-table :data="selecteddata">
        <el-table-column prop="name" label="理财产品"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
/* eslint-disable */
import localdb from '../db/localdb.js'

export default {
  data() {
    return {
      products: [{ name: "理财产品", children: [] }],
      selecteddata: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    // load() {
    //   var product = dbhandler.transaction("product", "readonly").objectStore("product");
    //   var all = IDBKeyRange.lowerBound(0, true)
    //   product.openCursor(all).onsuccess = function (event) {
    //     var cursor = event.target.result;
    //     if (cursor) {
    //       console.log("haha")
    //       product[0].children.push(cursor.value)
    //     }
    //   }

    // }

    selChanged(event) {
      console.log(event)
      if(event.name!="理财产品")
      {
        
      }
      this.selecteddata=this.$refs.tree.getCheckedNodes()
    }
  },
  mounted: function () {
      var temp = [{ name: "理财产品", children: [] }]
      localdb.product.each(item => {
        temp[0].children.push(item)
      })
      
      this.products = Object.freeze(temp)

  },
  created: function () {
   setTimeout(function () {
     for (let index = 0; index < 20000; index++) {
       localdb.product.put({ code: index, name: "理财产品-" + index });
     }
   }, 100)

  }
}
</script>

<style>
</style>