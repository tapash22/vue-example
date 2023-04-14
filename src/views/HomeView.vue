<template>
  <div class="container mx-auto">
    <div class="header w-full flex justify-center p-2">
      <h2 class="text-xl font-medium uppercase text-violet-500">Studend Recoed</h2>
    </div>
    <div class="body w-full h-full p-4 flex justify-start">
      <StudentList :students="students" />
    </div>
    <div class="table">

      <table class="table-auto rounded-xl">
        <thead class="bg-violet-500 p-2 rounded-xl">
          <tr class="p-2">
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody class="bg-violet-300">
          <tr class="p-2 bg-violet-400">
            <td class="p-2 text-sm font-light">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td class="p-2 text-sm font-light">Malcolm Lockyer</td>
            <td class="p-2 text-sm font-light">1961</td>
          </tr>
          <tr>
            <td class="p-2 text-sm font-light">Witchy Woman</td>
            <td class="p-2 text-sm font-light">The Eagles</td>
            <td class="p-2 text-sm font-light">1972</td>
          </tr>
          <tr class="p-2 bg-violet-400">
            <td class="p-2 text-sm font-light">Shining Star</td>
            <td class="p-2 text-sm font-light">Earth, Wind, and Fire</td>
            <td class="p-2 text-sm font-light">1975</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="rounded-full flex justify-center items-center uppercase font-black text-4xl m-5 h-24 bg-red-700 ">
      <span class="rounded-full bg-red-300 w-20 h-20 overflow-hidden items-center flex ">
        hhh
      </span>
    </div>


    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button">
          <span class="sr-only">Open dropdown</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
            </path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown"
          class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                Data</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="Bonnie image" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
            friend</a>
          <a href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
      </div>

    </div>

    <div class="flex flex-wrap">
      <div class="w-2/4 space-x-2">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row cursor-pointer">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(1)"
              v-bind:class="{ 'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1 }">
              Profile
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(2)"
              v-bind:class="{ 'text-pink-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2 }">
              Settings
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(3)"
              v-bind:class="{ 'text-pink-600 bg-white': openTab !== 3, 'text-white bg-pink-600': openTab === 3 }">
              Options
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">

              <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                  <br />
                  <br />
                  Dramatically visualize customer directed convergence
                  without revolutionary ROI.
                </p>
              </div>

              <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                <p>
                  Completely synergize resource taxing relationships via
                  premier niche markets. Professionally cultivate one-to-one
                  customer service with robust ideas.
                  <br />
                  <br />
                  Dynamically innovate resource-leveling customer service for
                  state of the art customer service.
                </p>
              </div>

              <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions
                  without functional solutions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 flex justify-center">
        <div class="w-[400] space-x-2 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to Flowbite
          </h2>
          <form class="mt-8 space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com" required>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                password</label>
              <input type="password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                  class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  required>
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
              </div>
              <a href="#" class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost
                Password?</a>
            </div>
            <button type="submit"
              class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
              to your account</button>
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              Not registered yet? <a class="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
            </div>
          </form>
        </div>
      </div>

    </div>

    <div class="local-storage py-5">
      <LocalStorage />
    </div>
  </div>
</template>

<script>
import StudentList from '@/components/student/StudentList.vue'
import LocalStorage from '@/components/LocalStorage.vue'

export default {
  data() {
    return {
      openTab: 1,
      students: [{
        id: 1,
        name: 'tapash',
        title: 'paul',
        campuse: 'northern university',
        passing_year: '2017',
        cgpa: '3.1'
      },
      {
        id: 2,
        name: 'anik',
        title: 'paul',
        campuse: 'northern university',
        passing_year: '2017',
        cgpa: '3.5'
      },
      {
        id: 3,
        name: 'firoz',
        title: 'paul',
        campuse: 'northern university',
        passing_year: '2017',
        cgpa: '3.2'
      },
      {
        id: 4,
        name: 'surjo',
        title: 'paul',
        campuse: 'northern university',
        passing_year: '2017',
        cgpa: '3.15'
      },
      {
        id: 5,
        name: 'tahsin',
        title: 'paul',
        campuse: 'northern university',
        passing_year: '2017',
        cgpa: '3.0'
      }, {
        id: 6,
        name: 'asif',
        title: 'paul',
        campuse: 'northern university',
        passing_year: '2017',
        cgpa: '2.9'
      }
      ]
    }
  },

  components: {
    StudentList,
    LocalStorage
  },

  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>

<style></style>
