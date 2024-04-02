// create-user.dto.ts
export class CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  // Add other properties as needed
}

export class UpdateUserDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  // Add other properties as needed
}