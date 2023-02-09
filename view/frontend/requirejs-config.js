var config = {
    map: {
        '*': {
            'Magento_Paypal/js/view/payment/method-renderer/paypal-express': 'Marcopm_ForceShippingMethod/js/view/payment/method-renderer/paypal-express'
        }
    },
    config: {
        mixins: {
            'Marcopm_CheckoutEnhancer/js/view/shipping': {
                'Marcopm_ForceShippingMethod/js/view/shipping-mixin': true
            }
        }
    }
};
