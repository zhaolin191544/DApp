<template>
  <div>
    <button v-if="!isConnected" 
      @click="connect" 
      class="btn-primary"
    >
      Connect Wallet
    </button>
    <div v-else class="flex items-center space-x-4">
      <span class="text-sm text-gray-700">{{ shortAddress }}</span>
      <button @click="disconnect" class="btn-secondary">
        Disconnect
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeb3Store } from '../stores/web3Store'

const web3Store = useWeb3Store()

const isConnected = computed(() => web3Store.isConnected)
const shortAddress = computed(() => {
  if (!web3Store.account) return ''
  return `${web3Store.account.slice(0, 6)}...${web3Store.account.slice(-4)}`
})

async function connect() {
  try {
    await web3Store.connect()
  } catch (error) {
    console.error('Failed to connect:', error)
    // Here you might want to show a notification to the user
  }
}

function disconnect() {
  web3Store.disconnect()
}
</script>