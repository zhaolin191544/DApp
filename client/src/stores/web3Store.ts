import { defineStore } from 'pinia'
import { ethers } from 'ethers'
import { ref, computed } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import MyTokenABI from '../abi/MyTokenABI.json'

const TOKEN_ADDRESS = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'

export const useWeb3Store = defineStore('web3', () => {
  const account = ref('')
  const provider = ref<ethers.Provider | null>(null)
  const signer = ref<ethers.Signer | null>(null)
  const tokenContract = ref<ethers.Contract | null>(null)
  const tokenBalance = ref('0')
  const isConnecting = ref(false)

  const isConnected = computed(() => !!account.value)

  async function connect() {
    if (isConnecting.value) return
    
    isConnecting.value = true
    
    try {
      if (window.ethereum) {
        const ethProvider = new ethers.BrowserProvider(window.ethereum)
        const accounts = await ethProvider.send('eth_requestAccounts', [])
        
        account.value = accounts[0]
        provider.value = ethProvider
        signer.value = await ethProvider.getSigner()
        
        // ��ʼ�����Һ�Լ
        tokenContract.value = new ethers.Contract(
          TOKEN_ADDRESS,
          MyTokenABI.abi,
          signer.value
        )
        
        // ��ȡ��ʼ�������
        await updateTokenBalance()
        
        // �����˻����
        window.ethereum.on('accountsChanged', handleAccountsChanged)
      } else {
        throw new Error('�밲װ MetaMask')
      }
    } catch (error) {
      console.error('����Ǯ��ʧ��:', error)
      throw error
    } finally {
      isConnecting.value = false
    }
  }

  async function updateTokenBalance() {
    if (tokenContract.value && account.value) {
      try {
        const balance = await tokenContract.value.balanceOf(account.value)
        tokenBalance.value = ethers.formatUnits(balance, 18) // ������Ҿ���Ϊ18
      } catch (error) {
        console.error('��ȡ�������ʧ��:', error)
      }
    }
  }

  function handleAccountsChanged(accounts: string[]) {
    if (accounts.length === 0) {
      disconnect()
    } else {
      account.value = accounts[0]
      updateTokenBalance()
    }
  }

  function disconnect() {
    account.value = ''
    provider.value = null
    signer.value = null
    tokenContract.value = null
    tokenBalance.value = '0'
    window.ethereum?.removeListener('accountsChanged', handleAccountsChanged)
  }

  return {
    account,
    provider,
    signer,
    tokenBalance,
    isConnected,
    connect,
    disconnect,
    updateTokenBalance
  }
})