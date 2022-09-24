export const formatNumberFilters = {
  filters: {
    formatNumber(num) {
      return `$${new Intl.NumberFormat().format(num)}`
    }
  },
}