<template>
  <div class="py-6">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Mint NFT</h1>
      
      <form @submit.prevent="handleMint" class="mt-8 space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            NFT Name
          </label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            class="input"
          />
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            v-model="description"
            rows="3"
            class="input"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Image
          </label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <div v-if="!imageUrl" class="flex text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="handleFileUpload" accept="image/*" />
                </label>
              </div>
              <img v-else :src="imageUrl" alt="Preview" class="mx-auto h-32 w-32 object-cover rounded-lg" />
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="btn-primary w-full"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Minting...' : 'Mint NFT' }}
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
const name = ref('')
const description = ref('')
const imageUrl = ref('')
const isLoading = ref(false)

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imageUrl.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

async function handleMint() {
  if (!web3Store.isConnected) {
    alert('Please connect your wallet first')
    return
  }

  isLoading.value = true
  try {
    // Implement actual minting logic here
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated delay
    alert('NFT minted successfully!')
    name.value = ''
    description.value = ''
    imageUrl.value = ''
  } catch (error) {
    console.error('Minting failed:', error)
    alert('Minting failed. Please try again.')
  } finally {
    isLoading.value = false
  }
}
</script>