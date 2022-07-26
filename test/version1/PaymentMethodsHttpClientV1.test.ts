const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { PaymentMethodsMemoryPersistence } from 'service-paymentmethods-node';
import { PaymentMethodsController } from 'service-paymentmethods-node';
import { PaymentMethodsHttpServiceV1 } from 'service-paymentmethods-node';
import { PaymentMethodsHttpClientV1 } from '../../src/version1/PaymentMethodsHttpClientV1';
import { PaymentMethodsClientFixtureV1 } from './PaymentMethodsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PaymentMethodsHttpClientV1', () => {
    let service: PaymentMethodsHttpServiceV1;
    let client: PaymentMethodsHttpClientV1;
    let fixture: PaymentMethodsClientFixtureV1;

    suiteSetup(async () => {

        let logger = new ConsoleLogger();
        let persistence = new PaymentMethodsMemoryPersistence();
        let controller = new PaymentMethodsController();

        service = new PaymentMethodsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-paymentmethods', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-paymentmethods', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-paymentmethods', 'service', 'http', 'default', '1.0'), service
        );

        persistence.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new PaymentMethodsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new PaymentMethodsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
