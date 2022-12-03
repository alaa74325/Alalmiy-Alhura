<template>
  <div class="commanbtn">
    <button>
      <slot></slot>
    </button>
  </div>
</template>
<style lang="scss">
.commanbtn {
  display: inline-block;
}
.commanbtn button {
  background: #29398c;
  color: #fff;
  padding: 8px 18px;
  border: 1px solid #29398c;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  line-height: 22px;
  transition: all 0.6s ease-in-out;
  z-index: 100;
  &:hover {
    background: #fff;
    color: #29398c;
    transition: all 0.6s ease-in-out;
  }
  .fa-arrow-right{
    margin-left: 5px;
    font-size: 16px;
    display: inline-block;
  }
  a{
        text-decoration: none;
        color: inherit;
        font-size: inherit;
  }
}
</style>