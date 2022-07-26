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
exports.PaymentMethodsMemoryClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_4 = require("pip-services3-commons-nodex");
class PaymentMethodsMemoryClientV1 {
    constructor(...paymentMethods) {
        this._maxPageSize = 100;
        this._paymentMethods = paymentMethods;
    }
    getPaymentMethods(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let filterCurl = this.composeFilter(filter);
            let paymentMethods = this._paymentMethods.filter(filterCurl);
            // Extract a page
            paging = paging != null ? paging : new pip_services3_commons_nodex_2.PagingParams();
            let skip = paging.getSkip(-1);
            let take = paging.getTake(this._maxPageSize);
            let total = null;
            if (paging.total)
                total = paymentMethods.length;
            if (skip > 0)
                paymentMethods = paymentMethods.slice(skip);
            paymentMethods = paymentMethods.slice(0, take);
            return new pip_services3_commons_nodex_3.DataPage(paymentMethods, total);
        });
    }
    getPaymentMethodById(correlationId, method_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let paymentMethods = this._paymentMethods.filter((x) => x.id == method_id && x.customer_id == customer_id);
            let method = paymentMethods.length > 0 ? paymentMethods[0] : null;
            return method;
        });
    }
    createPaymentMethod(correlationId, method) {
        return __awaiter(this, void 0, void 0, function* () {
            if (method == null) {
                return;
            }
            method = Object.assign({}, method);
            method.id = method.id || pip_services3_commons_nodex_4.IdGenerator.nextLong();
            this._paymentMethods.push(method);
            return method;
        });
    }
    updatePaymentMethod(correlationId, method) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = this._paymentMethods.map((x) => { return x.id; }).indexOf(method.id);
            if (index < 0) {
                return;
            }
            method = Object.assign({}, method);
            this._paymentMethods[index] = method;
            return method;
        });
    }
    deletePaymentMethodById(correlationId, method_id, customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var index = this._paymentMethods.map((x) => { return x.id; }).indexOf(method_id);
            var item = this._paymentMethods[index];
            if (index < 0) {
                return;
            }
            this._paymentMethods.splice(index, 1);
            return item;
        });
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_nodex_1.FilterParams();
        let id = filter.getAsNullableString('id');
        let type = filter.getAsNullableString('type');
        let customerId = filter.getAsNullableString('customer_id');
        let _default = filter.getAsNullableBoolean('default');
        let ids = filter.getAsObject('ids');
        let payout = filter.getAsNullableBoolean('payout');
        // Process ids filter
        if (typeof ids === 'string')
            ids = ids.split(',');
        if (!Array.isArray(ids))
            ids = null;
        return (item) => {
            if (id && item.id != id)
                return false;
            if (ids && ids.indexOf(item.id) < 0)
                return false;
            if (type && item.type != type)
                return false;
            if (_default && item.default != _default)
                return false;
            if (customerId && item.customer_id != customerId)
                return false;
            if (payout && item.payout != payout)
                return false;
            return true;
        };
    }
}
exports.PaymentMethodsMemoryClientV1 = PaymentMethodsMemoryClientV1;
//# sourceMappingURL=PaymentMethodsMemoryClientV1.js.map