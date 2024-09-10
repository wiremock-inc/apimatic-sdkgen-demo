/**
 * Train Travel APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  BookingPayment,
  BookingsPaymentResponse,
  CurrencyEnum,
  ObjectEnum,
  PaymentsController,
  StatusEnum,
} from '../src';
import { testClient } from './testClient';
import {
  expectHeadersToMatch,
  expectMatchingWithOptions,
  makeApiCall,
} from './testHelper';

describe('PaymentsController', () => {
  let controller : PaymentsController;

  beforeAll(() => {
    controller = new PaymentsController(testClient);
  });

  it('should Test create-booking-payment', async () => {
    const bookingId = '1725ff48-ab45-4bb5-9d02-88745177dedb';

    const body: BookingPayment = {
      amount: 49.99,
      currency: CurrencyEnum.Gbp,
      source: {
        name: 'J. Doe',
        number: '4242424242424242',
        cvc: 123,
        expMonth: BigInt(12),
        expYear: BigInt(2025),
        addressCountry: 'gb',
        object: 'card',
        addressLine1: '123 Fake Street',
        addressLine2: '4th Floor',
        addressCity: 'London',
        addressPostCode: 'N12 9XX',
      },
    };

    const response = await makeApiCall(
      () => controller.createBookingPayment(bookingId, body)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = {
      RateLimit: ['', false],
      'Content-Type': ['application/json', true],
    };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: BookingsPaymentResponse = {
      id: '2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a',
      amount: 49.99,
      currency: CurrencyEnum.Gbp,
      source: {
        name: 'J. Doe',
        number: '************4242',
        cvc: 123,
        expMonth: BigInt(12),
        expYear: BigInt(2025),
        addressCountry: 'gb',
        object: 'card',
        addressPostCode: 'N12 9XX',
      },
      status: StatusEnum.Succeeded,
      links: {
        booking: 'https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb/payment',
      },
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });
});
