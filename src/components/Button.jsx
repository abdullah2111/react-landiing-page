export default function Button({
  dclassName = "flex items-center lg:order-2",
  className,
  value,
}) {
  return (
    <>
      <div class={dclassName}>
        <a href="#" target="_blank" class={className}>
          {value}
        </a>
      </div>
    </>
  );
}
