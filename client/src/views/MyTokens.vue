<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">My Tokens</h1>
      
      <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="token in tokens" :key="token.id" class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img :src="token.image" alt="Token" class="h-12 w-12 rounded-full" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">{{ token.name }}</h3>
                <p class="text-sm text-gray-500">Balance: {{ token.balance }}</p>
              </div>
            </div>
            <div class="mt-4">
              <button @click="transferToken(token)" class="btn-primary w-full">
                Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Mock data - replace with actual blockchain data
const tokens = ref([
  {
    id: 1,
    name: 'Sample Token',
    balance: '1000',
    image: 'https://via.placeholder.com/150'
  }
])

function transferToken(token: any) {
  router.push({
    path: '/transfer',
    query: { token: token.id }
  })
}
</script>