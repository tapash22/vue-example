<template>
    <div class="w-full h-[400px] bg-gray-300 flex">
        <!-- left -->
        <div class="w-1/3 h-full block">
            <img src="https://static.vecteezy.com/system/resources/previews/013/923/539/original/car-logo-vehicle-sports-png.png"
                class="w-36 h-36 ml-5 " alt="logo" />
            <p class="text-sm font-medium text-black mx-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aspernatur inventore necessitatibus alias
                illo quisquam fugit magnam doloremque facere ea?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aspernatur inventore necessitatibus alias
                illo quisquam fugit magnam doloremque facere ea?
            </p>
            <div>
                <ul class="flex gap-4 my-3 mx-4">
                    <li v-for="socialm in socialmedias" :key="socialm.id">
                        <i class="text-xl text-red-400" :class="socialm.icon"></i>
                    </li>

                </ul>
            </div>
        </div>
        <!-- left end -->

        <!-- middle -->

        <div class="w-1/3 h-full flex justify-center gap-5">
            <div class="mt-5">
                <h3 class="text-black text-2xl font-semibold border-b-2 border-red-500 mb-2">
                    Customer Service
                </h3>
                <ul class="block">
                    <li class="text-sm font-medium pt-1" v-for="list in list1" :key="list.id">
                        {{ list.name }}
                    </li>

                </ul>
            </div>
            <div class="mt-5">
                <h3 class="text-black text-2xl font-semibold border-b-2 border-red-500 mb-2">
                    About Us
                </h3>
                <ul class="block">
                    <li class="text-sm font-medium pt-1" v-for="list in list1" :key="list.id">
                        {{ list.name }}
                    </li>

                </ul>
            </div>
        </div>
        <!-- middle end -->

        <!-- right -->
        <div class="w-1/3 h-full block ">
            <div class="bg-red-500">

                <div class="pa-2 flex justify-start py-2 px-4">
                    <div class="p-2 mt-3 w-24 h-24 rounded-full border-2 border-white flex justify-center items-center">
                        <i class="bi bi-telephone-forward text-5xl text-white"></i>
                    </div>
                    <div class="my-auto mx-3">
                        <p class="text-lg font-normal text-white ">
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
            <ul class="flex justify-center mt-2 gap-2 mb-3">
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
            </ul>
        </div>
        <!-- right end -->
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