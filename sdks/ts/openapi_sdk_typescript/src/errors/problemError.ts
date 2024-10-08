/**
 * Train Travel APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of Problem
 */
interface Problem {
  /** A URI reference that identifies the problem type */
  type?: string;
  /** A short, human-readable summary of the problem type */
  title?: string;
  /** A human-readable explanation specific to this occurrence of the problem */
  detail?: string;
  /** A URI reference that identifies the specific occurrence of the problem */
  instance?: string;
  /** The HTTP status code */
  status?: number;
}

export class ProblemError extends ApiError<Problem> {}
