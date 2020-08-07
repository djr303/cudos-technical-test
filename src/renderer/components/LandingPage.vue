<template>
  <div>
    <h5>Number of results: <span>{{ rows }}</span></h5>
    <div>
      <b-table striped hover :items="pagedResults"></b-table>
    </div>
    <div class="pagination">
      <b-pagination v-model="page" pills :total-rows="rows" :per-page="pageSize" size="lg"></b-pagination>
    </div>
  </div>
</template>

<script>
import { GET_MARKET_DATA } from '../store/modules/MarketData'

export default {
  mounted () {
    this.$store.dispatch(GET_MARKET_DATA)
  },
  computed: {
    pagedResults () {
      return this.results
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
    },
    rows () {
      return this.results.length
    },
    results () {
      return this.$store.state.MarketData.marketData
    }
  },
  data () {
    return {
      page: 1,
      pageSize: 10
    }
  }
}
</script>
<style lang="scss" scoped>
h5 {
  font-size: 1em;
  span {
    font-style: italic;
  }
}
.pagination {
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}
</style>