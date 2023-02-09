define ([
    'ko',
], function () {
    'use strict';

    let enabled = 'ForceShippingMethod' in window.checkoutConfig,
        minOrderAmount = window.checkoutConfig.ForceShippingMethod.minOrderAmount,
        paymentMethodCode = window.checkoutConfig.ForceShippingMethod.paymentMethodCode,
        shippingMethodCode = window.checkoutConfig.ForceShippingMethod.shippingMethodCode,
        checkoutPaymentMessage = window.checkoutConfig.ForceShippingMethod.checkoutPaymentMessage;

    return {
        isEnabled: function() {
            return enabled;
        },

        getMinOrderAmount: function() {
            return Number(minOrderAmount);
        },

        getPaymentMethodCode: function() {
            return paymentMethodCode;
        },

        getShippingMethodCode: function() {
            return shippingMethodCode;
        },

        getCheckoutPaymentMessage: function() {
            return checkoutPaymentMessage;
        }
    }
});
