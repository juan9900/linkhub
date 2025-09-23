export default function VerifyEmailMessage({ email }: { email: string }) {
  return (
    <div className="flex flex-col border   justify-center items-center rounded-md p-5 text-center shadow-sm ">
      <p className="text-lg">
        We've sent you a verification email to:{" "}
        <span className="text-orange-500 font-medium">{email}</span>
      </p>
      <p>Please validate your email to access your account</p>
    </div>
  );
}
