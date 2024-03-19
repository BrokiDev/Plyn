import Cloud from "../SvgComponents/Cloud";
import ReportSvg from "../SvgComponents/Report";
import Support from "../SvgComponents/Support";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white/95">
      <div className="mb-16">
        <img
          className=" relative rounded-lg -mt-10 h-full w-full -mb-7 "
          src="/bg-dashboard.jpg"
          alt="Background Image Dashboard"
        />
      </div>

      <section id="howWorks" className="text-black flex flex-col w-full">
        <h1 className="text-6xl text-center  p-10">How it Works</h1>
        <p className=" text-center text-xl mb-6">
          Welcome to Plyn, a dynamic task and ticket management platform that
          <br />
          empowers teams to collaborate, plan, and execute projects with ease.
          <br />
          Plyn is designed to streamline your workflow, boost productivity, and
          bring clarity to complex processes.
        </p>

        <div className=" flex flex-wrap justify-center gap-8 p-10 ">
          <div className="flex-1 mb-3">
            <ul>
              <li className="font-bold text-2xl">Set Up Your Workspace</li>
              <p className="font-sans pt-2 pb-1">
                Start by customizing your workspace to fit the unique needs of
                your team. Create boards for different projects, add lists to
                categorize tasks, and generate individual tickets that capture
                every detail—from deadlines and attachments to custom labels.
              </p>

              <li className="font-bold text-2xl mt-2">
                Collaboration Made Simple
              </li>
              <p className="font-sans pt-2 pb-1 pr-1">
                Invite team members to join your boards with just a few clicks.
                Assign tasks, set priorities, and track progress through a
                shared and transparent platform. Whether you're in the office or
                on the go, Plyn keeps everyone synced and informed with
                real-time updates and notifications.
              </p>

              <li className="font-bold text-2xl mt-2">Track and Adapt</li>
              <p className="font-sans pt-2 pb-1 pr-1">
                Visualize your project's trajectory with Plyn's intuitive
                dashboard. Use filters to sort tasks, monitor due dates, and
                adjust schedules as priorities shift. With our agile tools,
                adapting to change is not just possible—it's effortless.
              </p>

              <li className="font-bold text-2xl mt-2">Integrate and Extend</li>
              <p className="font-sans pt-2 pb-1 pr-1 ">
                Plyn seamlessly integrates with your favorite tools, ensuring a
                smooth workflow without the need to switch between apps. Plus,
                with our extensive API, you can tailor Plyn to become the
                heartbeat of your project management ecosystem.
              </p>

              <li className="font-bold text-2xl mt-2">Secure and Supportive</li>
              <p className="font-sans pt-2 pb-1 pr-3">
                We're committed to security and your success. With Plyn, your
                data is protected with top-tier encryption, and our support team
                is always ready to assist you.
              </p>
            </ul>
          </div>
          <div className="flex-1">
            <img
              className="object-cover rounded-md w-full h-auto"
              src="./bg-dashboard.jpg"
              alt=""
            />
          </div>
        </div>
        <h3 className="text-2xl text-center p-6 mt-3 ">
          Join Plyn today and transform the way you manage tasks and tickets.
          It's more than a platform—it's <br /> the partner you need to achieve
          project excellence.
        </h3>
      </section>

      <section className="rounded-lg shadow-lg py-12 px-16 w-full max-w-6xl mx-auto text-center bg-white border border-gray-300">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-6xl mb-16">Control in one place</h1>
            <i className="fa-solid fa-cloud"></i>
            <p className="mb-12 text-center">
              Unlock a seamless orchestration of tasks and tickets with Plyn,
              the quintessential platform where efficiency meets innovation. Our
              suite offers an unrivaled blend of tools that empower you to steer
              your project's journey towards excellence with ease and precision.
              At Plyn, we understand the complexities that come with project
              management. That's why we've distilled the essence of control into
              a single, intuitive interface. From the dynamic 'Structured
              Reports' that provide granular insights into your operations to
              the robust 'Cloud System' ensuring your data is accessible yet
              secure — we've got you covered. Plus, with '24/7 Support', expert
              assistance is just a click away, anytime, anywhere. Embrace the
              art of effortless management. Explore Plyn's features, enhance
              your productivity, and propel your projects to new heights.
            </p>

            <span className="mt-2 text-lg mb-4">
              Begin your journey to project excellence
            </span>
            <button className="border py-5 rounded-full text-white w-3/12 bg-slate-900 mb-3">
              Start you free trial
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 w-11/12">
            <div className="flex items-center justify-around gap-4 w-full">
              <div className="bg-[#0C1727] rounded-lg shadow-lg p-6 text-white flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold mb-1">Structured Reports</h3>
                <ReportSvg/>
                <p className="mt-4 text-gray-400">
                  Dive deep into your project's analytics with Structured
                  Reports. Our comprehensive reporting tools give you the
                  insights needed to make informed decisions. Track progress,
                  pinpoint areas for improvement, and celebrate milestones with
                  detailed, data-driven reports that are both easy to understand
                  and act upon.
                </p>
              </div>
              <div className="bg-[#0C1727] rounded-lg shadow-lg flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-2xl font-semibold">Cloud System</h3>
                <Cloud />
                <p className="mt-4 text-gray-400">
                  Access your work anytime, anywhere with our Cloud System.
                  Designed for flexibility and security, our cloud
                  infrastructure ensures your data is safe, backed up, and
                  within reach no matter where you are. Experience seamless
                  collaboration and continuity across devices, empowering your
                  team to be productive on-the-go.
                </p>
              </div>
              <div className="bg-[#0C1727] rounded-lg shadow-lg p-6 text-white flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold">24/7 Support</h3>
                <Support/>
                <p className="mt-4 text-gray-400">
                  Your peace of mind is paramount, which is why we offer 24/7
                  Support. Day or night, our dedicated team is here to help you
                  troubleshoot, guide you through features, and provide expert
                  advice to keep your operations running smoothly. With our
                  round-the-clock support, you’re never alone in your quest for
                  project excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
