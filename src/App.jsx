import CompanyIcon from "./components/CompanyIcon";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Prcing";
import Service from "./components/Service";
import Service2 from "./components/Service2";
import ServiceCard from "./components/ServiceCard";
import ServiceFeature from "./components/ServiceFeature";
import ServiceList from "./components/ServiceList";
import { BaseSvg } from "./components/Svg";
import Testimonial from "./components/Testimonial";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanyIcon />
      <Service>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <ServiceFeature
            title="Work with tools you already use"
            description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
            features="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          >
            <ServiceList listText="Continuous integration and deployment">
              <BaseSvg
                viewBox="0 0 20 20"
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill="currentColor"
                />
              </BaseSvg>
            </ServiceList>
            <ServiceList listText="Development workflow">
              <BaseSvg
                viewBox="0 0 20 20"
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill="currentColor"
                />
              </BaseSvg>
            </ServiceList>
            <ServiceList listText="Knowledge management">
              <BaseSvg
                viewBox="0 0 20 20"
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill="currentColor"
                />
              </BaseSvg>
            </ServiceList>
          </ServiceFeature>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="./src/assets/features/feature-1.png"
            alt="dashboard feature image"
          />
        </div>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="./src/assets/features/feature-2.png"
            alt="dashboard feature image"
          />
          <ServiceFeature
            title="We invest in the world’s potential"
            description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
            features="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          >
            <ServiceList listText="Dynamic reports and dashboards">
              <BaseSvg
                viewBox="0 0 20 20"
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill="currentColor"
                />
              </BaseSvg>
            </ServiceList>
            <ServiceList listText="Templates for everyone">
              <BaseSvg
                viewBox="0 0 20 20"
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill="currentColor"
                />
              </BaseSvg>
            </ServiceList>
            <ServiceList listText="Development workflow">
              <BaseSvg
                viewBox="0 0 20 20"
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill="currentColor"
                />
              </BaseSvg>
            </ServiceList>
            <ServiceList listText="Limitless business automation">
              <BaseSvg
                viewBox="0 0 20 20"
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill="currentColor"
                />
              </BaseSvg>
            </ServiceList>
            <ServiceList listText="Knowledge management">
              <BaseSvg
                viewBox="0 0 20 20"
                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill="currentColor"
                />
              </BaseSvg>
            </ServiceList>
          </ServiceFeature>
        </div>
      </Service>
      <Service2 />
      <Testimonial
        quote='"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."'
        authorName="Micheal Gough"
        authorTitle="CEO at Google"
        avatarSrc="./src/assets/avatar/michael-gouch.png"
      />
      <Pricing>
        <ServiceCard
          title="Starter"
          description="Best option for personal use & for your next project."
          price="29"
        >
          <ServiceList
            listText="Individual configuration"
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
          </ServiceList>

          <ServiceList
            listText="No setup, or hidden fees"
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Team size: <span class="font-semibold">1 developer</span>
            </span>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Premium support: <span class="font-semibold">6 months</span>
            </span>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Free updates: <span class="font-semibold">6 months</span>
            </span>
          </ServiceList>
        </ServiceCard>
        <ServiceCard
          title="Company"
          description="BRelevant for multiple users, extended & premium support."
          price="99"
        >
          <ServiceList
            listText="Individual configuration"
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
          </ServiceList>

          <ServiceList
            listText="No setup, or hidden fees"
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Team size: <span class="font-semibold">10 developer</span>
            </span>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Premium support: <span class="font-semibold">24 months</span>
            </span>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Free updates: <span class="font-semibold">24 months</span>
            </span>
          </ServiceList>
        </ServiceCard>
        <ServiceCard
          title="Company"
          description="BRelevant for multiple users, extended & premium support."
          price="99"
        >
          <ServiceList
            listText="Individual configuration"
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
          </ServiceList>

          <ServiceList
            listText="No setup, or hidden fees"
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Team size: <span class="font-semibold">100+ developer</span>
            </span>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Premium support: <span class="font-semibold">36 months</span>
            </span>
          </ServiceList>
          <ServiceList
            listText=""
            lclassName="flex items-center space-x-3"
            sclassName=""
          >
            <BaseSvg
              viewBox="0 0 20 20"
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </BaseSvg>
            <span>
              Free updates: <span class="font-semibold">36 months</span>
            </span>
          </ServiceList>
        </ServiceCard>
      </Pricing>
      <Footer />
    </>
  );
}

export default App;
