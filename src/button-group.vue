<template>
  <div id="g-button-group">
    <slot></slot>
  </div>
  <!-- /#button-group -->
</template>

<script>
    export default {
        name: "g-button-group",
        mounted:function(){
            for(let node of this.$el.children ){
                console.log(node.nodeName);
                let name=node.nodeName
                if(name!=='BUTTON'){
                    console.warn(`button-group的子元素应该是button,但是你的子元素是${name.toLocaleLowerCase()}`)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
#g-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .g-button{
    border-radius: 0;
    margin-left: -1px;
    &:nth-child(1){
      margin-left: 0;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:nth-child(3){
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      position:relative;
      z-index: 2;
      border-color: red;
    }
  }
}
</style>
