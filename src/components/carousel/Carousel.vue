<template>
    <carousel :perPageCustom="[
        [480, 1],
        [768,2],
        [992,3],
        [1200,3]
    ]" :navigate-to="someLocalProperty" :mouse-drag="false" paginationActiveColor="red" paginationSize="10" paginationPadding="2" paginationColor="blue">
        <slide style="padding:10px;" v-for="i in 6" :key="i" >
            <div class="card w-full h-[300px] bg-red-200 p-2 flex justify-center items-center rounded-xl" >
                <h2 class="text-4xl font-extrabold text-center text-white">
                    Do you know
                </h2>
            </div>
        </slide>

    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
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