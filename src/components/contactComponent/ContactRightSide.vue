<template>
  <div class="w-2/3 h-auto block">
    <h2 class="text-3xl font-bold text-black text-start my-3 uppercase">
      Contact Us Right Now
    </h2>
    <form class="block w-full p-4 bg-white" @submit.prevent="contactForm()">
      <div class="block w-full my-4">
        <div class="flex justify-start items-center gap-4 py-3">
          <div class="block w-1/2">
            <input
              class="w-full ring-1 ring-gray-300 bg-gray-100 rounded-full h-12 px-3 text-xl font-medium text-black text-start"
              type="text"
              v-model="contact.name"
              placeholder="Name"
            />
          </div>
          <div class="block w-1/2">
            <input
              class="w-full bg-gray-100 ring-1 ring-gray-300 rounded-full h-12 px-3 text-xl font-medium text-black text-start"
              type="text"
              v-model="contact.email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="block w-full py-3">
          <input
            class="w-full bg-gray-100 ring-1 ring-gray-300 rounded-full h-12 px-3 text-xl font-medium text-black text-start"
            type="text"
            v-model="contact.subject"
            placeholder="Subject"
          />
        </div>
        <div class="block w-full py-3">
          <textarea
            class="w-full bg-gray-100 ring-1 ring-gray-300 rounded-lg h-24 px-3 py-2 text-xl font-medium text-black text-start"
            type="text"
            v-model="contact.message"
            placeholder="Message"
          />
        </div>
        <div class="flex justify-start w-full py-2">
          <button
            class="px-4 py-3 rounded-full bg-gray-700 text-sm font-semibold uppercase text-white"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    contactForm() {
      console.log(this.contact);
    },
  },
};
</script>
