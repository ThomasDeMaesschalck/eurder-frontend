import {Email} from "./Email";
import {Address} from "./Address";
import {PhoneNumber} from "./Phonenumber";

export interface Customer {
  id: string;
  firstname: string;
  lastname: string;
  email: Email;
  address: Address;
  phoneNumber: PhoneNumber
}
