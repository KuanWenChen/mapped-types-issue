import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { Expose, plainToInstance } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from "class-validator";

export class AccountRegisterRequestDto {
  /**
   * account name
   * @example 'testuser'
   */
  @Expose()
  @Matches(new RegExp("^[^@]+$"), {
    message: "should not be an email address",
  })
  username!: string;

  /**
   * password of the account
   * @example 'asdasda2345345243'
   */
  @Expose()
  @IsNotEmpty()
  password!: string;

  /**
   * account email
   * @example 'test@test.com'
   */
  @Expose()
  @IsEmail()
  email!: string;

  @Expose()
  @IsOptional()
  @IsString()
  gender?: string;

  @Expose()
  @IsString()
  first_name!: string;

  @Expose()
  @IsString()
  last_name!: string;

  @Expose()
  @IsOptional()
  @IsString()
  organization?: string;

  @Expose()
  @IsOptional()
  @IsString()
  state?: string;

  @Expose()
  @IsOptional()
  @IsString()
  country?: string;

  @Expose()
  @IsOptional()
  @IsString()
  locale!: string;

  @Expose()
  @IsOptional()
  @IsString()
  timezone!: string;

  @IsOptional()
  @IsString()
  @Expose()
  @ApiProperty({
    description: "yyyy-MM-DD",
  })
  birthday?: string;

  @Expose()
  @IsOptional()
  @IsString()
  address?: string;

  @Expose()
  @IsOptional()
  @IsString()
  address_details?: string;

  @Expose()
  @IsOptional()
  @IsString()
  phone?: string;

  @Expose()
  @IsOptional()
  @IsString()
  town?: string;

  @Expose()
  @IsOptional()
  @IsString()
  postcode?: string;

  /**
   * defines the URL to that the user is redirected to after he/she confirms his/her e-mail address.
   */
  @Expose()
  @IsOptional()
  @IsString()
  redirectTo?: string;

  @IsArray()
  acceptedPolicyTranslationIDs!: number[];
}

export class AccountRegisterResponseDto {
  @Expose()
  @IsString()
  nextAction!: "email_verification" | "login";
}

export class AccountCreateRequestDto extends PartialType(
  OmitType(AccountRegisterRequestDto, ["redirectTo"])
) {
  /**
   * account name
   * @example 'testuser'
   */
  @Expose()
  @IsNotEmpty()
  @IsString()
  @Matches(new RegExp("^[^@]+$"), {
    message: "should not be an email address",
  })
  override username!: string;

  /**
   * password of the account
   * @example 'asdasda2345345243'
   */
  @Expose()
  @IsNotEmpty()
  override password!: string;

  /**
   * account email
   * @example 'test@test.com'
   */
  @Expose()
  @IsEmail()
  override email!: string;

  /**
   * general account role
   * @example 'test@test.com'
   */
  @Expose()
  @IsNotEmpty()
  @IsString()
  role!: string;

  @Expose()
  @IsOptional()
  @IsString()
  override organization?: string;

  @Expose()
  @IsOptional()
  @IsString()
  override state?: string;

  @Expose()
  @IsOptional()
  @IsString()
  override country?: string;

  @Expose()
  @IsOptional()
  @IsString()
  override locale?: string;

  @Expose()
  @IsOptional()
  @IsString()
  override timezone?: string;

  @Expose()
  @IsOptional()
  @IsString()
  comment?: string;

  @Expose()
  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

console.log(plainToInstance(AccountRegisterRequestDto, {}));
console.log(plainToInstance(AccountRegisterResponseDto, {}));
console.log(plainToInstance(AccountCreateRequestDto, {}));
