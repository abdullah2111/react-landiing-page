import logo from "../assets/logo.svg";
export default function Logo() {
  return (
    <>
      <a href="#" class="flex items-center">
        <img src={logo} class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          LOGO
        </span>
      </a>
    </>
  );
}
