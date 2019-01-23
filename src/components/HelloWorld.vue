<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>{{msg}}</h1>
        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis hic numquam et quas repudiandae pariatur vero rem enim vitae nihil suscipit molestiae non voluptatum, doloremque, architecto id recusandae sint.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

