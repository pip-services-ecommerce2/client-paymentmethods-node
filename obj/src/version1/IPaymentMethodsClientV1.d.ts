import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { PaymentMethodV1 } from 'service-paymentmethods-node';
export interface IPaymentMethodsClientV1 {
    getPaymentMethods(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PaymentMethodV1>>;
    getPaymentMethodById(correlationId: string, method_id: string, customer_id: string): Promise<PaymentMethodV1>;
    createPaymentMethod(correlationId: string, method: PaymentMethodV1): Promise<PaymentMethodV1>;
    updatePaymentMethod(correlationId: string, method: PaymentMethodV1): Promise<PaymentMethodV1>;
    deletePaymentMethodById(correlationId: string, method_id: string, customer_id: string): Promise<PaymentMethodV1>;
}
