<template>
    <div class="login relative bg-white py-3">
        <div class="form w-full h-full flex justify-center align-middle my-5">
            <div class="card w-1/3 h-auto p-2 bg-yellow-800 shadow-lg shadow-red-500  block rounded-xl ring-6 ring-red-700">
                <h2 class="text-white font-bold text-lg py-3 flex justify-center italic">Login Form </h2>
                <div class="w-full  h-auto  px-4  rounded-md py-1 ">
                    <label class="text-sm text-white font-normal italic py-2">Email</label>
                    <input class="w-full h-9 p-2 ring-4 ring-white text-sm font-mono rounded-lg" placeholder="Enter Your Email" />
                </div>
                <div class="w-full  h-auto  px-4  rounded-md py-1 ">
                    <label class="text-sm text-white font-normal italic py-2">Password</label>
                    <input class="w-full h-9 p-2 ring-4 ring-white text-sm font-mono rounded-lg" type="password" placeholder="Enter Your Password" />
                </div>
                <div class="w-full h-auto flex justify-center p-3">
                    <button class="w-auto h-auto text-md font-medium px-10 py-1 bg-white shadow-lg rounded-md shadow-white italic text-red-900">
                        SignIn
                    </button>
                </div>

                <div class="w-full flex justify-between px-5 py-1 ">
                    <div>
                        <input type="checkbox" v-modal="check1" /> 
                        <label class="text-sm font-light mx-2 text-white">Remember Me</label>
                    </div>
                    <p @click="openModal = true" class="text-sm underline font-normal cursor-pointer text-blue-600">Forget Password</p>
                </div>
                <div class="flex justify-center p-0 m-0">
                    <p class="text-lg font-semibold text-white italic py-1 border-b-2 border-gray-300">OR</p>
                </div>

                <div class="flex flex-col gap-2 py-2 ">
                    <button class="px-2 mx-auto py-2 w-1/2 text-sm font-normal italic text-white bg-yellow-700 rounded-lg">
                        Login with Google
                    </button>
                    <button class="px-2 mx-auto py-2 w-1/2 text-sm font-normal italic text-white bg-yellow-700 rounded-lg">
                        Login with Facebook
                    </button>
                </div>
            </div>
        </div>

        <div v-if="openModal" class="bg-transparent z-50 w-1/2 flex justify-center absolute top-1/4 left-1/4">
            <div class="flex justify-center align-middle bg-transparent w-full relative">
                <div class="w-2/3 h-[300px] p-2 bg-yellow-800 rounded-lg ">
                <h2 class="text-white font-bold text-lg py-3 mt-4 flex justify-center italic">
                    Forget Password
                </h2>
                <div class="w-full  h-auto  px-4  rounded-md py-1 ">
                    <label class="text-sm text-white font-normal italic py-2">Email</label>
                    <input class="w-full h-9 p-2 ring-4 ring-white text-sm font-mono rounded-lg" placeholder="Enter Your exists email" />
                </div>

                <div class="w-full h-auto flex justify-center p-3">
                    <button class="w-auto h-auto text-md font-medium px-10 py-1 bg-white shadow-lg rounded-md shadow-white italic text-red-900">
                        Next
                    </button>
                </div>
            </div>
            <div class="absolute top-2 right-28 cursor-pointer " @click="openModal = false">
                <i class="bi bi-telephone-forward text-red-500 text-xl"></i>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            check1:false,
            openModal:false,
        }
    },

    computed:{
        showCheck(){
            return this.check1;
        }
    }

}
</script>

<style scoped>
input::placeholder{
    font-size:12px;
    font-weight: 400;
    font-style: italic;
    color: gray;
}
</style>