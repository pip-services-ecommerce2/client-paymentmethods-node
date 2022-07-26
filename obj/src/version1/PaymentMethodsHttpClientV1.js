"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodsHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class PaymentMethodsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/payment_methods');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getPaymentMethods(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'paymentmethods.get_payment_methods');
            try {
                return yield this.callCommand('get_payment_methods', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getPaymentMethodById(correlationId, method_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'paymentmethods.get_payment_method_by_id');
            try {
                return yield this.callCommand('get_payment_method_by_id', correlationId, {
                    method_id: method_id,
                    customer_id: customer_id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createPaymentMethod(correlationId, method) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'paymentmethods.create_payment_method');
            try {
                return yield this.callCommand('create_payment_method', correlationId, {
                    method: method
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updatePaymentMethod(correlationId, method) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'paymentmethods.update_payment_method');
            try {
                return yield this.callCommand('update_payment_method', correlationId, {
                    method: method
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deletePaymentMethodById(correlationId, method_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'paymentmethods.delete_payment_method_by_id');
            try {
                return yield this.callCommand('delete_payment_method_by_id', correlationId, {
                    method_id: method_id,
                    customer_id: customer_id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.PaymentMethodsHttpClientV1 = PaymentMethodsHttpClientV1;
//# sourceMappingURL=PaymentMethodsHttpClientV1.js.map