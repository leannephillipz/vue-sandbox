// const VPlugin = {}

const getData = () => {
  return [{'Name': 'bugs'}]
}

const install = (app, options) => {
  app.config.globalProperties.$plugin = getData()
  // app.$plugin = this
  app.provide('vPlugin', options)
  // console.log(app.config.globalProperties)

  app.directive('highlight', {
    beforeMount(el, binding, vnode) {
      el.style.background = binding.value
    }
    // to use in compondent : <p v-highlight="'yellow'">xxx</p> this actually works
    })

    // add(text, opts = {}) {
    //   let options = this.mergeOptions(opts);
    //   this.queue.push({ text, options });
    //   if(!this.visible) {
    //     this.showNext();
    //   }
    // },


}

const data = false

export default {install}

// export default {
//
//   install: function(app){
//     app.config.globalProperties.$plugin = "hello"
//     // app.config.globalProperties.$plugin = () => {
//     //
//     // }
//    //  ,
//    //  app.directive('my-directive', {
//    //   mounted (el, binding, vnode, oldVnode) {
//    //     // some logic ...
//    //   }
//    //   //
//    // }),
//    //
//    //
//    //  app.mixin({
//    //    created() {
//    //      // some logic ...
//    //    }
//    //    //
//    //  }),
//    //  app.provide('VPlugin', options)
//    app.$plugin = this
//
//    return $plugin
//  },
//  update : function() {
//
//  },
//  greeting : function() {
//    "hello"
//  },
//  get: function() {
//    return {'Name': 'bugs'}
//  }
//
// }
