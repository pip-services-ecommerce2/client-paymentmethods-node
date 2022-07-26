import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IPaymentMethodsClientV1 } from './IPaymentMethodsClientV1';
import { PaymentMethodV1 } from 'service-paymentmethods-node';

export class PaymentMethodsDirectClientV1 extends DirectClient<any> implements IPaymentMethodsClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor('service-paymentmethods', 'controller', '*', '*', '*'));

        if (config)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getPaymentMethods(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PaymentMethodV1>> {
        let timing = this.instrument(correlationId, 'paymentmethods.get_payment_methods');
        
        try {
            return await this._controller.getPaymentMethods(correlationId, filter, paging);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getPaymentMethodById(correlationId: string, method_id: string, customer_id: string): Promise<PaymentMethodV1> {
        let timing = this.instrument(correlationId, 'paymentmethods.get_payment_method_by_id');
        
        try {
            return await this._controller.getPaymentMethodById(correlationId, method_id, customer_id);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createPaymentMethod(correlationId: string, method: PaymentMethodV1): Promise<PaymentMethodV1> {
        let timing = this.instrument(correlationId, 'paymentmethods.create_payment_method');
        
        try {
            return await this._controller.createPaymentMethod(correlationId, method);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updatePaymentMethod(correlationId: string, method: PaymentMethodV1): Promise<PaymentMethodV1> {
        let timing = this.instrument(correlationId, 'paymentmethods.update_payment_method');
        
        try {
            return await this._controller.updatePaymentMethod(correlationId, method);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deletePaymentMethodById(correlationId: string, method_id: string, customer_id: string): Promise<PaymentMethodV1> {
        let timing = this.instrument(correlationId, 'paymentmethods.delete_payment_method_by_id');
        
        try {
            return await this._controller.deletePaymentMethodById(correlationId, method_id, customer_id);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}