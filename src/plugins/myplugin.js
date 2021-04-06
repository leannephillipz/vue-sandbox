
  const install = (app, options) => {
    app.config.globalProperties.$globalHelper =  () => {
      alert("Hello world")
    }

  }

  export default { install }
