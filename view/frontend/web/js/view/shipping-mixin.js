define([
    'ko',
    'underscore',
    'Marcopm_ForceShippingMethod/js/model/force-shipping-method',
    'Marcopm_ForceShippingMethod/js/view/payment/check-mandatory-shipping'
], function (
    ko,
    _,
    ForceShippingMethod,
    checkMandatoryShipping
) {
    'use strict';

    return function(Component) {
        return Component.extend({
            defaults: {
                shippingMethodItemTemplate: 'Marcopm_ForceShippingMethod/shipping-address/shipping-method-item'
            },
            isShippingMethodMandatory: ko.computed(function() {
                return checkMandatoryShipping.isShippingMethodMandatory();
            }),
            mandatoryShippingMethodCode: ForceShippingMethod.getShippingMethodCode(),

            initialize: function () {
                var self = this;

                this._super();

                checkMandatoryShipping.isShippingMethodMandatory.subscribe(function(isMandatory) {
                    if (isMandatory == true && self.rates().length > 1) {
                        self.selectShippingMethod(
                            _.find(self.rates(), function (rate) {
                                return rate['carrier_code'] + '_' + rate['method_code'] === ForceShippingMethod.getShippingMethodCode();
                            })
                        );
                    }
                });
                
                return this;
            }
        });
    };
});
