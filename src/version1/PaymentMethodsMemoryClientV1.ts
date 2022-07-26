import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { IdGenerator } from 'pip-services3-commons-nodex';

import { IPaymentMethodsClientV1 } from "./IPaymentMethodsClientV1";
import { PaymentMethodV1 } from 'service-paymentmethods-node';

export class PaymentMethodsMemoryClientV1 implements IPaymentMethodsClientV1 {
    private _maxPageSize: number = 100;
    private _paymentMethods: PaymentMethodV1[];

    public constructor(...paymentMethods: PaymentMethodV1[]) {
        this._paymentMethods = paymentMethods;
    }

    public async getPaymentMethods(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PaymentMethodV1>> {
        let filterCurl = this.composeFilter(filter);
        let paymentMethods = this._paymentMethods.filter(filterCurl);

        // Extract a page
        paging = paging != null ? paging : new PagingParams();
        let skip = paging.getSkip(-1);
        let take = paging.getTake(this._maxPageSize);

        let total = null;
        if (paging.total)
            total = paymentMethods.length;

        if (skip > 0)
            paymentMethods = paymentMethods.slice(skip);
        paymentMethods = paymentMethods.slice(0, take);

        return new DataPage<PaymentMethodV1>(paymentMethods, total);
    }

    public async getPaymentMethodById(correlationId: string, method_id: string, customer_id: string): Promise<PaymentMethodV1> {
        let paymentMethods = this._paymentMethods.filter((x) => x.id == method_id && x.customer_id == customer_id);
        let method = paymentMethods.length > 0 ? paymentMethods[0] : null;

        return method;
    }

    public async createPaymentMethod(correlationId: string, method: PaymentMethodV1): Promise<PaymentMethodV1> {
        if (method == null) {
            return;
        }

        method = Object.assign({}, method);
        method.id = method.id || IdGenerator.nextLong();

        this._paymentMethods.push(method);

        return method;
    }

    public async updatePaymentMethod(correlationId: string, method: PaymentMethodV1): Promise<PaymentMethodV1> {
        let index = this._paymentMethods.map((x) => { return x.id; }).indexOf(method.id);

        if (index < 0) {
            return;
        }

        method = Object.assign({}, method);
        this._paymentMethods[index] = method;

        return method;
    }

    public async deletePaymentMethodById(correlationId: string, method_id: string, customer_id: string): Promise<PaymentMethodV1> {
        var index = this._paymentMethods.map((x) => { return x.id; }).indexOf(method_id);
        var item = this._paymentMethods[index];

        if (index < 0) {
            return;
        }

        this._paymentMethods.splice(index, 1);

        return item;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

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