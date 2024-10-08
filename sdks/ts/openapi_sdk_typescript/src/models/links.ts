/**
 * Train Travel APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** A set of hypermedia links which serve as controls for the client. */
export interface Links {
  self?: string;
  next?: string;
  prev?: string;
}

export const linksSchema: Schema<Links> = object({
  self: ['self', optional(string())],
  next: ['next', optional(string())],
  prev: ['prev', optional(string())],
});
