"use server";

import { shipmentSchema } from "@/lib/validation/shipment";
import { createClient } from "@/lib/supabase/server";
import { generateTrackingNumber } from "@/lib/utils/tracking";

export async function createShipment(data) {
  const validated = shipmentSchema.safeParse(data);

  if (!validated.success) {
    return {
      error: "Invalid shipment data",
    };
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  const trackingNumber = generateTrackingNumber();

  const { data: shipment, error } = await supabase
    .from("shipments")
    .insert({
      user_id: user.id,
      tracking_number: trackingNumber,

      sender_address_id:
        validated.data.senderAddressId,

      recipient_address_id:
        validated.data.recipientAddressId,

      package_weight:
        validated.data.packageWeight,

      package_length:
        validated.data.packageLength,

      package_width:
        validated.data.packageWidth,

      package_height:
        validated.data.packageHeight,

      shipment_notes:
        validated.data.shipmentNotes,

      fragile: validated.data.fragile,

      insurance_enabled:
        validated.data.insuranceEnabled,
    })
    .select()
    .single();

  if (error) {
    return {
      error: error.message,
    };
  }

  await supabase
    .from("tracking_events")
    .insert({
      shipment_id: shipment.id,
      status: "PENDING",
      description: "Shipment created",
      created_by: user.id,
    });

  return {
    success: true,
    trackingNumber,
  };
}