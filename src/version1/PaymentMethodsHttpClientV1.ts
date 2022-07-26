import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { IPaymentMethodsClientV1 } from './IPaymentMethodsClientV1';
import { PaymentMethodV1 } from 'service-paymentmethods-node';

export class PaymentMethodsHttpClientV1 extends CommandableHttpClient implements IPaymentMethodsClientV1 {

    constructor(config?: any) {
        super('v1/payment_methods');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getPaymentMethods(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PaymentMethodV1>> {
        let timing = this.instrument(correlationId, 'paymentmethods.get_payment_methods');

        try {
            return await this.callCommand(
                'get_payment_methods',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
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
            return await this.callCommand(
                'get_payment_method_by_id',
                correlationId,
                {
                    method_id: method_id,
                    customer_id: customer_id
                }
            );
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
            return await this.callCommand(
                'create_payment_method',
                correlationId,
                {
                    method: method
                }
            );
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
            return await this.callCommand(
                'update_payment_method',
                correlationId,
                {
                    method: method
                }
            );
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
            return await this.callCommand(
                'delete_payment_method_by_id',
                correlationId,
                {
                    method_id: method_id,
                    customer_id: customer_id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
