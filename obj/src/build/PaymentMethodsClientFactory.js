"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const PaymentMethodsNullClientV1_1 = require("../version1/PaymentMethodsNullClientV1");
const PaymentMethodsDirectClientV1_1 = require("../version1/PaymentMethodsDirectClientV1");
const PaymentMethodsHttpClientV1_1 = require("../version1/PaymentMethodsHttpClientV1");
const PaymentMethodsMemoryClientV1_1 = require("../version1/PaymentMethodsMemoryClientV1");
class PaymentMethodsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(PaymentMethodsClientFactory.NullClientV1Descriptor, PaymentMethodsNullClientV1_1.PaymentMethodsNullClientV1);
        this.registerAsType(PaymentMethodsClientFactory.MemoryClientV1Descriptor, PaymentMethodsMemoryClientV1_1.PaymentMethodsMemoryClientV1);
        this.registerAsType(PaymentMethodsClientFactory.DirectClientV1Descriptor, PaymentMethodsDirectClientV1_1.PaymentMethodsDirectClientV1);
        this.registerAsType(PaymentMethodsClientFactory.HttpClientV1Descriptor, PaymentMethodsHttpClientV1_1.PaymentMethodsHttpClientV1);
    }
}
exports.PaymentMethodsClientFactory = PaymentMethodsClientFactory;
PaymentMethodsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-paymentmethods', 'factory', 'default', 'default', '1.0');
PaymentMethodsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-paymentmethods', 'client', 'null', 'default', '1.0');
PaymentMethodsClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-paymentmethods', 'client', 'memory', 'default', '1.0');
PaymentMethodsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-paymentmethods', 'client', 'direct', 'default', '1.0');
PaymentMethodsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-paymentmethods', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=PaymentMethodsClientFactory.js.map