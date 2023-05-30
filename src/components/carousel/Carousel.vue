<template>
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false" paginationActiveColor="red" paginationSize="10" paginationPadding="2" paginationColor="blue" >
        <slide>
            <div class="card w-full h-[300px] bg-red-500 p-2 flex justify-center items-center" >
                <h2 class="text-4xl font-extrabold text-center text-white">
                    Do you know
                </h2>
            </div>
        </slide>
        <slide>
            <div class="card w-full  h-[300px] bg-violet-500 p-2 flex justify-center items-center " >
                <h2 class="text-4xl font-extrabold  text-yellow-800 ">
                    who i am
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