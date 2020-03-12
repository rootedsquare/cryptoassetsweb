(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45a73211"],{7424:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddExchange}},[e._v("新建")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),n("el-table-column",{attrs:{label:"平台",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.exchange_name))])]}}])}),n("el-table-column",{attrs:{label:"个性名",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.nick_name))])]}}])}),n("el-table-column",{attrs:{label:"API Key"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.api_key)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),n("span",[e._v(e._s(t.row.create_at))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleDeleteKey(t)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogVisible,title:e.新建平台},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.exchange,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"平台"}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.exchange.exchange_name,callback:function(t){e.$set(e.exchange,"exchange_name",t)},expression:"exchange.exchange_name"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"个性名"}},[n("el-input",{attrs:{placeholder:"我是大户"},model:{value:e.exchange.nick_name,callback:function(t){e.$set(e.exchange,"nick_name",t)},expression:"exchange.nick_name"}})],1),n("el-form-item",{attrs:{label:"API Key"}},[n("el-input",{attrs:{placeholder:"3911702320"},model:{value:e.exchange.api_key,callback:function(t){e.$set(e.exchange,"api_key",t)},expression:"exchange.api_key"}})],1),n("el-form-item",{attrs:{label:"Sec Key"}},[n("el-input",{attrs:{placeholder:"3911702320"},model:{value:e.exchange.sec_key,callback:function(t){e.$set(e.exchange,"sec_key",t)},expression:"exchange.sec_key"}})],1),n("el-form-item",{attrs:{label:"Pass Key"}},[n("el-input",{attrs:{placeholder:"3911702320"},model:{value:e.exchange.pass_key,callback:function(t){e.$set(e.exchange,"pass_key",t)},expression:"exchange.pass_key"}})],1)],1),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmAdding}},[e._v("确认")])],1)],1)],1)},i=[],l=(n("96cf"),n("3b8d")),c=n("b775");function r(){return Object(c["a"])({url:"/setting",method:"get"})}function s(e){return Object(c["a"])({url:"/setting",method:"post",data:e})}function o(e){return Object(c["a"])({url:"/setting/".concat(e),method:"delete"})}function u(){return Object(c["a"])({url:"/support",method:"get"})}var h=n("ed08"),d={data:function(){return{dialogVisible:!1,list:[],listLoading:!0,exchange:{},options:[],value:""}},created:function(){this.fetchSupport(),this.fetchData()},methods:{fetchSupport:function(){var e=this;this.listLoading=!0,u().then((function(t){for(var n=t.data,a=0;a<n.length;a++)e.options.push({value:n[a],label:n[a]});e.listLoading=!1}))},fetchData:function(){var e=this;r().then((function(t){for(var n=0;n<t.data.length;n++){var a=t.data[n];e.list.push({id:a.ID,exchange_name:a.exchange_name,nick_name:a.nick_name,api_key:a.api_key,create_at:Object(h["b"])(a.CreatedAt)})}}))},handleAddExchange:function(){this.dialogVisible=!0},handleDeleteKey:function(e){var t=this,n=e.row;this.$confirm("确认要删除 ["+n.exchange_name+" - "+n.nick_name+" ] ?","Warning",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o(n.id);case 2:a=t.list.indexOf(n),t.list.splice(a,1),t.$message({type:"success",message:"删除成功!"});case 5:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},confirmAdding:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={exchange_name:this.exchange.exchange_name,nick_name:this.exchange.nick_name,api_key:this.exchange.api_key,sec_key:this.exchange.sec_key,pass_key:this.exchange.pass_key},e.next=3,s(t);case 3:n=e.sent,a=n.data,this.exchange.id=a.id,this.exchange.create_at=a.create_at,this.list.push(this.exchange),i=this.exchange.exchange_name,l=this.exchange.api_key.slice(0,8),this.dialogVisible=!1,this.$notify({title:"添加成功",dangerouslyUseHTMLString:!0,message:"\n            <div>平台: ".concat(i,"</div>\n   \t        <div>API Key: ").concat(l,"</div>\n       "),type:"success"});case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},p=d,g=n("2877"),f=Object(g["a"])(p,a,i,!1,null,null,null);t["default"]=f.exports},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("3b2b"),n("4917"),n("4f7f"),n("5df3"),n("1c4c"),n("ac6a"),n("456d"),n("28a5"),n("f576"),n("a481"),n("6b54"),n("7618");function a(e){var t=e.split("."),n=t[0].replace("T"," ");return n}function i(e,t,n){var a,i,l,c,r,s=function s(){var o=+new Date-c;o<t&&o>0?a=setTimeout(s,t-o):(a=null,n||(r=e.apply(l,i),a||(l=i=null)))};return function(){for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];l=this,c=+new Date;var h=n&&!a;return a||(a=setTimeout(s,t)),h&&(r=e.apply(l,o),l=o=null),r}}}}]);