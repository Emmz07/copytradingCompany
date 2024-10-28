import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "./Spotlight";

export default function Workflows() {
  return (
    <section>
  <div className="mx-auto max-w-6xl px-4 mt-9 sm:px-6">
    <div className="pb-12 md:pb-20">
      {/* Section header */}
      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-gray-200/50 dark:before:to-gray-700/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-gray-200/50 dark:after:to-gray-700/50">
          <span className="inline-flex bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Tailored Features
          </span>
        </div>
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.yellow.400),theme(colors.gray.50),theme(colors.yellow.500),theme(colors.gray.900))] dark:bg-[linear-gradient(to_right,theme(colors.gray.50),theme(colors.yellow.400),theme(colors.gray.700),theme(colors.yellow.600),theme(colors.gray.50))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          Why TradewithChun?
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          Simple and intuitive platform to start profiting from trades within minutes. It seamlessly integrates with your trading accounts and favorite financial markets, allowing you to follow an expert trader and replicate their strategies effortlessly       
        </p>
      </div>
      {/* Spotlight items */}
      <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
        {/* Card 1 */}
        <a
          className="group/card relative h-full overflow-hidden rounded-2xl bg-yellow-200 dark:bg-yellow-300 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-yellow-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-yellow-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
          href="#0"
        >
          <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
            {/* Arrow */}
            <div
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-yellow-500/50 dark:border-yellow-700/50 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9}
                height={8}
                fill="none"
              >
                <path
                  fill="#F4F4F5"
                  d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                />
              </svg>
            </div>
            {/* Image */}
            <Image
              className="inline-flex"
              src={WorflowImg01}
              width={350}
              height={288}
              alt="Workflow 01"
            />
            {/* Content */}
            <div className="p-6">
              <div className="mb-3">
                <span className="btn-sm relative rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200 dark:hover:bg-gray-700">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 font-bold bg-clip-text text-transparent">
                   Expert Strategies
                  </span>
                </span>
              </div>
              <p className="text-gray-800 dark:text-gray-300">
              Benefit from our meticulously crafted trading strategies, designed to maximize profits while minimizing risks.              </p>
            </div>
          </div>
        </a>
        {/* Repeat similar changes for Card 2 and Card 3 */}
        <a
          className="group/card relative h-full overflow-hidden rounded-2xl bg-yellow-200 dark:bg-yellow-300 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-yellow-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-yellow-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
          href="#0"
        >
          <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
            {/* Arrow */}
            <div
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-yellow-500/50 dark:border-yellow-700/50 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9}
                height={8}
                fill="none"
              >
                <path
                  fill="#F4F4F5"
                  d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                />
              </svg>
            </div>
            {/* Image */}
            <Image
              className="inline-flex"
              src={WorflowImg02}
              width={350}
              height={288}
              alt="Workflow 01"
            />
            {/* Content */}
            <div className="p-6">
              <div className="mb-3">
                <span className="btn-sm relative rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200 dark:hover:bg-gray-700">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 font-bold bg-clip-text text-transparent">
                  Advanced Risk Management
                  </span>
                </span>
              </div>
              <p className="text-gray-800 dark:text-gray-300">
              Our sophisticated risk management techniques ensure your investments are protected in volatile markets.              </p>
            </div>
          </div>
        </a>

        <a
          className="group/card relative h-full overflow-hidden rounded-2xl bg-yellow-200 dark:bg-yellow-300 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-yellow-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-yellow-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
          href="#0"
        >
          <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white dark:bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-100/50 dark:after:from-gray-900/50 after:via-gray-200/25 dark:after:via-gray-800/25 after:to-gray-100/50 dark:after:to-gray-900/50">
            {/* Arrow */}
            <div
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-yellow-500/50 dark:border-yellow-700/50 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9}
                height={8}
                fill="none"
              >
                <path
                  fill="#F4F4F5"
                  d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                />
              </svg>
            </div>
            {/* Image */}
            <Image
              className="inline-flex"
              src={WorflowImg03}
              width={350}
              height={288}
              alt="Workflow 01"
            />
            {/* Content */}
            <div className="p-6">
              <div className="mb-3">
                <span className="btn-sm relative rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200 dark:hover:bg-gray-700">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text font-bold border-yellow-400 text-transparent ">
                  Real-Time Execution
                  </span>
                </span>
              </div>
              <p className="text-gray-800 dark:text-gray-300">
                Experience lightning-fast trade executions on Exness, powered by our cutting-edge technology.             
              </p>
            </div>
          </div>
        </a>
      </Spotlight>
    </div>
  </div>
</section>

  );
}