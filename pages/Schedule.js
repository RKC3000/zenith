if (typeof window === "object") {
  const items = document.querySelectorAll(".timeline li");
  // Finding the element is in view port or not
  let isElementInViewPort = function (element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  // Callback function for every list item
  let callbackFunc = function () {
    for (let i = 0; i < items.length; i++)
      if (isElementInViewPort(items[i])) items[i].classList.add("in-view");
  };
  window.addEventListener("load", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}

function Schedule() {
  return (
    <div id="schedule" className="min-h-screen">
      <header className="bg-[#1f1c3b] px-0 py-20">
        <div className="w-[90%] mt-0 mb-0 mr-auto ml-auto text-center">
          <h1 className="uppercase text-4xl border-[5px] border-white rounded-2xl p-[10px] tracking-[10px] ">
            ZENITH TIMELINE &darr;
          </h1>
        </div>
      </header>

      <section className="timeline">
        <ul className="bg-[#bebceb] px-0 py-[50px] ">
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Inauguration</time>
              <p>
                (22nd October 10 am – 12am) Time tickles and finally second
                arrives to reach our peak. So, let’s begin with our first Tech
                fest organized by GDSC BKBIET. We would invite our honorable
                chief guest “The Director” (Dr. S M Prasanna Kumar), and our
                Principal Academics (Dr. L Solanki) and teachers. Opening with
                the Classical Dance and lightening by our Director sir and
                revelation of events conducted in our fest.
              </p>
            </div>
          </li>
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Web Development Workshop (Beginner to Intermediate)</time>
              <p>
                (22nd October 3pm - 6pm) Web Development is an important organ
                of technology develops project and help us in our own events
                commodities and fest. One does web development to gain our
                knowledge. We are planning to invite GOOGLE DEVELOPER EXPERT in
                digital mode to explain important aspects of web development. As
                digital mode ends, other expert will carry workshop which would
                end by investing their individual hard work in creating project.
                Speaker- Sameer Saini
              </p>
            </div>
          </li>
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Open mic</time>
              <p>
                (22nd October 6 pm – 8pm) There are specific moments where
                people indulge in certain thoughts which give rise to creation
                of poetry and personified literature. Creations are one of a
                kind as stream of thoughts never match with each other. We want
                to drag that talent and explore within our bright heads to
                create openness and gist of ideology. It is basically a poetical
                session to explore different hobbies that one persists.
              </p>
            </div>
          </li>
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Game tournament</time>
              <p>
                (22nd October 9 pm – 11 pm) Gaming industry with a new sensation
                which can also drive to make through their diving. It gives a
                different abnormal rush and kicks to one’s enjoyment and help
                them to release their stress. It is a hobby for one and
                enjoyment so, we want to create healthy and e-gaming program.
                Game- BGMI
              </p>
            </div>
          </li>
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Machine Learning Workshop</time>
              <p>
                (23rd October 10 am – 1pm) It is a type of artificial
                intelligence which allow a software to become more accurate at
                predicting outcomes with being explicitly program to do so. It
                uses different types of data to predict new output value. We are
                planning to invite GOOGLE DEVELOPER EXPERT in digital mode to
                explain importance of machine learning as digital mode and our
                campus expert will train module project of machine learning.
                Speaker- Ishan Agrawal
              </p>
            </div>
          </li>
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Treasure Hunt</time>
              <p>
                (23rd October 5pm – 7pm) It is a fun event to explore our
                college as students never get time to do so. So that they can
                have convivial moments with their friends and remember the
                places of college.
              </p>
            </div>
          </li>
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Application Development Workshop</time>
              <p>
                (23rd October 3pm – 5pm) It refers to the creation of computer
                application used on mobile devices such as smart phone and smart
                watches. Flutter is the industrial king of industrial
                application which will be used by our speaker to create amazing
                apps in this workshop. We are planning to invite GOOGLE
                DEVELOPER EXPERT in digital mode to explain aspects of
                application development as digital mode and our campus expert
                will train the students that would be shown in one’s hard work.
                Speaker- Shekhar Agrawal
              </p>
            </div>
          </li>
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Hackathon</time>
              <p>
                (23rd October 9pm – 9am) A social coding event that endures the
                mind of one to create an idea and build into an awesome protype
                in a short period of time. It creates functioning software or
                hardware by the end of the event it challenges attendees to
                exhibit their ability to innovate and create compelling,
                real-world solution utilizing the latest devices and technology.
                It tends to focus on the programming languages used operating
                system and the demographic group of the programmers.
              </p>
            </div>
          </li>
          <lNamei>
            <div className="container-card">
              <time>Project Showcase and closing Ceremony</time>
              <p>
                (24thOctober 4PM - 7PM) The hard work of Hackathon done by
                individuals would be represented to our expected judges Mr.
                Sanjeev Sultania, Mr. Gautam Jangid and prizes would be
                according to the project.
              </p>
            </div>
          </lNamei>
          <li className="relative w-[6px] my-0 mx-auto bg-[#030035] pt-[50px] list-none">
            <div className="container-card">
              <time>Ignis</time>
              <p>
                (24th October 9PM – 11PM) After hectic and joyful hours of
                Zenith fest we need to give a proper farewell so we want to end
                it with a lot of game and interaction between Seniors and
                Juniors which comprises of fun talk and jokes.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Schedule;
