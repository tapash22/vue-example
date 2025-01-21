<template>
    <div class="sub-navigation flex justify-between   w-full py-0">
        <div class="list flex justify-start w-5/6 pl-4 h-16  bg-gray-950 mt-3">
            <ul class="ul">
                <li class="li" v-for="nav in navList" :key="nav.id">
                    <span class="span uppercase text-white mx-2">
                        {{ nav.name }}
                    </span>
                </li>
            </ul>

        </div>
        <div class="add  absolute right-0 z-30">
        <div class="w-[250px] h-24 z-auto bg-red-400 flex justify-start items-center rounded-tl-full rounded-bl-full pl-4">
            <div
                class="logo w-14 h-14 rounded-full bg-white shadow-lg border-4 border-red-300 flex justify-center items-center">
                <i class="bi bi-telephone text-2xl font-bold p-2 text-red-500 "></i>
            </div>
            <div class="block pl-2">
                <h3 class="text-sm font-normal uppercase py-1"> Support & Order</h3>
                <span class="text-xl font-light">01674345763</span>
            </div>
        </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    id: 1,
                    name: 'Home',
                },
                {
                    id: 2,
                    name: 'Shop',
                },
                {
                    id: 3,
                    name: 'Elements',
                },
                {
                    id: 4,
                    name: 'Page',
                },
                {
                    id: 5,
                    name: 'Blog',
                },
                {
                    id: 6,
                    name: 'Vendor',
                },
            ]
        }
    }

}
</script>

<style></style>