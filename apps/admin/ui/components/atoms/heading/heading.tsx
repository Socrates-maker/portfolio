export const Heading = ({ title }: { title: string }) => {
  return (
    <div className="font-bold text-2xl mb-10 dark:text-neutral-200">
      {title}
    </div>
  );
};
