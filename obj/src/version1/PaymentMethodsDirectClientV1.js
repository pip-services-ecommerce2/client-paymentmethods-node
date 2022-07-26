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
exports.PaymentMethodsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class PaymentMethodsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor('service-paymentmethods', 'controller', '*', '*', '*'));
        if (config)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getPaymentMethods(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'paymentmethods.get_payment_methods');
            try {
                return yield this._controller.getPaymentMethods(correlationId, filter, paging);
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
                return yield this._controller.getPaymentMethodById(correlationId, method_id, customer_id);
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
                return yield this._controller.createPaymentMethod(correlationId, method);
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
                return yield this._controller.updatePaymentMethod(correlationId, method);
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
                return yield this._controller.deletePaymentMethodById(correlationId, method_id, customer_id);
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
exports.PaymentMethodsDirectClientV1 = PaymentMethodsDirectClientV1;
//# sourceMappingURL=PaymentMethodsDirectClientV1.js.map