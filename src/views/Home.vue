<template>
    <div class="home relative">
        <div class="home1 bg-fixed flex justify-center items-center h-[450px] opacity-90 bg-center ">
            <div class="w-full">
                <h2 class="text-4xl font-semibold tracking-widest py-4 uppercase text-center text-red-400">Select your
                    vehicle</h2>
                <div class="search flex gap-2 justify-center w-full mb-10">
                    <div class="h-14 px-2 bg-white items-center w-3/12">
                        <select class="h-full w-full bg-white text-lg font-medium tracking-wider text-center">
                            <option selected class="border-b-2 border-gray-400"> Select year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="h-14 px-2 bg-white items-center w-3/12">
                        <select class="h-full w-full bg-white text-lg font-medium tracking-wider text-center ">
                            <option selected>Select Brand</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="h-14 px-2 bg-white items-center w-3/12">
                        <select class="h-full w-full bg-white text-lg font-medium tracking-wider text-center ">
                            <option selected> Select Model</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="h-14 flex justify-center  bg-red-900 w-1/12">
                        <button
                            class="bg-transparent h-full text-xl font-medium tracking-wider text-center text-red-100 uppercase">GO</button>
                    </div>
                </div>
                <div class="tag flex justify-center mt-5">
                    <div class="w-2/3 flex justify-evenly">
                        <a href="#" class="text-xl text-red-400 font-medium tracking-wide">Shop By Product</a>
                        <span class="font-semibold text-xl text-red-400">|</span>
                        <a href="#" class="text-xl text-red-400 font-medium tracking-wide">Shop By Brand</a>
                    </div>

                </div>
            </div>
        </div>
        <!-- first part of header -->
        <div class="bg-white p-5 w-full h-full flex">
            <div class="w-1/4 p-2">
                <div class="w-full my-1 border-4 bg-cover overflow-hidden">
                    <img src="@/assets/car.jpg"
                        class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2" />
                </div>
                <div class="w-full my-1 border-4 bg-cover overflow-hidden">
                    <img src="@/assets/car.jpg"
                        class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2" />
                </div>
            </div>
            <div class="w-2/4 overflow-hidden shadow-2xl rounded-lg relative">
                <img src="@/assets/car.jpg"
                    class=" relative scale-100 hover:scale-110 transition duration-300 hover:duration-700 rounded-lg rotate-0 hover:rotate-2" />

            </div>

            <div class="w-1/4 p-2 ">
                <div class="w-full my-1 border-4 bg-cover overflow-hidden">
                    <img src="@/assets/car.jpg"
                        class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2" />
                </div>
                <div class="w-full my-1 border-4 bg-cover overflow-hidden">
                    <img src="@/assets/car.jpg"
                        class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2" />
                </div>
            </div>

        </div>

                <!-- first part end of header -->

                        <!-- category -->

        <div class="bg-white p-5 w-full h-full">
            <h2 class="text-xl font-bold text-center mb-3">Find Your Destination !!</h2>
            <div class="flex gap-3 py-3">
                <div class="card  shadow-orange-50 shadow-2xl items-center w-1/4 bg-red-500  " v-for="category in categorys"
                    :key="category.id">
                    <div class="w-full h-[200px] overflow-hidden items-end flex justify-center">
                        <img :src="category.image" class="bg-transparent translate-x-0 hover:translate-x-10 scale-100 hover:scale-125 duration-300 hover:duration-700" />
                    </div>
                    <h2 class="text-xl   font-normal  py-3">{{ category.name }}</h2>
                </div>
            </div>

        </div>
        <!-- category end -->

        <!-- best seller -->
        <div class="bg-white p-5 w-full h-full container">
            <h2 class="text-xl font-bold text-center mb-3">Best hier for You</h2>
            <div class="flex justify-start">
                <div class="card">
                    <div class="card-body h-60 w-full p-0 overflow-hidden">
                        <img src="@/assets/car2.jpg" class="h-full w-full" />
                    </div>
                    <div class="card-text w-full h-auto p-2 py-2">
                        <h3 class="uppercase text-sm font-bold my-1 ">Name of car</h3>
                        <p class="text-sm font-light my-1 text-red-900">owner name  | owner:01674345763</p>
                        <p class="text-sm font-light my-1">year</p>
                        <p class="text-lg font-semibold my-2">Tk. 3000/day</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- best seller end -->


    </div>
</template>

<script>
export default {
    data() {
        return {
            categorys: [{
                id: 1,
                name: 'Inter Dhaka',
                image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
            },
            {
                id: 2,
                name: 'Outside Dhaka',
                image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
            },
            {
                id: 3,
                name: 'Travel',
                image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
            },
            {
                id: 4,
                name: 'hourly',
                image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
            },
            ]
        }
    }

}
</script>

<style scoped>.home1 {
    background-image: url('@/assets/car2.jpg');
}</style>
