(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{167:function(e,t,i){},169:function(e,t,i){"use strict";var l=i(167);i.n(l).a},171:function(e,t,i){"use strict";i.r(t);var l={props:["project"],data:function(){return{projectValue:this.project}}},v=(i(169),i(0)),a=Object(v.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"o-process"},[i("div",{staticClass:"o-process__input"},[i("label",[e._v("輸入project名稱")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.projectValue,expression:"projectValue"}],attrs:{type:"text"},domProps:{value:e.projectValue},on:{input:function(t){t.target.composing||(e.projectValue=t.target.value)}}})]),e._v(" "),i("ol",[i("li",[i("div",[e._v("在 gitlab 上開 project")]),e._v(" "),i("ul",[i("li",[e._v("名稱："+e._s(e.projectValue))])]),e._v(" "),i("div",[e._v("所有者選 blockstudio")])]),e._v(" "),i("li",[i("div",[e._v("從 gitlab clone wp_template基礎樣板")]),e._v(" "),i("div",{staticClass:"o-code"},[i("div",[e._v("cd /Applications/MAMP/htdocs/display")]),e._v(" "),i("div",[e._v("git clone --recursive git@gitlab.com:blockstudio/wp_template.git "+e._s((new Date).getFullYear())+e._s(e.projectValue))]),e._v(" "),i("div",[e._v("cd "+e._s((new Date).getFullYear())+e._s(e.projectValue))])])]),e._v(" "),e._m(0),e._v(" "),i("li",[i("div",[e._v("執行remote.sh，提示輸入的時候輸入專案名稱"+e._s(e.projectValue))]),e._v(" "),e._m(1),e._v(" "),i("div",[e._v("這個指令一次完成下列動作：")]),e._v(" "),i("div",[e._v("刪除原本的remote origin")]),e._v(" "),i("div",[e._v("增加對應的remote origin")])]),e._v(" "),e._m(2),e._v(" "),i("li",[i("div",[e._v("創建資料庫名稱：blockstu_"+e._s((new Date).getFullYear()+e.projectValue))])]),e._v(" "),i("li",[e._v("編碼選擇：utf8mb4_unicode_ci")]),e._v(" "),e._m(3),e._v(" "),i("li",[i("div",[e._v("修改資料庫：選擇資料表wp_options修改siteurl與home欄位")]),e._v(" "),i("div",[e._v("siteurl：http://localhost/display/"+e._s((new Date).getFullYear()+e.projectValue)+"/main")]),e._v(" "),i("div",[e._v("home：http://localhost/display/"+e._s((new Date).getFullYear()+e.projectValue))]),e._v(" "),i("div",[e._v("前者是資料夾路徑")]),e._v(" "),i("div",[e._v("後者是網站路徑，視情形亦可下者同上")])]),e._v(" "),i("li",[i("div",[e._v("更改wp-config.php的資料庫名稱為blockstu_"+e._s((new Date).getFullYear()+e.projectValue))])]),e._v(" "),i("li",[i("div",[e._v("更改 webpack.config.js 的 proxy為http://localhost/display/"+e._s((new Date).getFullYear()+e.projectValue))])]),e._v(" "),i("li",[i("div",[e._v("使用以下網址進入wp-admin")]),e._v(" "),i("div",[e._v("http://localhost/display/"+e._s((new Date).getFullYear()+e.projectValue)+"/main/wp-admin")])]),e._v(" "),i("li",[i("div",[e._v("登入後點擊設定->固定網址，點擊儲存變更按鈕即可使用正常的http://localhost/display/"+e._s((new Date).getFullYear()+e.projectValue)+"/wp-admin網址登入後台")])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("div",[this._v("用fork或其他工具選擇develop分支，確保最新狀態")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"o-code"},[t("div",[this._v("sh remote.sh")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("div",[this._v("Push 上 gitlab")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("div",[this._v("匯入SQL：非多國語言的blockstu_basic.sql或多國語言的blockstu_basic-lang.sql")])])}],!1,null,null,null);t.default=a.exports}}]);