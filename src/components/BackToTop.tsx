import Icon from "./Icon";

export default function BackToTop({ addedClasses }: { addedClasses?: string }) {
  return (
    <a
      href="#"
      className={
        "text-theme-dark-green font-bold ml-auto flex align-middle gap-1 " +
        addedClasses
      }
    >
      <span>Back to top</span>
      <Icon variant="chevron-up" strokeWidth={2.5} />
    </a>
  );
}
