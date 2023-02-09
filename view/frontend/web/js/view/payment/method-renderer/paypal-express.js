define([
    'ko',
    'Magento_Paypal/js/view/payment/method-renderer/paypal-express-abstract',
    'Marcopm_ForceShippingMethod/js/model/force-shipping-method',
    'Marcopm_ForceShippingMethod/js/view/payment/check-mandatory-shipping'
], function (ko, Component, ForceShippingMethod, checkMandatoryShipping) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Marcopm_ForceShippingMethod/payment/paypal-express'
        },

        paypalMandatoryInfoVisible: ko.computed(function () {
            return checkMandatoryShipping.isShippingMethodMandatory();
        }),

        ForceShippingMethodMessage: ForceShippingMethod.getCheckoutPaymentMessage()
    });
});
