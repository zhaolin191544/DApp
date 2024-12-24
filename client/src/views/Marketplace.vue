<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold text-gray-900">NFT Marketplace</h1>
        <div class="flex space-x-4">
          <input
            type="text"
            v-model="search"
            placeholder="Search NFTs..."
            class="input max-w-xs"
          />
          <select v-model="filter" class="input max-w-xs">
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="collectibles">Collectibles</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>
      </div>
      
      <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="nft in filteredNFTs" :key="nft.id" class="bg-white overflow-hidden shadow rounded-lg">
          <img :src="nft.image" :alt="nft.name" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900">{{ nft.name }}</h3>
            <p class="mt-1 text-sm text-gray-500">{{ nft.description }}</p>
            <div class="mt-4 flex justify-between items-center">
              <span class="text-lg font-medium text-gray-900">{{ nft.price }} ETH</span>
              <button @click="buyNFT(nft)" class="btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWeb3Store } from '../stores/web3Store'

const web3Store = useWeb3Store()
const search = ref('')
const filter = ref('all')

// Mock data - replace with actual marketplace data
const nfts = ref([
  {
    id: 1,
    name: 'Cool Art #1',
    description: 'A very cool piece of digital art',
    image: 'https://via.placeholder.com/300',
    price: '0.1',
    category: 'art'
  },
  {
    id: 2,
    name: 'Rare Collectible',
    description: 'One of a kind collectible item',
    image: 'https://via.placeholder.com/300',
    price: '0.2',
    category: 'collectibles'
  }
])

const filteredNFTs = computed(() => {
  return nfts.value.filter(nft => {
    const matchesSearch = nft.name.toLowerCase().includes(search.value.toLowerCase()) ||
                         nft.description.toLowerCase().includes(search.value.toLowerCase())
    const matchesFilter = filter.value === 'all' || nft.category === filter.value
    return matchesSearch && matchesFilter
  })
})

async function buyNFT(nft: any) {
  if (!web3Store.isConnected) {
    alert('Please connect your wallet first')
    return
  }

  try {
    // Implement actual purchase logic here
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated delay
    alert(`Successfully purchased ${nft.name}!`)
  } catch (error) {
    console.error('Purchase failed:', error)
    alert('Purchase failed. Please try again.')
  }
}
</script>