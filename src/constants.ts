import { parseInt } from "lodash";

export const API_BASE_URL = process.env.API_BASE_URL ?? "";

export const REVALIDATE = parseInt(process.env.REVALIDATE ?? `${60 * 60 * 12}`);
