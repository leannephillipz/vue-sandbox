<template lang="html">
<p>global data: {{$gblData}}</p>
<button type="button" name="button" @click="update(txt)">{{txt}}</button>
</template>

<script>
export default {
  name: 'content',
  data(){
    return{
      txt:"Click to change data"
    }

  },
  methods:{
   update(value) {
     this.$gblFtn("hello")
      // return '$' + value
    }

  }
}
</script>

<style lang="css" scoped>
</style>
