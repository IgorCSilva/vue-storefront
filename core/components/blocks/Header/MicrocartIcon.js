import { MicrocartButton } from '@vue-storefront/core/modules/cart/components/MicrocartButton.ts'

export default {
  methods: {
    openMicrocart () {
      console.log('foi')
      // Method renamed to 'toggleMicrocart'
      this.toggleMicrocart()
    }
  },
  computed: {
    totalQuantity () {
      // Data field renamed to 'quantity'
      return this.quantity
    }
  },
  mixins: [
    MicrocartButton
  ]
}
