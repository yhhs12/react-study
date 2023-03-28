import MainButton from "@/styles/ui-components/styled-button";

const Login = () => {
  return (
    <section className="w-full min-h-screen bg-red-50">
      <div className="w-full flex flex-col gap-32 justify-center items-center">
        <h1>화면 연습용</h1>
        <div className="w-full h-28 flex flex-col items-center gap-2 bg-blue-100">
          <form action="/login" method="post">
            <input
              className="border border-gray-400"
              type="text"
              name="username"
            />
            <input
              className="border border-gray-400"
              type="password"
              name="password"
            />
          </form>
          <MainButton className="w-[50%]">로그인</MainButton>
        </div>
        <div className="w-full h-28 flex-col gap-2 bg-green-200">
          <form action="/login" method="post">
            <input
              className="border border-gray-400"
              type="text"
              name="username"
            />
            <input
              className="border border-gray-400"
              type="password"
              name="password"
            />
          </form>
        </div>
        <h1></h1>
      </div>
    </section>
  );
};

export default Login;
