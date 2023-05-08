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
            <div class="">
                <Category :categorys="categorys" />
            </div>

        </div>
        <!-- category end -->

        <!-- best seller -->
        <div class="bg-white p-5 w-full h-full container">
            <h2 class="text-xl font-bold text-center mb-3">Best hier for You</h2>
            <TopSeller :carLists="carLists" />

        </div>

        <!-- best seller end -->

        <!-- must have for every car -->
        <div class="bg-gray-200 p-5 w-full h-full container">
            <h2 class="text-xl font-bold text-center mb-3">Must have for every car</h2>
            <div class="flex justify-center">
                <p class="text-sm font-normal mb-3 text-center w-1/2">Enjoy an entirely new level of driving experience with
                    our in-depth selection of superior car bulbs, brake
                    pads,
                    spark plugs, and other azirspares parts and accessories designed to
                    keep your car running at its absolute best
                </p>
            </div>
            
                <div class="flex justify-start gap-2">
                <div class="card" v-for="part in parts" :key="part.id">
                    <!-- <router-link :to="{ name: 'carDetails', params: { id: carList.id } }"> -->
                        <div class="card-body h-60 w-full p-0 overflow-hidden">
                            <img :src="part.image" class="h-full w-full" />
                        </div>
                    <!-- </router-link> -->
                    <div class="card-text w-full h-auto p-2 py-2">
                        <h3 class="uppercase text-sm font-bold my-1 ">{{ part.name }}</h3>
                        <!-- <p class="text-sm font-light my-1 text-red-900">{{ carList.ownerName }} | {{ carList.phone }}</p>
                        <p class="text-sm font-light my-1">{{ carList.model }}</p>
                        <p class="text-lg font-semibold my-2">Tk. {{ carList.price }}/day</p> -->
                    </div>
                </div>
            </div>
            

        </div>
        <!-- must have for every car end -->


    </div>
</template>

<script>
import TopSeller from '@/components/seller/TopSeller.vue';
import Category from '../components/category/Category.vue';

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
            ],

            carLists: [
                {
                    id: 1,
                    name: 'x-Corolla',
                    person: '3-4',
                    featureas: [
                        "AC",
                        "LED Monitor",
                        "SOund box",
                        "Air freshner",
                    ],
                    model: 2016,
                    image: require('@/assets/car2.jpg'),
                    color: 'red',
                    ownerName: 'name of owner',
                    phone: '01674345763',
                    price: 3000,
                    useTo: 'oil',
                    perKmCost: 12,
                },
                {
                    id: 2,
                    name: 'x-Corolla',
                    person: '3-4',
                    featureas: [
                        "AC",
                        "LED Monitor",
                        "SOund box",
                        "Air freshner",
                    ],
                    model: 2017,
                    image: require('@/assets/car2.jpg'),
                    color: 'red',
                    ownerName: 'name of owner',
                    phone: '01674345763',
                    price: 3200,
                    useTo: 'oil',
                    perKmCost: 12,
                },
                {
                    id: 3,
                    name: 'x-Corolla',
                    person: '3-4',
                    featureas: [
                        "AC",
                        "LED Monitor",
                        "SOund box",
                        "Air freshner",
                    ],
                    model: 2015,
                    image: require('@/assets/car2.jpg'),
                    color: 'red',
                    ownerName: 'name of owner',
                    phone: '01674345763',
                    price: 2800,
                    useTo: 'oil',
                    perKmCost: 10,
                },
                {
                    id: 4,
                    name: 'x-Corolla',
                    person: '3-4',
                    featureas: [
                        "AC",
                        "LED Monitor",
                        "SOund box",
                        "Air freshner",
                    ],
                    model: 2014,
                    image: require('@/assets/car2.jpg'),
                    color: 'red',
                    ownerName: 'name of owner',
                    phone: '01674345763',
                    price: 2600,
                    useTo: 'CNG',
                    perKmCost: 8,
                }

            ],

            parts: [
                {
                    id: 1,
                    name: 'Brake Pads',
                    image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
                },
                {
                    id: 2,
                    name: 'Air Filter',
                    image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
                },
                {
                    id: 3,
                    name: 'Moto Oils',
                    image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
                },
                {
                    id: 4,
                    name: 'Custom Wheel',
                    image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
                },
                // {
                //     id: 5,
                //     name: 'Exhaust System',
                //     image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
                // },
                // {
                //     id: 6,
                //     name: 'Steel Wheel',
                //     image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
                // }
            ]
        }
    },

    components: {
        Category,
        TopSeller,
    }

}
</script>

<style scoped>
.home1 {
    background-image: url('@/assets/car2.jpg');
}
</style>
