<template>
  <div class="about">
    <div class="container my-5">
      <div class="row " style="height:200px;">
        <div class="col align-self-start">
          hi
        </div>
        <div class="col-6 align-self-end">
          hi
        </div>
        <div class="col align-self-center">
          hi
        </div>
        <div class="col align-self-start">
          hi
        </div>
      </div>

      <div class="clearfix">
        <img src="@/assets/car.jpg" class="col-md-3 float-md-end mb-3 ms-md-4" alt="...">

        <p>
          A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a
          few meaningless phrases here to demonstrate how the columns interact here with the floated image.
        </p>

        <p>
          As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with
          some actual content in here, rather than just this boring placeholder text that goes on and on, but actually
          conveys no tangible information at. It simply takes up space and should not really be read.
        </p>

        <p>
          And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or
          some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
        </p>
      </div>

      <div class="row gx-5 ">
        <div class="col">
          <div class="p-3 border bg-light text-center">Custom column padding</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">Custom column padding</div>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div  class="bg-success p-2 text-danger bg-opacity-100">
          <p class="text-start shadow  bg-primary">
            hi
          </p>
          <p class="text-end shadow-sm bg-secondary">
            hi
          </p>
          <p class="text-center shadow-lg bg-info ">
            hi3
          </p>
        </div>
      </div>

      <div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
</div>      

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
/* .col,
.col-6 {
  background: red;
  border: 2px solid gray;
} */
</style>