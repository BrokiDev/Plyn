import Cloud from "../SvgComponents/Cloud";
import ReportSvg from "../SvgComponents/Report";
import Support from "../SvgComponents/Support";
import CardHero from "../common/CardHero/CardHero";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col gap-6 items-center justify-center pt-20 pb-20 bg-white px-4 sm:px-8">
        <div className="flex items-center justify-center">
          <img
            className="h-full max-h-60 sm:max-h-80 md:max-h-96 -mt-32 z-10 rounded-lg"
            src="./bg-dashboard.jpg"
            alt="Banner"
          />
        </div>
        <div
          id="howWorks"
          className="w-full sm:w-8/12 md:w-6/12 text-center pb-16 mt-12 sm:mt-18 md:mt-24"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug sm:leading-relaxed md:leading-[52.8px] mb-8 sm:mb-10">
            How it Works
          </h1>
          <p className="text-xl sm:text-2xl md:text-2xl text-center">
            Welcome to Plyn, a dynamic task and ticket management platform that
            empowers teams to collaborate, plan, and execute projects with ease.
            Plyn is designed to streamline your workflow, boost productivity,
            and bring clarity to complex processes.
          </p>
        </div>
      </section>

      {/* <section className="bg-[#0C1727] flex-col  px-4  flex items-center justify-center">
        <div className="flex flex-row-reverse p-10 gap-6 items-center">
          <div className="w-full h-full mt-10 ">
            <img
              className="w-full h-96 rounded-md"
              src="./bg-dashboard.jpg"
              alt=""
            />
          </div>

          <div className=" flex flex-col w-full h-full p-6 text-white mt-10">
            <div className="flex flex-col ">
              <h2 className="text-2xl font-extrabold mb-2">
                Set Up Your Workspace
              </h2>
              <p className="text-lg mb-6 text-gray-400">
                Start by customizing your workspace to fit the unique needs of
                your team. Create boards for different projects, add lists to
                categorize tasks, and generate individual tickets that capture
                every detail—from deadlines and attachments to custom labels.
              </p>

              <h2 className="text-2xl font-extrabold mb-2">
                Collaboration Made Simple
              </h2>
              <p className="flex gap-1 items-center text-lg text-gray-400">
                Invite team members to join your boards with just a few clicks.
                Assign tasks, set priorities, and track progress through a
                shared and transparent platform. Whether you're in the office or
                on the go, Plyn keeps everyone synced and informed with
                real-time updates and notifications.
              </p>
              <h2 className="text-2xl font-extrabold mb-2">Track and Adapt</h2>
              <p className="flex gap-1 items-center text-lg text-gray-400">
                Visualize your project's trajectory with Plyn's intuitive
                dashboard. Use filters to sort tasks, monitor due dates, and
                adjust schedules as priorities shift. With our agile tools,
                adapting to change is not just possible—it's effortless.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-[#0C1727] flex flex-col px-4 items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse p-4 md:p-10 gap-6 items-center">
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <img
              className="w-full h-auto md:h-96 rounded-md"
              src="./bg-dashboard.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col w-full p-4 md:p-6 text-white mt-6 md:mt-10">
            <div className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-extrabold mb-2">
                Set Up Your Workspace
              </h2>
              <p className="text-base md:text-lg mb-6 text-gray-400">
                Start by customizing your workspace to fit the unique needs of
                your team. Create boards for different projects, add lists to
                categorize tasks, and generate individual tickets that capture
                every detail—from deadlines and attachments to custom labels.
              </p>

              <h2 className="text-xl md:text-2xl font-extrabold mb-2">
                Collaboration Made Simple
              </h2>
              <p className="text-base md:text-lg mb-6 text-gray-400">
                Invite team members to join your boards with just a few clicks.
                Assign tasks, set priorities, and track progress through a
                shared and transparent platform. Whether you're in the office or
                on the go, Plyn keeps everyone synced and informed with
                real-time updates and notifications.
              </p>
              <h2 className="text-xl md:text-2xl font-extrabold mb-2">
                Track and Adapt
              </h2>
              <p className="text-base md:text-lg mb-6 text-gray-400">
                Visualize your project's trajectory with Plyn's intuitive
                dashboard. Use filters to sort tasks, monitor due dates, and
                adjust schedules as priorities shift. With our agile tools,
                adapting to change is not just possible—it's effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="rounded-2xl   shadow-2xl py-12 px-16 mt-44 w-full max-w-6xl mx-auto text-center bg-white border border-gray-100 mb-24">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-6xl mb-16">Control in one place</h1>
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
              <CardHero
                item={[
                  {
                    title: "Structured Reports",
                    componentImage: <ReportSvg />,
                    paragraph: `Dive deep into your project's analytics with Structured
                  Reports. Our comprehensive reporting tools give you the
                  insights needed to make informed decisions. Track progress,
                  pinpoint areas for improvement, and celebrate milestones with
                  detailed, data-driven reports that are both easy to understand
                  and act upon.`,
                  },
                ]}
              />
              <CardHero
                item={[
                  {
                    title: "Cloud System",
                    componentImage: <Cloud />,
                    paragraph: `                  Access your work anytime, anywhere with our Cloud System.
                    Designed for flexibility and security, our cloud
                    infrastructure ensures your data is safe, backed up, and
                    within reach no matter where you are. Experience seamless
                    collaboration and continuity across devices, empowering your
                    team to be productive on-the-go.`,
                  },
                ]}
              />

              <CardHero
                item={[
                  {
                    title: "24/7 Support",
                    componentImage: <Support />,
                    paragraph: `                  Your peace of mind is paramount, which is why we offer 24/7
                    Support. Day or night, our dedicated team is here to help you
                    troubleshoot, guide you through features, and provide expert
                    advice to keep your operations running smoothly. With our
                    round-the-clock support, you’re never alone in your quest for
                    project excellence.`,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="rounded-2xl shadow-2xl py-8 sm:py-12 md:py-12 px-4 sm:px-8 md:px-16 mt-24 sm:mt-32 md:mt-44 w-full max-w-6xl mx-auto text-center bg-white border border-gray-100 mb-12 sm:mb-18 md:mb-24">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 sm:mb-12 md:mb-16">
              Control in one place
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 text-center">
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

            <span className="text-sm sm:text-md md:text-lg mb-4">
              Begin your journey to project excellence
            </span>
            <button className="border py-3 sm:py-4 md:py-5 rounded-full text-white w-8/12 sm:w-4/12 md:w-3/12 bg-slate-900 mb-3">
              Start your free trial
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 w-full px-4 md:flex-col lg:flex-row max-sm:flex-col">
            <CardHero
              item={[
                {
                  title: "Structured Reports",
                  componentImage: <ReportSvg />,
                  paragraph: `Dive deep into your project's analytics with Structured
            Reports. Our comprehensive reporting tools give you the
            insights needed to make informed decisions. Track progress,
            pinpoint areas for improvement, and celebrate milestones with
            detailed, data-driven reports that are both easy to understand
            and act upon.`,
                },
              ]}
            />
            <CardHero
              item={[
                {
                  title: "Cloud System",
                  componentImage: <Cloud />,
                  paragraph: `Access your work anytime, anywhere with our Cloud System.
            Designed for flexibility and security, our cloud
            infrastructure ensures your data is safe, backed up, and
            within reach no matter where you are. Experience seamless
            collaboration and continuity across devices, empowering your
            team to be productive on-the-go.`,
                },
              ]}
            />
            <CardHero
              item={[
                {
                  title: "24/7 Support",
                  componentImage: <Support />,
                  paragraph: `Your peace of mind is paramount, which is why we offer 24/7
            Support. Day or night, our dedicated team is here to help you
            troubleshoot, guide you through features, and provide expert
            advice to keep your operations running smoothly. With our
            round-the-clock support, you’re never alone in your quest for
            project excellence.`,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* <section className="flex  p-20 gap-52 items-center mt-10 bg-[#0C1727] ">
        <div className=" w-11/12 flex flex-col items-center p-6 text-white mt-10">
          <h2 className="text-5xl font-extrabold mb-8">
            Plyn also Works on your phone
          </h2>
          <p className="text-lg mb-6 text-gray-400">
            Plyn is designed to seamlessly integrate into your digital life,
            offering its comprehensive functionalities not just on your desktop,
            but also on your mobile phone. This mobile compatibility ensures
            that you can access Plyn's features on-the-go, anytime, anywhere.
            Whether you're commuting, traveling, or simply away from your
            computer, Plyn remains at your fingertips, providing the same
            intuitive experience and powerful tools you rely on. Its mobile
            version is optimized to maintain high performance and usability,
            making sure that you stay connected and productive regardless of the
            device you use.
          </p>
          <div className="w-full flex justify-between items-center">
            <button className="flex border border-slate-700 items-center  text-center  py-3 px-4     rounded-full text-white  bg-black">
              <img
                className="mr-2 object-cover w-4 h-4"
                src="./apple-icon.png"
                alt="apple icon"
              />
              Download in App Store
            </button>
            <button className="flex border border-slate-700 items-center py-3 px-4 rounded-3xl text-white  bg-black">
              <img
                className="mr-2 w-4 h-4 object-cover "
                src="./google-icon.png"
                alt="google icon"
              />
              Download in Play Store
            </button>
          </div>
        </div>

        <div className="w-full h-full mt-10 ">
          <img className="rounded-md" src="./imgApp.png" alt="Plyn app" />
        </div>
      </section> */}
      <section className="flex flex-col lg:flex-row p-4 sm:p-10 lg:p-20 gap-8 items-center bg-[#0C1727]">
        <div className="flex flex-col items-center text-white lg:w-1/2 p-6">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 text-center">
            Plyn also Works on your phone
          </h2>
          <p className="text-base lg:text-lg mb-6 text-gray-400 text-center lg:text-left">
            Plyn is designed to seamlessly integrate into your digital life,
            offering its comprehensive functionalities not just on your desktop,
            but also on your mobile phone. This mobile compatibility ensures
            that you can access Plyn's features on-the-go, anytime, anywhere.
            Whether you're commuting, traveling, or simply away from your
            computer, Plyn remains at your fingertips, providing the same
            intuitive experience and powerful tools you rely on. Its mobile
            version is optimized to maintain high performance and usability,
            making sure that you stay connected and productive regardless of the
            device you use.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <button className="flex items-center justify-center border border-slate-700 py-2 px-6 rounded-full text-white bg-black">
              <img
                className="mr-2 object-cover w-4 h-4"
                src="./apple-icon.png"
                alt="apple icon"
              />
              Download in App Store
            </button>
            <button className="flex items-center justify-center border border-slate-700 py-2 px-6 rounded-full text-white bg-black">
              <img
                className="mr-2 w-4 h-4 object-cover"
                src="./google-icon.png"
                alt="google icon"
              />
              Download in Play Store
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            className="rounded-md w-full max-w-lg lg:max-w-full"
            src="./imgApp.png"
            alt="Plyn app"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
