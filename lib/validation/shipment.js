import { z } from "zod";

export const shipmentSchema = z.object({
  senderAddressId: z.uuid(),

  recipientAddressId: z.uuid(),

  packageWeight: z
    .number()
    .positive()
    .max(1000),

  packageLength: z.number().positive(),

  packageWidth: z.number().positive(),

  packageHeight: z.number().positive(),

  shipmentNotes: z.string().max(500).optional(),

  fragile: z.boolean(),

  insuranceEnabled: z.boolean(),
});