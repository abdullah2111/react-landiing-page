export default function ServiceList({
  listText,
  children,
  lclassName = "flex space-x-3",
  sclassName = "text-base font-medium leading-tight text-gray-900 dark:text-white",
}) {
  return (
    <>
      <li className={lclassName}>
        {children}
        <span className={sclassName}>{listText}</span>
      </li>
    </>
  );
}
