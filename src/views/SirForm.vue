<template>
    <div class="sir bg-yellow-200  block" >
        <div class="header w-full h-auto flex">

            <div class="w-3/12 flex justify-start align-middle pt-3 pl-5">
                <div class="rounded-full ring-2 ring-red-200 h-20 w-20 overflow-hidden">
                    <img src="../assets/logo.png" class="w-full h-full bg-center bg-cover object-cover " />
                </div>
            </div>

            <div class="w-6/12 ">
                <div class="block bg-yellow-300 ring-4 ring-yellow-500 rounded-br-3xl rounded-bl-3xl p-1">
                    <span class="text-lg font-light italic py-1 text-black flex justify-center">
                        Lorem, ipsum.
                    </span>
                    <p class="text-sm font-normal px-4 text-center text-black">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis impedit illum consequuntur perferendis deserunt beatae!
                    </p>
                    <h3 class="font-bold text-xl text-red-700 text-center">
                        Reunion
                    </h3>
                    <span class="text-lg font-normal text-black flex justify-center">
                        Tangail, Dhaka.
                    </span>
                    
                </div>
                <h3 class="text-xl font-bold text-white bg-green-700 p-1 my-2 w-36 mx-auto text-center ">
                        Registration 
                    </h3>

            </div>

            <div class="w-3/12 flex justify-end align-middle p-3">
                <div class="ring-2 ring-red-200 bg-gray-400 ">
                    <img src="../assets/logo.png" class="w-28 h-40 bg-center bg-cover object-cover " />
                </div>
            </div>

        </div>

        <div class="flex justify-between px-2">
            <div class="flex justify-start">
                <label class="text-sm font-bold pt-1 px-2 text-black">NID:</label>
                <input type="text" class="outline-none bg-gray-200 " />
            </div>
            <div class="flex justify-end px-2">
                <label class="text-sm font-bold text-black pt-1 px-2">Date:</label>
                <input type="text" class="ring-1 ring-gray-400 h-6 w-6 bg-white flex m-1 " v-for="i in 8" :key="i" />
            </div>
        </div>

        <div class="flex justify-end px-3">
            <label class="text-sm font-bold text-black pt-1 px-2"> T-Shirt Size: </label>
            <button v-for="i in 5" :key="i" class="m-1 text-black  bg-green-400 ring-1 w-7 h-6 ring-black font-normal text-sm ">{{ i }}</button>
        </div>

        <!-- form -->

        <div class="w-full h-full p-2 flex justify-center">
            <form class=" w-full mx-2">
                <div class="flex justify-between">
                    <div  class="w-1/3 h-auto flex justify-start">
                        <label class="text-sm font-normal text-black pr-2">Academic_year</label>
                        <input type="text" class="ring-1 ring-gray-400 bg-white h-7 w-full" />
                    </div>
                    <div  class="w-1/3 h-auto flex justify-center">
                        <button class="bg-gray p-1 rounded-sm text-black bg-yellow-900 px-3 mx-2 h-7 font-normal text-sm">SSC</button>
                        <button class="bg-gray p-1 rounded-sm text-black bg-yellow-900 px-3 h-7 font-normal text-sm">HSC</button>
                    </div>
                    <div  class="w-1/3 h-auto flex justify-end">
                        
                        <label class="text-sm font-normal text-black pr-2">Passing year</label>
                        <input type="text" class="ring-1 ring-gray-400 bg-white h-7 w-full" />
                    </div>
                </div>

                <div class="flex justify-between w-full h-auto p-1">
                    <div class="w-2/3 h-auto flex justify-start">
                        <label class="text-sm font-normal text-black pr-2">Name:</label>
                        <input type="text" class="ring-1 ring-gray-400 bg-white h-7 w-full" />

                    </div>

                    <div class="w-1/3 h-auto flex justify-start">
                        <label class="text-sm font-normal text-black pr-2">Post_Office:</label>
                        <input type="text" class="ring-1 ring-gray-400 bg-white h-7 w-full" />

                    </div>
                </div>

                <div class="flex justify-between w-full h-auto p-1">
                    <input type="text" class="ring-1 ring-gray-400 bg-white h-7 w-full" />
                </div>

                <div class="flex justify-between w-full h-auto p-1">
                    <label class="text-sm font-normal text-black pr-2">Present_Address</label>
                    <input type="text" class="ring-1 ring-gray-400 w-full bg-white h-7" />
                </div>
                <div class="flex justify-between w-full h-auto p-1">
                    <label class="text-sm font-normal text-black pr-2">Premanent_Address</label>
                    <input type="text" class="ring-1 ring-gray-400 w-full bg-white h-7" />
                </div>
            </form>
        </div>
    </div>
</template>