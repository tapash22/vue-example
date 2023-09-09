<template>
    <div class="home relative">
        <div class="home1 bg-fixed flex justify-center items-center h-[450px] opacity-90 bg-center ">
            <div class="w-full">
                <h2 class="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl font-semibold tracking-widest py-4 uppercase text-center text-red-400">Select your
                    vehicle</h2>
                <div class="search block sm:block md:flex lg:flex xl:flex gap-2 justify-center w-full mb-10">
                    <div class="h-14 px-2 bg-white items-center w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12 overflow-hidden">
                        <select class="h-full w-full bg-white text-lg font-medium tracking-wider text-center overflow-hidden">
                            <option selected class="border-b-2 border-gray-400"> Select year</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="h-14 px-2 bg-white items-center sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12">
                        <select class="h-full w-full bg-white text-lg font-medium tracking-wider text-center ">
                            <option selected>Select Brand</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="h-14 px-2 bg-white items-center sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12">
                        <select class="h-full w-full bg-white text-lg font-medium tracking-wider text-center ">
                            <option selected> Select Model</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="h-14 flex justify-center  bg-red-900 sm:w-full md:w-1/12 lg:w-1/12 xl:w-1/12">
                        <button
                            class="bg-transparent h-full text-xl font-medium tracking-wider text-center text-red-100 uppercase">GO</button>
                    </div>
                </div>
                <div class="tag hidden sm:hidden md:flex lg:flex xl:flex  justify-center mt-5">
                    <div class="w-2/3 flex justify-evenly">
                        <a href="#" class="text-xl text-red-400 font-medium tracking-wide">Shop By Product</a>
                        <span class="font-semibold text-xl text-red-400">|</span>
                        <a href="#" class="text-xl text-red-400 font-medium tracking-wide">Shop By Brand</a>
                    </div>

                </div>
            </div>
        </div>
        <!-- first part of header -->
        <div class="bg-white p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full sm:block lg:flex md:flex xl:flex">
            <div class="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
                <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
                    <router-link to="/">
                    <img src="@/assets/car.jpg"
                        class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2" />
                        <h2 class="text-2xl text-red-800 font-bold w-full absolute bottom-2 left-10">
                        This is new car
                    </h2>
                </router-link>
                </div>
                <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
                    <img src="@/assets/car.jpg"
                        class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2" />
                        <h2 class="text-2xl text-red-800 font-bold w-full absolute bottom-2 left-10">
                        This is new car
                    </h2>
                </div>
            </div>
            <div class=" sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 overflow-hidden ring-8 ring-blue-950 rounded-lg relative">
                <img src="@/assets/car.jpg"
                    class=" relative scale-100 hover:scale-110 transition duration-300 hover:duration-700 rounded-lg rotate-0 hover:rotate-2 h-full" />

                    <h2 class="text-2xl text-red-800 font-bold w-full absolute bottom-2 left-1/3">
                        This is new car
                    </h2>
            </div>

            <div class="sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 ">
                <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
                    <img src="@/assets/car.jpg"
                        class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2" />
                        <h2 class="text-2xl text-red-800 font-bold w-full absolute bottom-2 left-10">
                        This is new car
                    </h2>
                </div>
                <div class="w-full my-1 border-4 bg-cover overflow-hidden relative">
                    <img src="@/assets/car.jpg"
                        class="scale-100 hover:scale-125 transition duration-300 hover:duration-700 rotate-0 hover:rotate-2" />
                        <h2 class="text-2xl text-red-800 font-bold w-full absolute bottom-2 left-10">
                        This is new car
                    </h2>
                </div>
            </div>

        </div>

        <!-- first part end of header -->

        <!-- category -->

        <div class="bg-white p-2 sm:p-2 md:p-3 lg:p-5 xl:pa-5 w-full h-full py-3">
            <h2 class="text-xl font-bold text-center mb-3">Find Your Destination !!</h2>
            <div class="">
                <Category :categorys="categorys" />
            </div>

        </div>
        <!-- category end -->


        <!-- banner -->

        <div class="w-full h-full container py-3">
            <div class="box p-3 bg-black h-[200] hidden sm:block md:flex lg:flex xl:flex opacity-80 shadow-2xl shadow-gray-400">
                <h3 class="text-4xl font-bold text-white text-center my-auto px-2 w-1/2">
                    Get 20% off for your order
                    <br />
                    <!-- <small class="text-xs font-thin text-white line-clamp-3 w-1/2 mt-3 text-center ml-32">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque, repudiandae quam quos
                        exercitationem
                    </small> -->
                </h3>
                <img src="https://i.ibb.co/Ks3VZYX/vector-car-png-favpng-gpin-VUFdw-Jp91d2ih-TCQu1-Ww-S-removebg-preview.png"
                    class="w-1/2  h-[400px]" />
            </div>

        </div>
        <!-- banner end -->


        <!-- best seller -->
        <div class="bg-white p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full container py-3">
            <h2 class="text-xl font-bold text-center mb-3">Best hier for You</h2>
            <TopSeller :carLists="carLists" />

        </div>

        <!-- best seller end -->

        <!-- must have for every car -->
        <div class="bg-white p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full container py-3">
            <h2 class="text-xl font-bold text-center mb-3">Must have for every car</h2>
            <div class="flex justify-center">
                <p class="text-sm font-normal mb-3 text-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">Enjoy an entirely new level of driving experience with
                    our in-depth selection of superior car bulbs, brake
                    pads,
                    spark plugs, and other azirspares parts and accessories designed to
                    keep your car running at its absolute best
                </p>
            </div>

            <div class="block sm:block md:flex lg:flex xl:flex justify-start gap-2">
                <div class="card my-1" v-for="part in parts" :key="part.id">
                    <!-- <router-link :to="{ name: 'carDetails', params: { id: carList.id } }"> -->
                    <div class="card-body h-60 w-full p-0 overflow-hidden">
                        <img :src="part.image" class="h-full w-full" />
                    </div>
                    <!-- </router-link> -->
                    <div class="card-text w-full h-auto">
                        <h3 class="uppercase text-sm font-bold py-2 text-white text-center bg-gray-600 ">{{ part.name }}</h3>
                        <!-- <p class="text-sm font-light my-1 text-red-900">{{ carList.ownerName }} | {{ carList.phone }}</p>
                        <p class="text-sm font-light my-1">{{ carList.model }}</p>
                        <p class="text-lg font-semibold my-2">Tk. {{ carList.price }}/day</p> -->
                    </div>
                </div>
            </div>


        </div>
        <!-- must have for every car end -->


        <div class="bg-white p-2 sm:p-2 md:p-3 lg:p-5 xl:p-5 w-full h-full container">
            <h2 class="text-xl font-bold text-center mb-3">Must have you know</h2>
            <div class="block sm:block md:flex lg:flex xl:flex justify-center">
                <Carousel />
            </div>
        </div>

