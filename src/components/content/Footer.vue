<template>

    <div class="block">
    <div class="w-full h-full  bg-gray-200 block sm:block md:flex lg:flex xl:flex">
        <!-- left -->
        <div class="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-full block py-2 sm:py-2 md:py-0 lg:py-0 xl:py-0">
            <router-link to="land">
                <img src="https://static.vecteezy.com/system/resources/previews/013/923/539/original/car-logo-vehicle-sports-png.png"
                class="w-32 h-32 ml-20 sm:ml-20 md:ml-10 lg:ml-10 xl:ml-10 " alt="logo" />
            </router-link>
            <p class="text-lg sm:text-center md:text-center lg:text-start xl:text-start font-medium text-justify text-black mx-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aspernatur inventore necessitatibus alias
                illo quisquam fugit magnam doloremque facere ea?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aspernatur inventore necessitatibus alias
                illo quisquam fugit magnam doloremque facere ea?
            </p>
            <div>
                <ul class="flex justify-center  sm:justify-center md:justify-center lg:justify-start xl:justify-start gap-4 my-4 ml-0 sm:ml-0 md:ml-3 lg:ml-5 xl:ml-5 ">
                    <li v-for="socialm in socialmedias" :key="socialm.id">
                        <i class="text-3xl text-red-400" :class="socialm.icon"></i>
                    </li>

                </ul>
            </div>
        </div>
        <!-- left end -->

        <!-- middle -->

        <div class="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-full flex justify-center gap-5 py-2 sm:py-2 md:py-0 lg:py-0 xl:py-0">
            <div class="mt-5">
                <h3 class="text-black text-2xl font-semibold border-b-2 border-red-500 mb-2">
                    Customer Service
                </h3>
                <ul class="block">
                    <li class="text-lg font-medium py-1" v-for="list in list1" :key="list.id">
                        {{ list.name }}
                    </li>

                </ul>
            </div>
            <div class="mt-5">
                <h3 class="text-black text-2xl font-semibold border-b-2 border-red-500 mb-2">
                    About Us
                </h3>
                <ul class="block">
                    <li class="text-lg font-medium py-1" v-for="list in list1" :key="list.id">
                        {{ list.name }}
                    </li>

                </ul>
            </div>
        </div>
        <!-- middle end -->

        <!-- right -->
        <div class="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-full block py-0 sm:py-2 md:py-0 lg:py-0 xl:py-0 ">
            <div class="bg-red-500">

                <div class="pa-2 flex justify-start py-1 px-4">
                    <div class="p-2 mt-2 w-20 h-20 rounded-full border-2 border-white flex justify-center items-center">
                        <i class="bi bi-telephone-forward text-4xl text-white"></i>
                    </div>
                    <div class="my-auto mx-3">
                        <p class="text-xl font-normal text-white ">
                            Call Us Free
                        </p>
                        <p class="text-lg font-medium text-white ">
                            +8801674345763
                        </p>
                    </div>
                </div>

                <div class="flex py-4">
                    <div class="w-1/4">
                    <p class="uppercase text-lg space-x-2 mt-16 text-white font-medium rotate-90 w-36 ">
                        open hours
                    </p>
                    </div>
                    <div class="w-3/4  border-l-2 border-white pl-4">
                        <div class="block">
                            <h2 class="text-xl font-semibold text-white my-1 pl-1">
                                Mon-Fri
                            </h2>
                            <p class="text-lg text-white font-semibold pl-1">
                                9:00 AM - 9:00 PM
                            </p>
                        </div>
                        <div class="block">
                            <h2 class="text-xl font-semibold text-white my-1 pl-1">
                                Sat-Sun
                            </h2>
                            <p class="text-lg text-white font-semibold pl-1">
                                10:00 AM - 10:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="flex justify-center align-middle gap-2">
                <li>
                    <i class="bi bi-credit-card-2-back text-green-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-red-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-blue-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-yellow-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-red-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-blue-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-yellow-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-red-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-blue-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-yellow-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-red-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-blue-500 text-4xl"></i>
                </li>
                <li>
                    <i class="bi bi-credit-card-2-back text-yellow-500 text-4xl"></i>
                </li>
            </ul>
        </div>
        <!-- right end -->
    </div>
    <div class="flex justify-center py-2 bg-blue-50 align-center">
        <p class="text-lg font-medium text-black ">
           <span class="text-xl"> &copy;</span>  All Right reserved.
        </p>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list1: [
                {
                    id: 1,
                    name: 'Contact Us'
                },
                {
                    id: 2,
                    name: 'FAQ'
                },
                {
                    id: 3,
                    name: 'Store Locator'
                },
                {
                    id: 4,
                    name: 'Delivery Info'
                },
                {
                    id: 5,
                    name: 'Return and Refunds'
                },
                {
                    id: 6,
                    name: 'Product Recall'
                },

            ],
            list2: [
                {
                    id: 1,
                    name: 'About Us'
                },
                {
                    id: 2,
                    name: 'Guides & Articals'
                },
                {
                    id: 3,
                    name: 'Customer Reviews'
                },
                {
                    id: 4,
                    name: 'Cupon Code'
                },
                {
                    id: 5,
                    name: 'Discount'
                },
            ],
            socialmedias: [
                {
                    id: 1,
                    icon: "bi bi-facebook",
                    link: ''
                },
                {
                    id: 2,
                    icon: "bi bi-instagram",
                    link: ''
                },
                {
                    id: 3,
                    icon: "bi bi-whatsapp",
                    link: ''
                },
                {
                    id: 4,
                    icon: "bi bi-linkedin",
                    link: ''
                }
            ]
        }
    }

}
</script>