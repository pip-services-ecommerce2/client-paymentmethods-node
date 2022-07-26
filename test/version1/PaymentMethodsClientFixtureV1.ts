const assert = require('chai').assert;

import { IPaymentMethodsClientV1 } from '../../src/version1/IPaymentMethodsClientV1';
import { TestModel } from '../data/TestModel';
import { PaymentMethodV1 } from 'service-paymentmethods-node';
import { PagingParams } from 'pip-services3-commons-nodex';

var now = new Date();

let PAYMENT_METHOD1: PaymentMethodV1 = TestModel.createPaymentMethod1();
let PAYMENT_METHOD2: PaymentMethodV1 = TestModel.createPaymentMethod2();

export class PaymentMethodsClientFixtureV1 {
    private _client: IPaymentMethodsClientV1;

    constructor(client: IPaymentMethodsClientV1) {
        this._client = client;
    }

    public async testCrudOperations() {
        let paymentMethod1, paymentMethod2: PaymentMethodV1;

        // Create one payment method
        let paymentMethod = await this._client.createPaymentMethod(null, PAYMENT_METHOD1);

        assert.isObject(paymentMethod);
        TestModel.assertEqualPaymentMethod(paymentMethod, PAYMENT_METHOD1);

        paymentMethod1 = paymentMethod;

        // Create another credit_card
        paymentMethod = await this._client.createPaymentMethod(null, PAYMENT_METHOD2);

        assert.isObject(paymentMethod);
        TestModel.assertEqualPaymentMethod(paymentMethod, PAYMENT_METHOD2);

        paymentMethod2 = paymentMethod;

        // Get all payment methods
        let page = await this._client.getPaymentMethods(
            null,
            null,
            new PagingParams(0, 5, false)
        );

        assert.isObject(page);
        assert.isTrue(page.data.length >= 2);

        // Update the payment method
        paymentMethod1.name = 'Updated Card 1';

        paymentMethod = await this._client.updatePaymentMethod(null, paymentMethod1);

        assert.isObject(paymentMethod);
        assert.equal(paymentMethod.name, 'Updated Card 1');
        assert.equal(paymentMethod.id, PAYMENT_METHOD1.id);

        paymentMethod1 = paymentMethod;

        // Delete payment method
        await this._client.deletePaymentMethodById(null, paymentMethod1.id, paymentMethod1.customer_id);

        // Try to get deleted payment method
        paymentMethod = await this._client.getPaymentMethodById(null, paymentMethod1.id, paymentMethod1.customer_id);

        assert.isNull(paymentMethod || null);
    }
}