<!-- contact us -->
        <div class="bg-white p-2 sm:p-2 md:p-5 lg:p-5 xl:p-5 w-full h-full  ">
            <div class="email block sm:block md:flex lg:flex xl:flex ">
                <div class="w-full mt-5 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pa-2 align-middle flex justify-center space-x-2 my-auto">
                <div class="border-1 sm:border-2 md:border-3 lg:border-3 xl:border-3 rounded-full flex justify-center items-center border-white pa-2 w-10 sm:w-10 md:w-20 lg:w-24 xl:w-24 h-10 sm:h-10 md:h-20 lg:h-24 xl:h-24">
                    <i class="bi bi-envelope-paper text-5xl font-bold text-white hover:scale-150  transition-all"></i>
                </div>
                    <div class="block my-auto align-middle">
                        <h2 class="uppercase text-xl sm:text-xl md:text-2xl ld:text-3xl xl:text-3xl font-semibold text-white ">
                            Signup and save !
                        </h2>
                        <p class="text-sm font-thin text-white">Exclusive email offers & Limited time discount specials</p>
                    </div>
                </div>
                <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pa-2 flex justify-center h-full">
                    <form class="flex my-auto w-full border-2 border-red-500" >
                        <input class="form-control w-3/4 rounded-none h-12" placeholder="Enter your email"/>
                        <button class="w-1/4 bg-red-500 text-xl font-bold text-white">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <!-- contact us end-->
    </div>
</template>

<script>
import TopSeller from '@/components/seller/TopSeller.vue';
import Category from '../components/category/Category.vue';
import Carousel from '../components/carousel/Carousel.vue';

export default {
    data() {
        return {
            email: '',
            inputColor: false,
            categorys: [{
                id: 1,
                name: 'Inter Dhaka',
                image: require('@/assets/car_view.jpg'),
            },
            {
                id: 2,
                name: 'Outside Dhaka',
                image: require('@/assets/car_view.jpg'),
            },
            {
                id: 3,
                name: 'Travel',
                image: require('@/assets/car_view.jpg'),
            },
            {
                id: 4,
                name: 'Hourly',
                image: require('@/assets/car_view.jpg'),
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
                    image: require('@/assets/rent_car.jpg'),
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
                    image: require('@/assets/rent_car.jpg'),
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
                    image: require('@/assets/rent_car.jpg'),
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
                    image: require('@/assets/rent_car.jpg'),
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
                    image: require('@/assets/1.jpg')
                },
                {
                    id: 2,
                    name: 'Air Filter',
                    image: require('@/assets/3.jpg')
                },
                {
                    id: 3,
                    name: 'Moto Oils',
                    image: require('@/assets/4.jpg')
                },
                {
                    id: 4,
                    name: 'Custom Wheel',
                    image: require('@/assets/2.jpg')
                }
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

    computed: {
        emailT() {
            let emails = this.email.length;
            if (emails.includes('@')) {
                return {
                    // inputColor = true;
                    // text-color = true;
                }
            }
        }
    },

    components: {
        Category,
        TopSeller,
        Carousel
    }

}
</script>

<style >
.home1 {
    background-image: url('@/assets/car2.jpg');
}

input:focus {
    outline: none;
}

.emailT {
    border: 1px solid black;
}

input[id="cb1"]+label {
    width: 14px;
    height: 14px;
    border: 1px solid green;
    border-radius: 2px;
    cursor: pointer;
}

input[id="cb1"]:checked+label:after {
    position: relative;
    top: -10px;
    left: -5px;
    content: '\2714';
    font-size: 6px;
}

input[id="cb1"] {
    display: none;
}

/* input[id="cb1"]:checked::before{
    background-color:green;
} */
input[type="checkbox"]:checked+label {
    color: blue;
}

.t:after {
    content: "\2714";
    font-size: 10px;
    position: absolute;
    top: 0px;
    left: 3px;
    color: #49a6db !important;
}

.email {
    background-image: url('@/assets/bottom_car.jpg');
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    filter: brightness(60%);
    padding:10px;
}
::placeholder{
    font-size:16px;
    font-weight: 400;
    font-style: italic;
}
</style>
