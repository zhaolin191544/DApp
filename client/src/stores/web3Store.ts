import { defineStore } from 'pinia'
import { ethers } from 'ethers'
import { ref, computed } from 'vue'
import { useTimeoutFn } from '@vueuse/core'

export const useWeb3Store = defineStore('web3', () => {
  const account = ref('')
  const provider = ref<ethers.Provider | null>(null)
  const signer = ref<ethers.Signer | null>(null)
  const isConnecting = ref(false)

  const isConnected = computed(() => !!account.value)

  async function connect() {
    if (isConnecting.value) return
    isConnecting.value = true
    
    try {
      // @ts-ignore
      if (typeof window.ethereum !== 'undefined') {
        // @ts-ignore
        const ethProvider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await ethProvider.send('eth_requestAccounts', [])
        
        account.value = accounts[0]
        provider.value = ethProvider
        signer.value = await ethProvider.getSigner()
      } else {
        throw new Error('Please install MetaMask')
      }
    } catch (error) {
      console.error('Connection error:', error)
      throw error
    } finally {
      useTimeoutFn(() => { isConnecting.value = false }, 1000)
    }
  }

  function disconnect() {
    account.value = ''
    provider.value = null
    signer.value = null
  }

  return {
    account,
    provider,
    signer,
    isConnected,
    connect,
    disconnect
  }
})