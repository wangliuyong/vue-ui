<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="on_click">
    <Icon :icon="'loading'" v-if="loading"></Icon>
    <Icon :icon="icon" v-else></Icon>
    <div  class="content">
      <slot></slot>
    </div>
    <!-- /.content -->
  </button>
</template>

<script>
    import Icon from './Icon'
    export default {
        name:'g-button',
        props: {
            icon: {},
            iconPosition: {
                type:String,
                default:'left',
                /* 自定义验证,检查输入的属性的值是否合法，必须返回true*/
                validator(value) {
                    return value === 'right' || value === 'left';
                }
            },
            loading: false

        },
        data(){
            return{
                isLoading: false
            }
        },
        created: function () {
            //console.log('props', this._props);
        },
        components:{Icon},
        methods:{
            on_click:function () {
              this.loading =!this.loading;
            }
        }
    }
</script>

<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    line-height: 20px;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    .icon {
      order: 1;
      margin-right: .2em;
    }

    .content {
      order: 2;
    }

    &.icon-right {
      .icon {
        order: 2;
        margin-left: .2em;
      }

      .content {
        order: 1;
      }

    }
  }

  .loading {
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

</style>
