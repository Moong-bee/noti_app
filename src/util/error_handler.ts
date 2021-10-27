interface Props {
  readonly code?: string
}

const error_handler = ({ code }: Props) => {
  let err_msg = '알 수 없는 오류입니다.'
  switch (code) {
    case 'auth/user-not-found':
      err_msg = '가입된 사용자가 아닙니다.'
      break
    case 'auth/wrong-password':
      err_msg = '잘못된 비밀번호 입니다.'
      break
  }

  return err_msg
}

export default error_handler
