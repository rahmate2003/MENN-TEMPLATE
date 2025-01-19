const GoogleSignInButton = () => {
  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full p-2 bg-red-500 text-white rounded"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;