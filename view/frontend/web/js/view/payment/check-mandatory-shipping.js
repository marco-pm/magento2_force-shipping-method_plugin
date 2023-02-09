define ([
    'ko',
    'Marcopm_ForceShippingMethod/js/model/force-shipping-method',
    'Magento_Checkout/js/model/quote'
], function (ko, ForceShippingMethod, quote) {
    'use strict';

    let isShippingMethodMandatory = ko.observable(false);

    quote.paymentMethod.subscribe(function(paymentMethod) {
        if (ForceShippingMethod.isEnabled()) {
            if (paymentMethod.method == ForceShippingMethod.getPaymentMethodCode() && isOrderTotalAboveThreshold()) {
                isShippingMethodMandatory(true);
            } else {
                isShippingMethodMandatory(false);
            }
        }
    });

    function isOrderTotalAboveThreshold() {
        return getOrderTotal() >= ForceShippingMethod.getMinOrderAmount();
    };

    function getOrderTotal() {
        const totals = quote.getTotals()();
        return totals ? totals['grand_total'] : quote['grand_total'];
    };

    return {
        isShippingMethodMandatory: isShippingMethodMandatory
    }
});
