const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <p className="text-red-500 text-sm text-center">{message}</p>
  );
};

export default ErrorMessage;
