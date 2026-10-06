import { describe, expect, it } from "vitest";
import { contactSchema, reservationSchema } from "./form-validation";

describe("formulier-validatie", () => {
  it("accepteert een geldige ritaanvraag", () => {
    expect(reservationSchema.safeParse({ pickup:"Station Roermond", destination:"Herten", date:"2027-01-10", time:"10:30", passengers:"2", name:"Test Persoon", phone:"+31 6 12345678", notes:"", privacy:"accepted", website:"" }).success).toBe(true);
  });
  it("weigert een honeypot-inzending", () => {
    expect(contactSchema.safeParse({ name:"Test", phone:"0612345678", email:"", message:"Een normale vraag", privacy:"accepted", website:"spam" }).success).toBe(false);
  });
});
