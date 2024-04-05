import transition from "../Components/Transition";
function About() {
  return (
    <>
      <section className="h-screen flex items-center justify-center bg-black">
        <h1 className="text-6xl text-white">Welcome</h1>
      </section>
      <section className="h-screen flex items-center justify-center ">
        <div className="container">
          <h2>
            <div className="cards flex items-center gap-64 ">
              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 2</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 3</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </h2>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center bg-black text-white">
      <div className="container">
          <h2>
            <div className="cards flex items-center gap-64 ">
              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 2</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 3</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </h2>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center">
      <div className="container">
          <h2>
            <div className="cards flex items-center gap-64 ">
              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 2</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="text-card p-12 bg-blue-500">
                <h3 className="text-xl font-bold">Text 3</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </h2>
        </div>
      </section>
    </>
  );
}

export default transition(About);
