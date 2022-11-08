export default function HeaderIcon({ Icon, title }) {
  return (
    <div className="flex flex-col mx-4 hover:text-white hover:underline lg:mx-6 active:text-red-600">
      <Icon className="h-8" />
      <p className="my-2">{title}</p>
    </div>
  );
}
