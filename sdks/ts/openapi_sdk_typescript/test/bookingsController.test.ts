/**
 * Train Travel APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { BookingsController, BookingsResponse, BookingsResponse1 } from '../src';
import { testClient } from './testClient';
import {
  expectHeadersToMatch,
  expectMatchingWithOptions,
  makeApiCall,
} from './testHelper';

describe('BookingsController', () => {
  let controller : BookingsController;

  beforeAll(() => {
    controller = new BookingsController(testClient);
  });

  it('should Test get-bookings', async () => {
    const response = await makeApiCall(
      () => controller.getBookings()
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = {
      RateLimit: ['', false],
      'Content-Type': ['application/json', true],
    };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: BookingsResponse = {
      data: [
        {
          id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
          tripId: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
          passengerName: 'John Doe',
          hasBicycle: true,
          hasDog: true,
        },
        {
          id: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
          tripId: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
          passengerName: 'Jane Smith',
          hasBicycle: false,
          hasDog: false,
        }
      ],
      links: {
        self: 'https://api.example.com/bookings',
        next: 'https://api.example.com/bookings?page=2',
      },
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });

  it('should Test get-booking', async () => {
    const bookingId = '1725ff48-ab45-4bb5-9d02-88745177dedb';

    const response = await makeApiCall(
      () => controller.getBooking(bookingId)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = {
      RateLimit: ['', false],
      'Content-Type': ['application/json', true],
    };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: BookingsResponse1 = {
      id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
      tripId: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
      passengerName: 'John Doe',
      hasBicycle: true,
      hasDog: true,
      links: {
        self: 'https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb',
      },
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });

  it('should Test delete-booking', async () => {
    const bookingId = '1725ff48-ab45-4bb5-9d02-88745177dedb';

    const response = await makeApiCall(
      () => controller.deleteBooking(bookingId)
    );

    expect(response.statusCode).toBe(204);
  });
});
