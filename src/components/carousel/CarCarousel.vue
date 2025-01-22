<template>
    <carousel :perPageCustom="[
        [480, 1],
        [768,2],
        [992,3],
        [1200,3]
    ]" :navigate-to="someLocalProperty" :mouse-drag="false" paginationActiveColor="red" paginationSize="10" paginationPadding="5" paginationColor="blue">
        <slide style="padding:10px;" v-for="i in carGallery" :key="i.id" >
            <div class="w-full h-auto p-2 flex justify-center items-center " >
               <img :src="i.image" class="bg-cover bg-center rounded-xl h-[300px] w-full"/>
            </div>
        </slide>

    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {

    props:['carGallery'],
    components: {
        Carousel,
        Slide
    }
};

</script>

<style >
.VueCarousel-pagination{
    align-items:left;
    margin-left:-47%;
}
</style>