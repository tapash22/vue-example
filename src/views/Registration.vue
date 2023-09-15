<template>
    <div class="login relative bg-white py-3">
        <div class="form w-full h-full flex justify-center align-middle my-5">
            <div class="card w-1/3 h-auto p-2 bg-yellow-700 opacity-80 shadow-lg shadow-red-500  block rounded-xl ring-6 ring-red-700">
                <h2 class="text-white font-bold text-lg py-3 flex justify-center italic">Registration Form </h2>
                <div class="w-full  h-auto  px-4  rounded-md py-1 ">
                    <label class="text-sm text-white font-normal italic py-2">Profile</label>
                    <input class="w-full h-9 p-2 ring-4 ring-white text-sm font-mono rounded-lg" placeholder="Enter your Name" />
                </div>
                <div class="w-full  h-auto  px-4  rounded-md py-1">
                    <label class="text-sm text-white font-normal italic py-2">Email</label>
                    <input class="w-full h-9 p-2 ring-4 ring-white text-sm font-mono rounded-lg" placeholder="Enter your Email" />
                </div>
                <div class="w-full  h-auto  px-4  rounded-md py-1 ">
                    <label class="text-sm text-white font-normal italic py-2">Password</label>
                    <input class="w-full h-9 p-2 ring-4 ring-white text-sm font-mono rounded-lg" placeholder="Enter your password" />
                </div>
                <div class="w-full h-auto flex justify-end p-4">
                    <button class="w-auto h-auto text-md font-medium px-4 py-2 bg-white shadow-lg rounded-md shadow-white italic text-red-900">
                        SignUp
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input::placeholder{
    font-size:12px;
    font-weight: 400;
    font-style: italic;
    color: gray;
}
</style>