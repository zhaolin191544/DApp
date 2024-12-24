<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link to="/" class="flex items-center">
              <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">DApp</span>
            </router-link>
            <div class="ml-10 flex items-center space-x-4">
              <router-link v-for="item in navigation" 
                :key="item.name" 
                :to="item.href"
                class="px-3 py-2 rounded-md text-sm font-medium"
                :class="[
                  $route.path === item.href
                    ? 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                ]"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="flex items-center">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import ConnectWallet from './components/ConnectWallet.vue'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'My Tokens', href: '/tokens' },
  { name: 'Transfer', href: '/transfer' },
  { name: 'Mint', href: '/mint' },
  { name: 'History', href: '/history' },
  { name: 'Marketplace', href: '/marketplace' }
]
</script>