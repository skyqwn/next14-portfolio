export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 10;

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);
export const NICKNAME_REGEX = new RegExp(
  /^[^[\]{}()<>?.,\\\/!@#$%^&*+_=`~;:'"|]+$/
);

export const ERROR_MSG = {
  username_regex:
    "닉네임은 한글 또는 영어 또는 숫자만 가능합니다. 특수문자를 사용 할 수 없습니다.",
  check_unique_username: "이미 존재하는 닉네임입니다.",
  username_min_length: `유저네임은 최소한 ${USERNAME_MIN_LENGTH}글자를 입력해주세요`,
  username_max_length: `유저네임은 최소한 ${USERNAME_MAX_LENGTH}글자를 입력해주세요`,

  password_min_length: `비밀번호를 최소한 ${PASSWORD_MIN_LENGTH}글자를 입력해주세요`,
  password_regex:
    "적어도 하나의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수문자를 입력해주세요",
  password_required: "비밀번호를 입력해주세요",
  check_password: "두개의 비밀번호가 일치하지 않습니다",
  wrong_passowrd: "이메일 또는 비밀번호를 확인해주세요.",

  email_required: "이메일을 입력해주세요",
  check_unique_email: "이미 존재하는 이메일입니다.",
  check_email_exists: "이메일 또는 비밀번호를 확인해주세요.",
};
