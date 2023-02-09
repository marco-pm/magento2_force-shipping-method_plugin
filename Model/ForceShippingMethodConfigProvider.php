<?php

namespace Marcopm\ForceShippingMethod\Model;

use Magento\Checkout\Model\ConfigProviderInterface;
use Magento\Framework\App\Config\ScopeConfigInterface;
use \Magento\Store\Model\ScopeInterface;

class ForceShippingMethodConfigProvider implements ConfigProviderInterface
{
    const CONFIG_SECTION = 'force_shipping_method';

    private $scopeConfig;

    public function __construct(ScopeConfigInterface $scopeConfig) {
        $this->scopeConfig = $scopeConfig;
    }

    public function getConfig()
    {
        $config = [];

        if (!$this->scopeConfig->getValue(self::CONFIG_SECTION . '/' . 'general/active', ScopeInterface::SCOPE_STORE)) {
            return $config;
        } else {
            $config = [
                'ForceShippingMethod' => [
                    'minOrderAmount'         => $this->scopeConfig->getValue(self::CONFIG_SECTION . '/' . 'general/min_order_amount', ScopeInterface::SCOPE_STORE),
                    'paymentMethodCode'      => $this->scopeConfig->getValue(self::CONFIG_SECTION . '/' . 'general/payment_method_code', ScopeInterface::SCOPE_STORE),
                    'shippingMethodCode'     => $this->scopeConfig->getValue(self::CONFIG_SECTION . '/' . 'general/shipping_method_code', ScopeInterface::SCOPE_STORE),
                    'checkoutPaymentMessage' => $this->scopeConfig->getValue(self::CONFIG_SECTION . '/' . 'general/checkout_payment_message', ScopeInterface::SCOPE_STORE)
                ]
            ];
        }

        return $config;
    }
}
