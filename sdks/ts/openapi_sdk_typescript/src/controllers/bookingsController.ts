/**
 * Train Travel APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Booking, bookingSchema } from '../models/booking';
import {
  BookingsResponse,
  bookingsResponseSchema,
} from '../models/bookingsResponse';
import {
  BookingsResponse1,
  bookingsResponse1Schema,
} from '../models/bookingsResponse1';
import { string } from '../schema';
import { BaseController } from './baseController';
import { ProblemError } from '../errors/problemError';

export class BookingsController extends BaseController {
  /**
   * Returns a list of all trip bookings by the authenticated user.
   *
   * @return Response from the API call
   */
  async getBookings(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BookingsResponse>> {
    const req = this.createRequest('GET', '/bookings');
    req.throwOn(400, ProblemError, 'Bad Request');
    req.throwOn(401, ProblemError, 'Unauthorized');
    req.throwOn(403, ProblemError, 'Forbidden');
    req.throwOn(429, ProblemError, 'Too Many Requests');
    req.throwOn(500, ProblemError, 'Internal Server Error');
    req.authenticate([{ oAuth2: true }]);
    return req.callAsJson(bookingsResponseSchema, requestOptions);
  }

  /**
   * A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.
   *
   * @param body
   * @return Response from the API call
   */
  async createBooking(
    body: Booking,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BookingsResponse1>> {
    const req = this.createRequest('POST', '/bookings');
    const mapped = req.prepareArgs({ body: [body, bookingSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ProblemError, 'Bad Request');
    req.throwOn(401, ProblemError, 'Unauthorized');
    req.throwOn(404, ProblemError, 'Not Found');
    req.throwOn(409, ProblemError, 'Conflict');
    req.throwOn(429, ProblemError, 'Too Many Requests');
    req.throwOn(500, ProblemError, 'Internal Server Error');
    req.authenticate([{ oAuth2: true }]);
    return req.callAsJson(bookingsResponse1Schema, requestOptions);
  }

  /**
   * Returns the details of a specific booking.
   *
   * @param bookingId The ID of the booking to retrieve.
   * @return Response from the API call
   */
  async getBooking(
    bookingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BookingsResponse1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ bookingId: [bookingId, string()] });
    req.appendTemplatePath`/bookings/${mapped.bookingId}`;
    req.throwOn(400, ProblemError, 'Bad Request');
    req.throwOn(401, ProblemError, 'Unauthorized');
    req.throwOn(403, ProblemError, 'Forbidden');
    req.throwOn(404, ProblemError, 'Not Found');
    req.throwOn(429, ProblemError, 'Too Many Requests');
    req.throwOn(500, ProblemError, 'Internal Server Error');
    req.authenticate([{ oAuth2: true }]);
    return req.callAsJson(bookingsResponse1Schema, requestOptions);
  }

  /**
   * Deletes a booking, cancelling the hold on the trip.
   *
   * @param bookingId The ID of the booking to retrieve.
   * @return Response from the API call
   */
  async deleteBooking(
    bookingId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ bookingId: [bookingId, string()] });
    req.appendTemplatePath`/bookings/${mapped.bookingId}`;
    req.throwOn(400, ProblemError, 'Bad Request');
    req.throwOn(401, ProblemError, 'Unauthorized');
    req.throwOn(403, ProblemError, 'Forbidden');
    req.throwOn(404, ProblemError, 'Not Found');
    req.throwOn(429, ProblemError, 'Too Many Requests');
    req.throwOn(500, ProblemError, 'Internal Server Error');
    req.authenticate([{ oAuth2: true }]);
    return req.call(requestOptions);
  }
}
