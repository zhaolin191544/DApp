<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 sm:text-5xl sm:tracking-tight lg:text-6xl animate-gradient">
          Welcome to Our DApp
        </h1>
        <p class="mt-5 max-w-xl mx-auto text-xl text-gray-600 font-medium">
          Explore the world of decentralized applications with our feature-rich platform.
        </p>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Feature 1 -->
          <div class="group bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
            <div class="px-6 py-8">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="text-xl font-bold text-blue-900">Token Features</div>
              </div>
              <div class="mt-2 text-sm text-gray-500">
                Manage your tokens with ease. Transfer, receive, and track your assets securely.
              </div>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="group bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
            <div class="px-6 py-8">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="text-xl font-bold text-purple-900">NFT Marketplace</div>
              </div>
              <div class="mt-2 text-sm text-gray-500">
                Buy, sell, and trade unique digital assets in our NFT marketplace.
              </div>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="group bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-100">
            <div class="px-6 py-8">
              <div class="flex items-center space-x-3 mb-4">
                <div class="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <div class="text-xl font-bold text-green-900">Transaction History</div>
              </div>
              <div class="mt-2 text-sm text-gray-500">
                View and track all your transactions with detailed history and analytics.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats Section -->
      <div class="mt-20 bg-white rounded-2xl shadow-lg p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">10K+</div>
            <div class="mt-2 text-gray-600">Active Users</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">$2M+</div>
            <div class="mt-2 text-gray-600">Total Volume</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">50K+</div>
            <div class="mt-2 text-gray-600">NFTs Created</div>
          </div>
        </div>
      </div>
      
      <!-- Latest Transactions -->
      <div class="mt-12 bg-white rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Latest Transactions</h2>
        <div class="space-y-4">
          <div v-for="tx in latestTransactions" :key="tx.id" 
               class="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="flex items-center space-x-4">
              <div :class="[
                'p-2 rounded-full',
                tx.type === 'mint' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
              ]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div class="font-medium text-gray-900">{{ tx.title }}</div>
                <div class="text-sm text-gray-500">{{ tx.time }}</div>
              </div>
            </div>
            <div class="text-sm font-medium text-gray-900">{{ tx.amount }}</div>
          </div>
        </div>
      </div>
      
      <!-- Community Section -->
      <div class="mt-12 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
        <div class="flex justify-center space-x-6">
          <a href="#" class="btn-primary flex items-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
            <span>Twitter</span>
          </a>
          <a href="#" class="btn-primary flex items-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="#" class="btn-primary flex items-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
            </svg>
            <span>Discord</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const latestTransactions = [
  {
    id: 1,
    type: 'mint',
    title: 'NFT Minted: CryptoArt #123',
    time: '2 minutes ago',
    amount: '0.5 ETH'
  },
  {
    id: 2,
    type: 'transfer',
    title: 'Token Transfer',
    time: '5 minutes ago',
    amount: '1.2 ETH'
  },
  {
    id: 3,
    type: 'mint',
    title: 'NFT Minted: PixelPunk #456',
    time: '10 minutes ago',
    amount: '0.8 ETH'
  }
]
</script>