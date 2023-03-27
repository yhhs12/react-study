const Login = () => {
  return (
    <div>
      <h1>ㅇㅇㅇ</h1>
      <form action="/login" method="post">
        <input className="border border-gray-400" type="text" name="username" />
        <input
          className="border border-gray-400"
          type="password"
          name="password"
        />
      </form>
    </div>
  );
};

export default Login;
