import { IPaymentMethodsClientV1 } from './IPaymentMethodsClientV1';

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { PaymentMethodV1 } from 'service-paymentmethods-node';

export class PaymentMethodsNullClientV1 implements IPaymentMethodsClientV1 {
    public async getPaymentMethods(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PaymentMethodV1>> {
        return null;
    }
    public async getPaymentMethodById(correlationId: string, method_id: string, customer_id: string): Promise<PaymentMethodV1> {
        return null;
    }
    public async createPaymentMethod(correlationId: string, method: PaymentMethodV1): Promise<PaymentMethodV1> {
        return null;
    }
    public async updatePaymentMethod(correlationId: string, method: PaymentMethodV1): Promise<PaymentMethodV1> {
        return null;
    }
    public async deletePaymentMethodById(correlationId: string, method_id: string, customer_id: string): Promise<PaymentMethodV1> {
        return null;
    }
    
}