import { Address } from "src/app/shared/model/address.model";

export interface Customer {
    accountType: string; //admin,customer,registered,vendors
    phoneNumber: string;
    name: string;
    id: string;
  
    emailId?: string;
    accountBalance?: number;
    firmName?: string;
    website?: string;
    GSTIN?: string;
    contactPersonName?: string;
    contactPersonPhoneNumber?: string;
    contactPersonEmailId?: string;
    billingAddress?: Address;
    shippingAddress?: Address;
    notes?: string;
    drugLicense20BNumber?: string;
    drugLicense21BNumber?: string;
    drugLicense20BImageUrl?: string;
    drugLicense21BImageUrl?: string;
    isDisabled?: boolean;
    creationDate?: Date;
    modificationDate?: Date;
}
