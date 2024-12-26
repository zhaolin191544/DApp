<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useWeb3Store } from '../stores/web3Store'

const router = useRouter()
const web3Store = useWeb3Store()

const tokens = ref([
  {
    id: 1,
    name: 'MyToken',
    balance: web3Store.tokenBalance,
    image: '/token-logo.png'
  }
])

// 监听代币余额变化
watch(
  () => web3Store.tokenBalance,
  (newBalance) => {
    tokens.value[0].balance = newBalance
  }
)

onMounted(async () => {
  if (web3Store.isConnected) {
    await web3Store.updateTokenBalance()
  }
})

function transferToken(token: any) {
  if (!web3Store.isConnected) {
    alert('请先连接钱包')
    return
  }
  
  router.push({
    path: '/transfer',
    query: { token: token.id }
  })
}
</script>