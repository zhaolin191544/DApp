<template>
  <div class="py-6">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Transfer Tokens</h1>
      
      <form @submit.prevent="handleTransfer" class="mt-8 space-y-6">
        <div>
          <label for="recipient" class="block text-sm font-medium text-gray-700">
            Recipient Address
          </label>
          <input
            id="recipient"
            v-model="recipient"
            type="text"
            required
            class="input"
            placeholder="0x..."
          />
        </div>

        <div>
          <label for="amount" class="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            id="amount"
            v-model="amount"
            type="number"
            required
            min="0"
            step="any"
            class="input"
          />
        </div>

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            Available Balance: {{ balance }}
          </p>
          <button
            type="submit"
            class="btn-primary"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Processing...' : 'Transfer' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useWeb3Store } from '../stores/web3Store'

const web3Store = useWeb3Store()
const recipient = ref('')
const amount = ref('')
const balance = ref('1000') // Replace with actual balance
const isLoading = ref(false)

async function handleTransfer() {
  if (!web3Store.isConnected) {
    alert('Please connect your wallet first')
    return
  }

  isLoading.value = true
  try {
    // Implement actual transfer logic here
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated delay
    alert('Transfer successful!')
    recipient.value = ''
    amount.value = ''
  } catch (error) {
    console.error('Transfer failed:', error)
    alert('Transfer failed. Please try again.')
  } finally {
    isLoading.value = false
  }
}
</script>