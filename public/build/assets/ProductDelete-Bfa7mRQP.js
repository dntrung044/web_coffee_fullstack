import{D as n,o as r,f as s,b as e}from"./app-Bm5g5IQi.js";import{u as l}from"./index-D8ehHb0j.js";import{_ as i}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css            */const c={props:{product:{type:Object,required:!0}},methods:{async deleteProduct(d){const t=l();try{await n.delete(`/api/products/delete/${d}`),t.success("Sản phẩm đã được xoá thành công"),window.location.reload()}catch(o){console.error("Error deleting product:",o),t.error("Có lỗi xảy ra khi xoá sản phẩm")}}}},u={id:"delete-modal",tabindex:"-1",class:"fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"},h={key:0},m={class:"relative w-full h-auto max-w-md max-h-full"},g={class:"relative bg-white rounded-lg shadow"},p=e("button",{type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"delete-modal"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})]),e("span",{class:"sr-only"},"Close modal")],-1),x={class:"p-6 text-center"},f=e("svg",{"aria-hidden":"true",class:"mx-auto mb-4 text-gray-400 w-14 h-14",fill:"none",stroke:"currentColor",viewbox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),_=e("h3",{class:"mb-5 text-lg font-normal text-gray-500"}," Are you sure you want to delete this product? ",-1),v=e("button",{"data-modal-toggle":"delete-modal",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"}," No, cancel ",-1),w={key:1},y=e("p",null,"Loading...",-1),b=[y];function k(d,t,o,C,L,a){return r(),s("div",u,[o.product?(r(),s("div",h,[e("div",m,[e("div",g,[p,e("div",x,[f,_,e("button",{onClick:t[0]||(t[0]=z=>a.deleteProduct(o.product.id)),"data-modal-toggle":"delete-modal",type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"}," Yes, I'm sure "),v])])])])):(r(),s("div",w,b))])}const D=i(c,[["render",k]]);export{D as default};